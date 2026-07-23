interface StepCardProps {
  step: string;
  title: string;
  description: string;
}

export default function StepCard({
  step,
  title,
  description,
}: StepCardProps) {
  return (
    <div className="relative text-center">

      <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-2xl font-bold shadow-[0_0_40px_rgba(168,85,247,.35)]">
    {step}
</div>

      <h3 className="mb-3 text-xl font-semibold">
        {title}
      </h3>

      <p className="text-foreground/70 leading-relaxed">
        {description}
      </p>

    </div>
  );
}