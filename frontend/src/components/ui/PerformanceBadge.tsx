interface Props {
  bucket?: string | null;
}

export default function PerformanceBadge({
  bucket,
}: Props) {

  const value = bucket ?? "Unknown";

  const normalized = value.toLowerCase();

  const color =
    normalized === "viral"
      ? "bg-green-500/20 text-green-400"
      : normalized === "good"
      ? "bg-blue-500/20 text-blue-400"
      : normalized === "average"
      ? "bg-yellow-500/20 text-yellow-400"
      : normalized === "needs improvement"
      ? "bg-orange-500/20 text-orange-400"
      : "bg-gray-500/20 text-gray-400";

  return (
    <span
      className={`rounded-full px-5 py-2 text-sm font-semibold ${color}`}
    >
      {value.toUpperCase()}
    </span>
  );
}