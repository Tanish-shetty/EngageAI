from app.ai.recommendation.prompt_builder import PromptBuilder

prompt = PromptBuilder.build(

    user_input={
        "media_type": "reel",
        "content_category": "technology"
    },

    prediction={
        "likes": 397,
        "reach": 7008
    },

    insights={
        "strengths": [
            "Strong reach"
        ],
        "weaknesses": [
            "Low shares"
        ],
        "priorities": [
            "Improve hook"
        ]
    },

    context=[
        {
            "content": "Instagram recommends using trending audio."
        }
    ]
)

print(prompt)