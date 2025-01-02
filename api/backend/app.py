# STL
import logging
import httpx  
import os
import re

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sendgrid import SendGridAPIClient
from dotenv import load_dotenv
load_dotenv()

LOG = logging.getLogger(__name__)

app = FastAPI(title="api")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

sg = SendGridAPIClient(api_key=os.getenv('SENDGRID_API_KEY'))
def validate_email(email):
    import re
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None


def add_contact(email, first_name):
    data = {
        "contacts": [
            {
                "first_name": first_name,
                "email": email,
            }
        ]
    }
    try:
        response = sg.client.marketing.contacts.put(request_body=data)
        print(f"Contact added: {response.status_code}")
    except Exception as e:
        print(f"Error adding contact: {str(e)}")

@app.get("/api/endpoint")
async def test_endpoint():
    return "Hello World!"

@app.post("/api/subscribe")
async def subscribe_user(data: dict):
    first_name = data.get("firstName")
    email = data.get("email")

    if not validate_email(email):
        return {"error": "Invalid email address"}

    first_name = re.sub(r'[^a-zA-Z]', '', first_name)

    try:
        add_contact(email, first_name)
        return {"message": "User subscribed successfully"}
    except Exception as e:
        return {"error": "Failed to subscribe user", "details": str(e)}