"""
=====================================================
Utility Functions
=====================================================
"""

import json
from pathlib import Path

import joblib
import pandas as pd


def save_json(data, path: Path):
    """
    Save dictionary as JSON.
    """

    with open(path, "w") as f:
        json.dump(
            data,
            f,
            indent=4,
        )


def save_model(model, path: Path):
    """
    Save ML model.
    """

    joblib.dump(
        model,
        path,
    )


def save_feature_importance(
    model,
    feature_names,
    path: Path,
):
    """
    Save LightGBM feature importance.
    """

    importance = pd.DataFrame(
        {
            "feature": feature_names,
            "importance": model.feature_importances_,
        }
    )

    importance = (
        importance
        .sort_values(
            by="importance",
            ascending=False,
        )
    )

    importance.to_csv(
        path,
        index=False,
    )