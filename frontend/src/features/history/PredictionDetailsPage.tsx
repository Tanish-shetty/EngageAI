import { useParams } from "react-router-dom";
import usePrediction from "./hooks/usePrediction";

import ReportHeader from "./components/ReportHeader";
import PredictionMetrics from "./components/PredictionMetrics";
import RecommendationCard from "./components/RecommendationCard";
import InputSummary from "./components/InputSummary";

export default function PredictionDetailsPage() {
  const { id } = useParams();

  const {
    prediction,
    loading,
  } = usePrediction(Number(id));

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  if (!prediction) {
    return <div className="p-8">Prediction not found.</div>;
  }

console.log(
  JSON.stringify(
    prediction.prediction.predictions,
    null,
    2
  )
);

  return (
    <div className="space-y-6">

      <h1 className="text-4xl font-bold">
        Prediction Report
      </h1>

      <div className="space-y-8">

  <ReportHeader
    input={prediction.input_data}
  />
  
  <InputSummary
  input={prediction.input_data}
/>

  <PredictionMetrics
  prediction={prediction.prediction}
/>

<RecommendationCard
  recommendation={prediction.recommendation}
/>

</div>

    </div>
  );
}