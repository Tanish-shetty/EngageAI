import {
  TrendingUp,
  Target,
  Heart,
  Eye,
} from "lucide-react";

import useAnalytics from "../hooks/useAnalytics";

import StatCard from "../components/StatCard";
import ViralTrendChart from "../components/ViralTrendChart";
import MediaPieChart from "../components/MediaPieChart";
import PerformanceChart from "../components/PerformanceChart";
import RecentPredictionsTable from "../components/RecentPredictionsTable";

export default function AnalyticsPage() {
  const { data, loading } = useAnalytics();

  if (loading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-foreground/60">
          Loading analytics...
        </p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <p className="text-foreground/60">
          No analytics available.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">

      {/* Page Header */}
      <div>
        <h1 className="text-4xl font-bold">
          Dashboard Analytics
        </h1>

        <p className="mt-2 text-foreground/60">
          Your Instagram prediction insights
        </p>
      </div>

      {/* Statistics */}
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Predictions"
          value={data.total_predictions}
          icon={TrendingUp}
        />

        <StatCard
          title="Avg Viral Score"
          value={`${data.average_viral_probability}%`}
          icon={Target}
        />

        <StatCard
          title="Average Likes"
          value={Math.round(data.average_likes)}
          icon={Heart}
        />

        <StatCard
          title="Average Reach"
          value={Math.round(data.average_reach)}
          icon={Eye}
        />

      </div>

      {/* Best Performing Information */}
      <div className="grid gap-6 md:grid-cols-2">

        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">
            Best Media Type
          </h2>

          <p className="mt-4 text-3xl font-bold text-purple-400">
            {data.best_media_type || "-"}
          </p>
        </div>

        <div className="rounded-2xl border border-border bg-card p-6">
          <h2 className="text-xl font-semibold">
            Best Category
          </h2>

          <p className="mt-4 text-3xl font-bold text-pink-400">
            {data.best_category || "-"}
          </p>
        </div>

      </div>

      {/* Main Charts */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* Viral Trend */}
        <div className="min-w-0 lg:col-span-2 rounded-2xl border border-border bg-card p-6">
          <ViralTrendChart
            predictions={data.recent_predictions}
          />
        </div>

        {/* Media Distribution */}
        <div className="min-w-0 rounded-2xl border border-border bg-card p-6">
          <MediaPieChart
            data={data.media_distribution}
          />
        </div>

      </div>

      {/* Bottom Section */}
      <div className="grid gap-6 lg:grid-cols-3">

        {/* Performance Distribution */}
        <div className="min-w-0 rounded-2xl border border-border bg-card p-6">
          <PerformanceChart
            data={data.performance_distribution}
          />
        </div>

        {/* Recent Predictions */}
        <div className="min-w-0 lg:col-span-2 rounded-2xl border border-border bg-card p-6">
          <RecentPredictionsTable
            predictions={data.recent_predictions}
          />
        </div>

      </div>

    </div>
  );
}