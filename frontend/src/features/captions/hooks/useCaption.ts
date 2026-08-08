import { useState } from "react";

import {
  generateCaptions,
} from "../api/captionApi";

import type {
  CaptionRequest,
} from "../api/captionApi";

export default function useCaption() {
  const [captions, setCaptions] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function generate(
    form: CaptionRequest
  ) {
    setLoading(true);

    try {
      const data = await generateCaptions(form);

      setCaptions(data.captions ?? []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return {
    captions,
    loading,
    generate,
  };
}