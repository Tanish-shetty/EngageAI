from fastapi import APIRouter

from app.schemas.caption import CaptionRequest

from app.ai.caption.caption_service import (
    CaptionService,
)

router = APIRouter()

service = CaptionService()


@router.post(
    "/caption",
    tags=["Caption"],
)
def generate_caption(
    request: CaptionRequest,
):

    return service.generate(
        request.model_dump(),
    )