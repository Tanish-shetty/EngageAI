import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface QuickActionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  to: string;
}

export default function QuickActionCard({
  title,
  description,
  icon: Icon,
  to,
}: QuickActionCardProps) {
  return (
    <Link to={to}>
      <motion.div
        whileHover={{
          y: -5,
          scale: 1.02,
        }}
        transition={{ duration: 0.2 }}
        className="glass-dark group rounded-2xl border border-purple-500/10 p-6 transition-all hover:border-purple-500/30"
      >
        <div className="mb-5 flex items-center justify-between">
          <div className="rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-3">
            <Icon className="h-6 w-6 text-purple-400" />
          </div>

          <ArrowRight className="h-5 w-5 text-foreground/40 transition-transform group-hover:translate-x-1" />
        </div>

        <h3 className="text-xl font-semibold">
          {title}
        </h3>

        <p className="mt-2 text-sm text-foreground/60">
          {description}
        </p>
      </motion.div>
    </Link>
  );
}