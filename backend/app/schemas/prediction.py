from pydantic import BaseModel


class PredictionRequest(BaseModel):
    account_type: str
    follower_count: int
    media_type: str
    content_category: str
    traffic_source: str
    has_call_to_action: int
    post_hour: int
    day_of_week: str
    engagement_rate: float
    followers_gained: int
    caption_length: int
    hashtags_count: int
    weekend_flag: int
    month: int
    week_of_year: int
    quarter: int
    total_posts_count: int
    avg_likes_last_10_posts: float
    avg_comments_last_10_posts: float
    avg_engagement_last_10_posts: float
    days_since_last_post: int
    hours_since_last_post: int
    posting_frequency_per_week: float


class RegressionPrediction(BaseModel):
    likes: float
    comments: float
    shares: float
    saves: float
    reach: float
    impressions: float


class ClassificationPrediction(BaseModel):
    viral_probability: float
    viral_prediction: bool
    performance_bucket: str


class ConfidencePrediction(BaseModel):
    overall_confidence: float


class PredictionResponse(BaseModel):
    predictions: RegressionPrediction
    classification: ClassificationPrediction
    confidence: ConfidencePrediction