from datetime import datetime
from typing import Any

from pydantic import BaseModel


class PredictionHistoryResponse(BaseModel):
    id: int

    input_data: dict[str, Any]

    prediction: dict[str, Any]

    recommendation: dict[str, Any]

    created_at: datetime

    class Config:
        from_attributes = True