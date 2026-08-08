from sqlalchemy.orm import Session

from ml.src.inference import predict

from app.models.user import User
from app.services.prediction_history_service import PredictionHistoryService

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

    def generate(
        self,
        user_input: dict,
        db: Session,
        user: User,
    ) -> dict:
        """
        Complete recommendation pipeline.

        User Input
            ↓
        Feature Mapping
            ↓
        ML Prediction
            ↓
        Insights
            ↓
        RAG Retrieval
            ↓
        Prompt Builder
            ↓
        Groq
            ↓
        Save History
            ↓
        Response
        """

        logger.info("Recommendation request received.")

        try:

            # --------------------------------------------------
            # Feature Mapping
            # --------------------------------------------------

            user_input = FeatureMapper.enrich(user_input)

            logger.info("Feature mapping completed.")

            # --------------------------------------------------
            # ML Prediction
            # --------------------------------------------------

            prediction = predict(user_input)

            logger.info("ML prediction completed.")

            # --------------------------------------------------
            # Insights
            # --------------------------------------------------

            insights = InsightGenerator.generate(
                prediction
            )

            logger.info("Insights generated.")

            # --------------------------------------------------
            # Retrieve Documents
            # --------------------------------------------------

            query = (
                f"{user_input['media_type']} "
                f"{user_input['content_category']} "
                "Instagram best practices"
            )

            documents = self.retriever.retrieve(
                query=query,
                top_k=5,
            )

            logger.info(
                "Retrieved %d RAG documents.",
                len(documents),
            )
            rag_context = "\n\n".join(
    doc["content"]
    for doc in documents
)
            # --------------------------------------------------
            # Prompt
            # --------------------------------------------------

            prompt = PromptBuilder.build(
                user_input=user_input,
                prediction=prediction,
                insights=insights,
                rag_context=rag_context,
            )

            logger.info("Prompt built successfully.")

            # --------------------------------------------------
            # LLM
            # --------------------------------------------------

            llm_response = self.llm.generate(
    prompt=prompt,
    system_prompt=(
        "You are an expert Instagram Growth Consultant. "
        "Always respond with valid JSON only."
    ),
)

            logger.info("Groq recommendation generated.")

            # --------------------------------------------------
            # Save Prediction History
            # --------------------------------------------------

            PredictionHistoryService.save(
    db=db,
    user_id=user.id,
    user_input=user_input,
    prediction=prediction,
    recommendation=llm_response,
)

            logger.info(
                "Prediction history saved."
            )

            # --------------------------------------------------
            # Response
            # --------------------------------------------------

            response = {

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

            logger.info(
                "Recommendation pipeline completed successfully."
            )

            return response

        except Exception:

            logger.exception(
                "Recommendation pipeline failed."
            )

            raise