import {
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Rocket,
  ListChecks,
} from "lucide-react";

interface Recommendation {
  summary: string;
  strengths: string[];
  weaknesses: string[];
  recommendations: string[];
  action_plan: string[];
}

interface Props {
  recommendation: Recommendation;
}

export default function AIRecommendation({
  recommendation,
}: Props) {
  return (
    <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-500/5 to-indigo-500/5 p-6 space-y-8">

      {/* Header */}

      <div className="flex items-center gap-3">

        <Sparkles className="h-6 w-6 text-purple-400" />

        <h2 className="text-2xl font-bold">
          AI Growth Strategy
        </h2>

      </div>

      {/* Summary */}

      <div className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-5">

        <h3 className="mb-3 text-lg font-semibold text-purple-300">
          Summary
        </h3>

        <p className="leading-7 text-foreground/80">
          {recommendation.summary}
        </p>

      </div>

      {/* Strengths */}

      <div>

        <div className="mb-4 flex items-center gap-2">

          <CheckCircle2 className="h-5 w-5 text-green-500" />

          <h3 className="text-lg font-semibold text-green-500">
            Strengths
          </h3>

        </div>

        <div className="grid gap-3">

          {recommendation.strengths.map((item, index) => (

            <div
              key={index}
              className="rounded-xl border border-green-500/20 bg-green-500/10 p-4"
            >
              {item}
            </div>

          ))}

        </div>

      </div>

      {/* Weaknesses */}

      <div>

        <div className="mb-4 flex items-center gap-2">

          <AlertTriangle className="h-5 w-5 text-red-500" />

          <h3 className="text-lg font-semibold text-red-500">
            Weaknesses
          </h3>

        </div>

        <div className="grid gap-3">

          {recommendation.weaknesses.map((item, index) => (

            <div
              key={index}
              className="rounded-xl border border-red-500/20 bg-red-500/10 p-4"
            >
              {item}
            </div>

          ))}

        </div>

      </div>

      {/* Recommendations */}

      <div>

        <div className="mb-4 flex items-center gap-2">

          <Rocket className="h-5 w-5 text-blue-500" />

          <h3 className="text-lg font-semibold text-blue-500">
            Recommendations
          </h3>

        </div>

        <div className="grid gap-3">

          {recommendation.recommendations.map((item, index) => (

            <div
              key={index}
              className="rounded-xl border border-blue-500/20 bg-blue-500/10 p-4"
            >
              {item}
            </div>

          ))}

        </div>

      </div>

      {/* Action Plan */}

      <div>

        <div className="mb-4 flex items-center gap-2">

          <ListChecks className="h-5 w-5 text-yellow-500" />

          <h3 className="text-lg font-semibold text-yellow-500">
            Action Plan
          </h3>

        </div>

        <div className="space-y-4">

          {recommendation.action_plan.map((item, index) => (

            <div
              key={index}
              className="flex gap-4 rounded-xl border border-yellow-500/20 bg-yellow-500/10 p-4"
            >

              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow-500 font-bold text-black">
                {index + 1}
              </div>

              <div className="leading-7">
                {item}
              </div>

            </div>

          ))}

        </div>

      </div>

    </div>
  );
}