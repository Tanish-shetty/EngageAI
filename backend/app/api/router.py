from fastapi import APIRouter

from app.api.endpoints.auth import router as auth_router
from app.api.endpoints.prediction import router as prediction_router
from app.api.endpoints.recommendation import (
    router as recommendation_router,
)
from app.api.endpoints.health import (
    router as health_router,
)

api_router = APIRouter(
    prefix="/api/v1"
)

api_router.include_router(
    auth_router,
    prefix="/auth",
    tags=["Authentication"],
)

api_router.include_router(
    recommendation_router,
    tags=["Recommendation"],
)

api_router.include_router(
    prediction_router,
    tags=["Prediction"],
)

api_router.include_router(
    health_router,
    tags=["Health"],
)