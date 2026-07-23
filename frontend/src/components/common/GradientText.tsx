import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({
  children,
  className,
}: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-violet-500 via-fuchsia-500 to-[#F25D2A] bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}