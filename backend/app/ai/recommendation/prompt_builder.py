import json


class PromptBuilder:

    @staticmethod
    def build(
        user_input: dict,
        prediction: dict,
        insights: dict,
        rag_context: str,
    ) -> str:

        prompt = f"""
You are an expert Instagram Growth Strategist.

Your job is to analyze the user's Instagram post using:

1. Machine Learning predictions
2. Model insights
3. Instagram best practices
4. Current Instagram growth strategies

==================================================
USER INPUT
==================================================

{json.dumps(user_input, indent=2)}

==================================================
MODEL PREDICTIONS
==================================================

{json.dumps(prediction, indent=2)}

==================================================
MODEL INSIGHTS
==================================================

{json.dumps(insights, indent=2)}

==================================================
KNOWLEDGE BASE
==================================================

{rag_context}

==================================================
YOUR TASK
==================================================

Generate highly personalized Instagram advice.

Return ONLY valid JSON using this exact schema:

{{
    "summary": "...",

    "strengths": [
        "...",
        "..."
    ],

    "weaknesses": [
        "...",
        "..."
    ],

    "recommendations": [
        "...",
        "...",
        "..."
    ],

    "action_plan": [
        "...",
        "...",
        "..."
    ]
}}
"""

        return prompt