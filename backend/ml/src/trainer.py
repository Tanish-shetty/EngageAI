from pathlib import Path

import joblib
import lightgbm as lgb

from sklearn.metrics import (
    accuracy_score,
    mean_absolute_error,
    mean_squared_error,
    r2_score,
)

# ============================================
# Paths
# ============================================

BASE_DIR = Path(__file__).resolve().parent
MODEL_DIR = BASE_DIR.parent / "models"

MODEL_DIR.mkdir(parents=True, exist_ok=True)


# ============================================
# Regression Trainer
# ============================================

def train_regressor(
    X_train,
    X_test,
    y_train,
    y_test,
    target_name,
):
    """
    Train a LightGBM regression model.
    """

    model = lgb.LGBMRegressor(
        objective="regression",
        n_estimators=500,
        learning_rate=0.05,
        random_state=42,
    )

    model.fit(
        X_train,
        y_train,
    )

    predictions = model.predict(X_test)

    metrics = {
        "MAE": mean_absolute_error(
            y_test,
            predictions,
        ),
        "RMSE": mean_squared_error(
            y_test,
            predictions,
            squared=False,
        ),
        "R2": r2_score(
            y_test,
            predictions,
        ),
    }

    joblib.dump(
        model,
        MODEL_DIR / f"{target_name}_model.pkl",
    )

    return model, metrics


# ============================================
# Classification Trainer
# ============================================

def train_classifier(
    X_train,
    X_test,
    y_train,
    y_test,
    target_name,
):
    """
    Train a LightGBM classification model.
    """

    model = lgb.LGBMClassifier(
        objective="binary",
        n_estimators=500,
        learning_rate=0.05,
        random_state=42,
    )

    model.fit(
        X_train,
        y_train,
    )

    predictions = model.predict(X_test)

    metrics = {
        "Accuracy": accuracy_score(
            y_test,
            predictions,
        )
    }

    joblib.dump(
        model,
        MODEL_DIR / f"{target_name}_model.pkl",
    )

    return model, metrics