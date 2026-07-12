from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.exceptions import RequestValidationError

from fastapi.middleware.cors import CORSMiddleware
from fastapi.middleware.gzip import GZipMiddleware
from starlette.exceptions import HTTPException as StarletteHTTPException

from app.core.logger import logger

from app.api.router import api_router
from app.core.config import settings
from app.core.exceptions import (
    validation_exception_handler,
    general_exception_handler,
)
from app.database.init_db import init_db


@asynccontextmanager
async def lifespan(app: FastAPI):

    logger.info("Starting EngageAI Backend...")

    init_db()

    logger.info("Database initialized.")

    yield

    logger.info("Shutting down EngageAI Backend...")


app = FastAPI(
    title=settings.APP_NAME,
    description="""
AI-powered Instagram Analytics Platform.

Features:

• Machine Learning-based Engagement Prediction

• AI Content Recommendation using Groq LLM

• Retrieval-Augmented Generation (RAG)

• JWT Authentication

• Health Monitoring
""",
    version=settings.APP_VERSION,
    lifespan=lifespan,
    contact={
        "name": "Tanish Shetty",
    "url": "https://github.com/Tanish-shetty",
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


@app.get(
    "/",
    tags=["Root"],
    summary="API Information",
)
def root():

    return {
        "application": settings.APP_NAME,
        "version": settings.APP_VERSION,
        "status": "running",
        "docs": "/docs",
        "health": "/api/v1/health",
        "prediction": "/api/v1/predict",
        "recommendation": "/api/v1/recommend",
    }

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.add_middleware(
    GZipMiddleware,
    minimum_size=1000,
)

from app.core.exceptions import (
    validation_exception_handler,
    general_exception_handler,
    http_exception_handler,
)

app.add_exception_handler(
    StarletteHTTPException,
    http_exception_handler,
)