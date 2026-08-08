interface Props {
  input: any;
}

export default function InputSummary({
  input,
}: Props) {
  if (!input) return null;

  return (
    <div className="rounded-2xl border border-border bg-card p-6">

      <h2 className="text-2xl font-semibold mb-6">
        Input Summary
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        <Item
          title="Media Type"
          value={input.media_type}
        />

        <Item
          title="Followers"
          value={input.follower_count}
        />

        <Item
          title="Category"
          value={input.content_category || "N/A"}
        />

        <Item
          title="Posting Hour"
          value={input.post_hour}
        />

        <Item
          title="Engagement Rate"
          value={`${input.engagement_rate}%`}
        />

        <Item
          title="Hashtags"
          value={input.hashtags_count}
        />

        <Item
          title="Traffic Source"
          value={input.traffic_source}
        />

        <Item
          title="Caption Length"
          value={input.caption_length}
        />

        <Item
          title="Posting Frequency"
          value={`${input.posting_frequency_per_week}/week`}
        />

        <Item
          title="Trending Audio"
          value={
            input.has_trending_audio
              ? "Yes"
              : "No"
          }
        />

        <Item
          title="Call To Action"
          value={
            input.has_call_to_action
              ? "Yes"
              : "No"
          }
        />

        <Item
          title="Sentiment Score"
          value={input.sentiment_score}
        />

      </div>

    </div>
  );
}

interface ItemProps {
  title: string;
  value: any;
}

function Item({
  title,
  value,
}: ItemProps) {
  return (
    <div className="rounded-xl border border-border p-4">

      <p className="text-sm text-foreground/60">
        {title}
      </p>

      <h3 className="mt-2 text-lg font-semibold">
        {String(value)}
      </h3>

    </div>
  );
}