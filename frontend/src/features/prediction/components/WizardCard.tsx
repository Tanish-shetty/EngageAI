import type { ReactNode } from "react";

interface Props {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function WizardCard({
  title,
  subtitle,
  children,
}: Props) {
  return (
    <div className="glass-dark rounded-2xl border border-purple-500/10 p-8 shadow-xl">

      <div className="mb-8">

        <h2 className="text-3xl font-bold">
          {title}
        </h2>

        <p className="mt-2 text-foreground/60">
          {subtitle}
        </p>

      </div>

      {children}

    </div>
  );
}