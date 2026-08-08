import PerformanceBadge from "@/components/ui/PerformanceBadge";

interface Props {
  prediction: any;
}

export default function PredictionMetrics({
  prediction,
}: Props) {

  console.log("PredictionMetrics received:", prediction);

  const metrics = prediction?.predictions ?? {};
  const classification = prediction?.classification ?? {};
  const confidence = prediction?.confidence ?? {};

  console.log("metrics:", metrics);
  console.log("classification:", classification);
  console.log("confidence:", confidence);

  return (
    <div className="rounded-2xl border border-border bg-card p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-2xl font-semibold">
          Predicted Performance
        </h2>

        <PerformanceBadge
          bucket={classification.performance_bucket}
        />

      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-3">

        <Metric
          label="Likes"
          value={metrics.likes}
        />

        <Metric
          label="Comments"
          value={metrics.comments}
        />

        <Metric
          label="Shares"
          value={metrics.shares}
        />

        <Metric
          label="Saves"
          value={metrics.saves}
        />

        <Metric
          label="Reach"
          value={metrics.reach}
        />

        <Metric
          label="Impressions"
          value={metrics.impressions}
        />

      </div>

      <div className="mt-10">

        <div className="flex justify-between">

          <span className="font-medium">
            Viral Probability
          </span>

          <span className="font-bold text-purple-400">
            {classification.viral_probability ?? 0}%
          </span>

        </div>

        <div className="mt-3 h-3 rounded-full bg-border overflow-hidden">

          <div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all"
            style={{
              width: `${classification.viral_probability ?? 0}%`,
            }}
          />

        </div>

      </div>

      <div className="mt-8">

        <div className="flex justify-between">

          <span className="font-medium">
            Confidence Score
          </span>

          <span className="font-bold text-green-400">
            {confidence.overall_confidence ?? 0}%
          </span>

        </div>

        <div className="mt-3 h-3 rounded-full bg-border overflow-hidden">

          <div
            className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400 transition-all"
            style={{
              width: `${confidence.overall_confidence ?? 0}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
}

interface MetricProps {
  label: string;
  value?: number;
}

function Metric({
  label,
  value = 0,
}: MetricProps) {
  return (
    <div className="rounded-xl border border-border p-4">

      <p className="text-sm text-foreground/60">
        {label}
      </p>

      <h3 className="mt-2 text-2xl font-bold">
        {Number(value).toLocaleString()}
      </h3>

    </div>
  );
}