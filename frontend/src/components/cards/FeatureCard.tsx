import type { ReactNode } from "react";
import GradientCard from "./GradientCard";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <GradientCard className="group">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 transition-all duration-300 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="leading-relaxed text-foreground/70">
        {description}
      </p>
    </GradientCard>
  );
}