import { useState } from "react";

import { generateHashtags } from "../api/hashtagApi";

interface HashtagRequest {
  media_type: string;
  content_category: string;
  follower_count: number;
  include_trending: boolean;
}

export default function useHashtags() {
  const [hashtags, setHashtags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function generate(form: HashtagRequest) {
    setLoading(true);

    try {
      const data = await generateHashtags(form);
      setHashtags(data.hashtags ?? []);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    hashtags,
    loading,
    generate,
  };
}