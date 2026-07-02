from fastapi import APIRouter

from app.api.endpoints.auth import router as auth_router
from app.api.endpoints.prediction import router as prediction_router

api_router = APIRouter(
    prefix="/api/v1"
)

api_router.include_router(
    auth_router,
    prefix="/auth",
    tags=["Authentication"],
)

api_router.include_router(
    prediction_router,
    tags=["Prediction"],
)