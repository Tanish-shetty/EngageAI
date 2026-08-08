import useAuth from "@/hooks/useAuth";
import { User, Mail, ShieldCheck } from "lucide-react";

export default function ProfilePage() {
  const { user } = useAuth();

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-bold">Profile</h1>

        <p className="mt-2 text-foreground/60">
          View your account information.
        </p>
      </div>

      {/* Profile Header Card */}
      <div className="mt-8 rounded-2xl border border-border bg-card p-8">
        <div className="flex items-center gap-5">
          {/* Avatar */}
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-pink-600 text-2xl font-bold text-white">
            {user?.full_name
              ? user.full_name
                  .split(" ")
                  .map((name: string) => name[0])
                  .join("")
                  .slice(0, 2)
                  .toUpperCase()
              : "U"}
          </div>

          {/* Name */}
          <div>
            <h2 className="text-2xl font-bold">
              {user?.full_name || "User"}
            </h2>

            <p className="mt-1 text-foreground/60">
              {user?.email || "No email available"}
            </p>
          </div>
        </div>
      </div>

      {/* Personal Information */}
      <div className="mt-6 rounded-2xl border border-border bg-card p-8">
        <h2 className="text-xl font-semibold">
          Personal Information
        </h2>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {/* Name */}
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="flex items-center gap-3 text-foreground/60">
              <User size={20} />
              <span className="text-sm">Full Name</span>
            </div>

            <p className="mt-3 text-lg font-semibold">
              {user?.full_name || "Not available"}
            </p>
          </div>

          {/* Email */}
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="flex items-center gap-3 text-foreground/60">
              <Mail size={20} />
              <span className="text-sm">Email Address</span>
            </div>

            <p className="mt-3 break-all text-lg font-semibold">
              {user?.email || "Not available"}
            </p>
          </div>
        </div>
      </div>

      {/* Account Information */}
      <div className="mt-6 rounded-2xl border border-border bg-card p-8">
        <h2 className="text-xl font-semibold">
          Account Information
        </h2>

        <div className="mt-6 rounded-xl border border-border bg-background p-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck
                size={20}
                className="text-green-400"
              />

              <div>
                <p className="font-semibold">
                  Account Status
                </p>

                <p className="text-sm text-foreground/60">
                  Your account is active
                </p>
              </div>
            </div>

            <span className="rounded-full bg-green-500/15 px-4 py-2 text-sm font-medium text-green-400">
              Active
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}