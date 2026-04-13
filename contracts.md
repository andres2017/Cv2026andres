# API Contracts - Cybersecurity Portfolio

## Endpoints

### 1. CV Upload
- **POST** `/api/cv/upload` - Upload a CV file (chunked/multipart)
  - Request: `multipart/form-data` with `file` field
  - Response: `{ id, filename, originalName, size, mimeType, uploadedAt }`
  - Stores file in `/app/backend/uploads/`
  - Validates: PDF, DOC, DOCX; max 10MB

### 2. CV List
- **GET** `/api/cv/list` - Get all uploaded CVs
  - Response: `[{ id, filename, originalName, size, mimeType, uploadedAt }]`

### 3. CV Download
- **GET** `/api/cv/download/{id}` - Download a specific CV
  - Response: File stream

### 4. CV Delete
- **DELETE** `/api/cv/{id}` - Delete a specific CV
  - Response: `{ success: true }`

### 5. Contact Message
- **POST** `/api/contact` - Submit contact form
  - Request: `{ name, email, subject, message }`
  - Response: `{ id, success: true, timestamp }`
  - Stores in MongoDB `contact_messages` collection

### 6. Contact List
- **GET** `/api/contact` - Get all contact messages
  - Response: `[{ id, name, email, subject, message, timestamp }]`

## Mock Data to Replace
- `CVUploadSection.jsx`: Replace mock upload progress with real POST to `/api/cv/upload`
- `ContactSection.jsx`: Replace localStorage save with POST to `/api/contact`

## MongoDB Collections
- `cv_uploads`: `{ _id, filename, originalName, size, mimeType, uploadedAt }`
- `contact_messages`: `{ _id, name, email, subject, message, timestamp }`

## Frontend Integration
- Use `REACT_APP_BACKEND_URL` + `/api/...` for all API calls
- CV Upload: Use FormData with axios POST
- Contact: Use JSON POST
