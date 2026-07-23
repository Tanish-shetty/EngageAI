interface SectionTitleProps {
  badge?: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  badge,
  title,
  description,
}: SectionTitleProps) {
  return (
    <div className="mx-auto mb-16 max-w-3xl text-center">
      {badge && (
        <span className="inline-flex rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 text-sm text-purple-300">
          {badge}
        </span>
      )}

      <h2 className="mt-5 text-4xl font-bold lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-lg text-foreground/70">
          {description}
        </p>
      )}
    </div>
  );
}