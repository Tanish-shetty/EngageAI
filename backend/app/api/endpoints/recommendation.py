from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.core.dependencies import (
    get_db,
    get_current_user,
)

from app.models.user import User

from app.schemas.recommendation import (
    RecommendationRequest,
    RecommendationResponse,
)

from app.ai.recommendation.recommendation_service import (
    RecommendationService,
)

router = APIRouter()

service = RecommendationService()


@router.post(
    "/recommend",
    response_model=RecommendationResponse,
    tags=["Recommendation"],
)
def recommend(
    request: RecommendationRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return service.generate(
        user_input=request.model_dump(),
        db=db,
        user=current_user,
    )