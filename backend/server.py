from fastapi import FastAPI, APIRouter, UploadFile, File, HTTPException
from fastapi.responses import FileResponse
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import shutil
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict
from typing import List, Optional
import uuid
from datetime import datetime, timezone

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Upload directory
UPLOAD_DIR = ROOT_DIR / 'uploads'
UPLOAD_DIR.mkdir(exist_ok=True)

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# === Models ===

class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class CVUploadResponse(BaseModel):
    id: str
    filename: str
    original_name: str
    size: int
    mime_type: str
    uploaded_at: str

class ContactMessageCreate(BaseModel):
    name: str
    email: str
    subject: Optional[str] = ""
    message: str

class ContactMessageResponse(BaseModel):
    id: str
    name: str
    email: str
    subject: str
    message: str
    timestamp: str

# === Existing Routes ===

@api_router.get("/")
async def root():
    return {"message": "AVR Cybersecurity Portfolio API"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.model_dump()
    status_obj = StatusCheck(**status_dict)
    doc = status_obj.model_dump()
    doc['timestamp'] = doc['timestamp'].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for check in status_checks:
        if isinstance(check['timestamp'], str):
            check['timestamp'] = datetime.fromisoformat(check['timestamp'])
    return status_checks

# === CV Upload Routes ===

ALLOWED_MIME_TYPES = [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
]
MAX_FILE_SIZE = 10 * 1024 * 1024  # 10MB

@api_router.post("/cv/upload", response_model=CVUploadResponse)
async def upload_cv(file: UploadFile = File(...)):
    # Validate mime type
    if file.content_type not in ALLOWED_MIME_TYPES:
        raise HTTPException(status_code=400, detail="Invalid file type. Allowed: PDF, DOC, DOCX")

    # Read file and check size
    content = await file.read()
    if len(content) > MAX_FILE_SIZE:
        raise HTTPException(status_code=400, detail="File too large. Maximum size is 10MB")

    # Generate unique filename
    file_id = str(uuid.uuid4())
    ext = Path(file.filename).suffix if file.filename else '.pdf'
    stored_filename = f"{file_id}{ext}"
    file_path = UPLOAD_DIR / stored_filename

    # Save file
    with open(file_path, 'wb') as f:
        f.write(content)

    now = datetime.now(timezone.utc).isoformat()

    # Store metadata in MongoDB
    doc = {
        "id": file_id,
        "filename": stored_filename,
        "original_name": file.filename or "unknown",
        "size": len(content),
        "mime_type": file.content_type,
        "uploaded_at": now
    }
    await db.cv_uploads.insert_one(doc)

    logger.info(f"CV uploaded: {file.filename} ({len(content)} bytes)")

    return CVUploadResponse(
        id=file_id,
        filename=stored_filename,
        original_name=file.filename or "unknown",
        size=len(content),
        mime_type=file.content_type,
        uploaded_at=now
    )

@api_router.get("/cv/list", response_model=List[CVUploadResponse])
async def list_cvs():
    cvs = await db.cv_uploads.find({}, {"_id": 0}).to_list(100)
    return [CVUploadResponse(**cv) for cv in cvs]

@api_router.get("/cv/download/{cv_id}")
async def download_cv(cv_id: str):
    cv = await db.cv_uploads.find_one({"id": cv_id}, {"_id": 0})
    if not cv:
        raise HTTPException(status_code=404, detail="CV not found")

    file_path = UPLOAD_DIR / cv["filename"]
    if not file_path.exists():
        raise HTTPException(status_code=404, detail="File not found on disk")

    return FileResponse(
        path=str(file_path),
        filename=cv["original_name"],
        media_type=cv["mime_type"]
    )

@api_router.delete("/cv/{cv_id}")
async def delete_cv(cv_id: str):
    cv = await db.cv_uploads.find_one({"id": cv_id}, {"_id": 0})
    if not cv:
        raise HTTPException(status_code=404, detail="CV not found")

    # Delete file from disk
    file_path = UPLOAD_DIR / cv["filename"]
    if file_path.exists():
        file_path.unlink()

    # Delete from MongoDB
    await db.cv_uploads.delete_one({"id": cv_id})
    logger.info(f"CV deleted: {cv_id}")
    return {"success": True}

# === Contact Routes ===

@api_router.post("/contact", response_model=ContactMessageResponse)
async def create_contact_message(msg: ContactMessageCreate):
    msg_id = str(uuid.uuid4())
    now = datetime.now(timezone.utc).isoformat()

    doc = {
        "id": msg_id,
        "name": msg.name,
        "email": msg.email,
        "subject": msg.subject or "",
        "message": msg.message,
        "timestamp": now
    }
    await db.contact_messages.insert_one(doc)
    logger.info(f"Contact message from: {msg.name} <{msg.email}>")

    return ContactMessageResponse(**doc)

@api_router.get("/contact", response_model=List[ContactMessageResponse])
async def list_contact_messages():
    messages = await db.contact_messages.find({}, {"_id": 0}).to_list(100)
    return [ContactMessageResponse(**m) for m in messages]

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
