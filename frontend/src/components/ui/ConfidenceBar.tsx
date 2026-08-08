interface Props {
  value: number;
}

export default function ConfidenceBar({
  value,
}: Props) {
  return (
    <div className="space-y-2">

      <div className="flex justify-between">

        <span className="font-medium">
          Confidence
        </span>

        <span>{value.toFixed(0)}%</span>

      </div>

      <div className="h-3 overflow-hidden rounded-full bg-muted">

        <div
          className="h-full rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-700"
          style={{
            width: `${value}%`,
          }}
        />

      </div>

    </div>
  );
}