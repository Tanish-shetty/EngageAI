from pydantic import BaseModel


class CaptionRequest(BaseModel):
    media_type: str
    content_category: str
    follower_count: int
    has_call_to_action: bool
    has_trending_audio: bool