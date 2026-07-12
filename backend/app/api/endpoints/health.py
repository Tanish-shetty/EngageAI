from pathlib import Path

from fastapi import APIRouter
from sqlalchemy import text

from app.core.dependencies import SessionLocal
from app.core.config import settings

from ml.src.model_loader import model_loader
from app.ai.rag.config import FAISS_INDEX_PATH
from app.ai.rag.config import KNOWLEDGE_BASE
router = APIRouter()


@router.get(
    "/health",
    summary="System Health",
    description="""
Checks the health of all backend components.

Verifies:

• Database
• ML Models
• Encoders
• Vector Store
• Knowledge Base
• Groq Configuration
    """,
    tags=["Health"],
)

def health_check():

    response = {
        "status": "healthy",
        "checks": {},
    }

    # --------------------------------------------------
    # Database
    # --------------------------------------------------

    try:

        db = SessionLocal()

        db.execute(text("SELECT 1"))

        response["checks"]["database"] = "connected"

        db.close()

    except Exception:

        response["status"] = "unhealthy"

        response["checks"]["database"] = "failed"

    # --------------------------------------------------
    # ML Models
    # --------------------------------------------------

    try:

        regression_loaded = (
            len(model_loader.regression_models) > 0
        )

        classification_loaded = (
            len(model_loader.classification_models) > 0
        )

        if regression_loaded and classification_loaded:

            response["checks"]["ml_models"] = "loaded"

        else:

            response["status"] = "unhealthy"

            response["checks"]["ml_models"] = "missing"

    except Exception:

        response["status"] = "unhealthy"

        response["checks"]["ml_models"] = "failed"

    # --------------------------------------------------
    # Encoders
    # --------------------------------------------------

    try:

        if (
            model_loader.ordinal_encoder
            and model_loader.performance_encoder
        ):

            response["checks"]["encoders"] = "loaded"

        else:

            response["status"] = "unhealthy"

            response["checks"]["encoders"] = "missing"

    except Exception:

        response["status"] = "unhealthy"

        response["checks"]["encoders"] = "failed"

    # --------------------------------------------------
    # Feature Columns
    # --------------------------------------------------

    try:

        if len(model_loader.feature_columns) > 0:

            response["checks"]["feature_columns"] = "loaded"

        else:

            response["status"] = "unhealthy"

            response["checks"]["feature_columns"] = "missing"

    except Exception:

        response["status"] = "unhealthy"

        response["checks"]["feature_columns"] = "failed"

    # --------------------------------------------------
    # Vector Store
    # --------------------------------------------------

    if FAISS_INDEX_PATH.exists():

       response["checks"]["vector_store"] = "loaded"

    else:

       response["status"] = "unhealthy"

       response["checks"]["vector_store"] = "missing"

    # --------------------------------------------------
    # Knowledge Base
    # --------------------------------------------------

    documents = list(
        KNOWLEDGE_BASE.rglob("*.md")
    )

    response["checks"]["knowledge_base"] = (
        f"{len(documents)} documents"
    )

    # --------------------------------------------------
    # Groq API
    # --------------------------------------------------

    if settings.GROQ_API_KEY:

        response["checks"]["groq"] = "configured"

    else:

        response["status"] = "unhealthy"

        response["checks"]["groq"] = "missing"

    return response