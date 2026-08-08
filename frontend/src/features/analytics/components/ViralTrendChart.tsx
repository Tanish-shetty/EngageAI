import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

interface Prediction {
  created_at: string;
  viral_probability: number;
}

interface Props {
  predictions: Prediction[];
}

export default function ViralTrendChart({
  predictions,
}: Props) {

  const chartData = [...predictions]
    .reverse()
    .map((item) => ({
      date: new Date(item.created_at).toLocaleDateString(
        "en-IN",
        {
          day: "numeric",
          month: "short",
        }
      ),
      viral: Math.round(item.viral_probability),
    }));

  return (
    <div className="rounded-2xl border border-border bg-card p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Viral Score Trend
      </h2>

      <div className="h-80">

        <ResponsiveContainer
          width="100%"
          height="100%"
        >

          <LineChart data={chartData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="date" />

            <YAxis domain={[0, 100]} />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="viral"
              stroke="#8B5CF6"
              strokeWidth={3}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}