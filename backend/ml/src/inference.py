"""
=====================================================
EngageAI Inference Engine
=====================================================

Runs inference using trained LightGBM models.

Pipeline:

User Input
    ↓
Validation
    ↓
Feature Engineering
    ↓
Encoding
    ↓
Feature Alignment
    ↓
Regression Prediction
    ↓
Classification Prediction
    ↓
Return Prediction Dictionary
=====================================================
"""

from typing import Dict, Any

import numpy as np
import pandas as pd

from feature_engineering import engineer_features
from model_loader import model_loader

# =====================================================
# Required User Inputs
# =====================================================

REQUIRED_FIELDS = [

    "account_type",
    "follower_count",
    "media_type",
    "content_category",
    "traffic_source",
    "has_call_to_action",

    "post_hour",
    "day_of_week",

    "engagement_rate",
    "followers_gained",

    "caption_length",
    "hashtags_count",

    "weekend_flag",
    "month",
    "week_of_year",
    "quarter",

    "total_posts_count",

    "avg_likes_last_10_posts",
    "avg_comments_last_10_posts",
    "avg_engagement_last_10_posts",

    "days_since_last_post",
    "hours_since_last_post",

    "posting_frequency_per_week",
]

# =====================================================
# Validate Input
# =====================================================

def validate_input(
    user_input: Dict[str, Any]
):
    """
    Ensure all required fields exist.
    """

    missing = []

    for field in REQUIRED_FIELDS:

        if field not in user_input:
            missing.append(field)

    if missing:

        raise ValueError(

            f"Missing required fields: {missing}"

        )
    
    # =====================================================
# Create DataFrame
# =====================================================

def create_dataframe(
    user_input: Dict[str, Any]
) -> pd.DataFrame:

    return pd.DataFrame([user_input])

# =====================================================
# Feature Engineering
# =====================================================

def create_features(
    df: pd.DataFrame
):

    return engineer_features(df)

# =====================================================
# Encode Features
# =====================================================

def encode_features(
    df: pd.DataFrame
):

    categorical = [

        "account_type",
        "media_type",
        "content_category",
        "traffic_source",
        "day_of_week",

    ]

    df[categorical] = (

        model_loader
        .ordinal_encoder
        .transform(

            df[categorical]

        )

    )

    return df

# =====================================================
# Align Feature Order
# =====================================================

def align_features(
    df: pd.DataFrame
):

    return df[
        model_loader.feature_columns
    ]

# =====================================================
# Regression Prediction
# =====================================================

def predict_regression(
    df: pd.DataFrame
) -> Dict[str, float]:
    """
    Predict all regression targets.
    """

    predictions = {}

    for target, model in model_loader.regression_models.items():

        value = model.predict(df)[0]

        predictions[target] = round(
            max(0.0, float(value)),
            2
        )

    return predictions


# =====================================================
# Classification Prediction
# =====================================================

def predict_classification(
    df: pd.DataFrame
) -> Dict[str, Any]:
    """
    Predict viral probability and performance bucket.
    """

    results = {}

    # ----------------------------
    # Viral Probability
    # ----------------------------

    viral_model = model_loader.classification_models["viral"]

    probability = viral_model.predict_proba(df)[0][1]

    results["viral_probability"] = round(
        probability * 100,
        2
    )

    results["viral_prediction"] = bool(
        probability >= 0.50
    )

    # ----------------------------
    # Performance Bucket
    # ----------------------------

    performance_model = (
        model_loader.classification_models["performance"]
    )

    encoded_prediction = performance_model.predict(df)[0]

    decoded_prediction = (
        model_loader.performance_encoder.inverse_transform(
            [encoded_prediction]
        )[0]
    )

    results["performance_bucket"] = (
        decoded_prediction
    )

    return results

# =====================================================
# Confidence Score
# =====================================================

def calculate_confidence(
    classification: Dict[str, Any]
) -> float:
    """
    Estimate overall confidence.
    """

    probability = (
        classification["viral_probability"] / 100
    )

    confidence = abs(
        probability - 0.5
    ) * 2 * 100

    return round(
        confidence,
        2
    )

# =====================================================
# Build Response
# =====================================================

def build_response(
    regression: Dict[str, float],
    classification: Dict[str, Any],
) -> Dict[str, Any]:
    """
    Create prediction response.
    """

    return {

        "predictions": regression,

        "classification": classification,

        "confidence": {

            "overall_confidence":
            calculate_confidence(
                classification
            )

        }

    }

# =====================================================
# Complete Preprocessing Pipeline
# =====================================================

def preprocess_input(
    user_input: Dict[str, Any]
) -> pd.DataFrame:
    """
    Complete preprocessing pipeline.
    """

    validate_input(user_input)

    df = create_dataframe(user_input)

    df = create_features(df)

    df = encode_features(df)

    df = align_features(df)

    return df


# =====================================================
# Main Prediction Function
# =====================================================

def predict(
    user_input: Dict[str, Any]
) -> Dict[str, Any]:
    """
    Run complete prediction pipeline.
    """

    try:

        df = preprocess_input(user_input)

        regression = predict_regression(df)

        classification = predict_classification(df)

        response = build_response(
            regression,
            classification,
        )

        return response

    except Exception as e:

        raise RuntimeError(
            f"Inference failed: {e}"
        )


# =====================================================
# Local Testing
# =====================================================

if __name__ == "__main__":

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
    print("Running Inference...")
    print("=" * 60)

    result = predict(sample_input)

    from pprint import pprint

    pprint(result)