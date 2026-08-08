from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from fastapi import HTTPException

from app.core.dependencies import (
    get_db,
    get_current_user,
)

from app.models.user import User

from app.services.prediction_history_service import (
    PredictionHistoryService,
)

router = APIRouter()


@router.get(
    "",
    tags=["History"],
)
def get_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    history = PredictionHistoryService.get_all(
        db=db,
        user_id=current_user.id,
    )

    return history

@router.get(
    "/{prediction_id}",
    tags=["History"],
)
def get_prediction(
    prediction_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    prediction = PredictionHistoryService.get_by_id(
        db=db,
        prediction_id=prediction_id,
        user_id=current_user.id,
    )

    if prediction is None:
        raise HTTPException(
            status_code=404,
            detail="Prediction not found",
        )

    return prediction