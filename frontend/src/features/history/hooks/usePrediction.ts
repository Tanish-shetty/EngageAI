import { useEffect, useState } from "react";
import { getPrediction } from "../api/getPrediction";

export default function usePrediction(id: number) {
  const [prediction, setPrediction] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadPrediction();
  }, [id]);

  async function loadPrediction() {
    try {
      const data = await getPrediction(id);
      setPrediction(data);
    } finally {
      setLoading(false);
    }
  }

  return {
    prediction,
    loading,
  };
}