"""Backend smoke tests for the Google Sheets-only contact API."""
import os

import pytest
import requests


BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "http://localhost:8001").rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


def test_root_endpoint(session):
    r = session.get(f"{API}/", timeout=15)
    assert r.status_code == 200
    assert r.json() == {"message": "Hello World"}


def test_contact_validation_rejects_invalid_email(session):
    payload = {
        "name": "TEST BadEmail",
        "email": "not-an-email",
        "phone": "9876543210",
        "subject": "Other",
        "message": "Invalid email should fail.",
    }
    r = session.post(f"{API}/contact", json=payload, timeout=15)
    assert r.status_code == 422


def test_contact_validation_rejects_missing_phone(session):
    payload = {
        "name": "TEST NoPhone",
        "email": "test_nophone@example.com",
        "subject": "Other",
        "message": "Phone missing should fail validation.",
    }
    r = session.post(f"{API}/contact", json=payload, timeout=15)
    assert r.status_code == 422
