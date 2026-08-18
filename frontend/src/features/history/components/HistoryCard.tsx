import { Calendar } from "lucide-react";
import { Link } from "react-router-dom";

import PerformanceBadge from "@/components/ui/PerformanceBadge";

import type { PredictionHistory } from "../types";

interface Props {
  prediction: PredictionHistory;
}

export default function HistoryCard({ prediction }: Props) {
  const input = prediction.input_data || {};
  const pred = prediction.prediction;

  const metrics = pred?.predictions;
  const classification = pred?.classification;

  const caption = input.caption || "No Caption";

  const media = input.media_type || "-";

  const category = input.content_category || "-";

  const likes = metrics?.likes ?? 0;

  const reach = metrics?.reach ?? 0;

  const bucket =
    classification?.performance_bucket || "UNKNOWN";

  const viral =
    classification?.viral_probability ?? 0;

  const summary =
    prediction.recommendation?.summary ||
    "No AI summary available.";

  return (
    <Link
      to={`/dashboard/history/${prediction.id}`}
      className="block rounded-2xl border border-border p-6 transition hover:border-purple-500"
    >
      <div className="space-y-4">

        {/* Header */}
        <div className="flex justify-between">

          <PerformanceBadge bucket={bucket} />

          <div className="flex items-center gap-2 text-sm text-foreground/60">
            <Calendar size={16} />

            {new Date(
              prediction.created_at
            ).toLocaleDateString()}
          </div>

        </div>

        {/* Caption */}
        <h2 className="font-semibold line-clamp-2">
          {caption}
        </h2>

        {/* Post information */}
        <p className="text-sm text-foreground/60">
          {media} • {category}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-3 gap-4">

          {/* Likes */}
          <div>
            <p className="text-xs text-foreground/60">
              Likes
            </p>

            <p className="font-semibold">
              {Math.round(Number(likes))}
            </p>
          </div>

          {/* Reach */}
          <div>
            <p className="text-xs text-foreground/60">
              Reach
            </p>

            <p className="font-semibold">
              {Math.round(Number(reach))}
            </p>
          </div>

          {/* Viral Probability */}
          <div>
            <p className="text-xs text-foreground/60">
              Viral
            </p>

            <p className="font-semibold text-purple-400">
              {Number(viral).toFixed(1)}%
            </p>
          </div>

        </div>

        {/* AI Summary */}
        <p className="text-sm text-foreground/70 line-clamp-3">
          {summary}
        </p>

      </div>
    </Link>
  );
}