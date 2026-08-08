"""
=====================================================
EngageAI Inference Engine
=====================================================

Runs inference using trained regression models.

Pipeline

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
Viral Score Calculation
=====================================================
"""

from typing import Dict, Any

import pandas as pd

from .feature_engineering import engineer_features
from .model_loader import model_loader
from .viral_score import calculate_viral_score


# =====================================================
# Required Inputs
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

def validate_input(user_input: Dict[str, Any]):

    missing = [
        field
        for field in REQUIRED_FIELDS
        if field not in user_input
    ]

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
) -> pd.DataFrame:

    return engineer_features(df)

# =====================================================
# Encoding
# =====================================================

def encode_features(
    df: pd.DataFrame,
) -> pd.DataFrame:

    categorical_columns = [

        "account_type",
        "media_type",
        "content_category",
        "traffic_source",
        "day_of_week",

    ]

    df[categorical_columns] = (
        model_loader
        .ordinal_encoder
        .transform(
            df[categorical_columns]
        )
    )

    return df


# =====================================================
# Align Feature Columns
# =====================================================

def align_features(
    df: pd.DataFrame,
) -> pd.DataFrame:

    # ----------------------------------------
    # Add any missing feature columns
    # ----------------------------------------

    for column in model_loader.feature_columns:

        if column not in df.columns:

            df[column] = 0

    # ----------------------------------------
    # Remove unwanted columns
    # ----------------------------------------

    df = df[
        model_loader.feature_columns
    ]

    # ----------------------------------------
    # Final numeric conversion
    # (THIS fixes the LightGBM object dtype error)
    # ----------------------------------------

    for column in df.columns:

        if df[column].dtype == object:

            df[column] = pd.to_numeric(
                df[column],
                errors="coerce",
            )

    df = df.fillna(0)

    return df


# =====================================================
# Regression Prediction
# =====================================================

def predict_regression(
    df: pd.DataFrame,
):

    predictions = {}

    for target, model in (
        model_loader
        .regression_models
        .items()
    ):

        prediction = model.predict(df)[0]

        predictions[target] = round(

            max(
                float(prediction),
                0,
            ),

            2,

        )

    return predictions


# =====================================================
# Complete Preprocessing Pipeline
# =====================================================

def preprocess_input(
    user_input: Dict[str, Any]
) -> pd.DataFrame:

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
    Complete inference pipeline.

    Returns:
        predictions
        classification
        confidence
    """

    try:

        # -----------------------------------------
        # Preprocess
        # -----------------------------------------

        df = preprocess_input(user_input)

        # -----------------------------------------
        # Regression Models
        # -----------------------------------------

        regression_predictions = predict_regression(df)

        # -----------------------------------------
        # Viral Score Engine
        # -----------------------------------------

        viral_result = calculate_viral_score(
            user_input=user_input,
            predictions=regression_predictions,
        )

        # -----------------------------------------
        # Final Response
        # -----------------------------------------

        return {

            "predictions": regression_predictions,

            "classification": {

                "viral_probability":
                    viral_result["viral_probability"],

                "viral_prediction":
                    viral_result["viral_prediction"],

                "performance_bucket":
                    viral_result["performance_bucket"],

            },

            "confidence": {

                "overall_confidence":
                    viral_result["confidence"]

            }

        }

    except Exception as e:

        raise RuntimeError(
            f"Inference failed: {str(e)}"
        )


# =====================================================
# Local Testing
# =====================================================

if __name__ == "__main__":

    sample = {

        "account_type": "creator",
        "follower_count": 25000,

        "media_type": "reel",
        "content_category": "Technology",

        "traffic_source": "Explore",

        "has_call_to_action": True,

        "post_hour": 19,
        "day_of_week": "Friday",

        "engagement_rate": 4.5,
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
        "avg_engagement_last_10_posts": 4.1,

        "days_since_last_post": 2,
        "hours_since_last_post": 36,

        "posting_frequency_per_week": 4,
    }

    from pprint import pprint

    pprint(
        predict(sample)
    )