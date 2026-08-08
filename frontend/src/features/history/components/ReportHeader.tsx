interface Props {
  input: any;
}

export default function ReportHeader({ input }: Props) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6">

      <h1 className="text-3xl font-bold">
        Instagram Prediction Report
      </h1>

      <div className="mt-6 grid gap-6 md:grid-cols-2">

        <div>
          <p className="text-sm text-foreground/60">
            Caption
          </p>

          <h3 className="mt-1 font-semibold">
            {input.caption || "No Caption"}
          </h3>
        </div>

        <div>
          <p className="text-sm text-foreground/60">
            Media Type
          </p>

          <h3 className="mt-1 font-semibold capitalize">
            {input.media_type}
          </h3>
        </div>

        <div>
          <p className="text-sm text-foreground/60">
            Category
          </p>

          <h3 className="mt-1 font-semibold">
            {input.content_category}
          </h3>
        </div>

        <div>
          <p className="text-sm text-foreground/60">
            Followers
          </p>

          <h3 className="mt-1 font-semibold">
            {input.follower_count?.toLocaleString()}
          </h3>
        </div>

      </div>

    </div>
  );
}