interface Props {
  recommendation: any;
}

export default function RecommendationCard({
  recommendation,
}: Props) {
  if (!recommendation) return null;

  return (
    <div className="rounded-2xl border border-border bg-card p-6 space-y-8">

      <h2 className="text-2xl font-semibold">
        AI Recommendation
      </h2>

      {/* Summary */}

      <div>

        <h3 className="text-lg font-semibold mb-2">
          Summary
        </h3>

        <p className="text-foreground/80 leading-7">
          {recommendation.summary}
        </p>

      </div>

      {/* Strengths */}

      <div>

        <h3 className="text-lg font-semibold mb-3 text-green-400">
          Strengths
        </h3>

        <ul className="space-y-2 list-disc list-inside">

          {recommendation.strengths?.map(
            (item: string, index: number) => (
              <li key={index}>
                {item}
              </li>
            )
          )}

        </ul>

      </div>

      {/* Weaknesses */}

      <div>

        <h3 className="text-lg font-semibold mb-3 text-red-400">
          Weaknesses
        </h3>

        <ul className="space-y-2 list-disc list-inside">

          {recommendation.weaknesses?.map(
            (item: string, index: number) => (
              <li key={index}>
                {item}
              </li>
            )
          )}

        </ul>

      </div>

      {/* Action Plan */}

      <div>

        <h3 className="text-lg font-semibold mb-3">
          Action Plan
        </h3>

        <ol className="space-y-2 list-decimal list-inside">

          {recommendation.action_plan?.map(
            (item: string, index: number) => (
              <li key={index}>
                {item}
              </li>
            )
          )}

        </ol>

      </div>

      {/* Recommendations */}

      <div>

        <h3 className="text-lg font-semibold mb-3 text-purple-400">
          Recommendations
        </h3>

        <ul className="space-y-2 list-disc list-inside">

          {recommendation.recommendations?.map(
            (item: string, index: number) => (
              <li key={index}>
                {item}
              </li>
            )
          )}

        </ul>

      </div>

    </div>
  );
}