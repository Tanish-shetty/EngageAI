"""
=====================================================
EngageAI ML Configuration
=====================================================
This file contains all global constants used across
the ML pipeline.

Used by:
- preprocess.py
- train.py
- predict.py
- evaluate.py
=====================================================
"""

from pathlib import Path

# =====================================================
# Project Paths
# =====================================================

# backend/ml/src
BASE_DIR = Path(__file__).resolve().parent

# backend/ml
ML_DIR = BASE_DIR.parent

# backend/ml/data
DATA_DIR = ML_DIR / "data"

# backend/ml/models
MODEL_DIR = ML_DIR / "models"

# backend/ml/notebooks
NOTEBOOK_DIR = ML_DIR / "notebooks"

# Create models directory if it doesn't exist
MODEL_DIR.mkdir(parents=True, exist_ok=True)

# =====================================================
# Dataset Paths
# =====================================================

DATASET_1 = DATA_DIR / "dataset1.csv"
DATASET_2 = DATA_DIR / "dataset2.csv"

# Main dataset used for training
TRAIN_DATASET = DATASET_2

# =====================================================
# Columns
# =====================================================

DROP_COLUMNS = [
    "post_id",
    "account_id",
    "post_datetime",
    "post_date",
]

CATEGORICAL_COLUMNS = [
    "account_type",
    "media_type",
    "content_category",
    "traffic_source",
    "day_of_week",
]

# =====================================================
# Targets
# =====================================================

REGRESSION_TARGETS = [
    "likes",
    "comments",
    "shares",
    "saves",
    "reach",
    "impressions",
]

CLASSIFICATION_TARGETS = [
    "viral_flag",
    "performance_bucket_label",
]

TARGET_COLUMNS = (
    REGRESSION_TARGETS +
    CLASSIFICATION_TARGETS
)

# =====================================================
# Model Files
# =====================================================

LIKES_MODEL = MODEL_DIR / "likes_model.pkl"

COMMENTS_MODEL = MODEL_DIR / "comments_model.pkl"

SHARES_MODEL = MODEL_DIR / "shares_model.pkl"

SAVES_MODEL = MODEL_DIR / "saves_model.pkl"

REACH_MODEL = MODEL_DIR / "reach_model.pkl"

IMPRESSIONS_MODEL = MODEL_DIR / "impressions_model.pkl"

VIRAL_MODEL = MODEL_DIR / "viral_classifier.pkl"

PERFORMANCE_MODEL = MODEL_DIR / "performance_classifier.pkl"

ENCODER_FILE = MODEL_DIR / "encoders.pkl"

FEATURE_COLUMNS_FILE = MODEL_DIR / "feature_columns.pkl"

METRICS_FILE = MODEL_DIR / "metrics.json"

PREDICTION_COLUMNS = [
    "account_type",
    "follower_count",
    "media_type",
    "content_category",
    "traffic_source",
    "has_call_to_action",
    "post_hour",
    "day_of_week",
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
# Feature Importance
# =====================================================

FEATURE_IMPORTANCE_DIR = MODEL_DIR / "feature_importance"

FEATURE_IMPORTANCE_DIR.mkdir(
    parents=True,
    exist_ok=True,
)

# =====================================================
# Training Parameters
# =====================================================

TEST_SIZE = 0.20

RANDOM_STATE = 42

# =====================================================
# LightGBM Parameters
# =====================================================

LGBM_REGRESSOR_PARAMS = {
    "objective": "regression",
    "boosting_type": "gbdt",
    "n_estimators": 700,
    "learning_rate": 0.03,
    "num_leaves": 31,
    "max_depth": -1,
    "subsample": 0.8,
    "colsample_bytree": 0.8,
    "random_state": RANDOM_STATE,
}

LGBM_BINARY_PARAMS = {
    "objective": "binary",
    "n_estimators": 500,
    "learning_rate": 0.05,
    "random_state": RANDOM_STATE,
}

LGBM_MULTICLASS_PARAMS = {
    "objective": "multiclass",
    "n_estimators": 500,
    "learning_rate": 0.05,
    "random_state": RANDOM_STATE,
}

# =====================================================
# Evaluation
# =====================================================

REGRESSION_METRICS = [
    "MAE",
    "RMSE",
    "R2",
]

CLASSIFICATION_METRICS = [
    "Accuracy",
]

# =====================================================
# Logging
# =====================================================

VERBOSE = True