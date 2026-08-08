import { Copy } from "lucide-react";
import { toast } from "sonner";

interface Props {
  caption: string;
}

export default function CaptionCard({
  caption,
}: Props) {
  const copyCaption = async () => {
    await navigator.clipboard.writeText(caption);

    toast.success("Caption copied!");
  };

  return (
    <div className="rounded-xl border border-border bg-card p-5 space-y-4">

      <p className="text-sm leading-7 whitespace-pre-wrap">
        {caption}
      </p>

      <button
        onClick={copyCaption}
        className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-white hover:opacity-90"
      >
        <Copy size={16} />
        Copy
      </button>

    </div>
  );
}