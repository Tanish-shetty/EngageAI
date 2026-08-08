import api from "@/lib/axios";

export interface CaptionRequest {
  media_type: string;
  content_category: string;
  follower_count: number;
  has_call_to_action: boolean;
  has_trending_audio: boolean;
}

export async function generateCaptions(
  data: CaptionRequest
) {
  const response = await api.post(
    "/caption",
    data
  );

  return response.data;
}