from fastapi import APIRouter, HTTPException

from app.schemas.prediction import (
    PredictionRequest,
    PredictionResponse,
)
from app.services.prediction_service import PredictionService

router = APIRouter()


@router.post(
    "/predict",
    response_model=PredictionResponse,
    summary="Predict Instagram Post Performance",
)
def predict_post(
    request: PredictionRequest,
):
    """
    Predict engagement metrics, viral probability,
    and performance bucket for an Instagram post.
    """

    try:
        prediction = PredictionService.generate_prediction(
            request.model_dump()
        )

        return prediction

    except Exception as e:
        raise HTTPException(
            status_code=500,
            detail=str(e),
        )