from fastapi import APIRouter

from app.schemas.hashtag import HashtagRequest
from app.ai.hashtag.hashtag_service import HashtagService

router = APIRouter()

service = HashtagService()


@router.post(
    "/hashtag",
    tags=["Hashtag"],
)
def generate_hashtags(
    request: HashtagRequest,
):
    return service.generate(
        request.model_dump()
    )