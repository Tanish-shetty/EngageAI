import json


class PromptBuilder:

    @staticmethod
    def build(data: dict) -> str:

        return f"""
You are an Instagram Growth Expert.

Generate 20 Instagram hashtags.

Rules:

- Mix high-volume hashtags.
- Mix medium-volume hashtags.
- Include niche hashtags.
- Include trending hashtags only if requested.
- Avoid duplicate hashtags.
- Return ONLY JSON.

User Input:

{json.dumps(data, indent=2)}

Return exactly:

{{
    "hashtags": [
        "#fitness",
        "#gym",
        "#viral",
        "#reels"
    ]
}}
"""