interface Prediction {
  caption: string;
  viral_probability: number;
  reach: number;
  performance_bucket: string;
}

interface Props {
  predictions: Prediction[];
}

export default function RecentPredictionsTable({
  predictions,
}: Props) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">

      <h2 className="mb-6 text-xl font-semibold">
        Recent Predictions
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-border">

              <th className="pb-3">
                Viral
              </th>

              <th className="pb-3">
                Reach
              </th>

              <th className="pb-3">
                Performance
              </th>

            </tr>

          </thead>

          <tbody>

            {predictions.map((item, index) => (

              <tr
                key={index}
                className="border-b border-border/40"
              >

                <td className="text-center">
                  {Math.round(item.viral_probability)}%
                </td>

                <td className="text-center">
                  {Math.round(item.reach)}
                </td>

                <td className="text-center">
                  {item.performance_bucket}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}