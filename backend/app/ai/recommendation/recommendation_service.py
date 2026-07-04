from ml.src.inference import predict

from app.ai.llm.groq_client import GroqClient
from app.ai.rag.retriever import Retriever
from app.ai.recommendation.feature_mapper import FeatureMapper
from app.ai.recommendation.insight_generator import InsightGenerator
from app.ai.recommendation.prompt_builder import PromptBuilder
from app.core.logger import logger

class RecommendationService:

    def __init__(self):

        self.retriever = Retriever()

        self.llm = GroqClient()

    from datetime import datetime

def generate(self, user_input: dict) -> dict:
    """
    Complete recommendation pipeline.
    """

    # ---------------------------------
    # Feature Engineering
    # ---------------------------------

    user_input = FeatureMapper.enrich(user_input)

    # ---------------------------------
    # Time-based derived features
    # ---------------------------------

    now = datetime.now()

    user_input.setdefault("month", now.month)

    user_input.setdefault(
        "quarter",
        ((now.month - 1) // 3) + 1,
    )

    user_input.setdefault(
        "week_of_year",
        now.isocalendar().week,
    )

    user_input.setdefault(
        "weekend_flag",
        1 if user_input["day_of_week"].lower() in ["saturday", "sunday"] else 0,
    )

    # ---------------------------------
    # ML Prediction
    # ---------------------------------

    try:

     prediction = predict(user_input)

    except Exception:

     logger.exception(
        "Prediction failed."
    )

    raise

    # ---------------------------------
    # Generate Insights
    # ---------------------------------

    try:

     insights = InsightGenerator.generate(
        prediction
    )

    except Exception:

     logger.exception(
        "Insight generation failed."
    )

    insights = {}

    # ---------------------------------
    # Retrieve RAG Documents
    # ---------------------------------

    query = (
        f"{user_input['media_type']} "
        f"{user_input['content_category']} "
        "Instagram best practices"
    )

    try:
     documents = self.retriever.retrieve(
        query=query,
        top_k=5,
    )

    except Exception as e:
     logger.exception(
        "RAG retrieval failed."
    )

    documents = []

    if documents:

     rag_context = "\n\n".join(
        doc["content"]
        for doc in documents
    )

    else:
     rag_context = (
        "No external knowledge available."
    )

    # ---------------------------------
    # Build Prompt
    # ---------------------------------

    prompt = PromptBuilder.build(
        user_input=user_input,
        prediction=prediction,
        insights=insights,
        rag_context=rag_context,
    )

    # ---------------------------------
    # Generate AI Recommendation
    # ---------------------------------

    try:

     llm_response = self.llm.generate(
        prompt
    )

    except Exception:

     logger.exception(
        "LLM generation failed."
    )

    llm_response = (
        "AI recommendation is temporarily "
        "unavailable. The prediction "
        "analysis below can still be used."
    )

    # ---------------------------------
    # Final Response
    # ---------------------------------

    return {
        "analysis": {
            "prediction": prediction,
            "insights": insights,
        },
        "ai": {
            "recommendation": llm_response,
            "sources": [
                {
                    "source": doc["source"],
                    "similarity": doc["similarity"],
                }
                for doc in documents
            ],
        },
    }