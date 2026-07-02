"""
=====================================================
EngageAI Training Pipeline
=====================================================

Trains:
- Likes Model
- Comments Model
- Shares Model
- Saves Model
- Reach Model
- Impressions Model
- Viral Classifier
- Performance Classifier
=====================================================
"""

import json
import numpy as np
import pandas as pd

from lightgbm import (
    LGBMClassifier,
    LGBMRegressor,
)

from sklearn.metrics import (
    accuracy_score,
    mean_absolute_error,
    mean_squared_error,
    r2_score,
)

from sklearn.model_selection import train_test_split

from sklearn.metrics import (
    accuracy_score,
    precision_score,
    recall_score,
    f1_score,
    confusion_matrix,
    classification_report,
)

from .preprocess import (
    load_data,
    preprocess_data,
    prepare_features,
)

from .utils import (
    save_model,
    save_json,
    save_feature_importance,
)

from .config import *

# =====================================================
# Load Dataset
# =====================================================

def load_dataset():

    print("=" * 60)
    print("Loading Dataset...")
    print("=" * 60)

    df = load_data(TRAIN_DATASET)

    print(f"Dataset Shape : {df.shape}")

    return df


# =====================================================
# Prepare Data
# =====================================================

def prepare_dataset():

    df = load_dataset()

    print("\nPreprocessing Dataset...")

    df = preprocess_data(df)

    X, y_reg, y_viral, y_perf = prepare_features(df)

    return X, y_reg, y_viral, y_perf


# =====================================================
# Train/Test Split
# =====================================================

def create_train_test_split():

    X, y_reg, y_viral, y_perf = prepare_dataset()

    (
        X_train,
        X_test,
        y_reg_train,
        y_reg_test,
        y_viral_train,
        y_viral_test,
        y_perf_train,
        y_perf_test,
    ) = train_test_split(
        X,
        y_reg,
        y_viral,
        y_perf,
        test_size=TEST_SIZE,
        random_state=RANDOM_STATE,
    )

    return (
        X_train,
        X_test,
        y_reg_train,
        y_reg_test,
        y_viral_train,
        y_viral_test,
        y_perf_train,
        y_perf_test,
    )


# =====================================================
# Train Single Regression Model
# =====================================================

def train_regression_model(
    X_train,
    y_train,
):

    model = LGBMRegressor(
        **LGBM_REGRESSOR_PARAMS
    )

    model.fit(
        X_train,
        y_train,
    )

    return model


# =====================================================
# Regression Evaluation
# =====================================================

def evaluate_regression(
    model,
    X_test,
    y_test,
):

    predictions = model.predict(X_test)

    mae = mean_absolute_error(
        y_test,
        predictions,
    )

    rmse = np.sqrt(
        mean_squared_error(
            y_test,
            predictions,
        )
    )

    r2 = r2_score(
        y_test,
        predictions,
    )

    return {
        "MAE": round(mae, 4),
        "RMSE": round(rmse, 4),
        "R2": round(r2, 4),
    }

# =====================================================
# Train All Regression Models
# =====================================================

def train_regression_models(
    X_train,
    X_test,
    y_train,
    y_test,
):
    """
    Train one LightGBM model for each regression target.
    """

    print("\n" + "=" * 60)
    print("Training Regression Models...")
    print("=" * 60)

    regression_models = {}

    regression_metrics = {}

    regression_paths = {
        "likes": LIKES_MODEL,
        "comments": COMMENTS_MODEL,
        "shares": SHARES_MODEL,
        "saves": SAVES_MODEL,
        "reach": REACH_MODEL,
        "impressions": IMPRESSIONS_MODEL,
    }

    for target in REGRESSION_TARGETS:

        print(f"\nTraining {target.title()} Model...")

        model = train_regression_model(
            X_train,
            y_train[target],
        )

        regression_models[target] = model

        metrics = evaluate_regression(
            model,
            X_test,
            y_test[target],
        )

        regression_metrics[target] = metrics

        print(metrics)

        # ----------------------------------------
        # Save Model
        # ----------------------------------------

        save_model(
            model,
            regression_paths[target],
        )

        # ----------------------------------------
        # Save Feature Importance
        # ----------------------------------------

        save_feature_importance(
            model=model,
            feature_names=X_train.columns,
            path=FEATURE_IMPORTANCE_DIR /
            f"{target}_importance.csv",
        )

    return (
        regression_models,
        regression_metrics,
    )

# =====================================================
# Train Viral Classifier
# =====================================================

def train_viral_classifier(
    X_train,
    X_test,
    y_train,
    y_test,
):
    """
    Train Viral Classification Model.
    """

    print("\n" + "=" * 60)
    print("Training Viral Classifier...")
    print("=" * 60)

    model = LGBMClassifier(
        **LGBM_BINARY_PARAMS
    )

    model.fit(
        X_train,
        y_train,
    )

    predictions = model.predict(X_test)

    metrics = {
        "Accuracy": round(
            accuracy_score(
                y_test,
                predictions,
            ),
            4,
        ),
        "Precision": round(
            precision_score(
                y_test,
                predictions,
                zero_division=0,
            ),
            4,
        ),
        "Recall": round(
            recall_score(
                y_test,
                predictions,
                zero_division=0,
            ),
            4,
        ),
        "F1": round(
            f1_score(
                y_test,
                predictions,
                zero_division=0,
            ),
            4,
        ),
    }

    print(metrics)

    save_model(
        model,
        VIRAL_MODEL,
    )

    save_feature_importance(
        model,
        X_train.columns,
        FEATURE_IMPORTANCE_DIR /
        "viral_importance.csv",
    )

    return model, metrics

# =====================================================
# Train Performance Classifier
# =====================================================

def train_performance_classifier(
    X_train,
    X_test,
    y_train,
    y_test,
):
    """
    Train Performance Bucket Classifier.
    """

    print("\n" + "=" * 60)
    print("Training Performance Classifier...")
    print("=" * 60)

    model = LGBMClassifier(
        **LGBM_MULTICLASS_PARAMS
    )

    model.fit(
        X_train,
        y_train,
    )

    predictions = model.predict(X_test)

    metrics = {
        "Accuracy": round(
            accuracy_score(
                y_test,
                predictions,
            ),
            4,
        ),
        "Precision": round(
            precision_score(
                y_test,
                predictions,
                average="weighted",
                zero_division=0,
            ),
            4,
        ),
        "Recall": round(
            recall_score(
                y_test,
                predictions,
                average="weighted",
                zero_division=0,
            ),
            4,
        ),
        "F1": round(
            f1_score(
                y_test,
                predictions,
                average="weighted",
                zero_division=0,
            ),
            4,
        ),
    }

    print(metrics)

    save_model(
        model,
        PERFORMANCE_MODEL,
    )

    save_feature_importance(
        model,
        X_train.columns,
        FEATURE_IMPORTANCE_DIR /
        "performance_importance.csv",
    )

    return model, metrics

# =====================================================
# Save Metrics
# =====================================================

def save_all_metrics(
    regression_metrics,
    viral_metrics,
    performance_metrics,
):
    """
    Save all metrics to metrics.json
    """

    metrics = {
        "Regression": regression_metrics,
        "Viral": viral_metrics,
        "Performance": performance_metrics,
    }

    save_json(
        metrics,
        METRICS_FILE,
    )

    return metrics


# =====================================================
# Main Training Pipeline
# =====================================================

def main():

    # --------------------------------------------
    # Prepare Dataset
    # --------------------------------------------

    (
        X_train,
        X_test,
        y_reg_train,
        y_reg_test,
        y_viral_train,
        y_viral_test,
        y_perf_train,
        y_perf_test,
    ) = create_train_test_split()

    # --------------------------------------------
    # Train Regression Models
    # --------------------------------------------

    regression_models, regression_metrics = (
        train_regression_models(
            X_train,
            X_test,
            y_reg_train,
            y_reg_test,
        )
    )

    # --------------------------------------------
    # Viral Classifier
    # --------------------------------------------

    viral_model, viral_metrics = (
        train_viral_classifier(
            X_train,
            X_test,
            y_viral_train,
            y_viral_test,
        )
    )

    # --------------------------------------------
    # Performance Classifier
    # --------------------------------------------

    performance_model, performance_metrics = (
        train_performance_classifier(
            X_train,
            X_test,
            y_perf_train,
            y_perf_test,
        )
    )

    # --------------------------------------------
    # Save Metrics
    # --------------------------------------------

    metrics = save_all_metrics(
        regression_metrics,
        viral_metrics,
        performance_metrics,
    )

    # --------------------------------------------
    # Training Summary
    # --------------------------------------------

    print("\n")
    print("=" * 70)
    print("Training Completed Successfully!")
    print("=" * 70)

    print("\nRegression Models")

    for model in REGRESSION_TARGETS:
        print(f"✓ {model.title()}")

    print("\nClassification Models")

    print("✓ Viral Classifier")
    print("✓ Performance Classifier")

    print("\nMetrics Saved")

    print(METRICS_FILE)

    print("\nFeature Importance Saved")

    print(FEATURE_IMPORTANCE_DIR)

    print("=" * 70)


# =====================================================
# Run
# =====================================================

if __name__ == "__main__":
    main()