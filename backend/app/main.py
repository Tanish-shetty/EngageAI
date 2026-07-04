from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError

from app.core.responses import success_response
from app.api.router import api_router
from app.core.config import settings
from app.core.exceptions import (
    validation_exception_handler,
    general_exception_handler,
)
from app.database.init_db import init_db


@asynccontextmanager
async def lifespan(app: FastAPI):
    # Initialize database
    init_db()

    yield


app = FastAPI(
    title=settings.APP_NAME,
    description="AI-powered Instagram Growth Assistant",
    version=settings.APP_VERSION,
    lifespan=lifespan,
    contact={
        "name": "EngageAI",
    },
    license_info={
        "name": "MIT",
    },
)

app.add_exception_handler(
    RequestValidationError,
    validation_exception_handler,
)

app.add_exception_handler(
    Exception,
    general_exception_handler,
)

app.include_router(api_router)


@app.get("/")
def root():
    return {
        "status": "running",
        "application": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "message": "Welcome to EngageAI 🚀",
    }