from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.dependencies import (
    get_db,
    get_current_user,
)

from app.models.user import User

from app.services.prediction_history_service import (
    PredictionHistoryService,
)

router = APIRouter()


@router.get("/{prediction_id}")
def get_prediction_details(
    prediction_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    prediction = PredictionHistoryService.get_by_id(
        db=db,
        prediction_id=prediction_id,
        user_id=current_user.id,
    )

    if not prediction:
        raise HTTPException(
            status_code=404,
            detail="Prediction not found",
        )

    return prediction