from typing import Any

from pydantic import BaseModel, Field


class RecommendationRequest(BaseModel):

    # -------------------------
    # Account
    # -------------------------

    account_type: str = Field(..., example="creator")
    follower_count: int = Field(..., example=25000)

    # -------------------------
    # Post
    # -------------------------

    media_type: str = Field(..., example="reel")
    content_category: str = Field(..., example="Technology")

    caption_length: int = Field(..., example=120)

    hashtag_count: int = Field(..., example=8)

    posting_hour: int = Field(..., example=19)

    day_of_week: str = Field(..., example="Friday")

    sentiment_score: float = Field(..., example=0.82)

    has_trending_audio: bool = Field(..., example=True)

    traffic_source: str = Field(..., example="Reels Feed")

    has_call_to_action: bool = Field(
        default=True,
        example=True,
    )

    # -------------------------
    # Optional Analytics
    # -------------------------

    engagement_rate: float | None = Field(
        default=None,
        example=4.3,
    )

    followers_gained: int | None = Field(
        default=None,
        example=180,
    )

    total_posts_count: int | None = Field(
        default=None,
        example=120,
    )

    avg_likes_last_10_posts: float | None = Field(
        default=None,
        example=420,
    )

    avg_comments_last_10_posts: float | None = Field(
        default=None,
        example=28,
    )

    avg_engagement_last_10_posts: float | None = Field(
        default=None,
        example=4.8,
    )

    days_since_last_post: int | None = Field(
        default=None,
        example=2,
    )

    hours_since_last_post: int | None = Field(
        default=None,
        example=20,
    )

    posting_frequency_per_week: float | None = Field(
        default=None,
        example=4.5,
    )

    month: int | None = Field(
        default=None,
        example=7,
    )


class RecommendationResponse(BaseModel):

    analysis: dict[str, Any]

    ai: dict[str, Any]