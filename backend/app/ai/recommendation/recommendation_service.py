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

    def generate(self, user_input: dict) -> dict:
        """
        Complete recommendation pipeline.

        Flow:

        User Input
              │
              ▼
        Feature Mapping
              │
              ▼
        ML Prediction
              │
              ▼
        Insight Generation
              │
              ▼
        RAG Retrieval
              │
              ▼
        Prompt Builder
              │
              ▼
        Groq LLM
              │
              ▼
        Final Response
        """

        logger.info("Recommendation request received.")

        try:

            # ---------------------------------
            # Feature Engineering
            # ---------------------------------

            user_input = FeatureMapper.enrich(user_input)

            logger.info("Feature mapping completed.")

            # ---------------------------------
            # Default values for optional
            # historical analytics
            # ---------------------------------

            defaults = {
                "engagement_rate": 3.5,
                "followers_gained": 100,
                "total_posts_count": 50,
                "avg_likes_last_10_posts": 200.0,
                "avg_comments_last_10_posts": 20.0,
                "avg_engagement_last_10_posts": 4.0,
                "days_since_last_post": 2,
                "hours_since_last_post": 24,
                "posting_frequency_per_week": 4.0,
            }

            for key, value in defaults.items():
                user_input.setdefault(key, value)

            # ---------------------------------
            # ML Prediction
            # ---------------------------------

            prediction = predict(user_input)

            logger.info("ML prediction completed.")

            # ---------------------------------
            # Generate Insights
            # ---------------------------------

            insights = InsightGenerator.generate(
                prediction
            )

            logger.info("Insights generated.")

            # ---------------------------------
            # Retrieve RAG Documents
            # ---------------------------------

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

            # ---------------------------------
            # Build Prompt
            # ---------------------------------

            prompt = PromptBuilder.build(
                user_input=user_input,
                prediction=prediction,
                insights=insights,
                rag_context=rag_context,
            )

            logger.info("Prompt built successfully.")

            # ---------------------------------
            # Generate AI Recommendation
            # ---------------------------------

            llm_response = self.llm.generate(
                prompt
            )

            logger.info("Groq recommendation generated.")

            # ---------------------------------
            # Final Response
            # ---------------------------------

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