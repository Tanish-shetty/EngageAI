import { Copy } from "lucide-react";
import { toast } from "sonner";

interface Props {
  hashtags: string[];
}

export default function HashtagCard({
  hashtags,
}: Props) {

  const copyAll = async () => {

    await navigator.clipboard.writeText(
      hashtags.join(" ")
    );

    toast.success("Hashtags copied!");

  };

  return (

    <div className="rounded-xl border border-border bg-card p-6">

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold">
          Generated Hashtags
        </h2>

        <button
          onClick={copyAll}
          className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 hover:bg-accent"
        >
          <Copy size={18} />

          Copy All

        </button>

      </div>

      <div className="mt-6 flex flex-wrap gap-3">

        {hashtags.map((tag, index) => (

          <span
            key={index}
            className="rounded-full bg-violet-500/15 px-4 py-2 text-violet-400"
          >
            {tag}
          </span>

        ))}

      </div>

    </div>

  );

}