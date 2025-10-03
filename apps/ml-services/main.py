# main.py
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "ML microservice running"}

# Example endpoint for login anomaly detection
@app.post("/check-login")
async def check_login(data: dict):
    # Placeholder: implement ML logic later
    return {"status": "ok", "suspicious": False}
