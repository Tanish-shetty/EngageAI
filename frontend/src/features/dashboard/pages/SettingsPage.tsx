import {
  Mail,
  User,
  ShieldCheck,
  Lock,
  LogOut,
} from "lucide-react";

import useAuth from "@/hooks/useAuth";

export default function SettingsPage() {
  const { user, logout } = useAuth();

  return (
    <div className="mx-auto w-full max-w-5xl">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-4xl font-bold">
          Settings
        </h1>

        <p className="mt-2 text-foreground/60">
          Manage your account and security information.
        </p>
      </div>

      {/* Account Information */}
      <div className="mt-8 rounded-2xl border border-border bg-card p-8">
        <h2 className="text-center text-xl font-semibold">
          Account Information
        </h2>

        <div className="mx-auto mt-6 grid max-w-4xl gap-5 md:grid-cols-2">
          {/* Full Name */}
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="flex items-center justify-center gap-3 text-foreground/60">
              <User size={20} />

              <span className="text-sm">
                Full Name
              </span>
            </div>

            <p className="mt-3 text-center text-lg font-semibold">
              {user?.full_name || "Not available"}
            </p>
          </div>

          {/* Email */}
          <div className="rounded-xl border border-border bg-background p-5">
            <div className="flex items-center justify-center gap-3 text-foreground/60">
              <Mail size={20} />

              <span className="text-sm">
                Email Address
              </span>
            </div>

            <p className="mt-3 break-all text-center text-lg font-semibold">
              {user?.email || "Not available"}
            </p>
          </div>
        </div>
      </div>

      {/* Security */}
      <div className="mt-6 rounded-2xl border border-border bg-card p-8">
        <h2 className="text-center text-xl font-semibold">
          Security
        </h2>

        <div className="mx-auto mt-6 max-w-4xl space-y-4">
          {/* Authentication */}
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-border bg-background p-5 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/10">
                <ShieldCheck
                  size={20}
                  className="text-green-400"
                />
              </div>

              <div>
                <p className="font-semibold">
                  Authentication
                </p>

                <p className="text-sm text-foreground/60">
                  Your account is securely authenticated.
                </p>
              </div>
            </div>

            <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
              Authenticated
            </span>
          </div>

          {/* Password */}
          <div className="flex flex-col items-center justify-between gap-4 rounded-xl border border-border bg-background p-5 sm:flex-row">
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10">
                <Lock
                  size={20}
                  className="text-purple-400"
                />
              </div>

              <div>
                <p className="font-semibold">
                  Password
                </p>

                <p className="text-sm text-foreground/60">
                  Your password is securely protected.
                </p>
              </div>
            </div>

            <span className="text-sm text-foreground/50">
              Protected
            </span>
          </div>
        </div>
      </div>

      {/* Account Status */}
      <div className="mt-6 rounded-2xl border border-border bg-card p-8">
        <h2 className="text-center text-xl font-semibold">
          Account Status
        </h2>

        <div className="mx-auto mt-6 max-w-4xl rounded-xl border border-border bg-background p-5">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div>
              <p className="font-semibold">
                Account
              </p>

              <p className="mt-1 text-sm text-foreground/60">
                Your EngageAI account is currently active.
              </p>
            </div>

            <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-medium text-green-400">
              Active
            </span>
          </div>
        </div>
      </div>

      {/* Logout */}
      <div className="mt-6 rounded-2xl border border-red-500/20 bg-card p-8">
        <h2 className="text-center text-xl font-semibold">
          Account Actions
        </h2>

        <div className="mx-auto mt-6 flex max-w-4xl justify-center">
          <button
            onClick={logout}
            className="flex items-center gap-3 rounded-xl border border-red-500/30 bg-red-500/10 px-6 py-3 font-semibold text-red-400 transition hover:bg-red-500/20"
          >
            <LogOut size={20} />
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}