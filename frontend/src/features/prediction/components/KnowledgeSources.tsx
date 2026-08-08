import { BookOpen } from "lucide-react";

interface Source {
  source: string;
  similarity: number;
}

interface Props {
  sources: Source[];
}

export default function KnowledgeSources({
  sources,
}: Props) {
  if (!sources?.length) return null;

  return (
    <div className="rounded-2xl border border-border p-6">

      <div className="flex items-center gap-3 mb-5">

        <BookOpen className="h-6 w-6 text-indigo-400" />

        <h2 className="text-xl font-semibold">
          Knowledge Sources
        </h2>

      </div>

      <div className="space-y-3">

        {sources.map((source, index) => {

          const filename =
            source.source
              .split(/[\\/]/)
              .pop() || source.source;

          return (

            <div
              key={index}
              className="rounded-xl border border-border bg-card p-4 flex items-center justify-between"
            >

              <div>

                <p className="font-medium">
                  {filename}
                </p>

                <p className="text-sm text-foreground/60">
                  Retrieved from Knowledge Base
                </p>

              </div>

              <div className="text-right">

                <p className="text-xs text-foreground/60">
                  Similarity
                </p>

                <p className="font-semibold text-indigo-400">
                  {(source.similarity * 100).toFixed(1)}%
                </p>

              </div>

            </div>

          );
        })}

      </div>

    </div>
  );
}