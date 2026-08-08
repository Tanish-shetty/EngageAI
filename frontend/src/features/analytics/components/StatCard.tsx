import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  value: string | number;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  icon: Icon,
}: Props) {
  return (
    <div className="rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900 to-slate-800 p-6 shadow-lg transition hover:scale-[1.02]">
      <div className="flex items-center justify-between">
        <p className="text-sm text-foreground/60">
          {title}
        </p>

        <Icon className="h-5 w-5 text-purple-400" />
      </div>

      <h2 className="mt-4 text-3xl font-bold">
        {value}
      </h2>
    </div>
  );
}