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
    summary="Generate AI Recommendation",
    description="""
Generate personalized Instagram recommendations
using Machine Learning predictions,
Retrieval-Augmented Generation (RAG),
and Groq LLM.
    """,
    tags=["Recommendation"],
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