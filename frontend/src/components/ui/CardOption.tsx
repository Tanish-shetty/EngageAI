import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  icon: LucideIcon;
  selected: boolean;
  onClick: () => void;
}

export default function CardOption({
  title,
  icon: Icon,
  selected,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-2xl border p-5 transition-all duration-300
      ${
        selected
          ? "border-purple-500 bg-purple-500/15 shadow-lg shadow-purple-500/20"
          : "border-border hover:border-purple-400 hover:bg-purple-500/5"
      }`}
    >
      <Icon
        className={`mx-auto mb-3 h-7 w-7
        ${
          selected
            ? "text-purple-400"
            : "text-foreground/70"
        }`}
      />

      <p
        className={`font-medium
        ${
          selected
            ? "text-purple-300"
            : ""
        }`}
      >
        {title}
      </p>
    </button>
  );
}