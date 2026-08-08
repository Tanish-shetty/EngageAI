from app.ai.llm.groq_client import GroqClient
from app.ai.hashtag.prompt_builder import PromptBuilder


class HashtagService:

    def __init__(self):
        self.llm = GroqClient()

    def generate(self, data: dict):

        prompt = PromptBuilder.build(data)

        return self.llm.generate(prompt)