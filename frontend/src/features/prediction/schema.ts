import { z } from "zod";

export const predictionSchema = z.object({
  // Step 1
  account_type: z.string().min(1, "Select account type"),
  follower_count: z.number().min(1, "Followers required"),
  engagement_rate: z.number().min(0),

  // Step 2
  caption: z.string().min(10, "Caption is too short"),
  media_type: z.string(),
  content_category: z.string(),
  traffic_source: z.string(),
  has_call_to_action: z.boolean(),

  post_date: z.string(),
  post_time: z.string(),

  // Step 3
  avg_likes_last_10_posts: z.number(),
  avg_comments_last_10_posts: z.number(),
  followers_gained: z.number(),
  total_posts_count: z.number(),
  avg_engagement_last_10_posts: z.number(),

  posting_frequency: z.string(),
  last_post_date: z.string(),
});

export type PredictionFormData = z.infer<typeof predictionSchema>;