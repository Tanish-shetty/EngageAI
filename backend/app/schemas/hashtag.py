from pydantic import BaseModel


class HashtagRequest(BaseModel):
    media_type: str
    content_category: str
    follower_count: int
    include_trending: bool = True