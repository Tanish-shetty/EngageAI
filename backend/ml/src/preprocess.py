"""
=====================================================
EngageAI Data Preprocessing
=====================================================

This module handles:

1. Loading the dataset
2. Cleaning data
3. Encoding categorical variables
4. Feature engineering
5. Splitting features and targets
6. Saving encoders & feature columns

Used by:
- train.py
- inference.py
=====================================================
"""

from pathlib import Path

import joblib
import pandas as pd

from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder, OrdinalEncoder

from .config import (
    DROP_COLUMNS,
    CATEGORICAL_COLUMNS,
    TARGET_COLUMNS,
    REGRESSION_TARGETS,
    FEATURE_COLUMNS_FILE,
    ENCODER_FILE,
)

from .feature_engineering import engineer_features


# =====================================================
# Load Dataset
# =====================================================
 
def load_data(path):
    """
    Load dataset from CSV.
    """

    return pd.read_csv(path)


# =====================================================
# Preprocess Dataset
# =====================================================

def preprocess_data(df):
    """
    Clean dataset, encode categorical columns,
    and create engineered features.
    """

    df = df.copy()

    # ---------------------------------------------
    # Drop unwanted columns
    # ---------------------------------------------

    df.drop(
        columns=DROP_COLUMNS,
        inplace=True,
        errors="ignore",
    )

    # ---------------------------------------------
    # Encode categorical columns
    # ---------------------------------------------

    ordinal_encoder = OrdinalEncoder(
        handle_unknown="use_encoded_value",
        unknown_value=-1,
    )

    df[CATEGORICAL_COLUMNS] = ordinal_encoder.fit_transform(
        df[CATEGORICAL_COLUMNS]
    )

    # ---------------------------------------------
    # Encode performance labels
    # ---------------------------------------------

    performance_encoder = LabelEncoder()

    df["performance_bucket_label"] = (
        performance_encoder.fit_transform(
            df["performance_bucket_label"]
        )
    )

    # ---------------------------------------------
    # Save encoders
    # ---------------------------------------------

    encoders = {
        "ordinal_encoder": ordinal_encoder,
        "performance_encoder": performance_encoder,
    }

    joblib.dump(
        encoders,
        ENCODER_FILE,
    )

    # ---------------------------------------------
    # Feature Engineering
    # ---------------------------------------------

    df = engineer_features(df)

    return df


# =====================================================
# Prepare Features & Targets
# =====================================================

def prepare_features(df):
    """
    Split dataframe into features and targets.
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
        FEATURE_COLUMNS_FILE,
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
    test_size=0.20,
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
# Load Saved Feature Columns
# =====================================================

def load_feature_columns():
    """
    Load saved feature column names.
    """

    return joblib.load(
        FEATURE_COLUMNS_FILE
    )


# =====================================================
# Load Saved Encoders
# =====================================================

def load_encoders():
    """
    Load saved encoders.
    """

    return joblib.load(
        ENCODER_FILE
    )