from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.core.dependencies import (
    get_db,
    get_current_user,
)

from app.models.user import User

from app.services.analytics_service import (
    AnalyticsService,
)

router = APIRouter()


@router.get(
    "/analytics",
    tags=["Analytics"],
)
def dashboard_analytics(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return AnalyticsService.get_dashboard_stats(
        db=db,
        user_id=current_user.id,
    )