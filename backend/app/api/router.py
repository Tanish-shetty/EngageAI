from fastapi import APIRouter
from app.api.endpoints import history_details

from app.api.endpoints.auth import (
    router as auth_router,
)

from app.api.endpoints.prediction import (
    router as prediction_router,
)

from app.api.endpoints.recommendation import (
    router as recommendation_router,
)

from app.api.endpoints.health import (
    router as health_router,
)

from app.api.endpoints.history import (
    router as history_router,
)

from app.api.endpoints.analytics import (
    router as analytics_router,
)

from app.api.endpoints.caption import (
    router as caption_router,
)

from app.api.endpoints.hashtag import (
    router as hashtag_router,
)

api_router = APIRouter(
    prefix="/api/v1"
)
# -----------------------------------------
# Health
# -----------------------------------------

api_router.include_router(
    health_router,
    tags=["Health"],
)

# -----------------------------------------
# Authentication
# -----------------------------------------

api_router.include_router(
    auth_router,
    prefix="/auth",
    tags=["Authentication"],
)


# -----------------------------------------
# Prediction
# -----------------------------------------

api_router.include_router(
    prediction_router,
    tags=["Prediction"],
)


# -----------------------------------------
# Recommendation
# -----------------------------------------

api_router.include_router(
    recommendation_router,
    tags=["Recommendation"],
)


# -----------------------------------------
# Prediction History
# -----------------------------------------

api_router.include_router(
    history_router,
    prefix="/history",
    tags=["Prediction History"],
)

api_router.include_router(
    analytics_router,
    tags=["Analytics"],
)

api_router.include_router(
    history_details.router,
    prefix="/history",
    tags=["Prediction History"],
)



api_router.include_router(
    caption_router,
)

api_router.include_router(
    hashtag_router,
    tags=["Hashtag"],
)