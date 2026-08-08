import json


class PromptBuilder:

    @staticmethod
    def build(
        user_input: dict,
    ) -> str:

        return f"""
You are an expert Instagram Caption Writer.

Generate 5 HIGH QUALITY Instagram captions.

==================================================
POST DETAILS
==================================================

{json.dumps(user_input, indent=2)}

==================================================
RULES
==================================================

• Return ONLY valid JSON.

• Make every caption unique.

• Use emojis naturally.

• Add hooks.

• Make captions engaging.

• Add CTA when appropriate.

• Do NOT include hashtags.

==================================================
JSON FORMAT
==================================================

{{
    "captions":[
        "...",
        "...",
        "...",
        "...",
        "..."
    ]
}}
"""