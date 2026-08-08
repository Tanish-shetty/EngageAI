import {
  ResponsiveContainer,
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { day: "Mon", score: 68 },
  { day: "Tue", score: 74 },
  { day: "Wed", score: 80 },
  { day: "Thu", score: 77 },
  { day: "Fri", score: 85 },
  { day: "Sat", score: 90 },
  { day: "Sun", score: 87 },
];

export default function AnalyticsPreview() {
  return (
    <div className="glass-dark rounded-2xl border border-purple-500/10 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold">
          Analytics Preview
        </h2>

        <p className="mt-1 text-sm text-foreground/60">
          Viral score trend over the past week
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="#2a2a2a" />

            <XAxis dataKey="day" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="score"
              stroke="#8b5cf6"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}