import {
  TrendingUp,
  Sparkles,
  Hash,
  Plus,
} from "lucide-react";

import { Link } from "react-router-dom";

import useAnalytics from "@/features/analytics/hooks/useAnalytics";

import StatCard from "@/features/analytics/components/StatCard";
import ViralTrendChart from "@/features/analytics/components/ViralTrendChart";

export default function DashboardHome() {

  const { data, loading } = useAnalytics();

  if (loading) {
    return (
      <div className="p-8">
        Loading dashboard...
      </div>
    );
  }

  if (!data) {
    return (
      <div className="p-8">
        No dashboard data.
      </div>
    );
  }

  return (

    <div className="space-y-8">

      {/* Header */}

      <div>

        <h1 className="text-4xl font-bold">
          Welcome back
        </h1>

        <p className="mt-2 text-foreground/60">
          Here's an overview of your Instagram AI analytics.
        </p>

      </div>

      {/* KPI */}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Predictions"
          value={data.total_predictions}
          icon={TrendingUp}
        />

        <StatCard
          title="Avg Viral"
          value={`${data.average_viral_probability}%`}
          icon={TrendingUp}
        />

        <StatCard
          title="Average Reach"
          value={Math.round(data.average_reach)}
          icon={TrendingUp}
        />

        <StatCard
          title="Average Likes"
          value={Math.round(data.average_likes)}
          icon={TrendingUp}
        />

      </div>

      {/* Quick Actions */}

      <div className="rounded-2xl border border-border bg-card p-6">

        <h2 className="mb-6 text-2xl font-semibold">
          Quick Actions
        </h2>

        <div className="grid gap-4 md:grid-cols-3">

          <Link
            to="/dashboard/prediction"
            className="rounded-xl border border-purple-500/20 bg-purple-500/10 p-6 transition hover:bg-purple-500/20"
          >

            <Plus className="mb-4 h-8 w-8 text-purple-400" />

            <h3 className="font-semibold">
              New Prediction
            </h3>

          </Link>

          <Link
            to="/dashboard/captions"
            className="rounded-xl border border-pink-500/20 bg-pink-500/10 p-6 transition hover:bg-pink-500/20"
          >

            <Sparkles className="mb-4 h-8 w-8 text-pink-400" />

            <h3 className="font-semibold">
              Generate Caption
            </h3>

          </Link>

          <Link
            to="/dashboard/hashtags"
            className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-6 transition hover:bg-orange-500/20"
          >

            <Hash className="mb-4 h-8 w-8 text-orange-400" />

            <h3 className="font-semibold">
              Generate Hashtags
            </h3>

          </Link>

        </div>

      </div>

      {/* Analytics Preview */}

      <ViralTrendChart
        predictions={data.recent_predictions}
      />

    </div>

  );
}