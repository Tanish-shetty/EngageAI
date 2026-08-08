import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  subtitle: string;
  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  subtitle,
  icon: Icon,
}: StatsCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.02,
      }}
      transition={{
        duration: 0.2,
      }}
      className="glass-dark rounded-2xl border border-purple-500/10 p-6"
    >
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-sm text-foreground/60">
            {title}
          </p>

          <h3 className="mt-2 text-3xl font-bold">
            {value}
          </h3>
        </div>

        <div className="rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3">
          <Icon className="h-6 w-6 text-purple-400" />
        </div>
      </div>

      <p className="text-sm text-foreground/50">
        {subtitle}
      </p>
    </motion.div>
  );
}