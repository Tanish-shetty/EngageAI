import { Sparkles } from "lucide-react";

interface Props {
  viralProbability: number;
  confidence: number;
}

export default function AIContentScore({
  viralProbability,
  confidence,
}: Props) {
  const score = Math.round(
    viralProbability * 0.7 +
    confidence * 0.3
  );

  let label = "Needs Improvement";

  if (score >= 85) label = "Excellent";
  else if (score >= 70) label = "Very Good";
  else if (score >= 55) label = "Good";
  else if (score >= 40) label = "Average";

  return (
    <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 p-8">

      <div className="flex items-center gap-3">

        <Sparkles className="h-6 w-6 text-purple-400" />

        <h2 className="text-xl font-semibold">
          AI Content Score
        </h2>

      </div>

      <div className="mt-6 flex items-end gap-4">

        <span className="text-6xl font-bold text-purple-400">
          {score}
        </span>

        <span className="pb-2 text-2xl text-foreground/60">
          /100
        </span>

      </div>

      <p className="mt-3 text-lg font-medium text-foreground/80">
        {label}
      </p>

    </div>
  );
}