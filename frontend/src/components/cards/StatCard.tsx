interface StatCardProps {
  value: string;
  label: string;
}

export default function StatCard({
  value,
  label,
}: StatCardProps) {
  return (
    <div
      className="
      rounded-2xl
      border border-purple-500/20
      bg-white/5
      backdrop-blur-xl
      p-6
      text-center
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-purple-400/40
      hover:shadow-[0_0_40px_rgba(168,85,247,.2)]
      "
    >
      <div
  className="
  gradient-text
  text-5xl
  font-extrabold
  transition-transform
  duration-300
  group-hover:scale-110
  "
>
        {value}
      </div>

      <p className="mt-2 text-foreground/70">
        {label}
      </p>
    </div>
  );
}