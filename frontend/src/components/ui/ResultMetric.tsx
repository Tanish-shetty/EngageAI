import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: number | string;
  icon: LucideIcon;
}

export default function ResultMetric({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 transition hover:border-purple-500/40">
      <div className="mb-4 flex items-center gap-3">
        <div className="rounded-xl bg-purple-500/10 p-3">
          <Icon className="h-6 w-6 text-purple-400" />
        </div>

        <p className="text-sm text-foreground/60">
          {title}
        </p>
      </div>

      <h2 className="text-3xl font-bold">
        {typeof value === "number"
          ? Math.round(value).toLocaleString()
          : value}
      </h2>
    </div>
  );
}