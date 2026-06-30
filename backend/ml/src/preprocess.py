from pathlib import Path

import joblib
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OrdinalEncoder, LabelEncoder

# =====================================================
# Paths
# =====================================================

BASE_DIR = Path(__file__).resolve().parent
ML_DIR = BASE_DIR.parent

MODEL_DIR = ML_DIR / "models"
MODEL_DIR.mkdir(parents=True, exist_ok=True)

# =====================================================
# Columns
# =====================================================

# Columns that should never be used for prediction
DROP_COLUMNS = [
    "post_id",
    "account_id",
    "post_datetime",
    "post_date",
]

# Input categorical columns
CATEGORICAL_COLUMNS = [
    "account_type",
    "media_type",
    "content_category",
    "traffic_source",
    "day_of_week",
]

# Regression targets
REGRESSION_TARGETS = [
    "likes",
    "comments",
    "shares",
    "saves",
]

# Classification targets
CLASSIFICATION_TARGETS = [
    "viral_flag",
    "performance_bucket_label",
]

# All target columns
TARGET_COLUMNS = (
    REGRESSION_TARGETS
    + CLASSIFICATION_TARGETS
    + [
        "reach",
        "impressions",
        "engagement_rate",
    ]
)

# =====================================================
# Load Dataset
# =====================================================

def load_data(path: str) -> pd.DataFrame:
    """
    Load CSV dataset.
    """
    return pd.read_csv(path)


# =====================================================
# Preprocess Dataset
# =====================================================

def preprocess_data(df: pd.DataFrame):
    """
    Clean dataset and encode categorical columns.
    """

    df = df.copy()

    # Drop unwanted columns
    df.drop(
        columns=DROP_COLUMNS,
        inplace=True,
        errors="ignore",
    )

    # -------------------------
    # Encode input features
    # -------------------------

    ordinal_encoder = OrdinalEncoder(
        handle_unknown="use_encoded_value",
        unknown_value=-1,
    )

    df[CATEGORICAL_COLUMNS] = ordinal_encoder.fit_transform(
        df[CATEGORICAL_COLUMNS]
    )

    # -------------------------
    # Encode performance bucket
    # -------------------------

    performance_encoder = LabelEncoder()

    df["performance_bucket_label"] = (
        performance_encoder.fit_transform(
            df["performance_bucket_label"]
        )
    )

    # Save encoders
    encoders = {
        "ordinal_encoder": ordinal_encoder,
        "performance_encoder": performance_encoder,
    }

    joblib.dump(
        encoders,
        MODEL_DIR / "encoders.pkl",
    )

    return df


# =====================================================
# Feature / Target Split
# =====================================================

def prepare_features(df: pd.DataFrame):
    """
    Split dataset into X and multiple targets.
    """

    X = df.drop(
        columns=TARGET_COLUMNS,
        errors="ignore",
    )

    y_regression = df[REGRESSION_TARGETS]

    y_viral = df["viral_flag"]

    y_performance = df["performance_bucket_label"]

    # Save feature names
    joblib.dump(
        list(X.columns),
        MODEL_DIR / "feature_columns.pkl",
    )

    return (
        X,
        y_regression,
        y_viral,
        y_performance,
    )


# =====================================================
# Train/Test Split
# =====================================================

def split_dataset(
    X,
    y,
    test_size=0.2,
    random_state=42,
):
    """
    Train-test split.
    """

    return train_test_split(
        X,
        y,
        test_size=test_size,
        random_state=random_state,
    )


# =====================================================
# Load Saved Objects
# =====================================================

def load_feature_columns():
    """
    Load saved feature column names.
    """

    return joblib.load(
        MODEL_DIR / "feature_columns.pkl"
    )


def load_encoders():
    """
    Load saved encoders.
    """

    return joblib.load(
        MODEL_DIR / "encoders.pkl"
    )