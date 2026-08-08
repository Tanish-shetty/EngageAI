import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface Props {
  predictions: any;
}

export default function PredictionChart({
  predictions,
}: Props) {
  const data = [
    {
      name: "Likes",
      value: predictions.likes,
    },
    {
      name: "Comments",
      value: predictions.comments,
    },
    {
      name: "Shares",
      value: predictions.shares,
    },
    {
      name: "Saves",
      value: predictions.saves,
    },
  ];

  return (
    <div className="h-80">

      <ResponsiveContainer
        width="100%"
        height="100%"
      >

        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />

          <Tooltip />

          <Bar
  dataKey="value"
  radius={[8, 8, 0, 0]}
  fill="#8B5CF6"
/>

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}