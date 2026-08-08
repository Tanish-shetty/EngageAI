import useAuth from "@/hooks/useAuth";

export default function Topbar() {
  const { user } = useAuth();

  return (
    <header className="sticky top-0 z-20 flex h-20 items-center justify-between border-b border-purple-500/10 bg-background/80 px-8 backdrop-blur-xl">

      <div>

        <h2 className="text-2xl font-bold">
          Dashboard
        </h2>

        <p className="text-sm text-foreground/60">
          Welcome back, {user?.full_name}
        </p>

      </div>

    </header>
  );
}