#!/usr/bin/env python3
"""
Backend API Testing for Cybersecurity Portfolio App
Tests all CV upload/download/delete and contact message endpoints
"""

import requests
import json
import os
import tempfile
from pathlib import Path
import time

# Configuration
BASE_URL = "https://hacker-portfolio-14.preview.emergentagent.com/api"
TIMEOUT = 30

class BackendTester:
    def __init__(self):
        self.session = requests.Session()
        self.session.timeout = TIMEOUT
        self.uploaded_cv_ids = []
        self.test_results = {
            "passed": 0,
            "failed": 0,
            "errors": []
        }

    def log_result(self, test_name, success, message=""):
        if success:
            self.test_results["passed"] += 1
            print(f"✅ {test_name}: PASSED {message}")
        else:
            self.test_results["failed"] += 1
            self.test_results["errors"].append(f"{test_name}: {message}")
            print(f"❌ {test_name}: FAILED {message}")

    def create_test_pdf(self, filename="test_cv.pdf", size_mb=1):
        """Create a test PDF file"""
        content = b"%PDF-1.4\n1 0 obj\n<<\n/Type /Catalog\n/Pages 2 0 R\n>>\nendobj\n"
        content += b"2 0 obj\n<<\n/Type /Pages\n/Kids [3 0 R]\n/Count 1\n>>\nendobj\n"
        content += b"3 0 obj\n<<\n/Type /Page\n/Parent 2 0 R\n/MediaBox [0 0 612 792]\n>>\nendobj\n"
        content += b"xref\n0 4\n0000000000 65535 f \n0000000010 00000 n \n0000000079 00000 n \n0000000173 00000 n \n"
        content += b"trailer\n<<\n/Size 4\n/Root 1 0 R\n>>\nstartxref\n253\n%%EOF\n"
        
        # Pad to desired size
        if size_mb > 1:
            padding_size = (size_mb * 1024 * 1024) - len(content)
            content += b"0" * padding_size
        
        temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=".pdf")
        temp_file.write(content)
        temp_file.close()
        return temp_file.name

    def create_test_txt(self, filename="test.txt"):
        """Create a test TXT file (invalid type)"""
        temp_file = tempfile.NamedTemporaryFile(delete=False, suffix=".txt")
        temp_file.write(b"This is a test text file")
        temp_file.close()
        return temp_file.name

    def test_cv_upload_valid(self):
        """Test CV upload with valid PDF file"""
        test_file = self.create_test_pdf()
        try:
            with open(test_file, 'rb') as f:
                files = {'file': ('test_cv.pdf', f, 'application/pdf')}
                response = self.session.post(f"{BASE_URL}/cv/upload", files=files)
            
            if response.status_code == 200:
                data = response.json()
                if all(key in data for key in ['id', 'filename', 'original_name', 'size', 'mime_type']):
                    self.uploaded_cv_ids.append(data['id'])
                    self.log_result("CV Upload Valid PDF", True, f"ID: {data['id']}")
                    return data['id']
                else:
                    self.log_result("CV Upload Valid PDF", False, "Missing required fields in response")
            else:
                self.log_result("CV Upload Valid PDF", False, f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_result("CV Upload Valid PDF", False, f"Exception: {str(e)}")
        finally:
            os.unlink(test_file)
        return None

    def test_cv_upload_invalid_type(self):
        """Test CV upload with invalid file type"""
        test_file = self.create_test_txt()
        try:
            with open(test_file, 'rb') as f:
                files = {'file': ('test.txt', f, 'text/plain')}
                response = self.session.post(f"{BASE_URL}/cv/upload", files=files)
            
            if response.status_code == 400:
                self.log_result("CV Upload Invalid Type", True, "Correctly rejected invalid file type")
            else:
                self.log_result("CV Upload Invalid Type", False, f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_result("CV Upload Invalid Type", False, f"Exception: {str(e)}")
        finally:
            os.unlink(test_file)

    def test_cv_upload_large_file(self):
        """Test CV upload with file too large (>10MB)"""
        test_file = self.create_test_pdf(size_mb=12)  # 12MB file
        try:
            with open(test_file, 'rb') as f:
                files = {'file': ('large_cv.pdf', f, 'application/pdf')}
                response = self.session.post(f"{BASE_URL}/cv/upload", files=files)
            
            if response.status_code == 400:
                self.log_result("CV Upload Large File", True, "Correctly rejected large file")
            else:
                self.log_result("CV Upload Large File", False, f"Expected 400, got {response.status_code}")
        except Exception as e:
            self.log_result("CV Upload Large File", False, f"Exception: {str(e)}")
        finally:
            os.unlink(test_file)

    def test_cv_upload_empty_file(self):
        """Test CV upload with empty file"""
        try:
            files = {'file': ('empty.pdf', b'', 'application/pdf')}
            response = self.session.post(f"{BASE_URL}/cv/upload", files=files)
            
            if response.status_code in [400, 422]:
                self.log_result("CV Upload Empty File", True, "Correctly rejected empty file")
            else:
                self.log_result("CV Upload Empty File", False, f"Expected 400/422, got {response.status_code}")
        except Exception as e:
            self.log_result("CV Upload Empty File", False, f"Exception: {str(e)}")

    def test_cv_list(self):
        """Test CV list endpoint"""
        try:
            response = self.session.get(f"{BASE_URL}/cv/list")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_result("CV List", True, f"Retrieved {len(data)} CVs")
                    return data
                else:
                    self.log_result("CV List", False, "Response is not a list")
            else:
                self.log_result("CV List", False, f"Status: {response.status_code}")
        except Exception as e:
            self.log_result("CV List", False, f"Exception: {str(e)}")
        return []

    def test_cv_download(self, cv_id):
        """Test CV download with valid ID"""
        try:
            response = self.session.get(f"{BASE_URL}/cv/download/{cv_id}")
            
            if response.status_code == 200:
                if response.headers.get('content-type') == 'application/pdf':
                    self.log_result("CV Download Valid", True, f"Downloaded CV {cv_id}")
                else:
                    self.log_result("CV Download Valid", False, "Invalid content type")
            else:
                self.log_result("CV Download Valid", False, f"Status: {response.status_code}")
        except Exception as e:
            self.log_result("CV Download Valid", False, f"Exception: {str(e)}")

    def test_cv_download_invalid(self):
        """Test CV download with invalid ID"""
        try:
            fake_id = "non-existent-id-12345"
            response = self.session.get(f"{BASE_URL}/cv/download/{fake_id}")
            
            if response.status_code == 404:
                self.log_result("CV Download Invalid ID", True, "Correctly returned 404 for invalid ID")
            else:
                self.log_result("CV Download Invalid ID", False, f"Expected 404, got {response.status_code}")
        except Exception as e:
            self.log_result("CV Download Invalid ID", False, f"Exception: {str(e)}")

    def test_cv_delete(self, cv_id):
        """Test CV delete with valid ID"""
        try:
            response = self.session.delete(f"{BASE_URL}/cv/{cv_id}")
            
            if response.status_code == 200:
                data = response.json()
                if data.get('success') is True:
                    self.log_result("CV Delete Valid", True, f"Deleted CV {cv_id}")
                    return True
                else:
                    self.log_result("CV Delete Valid", False, "Success field not true")
            else:
                self.log_result("CV Delete Valid", False, f"Status: {response.status_code}")
        except Exception as e:
            self.log_result("CV Delete Valid", False, f"Exception: {str(e)}")
        return False

    def test_cv_delete_invalid(self):
        """Test CV delete with invalid ID"""
        try:
            fake_id = "non-existent-id-12345"
            response = self.session.delete(f"{BASE_URL}/cv/{fake_id}")
            
            if response.status_code == 404:
                self.log_result("CV Delete Invalid ID", True, "Correctly returned 404 for invalid ID")
            else:
                self.log_result("CV Delete Invalid ID", False, f"Expected 404, got {response.status_code}")
        except Exception as e:
            self.log_result("CV Delete Invalid ID", False, f"Exception: {str(e)}")

    def test_contact_create_valid(self):
        """Test contact message creation with valid data"""
        try:
            payload = {
                "name": "John Doe",
                "email": "john.doe@example.com",
                "subject": "Test Subject",
                "message": "This is a test message for the cybersecurity portfolio contact form."
            }
            response = self.session.post(f"{BASE_URL}/contact", json=payload)
            
            if response.status_code == 200:
                data = response.json()
                required_fields = ['id', 'name', 'email', 'subject', 'message', 'timestamp']
                if all(field in data for field in required_fields):
                    self.log_result("Contact Create Valid", True, f"Created contact message ID: {data['id']}")
                    return data['id']
                else:
                    self.log_result("Contact Create Valid", False, "Missing required fields in response")
            else:
                self.log_result("Contact Create Valid", False, f"Status: {response.status_code}, Response: {response.text}")
        except Exception as e:
            self.log_result("Contact Create Valid", False, f"Exception: {str(e)}")
        return None

    def test_contact_create_missing_fields(self):
        """Test contact message creation with missing required fields"""
        try:
            payload = {
                "name": "John Doe"
                # Missing email and message
            }
            response = self.session.post(f"{BASE_URL}/contact", json=payload)
            
            if response.status_code == 422:
                self.log_result("Contact Create Missing Fields", True, "Correctly rejected incomplete data")
            else:
                self.log_result("Contact Create Missing Fields", False, f"Expected 422, got {response.status_code}")
        except Exception as e:
            self.log_result("Contact Create Missing Fields", False, f"Exception: {str(e)}")

    def test_contact_create_optional_subject(self):
        """Test contact message creation without optional subject"""
        try:
            payload = {
                "name": "Jane Smith",
                "email": "jane.smith@example.com",
                "message": "Test message without subject"
            }
            response = self.session.post(f"{BASE_URL}/contact", json=payload)
            
            if response.status_code == 200:
                data = response.json()
                if data.get('subject') == "":
                    self.log_result("Contact Create Optional Subject", True, "Handled missing subject correctly")
                else:
                    self.log_result("Contact Create Optional Subject", False, f"Subject should be empty, got: {data.get('subject')}")
            else:
                self.log_result("Contact Create Optional Subject", False, f"Status: {response.status_code}")
        except Exception as e:
            self.log_result("Contact Create Optional Subject", False, f"Exception: {str(e)}")

    def test_contact_list(self):
        """Test contact message list endpoint"""
        try:
            response = self.session.get(f"{BASE_URL}/contact")
            
            if response.status_code == 200:
                data = response.json()
                if isinstance(data, list):
                    self.log_result("Contact List", True, f"Retrieved {len(data)} contact messages")
                    return data
                else:
                    self.log_result("Contact List", False, "Response is not a list")
            else:
                self.log_result("Contact List", False, f"Status: {response.status_code}")
        except Exception as e:
            self.log_result("Contact List", False, f"Exception: {str(e)}")
        return []

    def test_api_root(self):
        """Test API root endpoint"""
        try:
            response = self.session.get(f"{BASE_URL}/")
            
            if response.status_code == 200:
                data = response.json()
                if "message" in data:
                    self.log_result("API Root", True, f"Message: {data['message']}")
                else:
                    self.log_result("API Root", False, "No message field in response")
            else:
                self.log_result("API Root", False, f"Status: {response.status_code}")
        except Exception as e:
            self.log_result("API Root", False, f"Exception: {str(e)}")

    def run_all_tests(self):
        """Run all backend API tests"""
        print(f"🚀 Starting Backend API Tests for: {BASE_URL}")
        print("=" * 60)
        
        # Test API root
        self.test_api_root()
        
        # Test CV Upload functionality
        print("\n📁 Testing CV Upload APIs...")
        cv_id = self.test_cv_upload_valid()
        self.test_cv_upload_invalid_type()
        self.test_cv_upload_large_file()
        self.test_cv_upload_empty_file()
        
        # Test CV List
        print("\n📋 Testing CV List API...")
        cv_list = self.test_cv_list()
        
        # Test CV Download
        print("\n⬇️ Testing CV Download APIs...")
        if cv_id:
            self.test_cv_download(cv_id)
        self.test_cv_download_invalid()
        
        # Test Contact functionality
        print("\n📧 Testing Contact APIs...")
        contact_id = self.test_contact_create_valid()
        self.test_contact_create_missing_fields()
        self.test_contact_create_optional_subject()
        
        # Test Contact List
        print("\n📬 Testing Contact List API...")
        contact_list = self.test_contact_list()
        
        # Test CV Delete (do this last to clean up)
        print("\n🗑️ Testing CV Delete APIs...")
        if cv_id:
            self.test_cv_delete(cv_id)
        self.test_cv_delete_invalid()
        
        # Print summary
        print("\n" + "=" * 60)
        print("🏁 TEST SUMMARY")
        print("=" * 60)
        print(f"✅ Passed: {self.test_results['passed']}")
        print(f"❌ Failed: {self.test_results['failed']}")
        
        if self.test_results['errors']:
            print("\n🚨 FAILED TESTS:")
            for error in self.test_results['errors']:
                print(f"   • {error}")
        
        success_rate = (self.test_results['passed'] / (self.test_results['passed'] + self.test_results['failed'])) * 100
        print(f"\n📊 Success Rate: {success_rate:.1f}%")
        
        return self.test_results

if __name__ == "__main__":
    tester = BackendTester()
    results = tester.run_all_tests()