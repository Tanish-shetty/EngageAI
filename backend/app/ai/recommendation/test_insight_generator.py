from pprint import pprint

from app.ai.recommendation.insight_generator import InsightGenerator


sample_prediction = {
    "predictions": {
        "likes": 397,
        "comments": 7,
        "shares": 13,
        "saves": 56,
        "reach": 7008,
        "impressions": 8694,
    },
    "classification": {
        "viral_prediction": False,
        "performance_bucket": "high",
    },
}

pprint(
    InsightGenerator.generate(sample_prediction)
)