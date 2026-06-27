from fastapi import FastAPI

from app.api.router import api_router
from app.core.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    description="AI-powered Instagram Growth Assistant",
    version=settings.APP_VERSION,
)

app.include_router(api_router)