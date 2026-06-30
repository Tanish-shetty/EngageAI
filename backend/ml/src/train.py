from pathlib import Path
import joblib
import lightgbm as lgb

from sklearn.metrics import (
    mean_absolute_error,
    mean_squared_error,
    r2_score,
    accuracy_score,
)

from preprocess import (
    load_data,
    preprocess_data,
    split_data,
)

# =====================================================
# Paths
# =====================================================

# backend/ml/src
BASE_DIR = Path(__file__).resolve().parent

# backend/ml
ML_DIR = BASE_DIR.parent

# backend/ml/data/dataset2.csv
DATA_PATH = ML_DIR / "data" / "dataset2.csv"

# backend/ml/models
MODEL_DIR = ML_DIR / "models"
MODEL_DIR.mkdir(parents=True, exist_ok=True)

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
    "engagement_rate",
]

CLASSIFICATION_TARGETS = [
    "viral_flag",
    "performance_bucket_label",
]

# =====================================================
# Load Dataset
# =====================================================

print("Loading dataset...")

df = load_data(str(DATA_PATH))

print(f"Dataset Loaded Successfully: {df.shape}")

df, encoders = preprocess_data(df)

# Save Label Encoders
joblib.dump(
    encoders,
    MODEL_DIR / "label_encoders.pkl",
)

print("Label Encoders Saved\n")

# =====================================================
# Train Regression Models
# =====================================================

print("=" * 60)
print("Training Regression Models")
print("=" * 60)

for target in REGRESSION_TARGETS:

    print(f"\nTraining Model: {target}")

    X_train, X_test, y_train, y_test = split_data(
        df,
        target,
    )

    model = lgb.LGBMRegressor(
        random_state=42,
        n_estimators=300,
    )

    model.fit(
        X_train,
        y_train,
    )

    predictions = model.predict(X_test)

    mae = mean_absolute_error(
        y_test,
        predictions,
    )

    rmse = mean_squared_error(
        y_test,
        predictions,
        squared=False,
    )

    r2 = r2_score(
        y_test,
        predictions,
    )

    print(f"MAE  : {mae:.4f}")
    print(f"RMSE : {rmse:.4f}")
    print(f"R²   : {r2:.4f}")

    model_path = MODEL_DIR / f"{target}_model.pkl"

    joblib.dump(
        model,
        model_path,
    )

    print(f"Saved -> {model_path.name}")

# =====================================================
# Train Classification Models
# =====================================================

print("\n")
print("=" * 60)
print("Training Classification Models")
print("=" * 60)

for target in CLASSIFICATION_TARGETS:

    print(f"\nTraining Model: {target}")

    X_train, X_test, y_train, y_test = split_data(
        df,
        target,
    )

    model = lgb.LGBMClassifier(
        random_state=42,
        n_estimators=300,
    )

    model.fit(
        X_train,
        y_train,
    )

    predictions = model.predict(X_test)

    accuracy = accuracy_score(
        y_test,
        predictions,
    )

    print(f"Accuracy : {accuracy:.4f}")

    model_path = MODEL_DIR / f"{target}_model.pkl"

    joblib.dump(
        model,
        model_path,
    )

    print(f"Saved -> {model_path.name}")

print("\n")
print("=" * 60)
print("All Models Trained Successfully!")
print("=" * 60)