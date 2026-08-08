const activities = [
  {
    title: "Generated Instagram Caption",
    time: "10 minutes ago",
  },
  {
    title: "Predicted Viral Score",
    time: "1 hour ago",
  },
  {
    title: "Generated Hashtags",
    time: "Yesterday",
  },
];

export default function RecentActivity() {
  return (
    <div className="glass-dark rounded-2xl border border-purple-500/10 p-6">

      <h2 className="mb-6 text-2xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((item) => (
          <div
            key={item.title}
            className="flex items-start justify-between border-b border-purple-500/10 pb-4 last:border-none"
          >
            <div>
              <h3 className="font-medium">
                {item.title}
              </h3>

              <p className="text-sm text-foreground/50">
                {item.time}
              </p>
            </div>
          </div>
        ))}

      </div>

    </div>
  );
}