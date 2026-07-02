"""
=====================================================
Prediction Service
=====================================================

This service acts as the bridge between the
FastAPI endpoints and the ML inference engine.

=====================================================
"""

from pathlib import Path
import sys

# ----------------------------------------------------
# Add backend directory to Python path
# ----------------------------------------------------

BACKEND_DIR = Path(__file__).resolve().parents[2]

if str(BACKEND_DIR) not in sys.path:
    sys.path.append(str(BACKEND_DIR))

# ----------------------------------------------------
# Import ML inference
# ----------------------------------------------------

from ml.src.inference import predict


class PredictionService:
    """
    Service class responsible for generating
    engagement predictions.
    """

    @staticmethod
    def generate_prediction(data: dict):
        """
        Generate prediction using the ML pipeline.
        """

        return predict(data)