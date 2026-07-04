import json


class PromptBuilder:

    @staticmethod
    def build(
        user_input: dict,
        prediction: dict,
        insights: dict,
        context: list,
    ) -> str:

        context_text = "\n\n".join(
            doc["content"] for doc in context
        )

        prompt = f"""
You are an expert Instagram Growth Strategist.

Your job is to analyze the user's post using:

1. ML predictions
2. Prediction insights
3. Instagram best practices
4. Current Instagram trends

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

{context_text}

==================================================
YOUR TASK
==================================================

Generate:

1. Overall summary

2. Strengths

3. Weaknesses

4. Personalized recommendations

5. Action plan

Return ONLY valid JSON using this schema:

{{
    "summary": "...",

    "strengths": [],

    "weaknesses": [],

    "recommendations": [],

    "action_plan": []
}}
"""

        return prompt