import { useEffect, useState } from "react";

import WizardCard from "@/features/prediction/components/WizardCard";

import { getPredictionHistory } from "./api/historyApi";
import HistoryCard from "./components/HistoryCard";

import type { PredictionHistory } from "./types";

export default function HistoryPage() {
  const [history, setHistory] = useState<
    PredictionHistory[]
  >([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadHistory();
  }, []);

  async function loadHistory() {
    try {
      const data = await getPredictionHistory();

      setHistory(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  if (loading) {
    return (
      <WizardCard
        title="Prediction History"
        subtitle="Loading your previous predictions..."
      >
        <div className="py-16 text-center">
          Loading...
        </div>
      </WizardCard>
    );
  }
console.log(JSON.stringify(history, null, 2));
  return (
    <WizardCard
      title="Prediction History"
      subtitle="View all your previous AI predictions."
    >
      {history.length === 0 ? (
        <div className="py-16 text-center text-foreground/60">
          No predictions found.
        </div>
      ) : (
        <div className="grid gap-6 lg:grid-cols-2">
          {history.map((prediction) => (
            <HistoryCard
              key={prediction.id}
              prediction={prediction}
            />
          ))}
        </div>
      )}
    </WizardCard>
  );
}