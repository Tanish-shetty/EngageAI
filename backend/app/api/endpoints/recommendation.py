from fastapi import APIRouter

from app.ai.recommendation.recommendation_service import RecommendationService
from app.schemas.recommendation import (
    RecommendationRequest,
    RecommendationResponse,
)

router = APIRouter()

service = RecommendationService()


@router.post(
    "/recommend",
    response_model=RecommendationResponse,
)
def recommend(
    request: RecommendationRequest,
):

    result = service.generate(
        request.model_dump()
    )

    from app.core.responses import success_response

    return success_response(
    data=result,
    message="Recommendation generated successfully.",
)