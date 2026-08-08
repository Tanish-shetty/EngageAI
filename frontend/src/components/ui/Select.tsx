import type { SelectHTMLAttributes } from "react";

import { ChevronDown } from "lucide-react";

import { cn } from "@/lib/utils";

interface Props
  extends SelectHTMLAttributes<HTMLSelectElement> {}

export default function Select({
  className,
  children,
  ...props
}: Props) {
  return (
    <div className="relative">
      <select
        className={cn(
          "w-full appearance-none rounded-xl border border-border bg-background px-4 py-3 pr-10 text-sm outline-none transition-all",
          "focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20",
          className
        )}
        {...props}
      >
        {children}
      </select>

      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  );
}