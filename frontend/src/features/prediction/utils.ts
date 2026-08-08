import type { PredictionData } from "./components/PredictionWizard";

export function transformPredictionData(
  data: PredictionData
) {
  const date = new Date(data.post_date);

  const captionLength =
    data.caption.length;

  const hashtagsCount =
    (data.caption.match(/#/g) || []).length;

  const postHour = Number(
    data.post_time.split(":")[0]
  );

  const dayOfWeek =
    date.toLocaleDateString("en-US", {
      weekday: "long",
    });

  const month =
    date.getMonth() + 1;

  const quarter =
    Math.ceil(month / 3);

  const weekend =
    date.getDay() === 0 ||
    date.getDay() === 6
      ? 1
      : 0;

  const currentDate = new Date();

  const lastPostDate = new Date(
    data.last_post_date
  );

  const diff =
    currentDate.getTime() -
    lastPostDate.getTime();

  const daysSince =
    Math.floor(
      diff / (1000 * 60 * 60 * 24)
    );

  const hoursSince =
    Math.floor(
      diff / (1000 * 60 * 60)
    );

  const weekOfYear = Math.ceil(
    ((date.getTime() -
      new Date(date.getFullYear(), 0, 1).getTime()) /
      86400000 +
      1) /
      7
  );

  const postingFrequencyMap = {
    Daily: 7,
    "3-5/week": 4,
    Weekly: 1,
    Monthly: 0.25,
  };

  return {
    account_type: data.account_type,

    follower_count:
      data.follower_count,

    media_type: data.media_type,

    content_category:
      data.content_category,

    traffic_source:
      data.traffic_source,

    has_call_to_action:
      data.has_call_to_action ? 1 : 0,

    post_hour: postHour,

    day_of_week: dayOfWeek,

    engagement_rate:
      data.engagement_rate,

    followers_gained:
      data.followers_gained,

    caption_length:
      captionLength,

    hashtags_count:
      hashtagsCount,

    weekend_flag: weekend,

    month,

    week_of_year: weekOfYear,

    quarter,

    total_posts_count:
      data.total_posts_count,

    avg_likes_last_10_posts:
      data.avg_likes_last_10_posts,

    avg_comments_last_10_posts:
      data.avg_comments_last_10_posts,

    avg_engagement_last_10_posts:
      data.avg_engagement_last_10_posts,

    days_since_last_post:
      daysSince,

    hours_since_last_post:
      hoursSince,

    posting_frequency_per_week:
      postingFrequencyMap[
        data.posting_frequency as keyof typeof postingFrequencyMap
      ] ?? 0,
  };
}