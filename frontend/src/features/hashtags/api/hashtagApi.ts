import api from "@/lib/axios";

export interface HashtagRequest {
  media_type: string;
  content_category: string;
  follower_count: number;
  include_trending: boolean;
}

export async function generateHashtags(
  data: HashtagRequest
) {
  const response = await api.post(
    "/hashtag",
    data
  );

  return response.data;
}