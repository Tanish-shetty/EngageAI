from app.ai.caption.prompt_builder import PromptBuilder
from app.ai.llm.groq_client import GroqClient

from app.core.logger import logger


class CaptionService:

    def __init__(self):

        self.llm = GroqClient()

    def generate(
        self,
        user_input: dict,
    ):

        logger.info(
            "Caption generation started."
        )

        prompt = PromptBuilder.build(
            user_input=user_input,
        )

        response = self.llm.generate(

            prompt=prompt,

            system_prompt=(
                "You are an expert Instagram Caption Writer. "
                "Always respond with valid JSON."
            ),

        )

        logger.info(
            "Caption generation completed."
        )

        return response