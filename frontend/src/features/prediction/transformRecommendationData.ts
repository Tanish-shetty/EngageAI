import type { PredictionData } from "./components/PredictionWizard";

export function transformRecommendationData(
  data: PredictionData
) {
  const postingDate = new Date(data.post_date);

  const lastPostDate = new Date(data.last_post_date);

  const now = postingDate;

  const dayOfWeek = postingDate.toLocaleDateString(
    "en-US",
    {
      weekday: "long",
    }
  );

  const postingHour = Number(
    data.post_time.split(":")[0]
  );

  const daysSinceLastPost = Math.max(
    1,
    Math.floor(
      (now.getTime() - lastPostDate.getTime()) /
        (1000 * 60 * 60 * 24)
    )
  );

  const hoursSinceLastPost = Math.max(
    1,
    Math.floor(
      (now.getTime() - lastPostDate.getTime()) /
        (1000 * 60 * 60)
    )
  );

  return {
    account_type: data.account_type.toLowerCase(),

    follower_count: data.follower_count,

    media_type: data.media_type.toLowerCase(),

    content_category: data.content_category,

    caption_length: data.caption.length,

    hashtag_count:
      (data.caption.match(/#/g) || []).length,

    posting_hour: postingHour,

    day_of_week: dayOfWeek,

    // We'll replace these later with AI models
    sentiment_score: 0.75,

    has_trending_audio: false,

    traffic_source: data.traffic_source,

    has_call_to_action:
      data.has_call_to_action,

    engagement_rate:
      data.engagement_rate,

    followers_gained:
      data.followers_gained,

    total_posts_count:
      data.total_posts_count,

    avg_likes_last_10_posts:
      data.avg_likes_last_10_posts,

    avg_comments_last_10_posts:
      data.avg_comments_last_10_posts,

    avg_engagement_last_10_posts:
      data.avg_engagement_last_10_posts,

    days_since_last_post:
      daysSinceLastPost,

    hours_since_last_post:
      hoursSinceLastPost,

    posting_frequency_per_week:
      Number(data.posting_frequency),

    month:
      postingDate.getMonth() + 1,
  };
}