import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function GradientCard({
  children,
  className = "",
}: Props) {
  return (
    <div
      className={`
      relative
      overflow-hidden
      rounded-2xl
      border
      border-purple-500/20
      bg-white/5
      backdrop-blur-xl
      p-6
      transition-all
      duration-300
      hover:-translate-y-2
      hover:border-purple-400/40
      hover:shadow-[0_0_40px_rgba(168,85,247,0.18)]
      ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none" />

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}