"""
=====================================================
LLM Factory
=====================================================
"""

from app.ai.llm.groq_client import GroqClient


class LLMFactory:

    @staticmethod
    def get_llm():

        return GroqClient()