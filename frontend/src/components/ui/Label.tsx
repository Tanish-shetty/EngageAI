import type { LabelHTMLAttributes } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export default function Label({
  className = "",
  ...props
}: LabelProps) {
  return (
    <label
      className={`text-sm font-medium text-foreground ${className}`}
      {...props}
    />
  );
}