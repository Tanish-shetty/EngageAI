"""
=====================================================
EngageAI Model Loader
=====================================================

Loads all trained models into memory.

This file is imported by:
- inference.py
- FastAPI Prediction Service

Models are loaded only once when the application starts.
=====================================================
"""

import joblib

from config import (
    LIKES_MODEL,
    COMMENTS_MODEL,
    SHARES_MODEL,
    SAVES_MODEL,
    REACH_MODEL,
    IMPRESSIONS_MODEL,
    VIRAL_MODEL,
    PERFORMANCE_MODEL,
    ENCODER_FILE,
    FEATURE_COLUMNS_FILE,
)


class ModelLoader:
    """
    Singleton Model Loader
    """

    def __init__(self):

        print("=" * 60)
        print("Loading Trained Models...")
        print("=" * 60)

        # ==================================================
        # Regression Models
        # ==================================================

        self.regression_models = {
            "likes": joblib.load(LIKES_MODEL),
            "comments": joblib.load(COMMENTS_MODEL),
            "shares": joblib.load(SHARES_MODEL),
            "saves": joblib.load(SAVES_MODEL),
            "reach": joblib.load(REACH_MODEL),
            "impressions": joblib.load(IMPRESSIONS_MODEL),
        }

        # ==================================================
        # Classification Models
        # ==================================================

        self.classification_models = {
            "viral": joblib.load(VIRAL_MODEL),
            "performance": joblib.load(PERFORMANCE_MODEL),
        }

        # ==================================================
        # Encoders
        # ==================================================

        encoders = joblib.load(
            ENCODER_FILE
        )

        self.ordinal_encoder = encoders["ordinal_encoder"]

        self.performance_encoder = encoders["performance_encoder"]

        # ==================================================
        # Feature Columns
        # ==================================================

        self.feature_columns = joblib.load(
            FEATURE_COLUMNS_FILE
        )

        print("✓ Regression Models Loaded")

        for name in self.regression_models:
            print(f"   • {name}")

        print("\n✓ Classification Models Loaded")

        for name in self.classification_models:
            print(f"   • {name}")

        print("\n✓ Encoders Loaded")
        print("✓ Feature Columns Loaded")
        print("=" * 60)


# ==================================================
# Singleton Instance
# ==================================================

model_loader = ModelLoader()