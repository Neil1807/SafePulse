import secrets
import httpx
import os
from dotenv import load_dotenv
from supabase import AsyncClient
from database import insert_session, get_user

load_dotenv()

def generate_otp(length: int = 6):
    return str(secrets.randbelow(10**length)).zfill(length)

async def send_otp_sms(mobile_number: str, otp: str):
    message = f"Your SafePulse verification code is: {otp}. It expires in 5 minutes. Do not share this with anyone."
    PHILSMS_API_TOKEN = os.getenv("PHIL_SMS_API")
    try:
        async with httpx.AsyncClient() as client:
            response = await client.post(
                "https://dashboard.philsms.com/api/v3/sms/send",
                headers={
                    "Authorization": f"Bearer {PHILSMS_API_TOKEN}",
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                json={
                    "recipient":mobile_number,
                    "sender_id":"PhilSMS",
                    "type":"plain",
                    "message":message,
            }
        )
        return response
    except Exception:
        raise

async def number_in_db(mobile_number: str, db_client: AsyncClient):
    res = await db_client.table("users").select().eq("mobile_number", mobile_number).execute()
    return res.data

async def create_session(mobile_number: str, db_client, length: int = 32):
    session_id = secrets.token_urlsafe(length)
    user_id = await get_user(mobile_number, db_client)
    await insert_session(user_id, session_id, db_client)
    return session_id
    