import type { InputHTMLAttributes } from "react";

interface Props
  extends InputHTMLAttributes<HTMLInputElement> {}

export default function Checkbox(props: Props) {
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <input
        type="checkbox"
        className="h-5 w-5 accent-purple-500"
        {...props}
      />

      <span className="text-sm">
        Contains Call To Action
      </span>
    </label>
  );
}