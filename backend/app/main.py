from contextlib import asynccontextmanager

from fastapi import FastAPI

from app.api.router import api_router
from app.core.config import settings
from app.database.init_db import init_db


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(
    title=settings.APP_NAME,
    description="AI-powered Instagram Growth Assistant",
    version=settings.APP_VERSION,
    lifespan=lifespan,
)

app.include_router(api_router)