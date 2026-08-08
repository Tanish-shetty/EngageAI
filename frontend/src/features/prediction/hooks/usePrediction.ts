import { useState } from "react";

import { predictPost } from "../api/predictionApi";

export function usePrediction() {
  const [loading, setLoading] =
    useState(false);

  const [result, setResult] =
    useState<any>(null);

  async function predict(data: any) {
    try {
      setLoading(true);

      const response =
        await predictPost(data);

      setResult(response);

      return response;
    } finally {
      setLoading(false);
    }
  }

  return {
    predict,
    loading,
    result,
  };
}