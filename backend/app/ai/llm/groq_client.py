"""
=====================================================
Groq Client
=====================================================

Handles communication with Groq API.
"""

import json

from groq import Groq

from app.core.config import settings
from app.ai.llm.base import BaseLLM


class GroqClient(BaseLLM):

    def __init__(self):

        self.client = Groq(
            api_key=settings.GROQ_API_KEY
        )

        self.model = settings.GROQ_MODEL

    def generate(
        self,
        prompt: str,
        system_prompt: str = (
            "You are an expert Instagram Growth Consultant. "
            "Always respond with valid JSON only."
        ),
    ) -> dict:

        response = self.client.chat.completions.create(

            model=self.model,

            temperature=0.3,

            response_format={
                "type": "json_object"
            },

            messages=[
                {
                    "role": "system",
                    "content": system_prompt,
                },
                {
                    "role": "user",
                    "content": prompt,
                },
            ],
        )

        content = response.choices[0].message.content

        try:
            return json.loads(content)

        except json.JSONDecodeError:

            return {
                "summary": content,
                "strengths": [],
                "weaknesses": [],
                "recommendations": [],
                "action_plan": [],
            }