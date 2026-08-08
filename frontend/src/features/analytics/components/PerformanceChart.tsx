import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface Props {
  data: {
    name: string;
    value: number;
  }[];
}

export default function PerformanceChart({
  data,
}: Props) {

  return (
    <div className="rounded-2xl border border-border bg-card p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Performance Distribution
      </h2>

      <div className="h-80">

        <ResponsiveContainer>

          <BarChart data={data}>

            <XAxis dataKey="name" />

            <YAxis />

            <Tooltip />

            <Bar
              dataKey="value"
              fill="#8B5CF6"
              radius={[8, 8, 0, 0]}
            />

          </BarChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}