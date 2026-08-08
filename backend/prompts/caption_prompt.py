def build_caption_prompt(data):
    return f"""
You are an Instagram content expert.

Generate 5 engaging Instagram captions.

Post Details:

Media Type: {data.media_type}
Category: {data.content_category}
Followers: {data.follower_count}
Engagement Rate: {data.engagement_rate}
Sentiment Score: {data.sentiment_score}
Trending Audio: {data.has_trending_audio}
Call To Action: {data.has_call_to_action}

Rules:

- Return ONLY JSON.
- Generate 5 captions.
- Make them engaging.
- Add emojis.
- Add a CTA when appropriate.

Format:

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