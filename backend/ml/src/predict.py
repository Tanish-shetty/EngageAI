"""
=====================================================
EngageAI Prediction Script
=====================================================

Simple wrapper around inference.py

Used for:

- Local testing
- FastAPI
- Future React frontend

=====================================================
"""

from pprint import pprint

from inference import predict


def main():

    sample_input = {

        "account_type": "creator",

        "follower_count": 25000,

        "media_type": "reel",

        "content_category": "Technology",

        "traffic_source": "Explore",

        "has_call_to_action": 1,

        "post_hour": 19,

        "day_of_week": "Friday",

        "engagement_rate": 0.045,

        "followers_gained": 120,

        "caption_length": 180,

        "hashtags_count": 8,

        "weekend_flag": 0,

        "month": 7,

        "week_of_year": 28,

        "quarter": 3,

        "total_posts_count": 250,

        "avg_likes_last_10_posts": 4200,

        "avg_comments_last_10_posts": 210,

        "avg_engagement_last_10_posts": 0.041,

        "days_since_last_post": 2,

        "hours_since_last_post": 36,

        "posting_frequency_per_week": 4,
    }

    print("=" * 60)
    print("EngageAI Prediction")
    print("=" * 60)

    result = predict(sample_input)

    pprint(result)


if __name__ == "__main__":
    main()