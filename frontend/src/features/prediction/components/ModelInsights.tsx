import {
  CheckCircle2,
  AlertTriangle,
  Target,
} from "lucide-react";

interface Props {
  insights: {
    strengths: string[];
    weaknesses: string[];
    priorities: string[];
  };
}

export default function ModelInsights({
  insights,
}: Props) {
  return (
    <div className="rounded-2xl border border-border p-6 space-y-6">

      <h2 className="text-xl font-semibold">
        🧠 Model Insights
      </h2>

      {/* Strengths */}

      <div>

        <div className="flex items-center gap-2 mb-3">

          <CheckCircle2 className="h-5 w-5 text-green-500" />

          <h3 className="font-semibold text-green-500">
            Strengths
          </h3>

        </div>

        <ul className="space-y-2">

          {insights.strengths.map(
            (item, index) => (
              <li
                key={index}
                className="rounded-lg bg-green-500/10 px-4 py-3"
              >
                {item}
              </li>
            )
          )}

        </ul>

      </div>

      {/* Weaknesses */}

      <div>

        <div className="flex items-center gap-2 mb-3">

          <AlertTriangle className="h-5 w-5 text-red-500" />

          <h3 className="font-semibold text-red-500">
            Weaknesses
          </h3>

        </div>

        <ul className="space-y-2">

          {insights.weaknesses.map(
            (item, index) => (
              <li
                key={index}
                className="rounded-lg bg-red-500/10 px-4 py-3"
              >
                {item}
              </li>
            )
          )}

        </ul>

      </div>

      {/* Priorities */}

      <div>

        <div className="flex items-center gap-2 mb-3">

          <Target className="h-5 w-5 text-yellow-500" />

          <h3 className="font-semibold text-yellow-500">
            Top Priorities
          </h3>

        </div>

        <ul className="space-y-2">

          {insights.priorities.map(
            (item, index) => (
              <li
                key={index}
                className="rounded-lg bg-yellow-500/10 px-4 py-3"
              >
                {item}
              </li>
            )
          )}

        </ul>

      </div>

    </div>
  );
}