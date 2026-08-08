import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

export default function Input({
  className,
  ...props
}: InputProps) {
  return (
    <input
      className={cn(
        "w-full rounded-xl border border-purple-500/20 bg-background/50 px-4 py-3 text-sm text-foreground outline-none transition-all duration-200",
        "placeholder:text-foreground/40",
        "focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  );
}