import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface AuthLayoutProps {
  title: string;
  subtitle: string;
  children: ReactNode;
}

export default function AuthLayout({
  title,
  subtitle,
  children,
}: AuthLayoutProps) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      {/* Purple Glow */}
      <div className="absolute left-1/4 top-1/3 h-96 w-96 rounded-full bg-purple-500 opacity-20 blur-3xl" />

      {/* Pink Glow */}
      <div className="absolute right-1/4 top-1/2 h-80 w-80 rounded-full bg-pink-500 opacity-15 blur-3xl" />

      {/* Orange Glow */}
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-orange-500 opacity-10 blur-3xl" />

      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.96,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="relative z-10 w-full max-w-md"
      >
        {/* Logo */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500">
            <span className="text-xl font-bold text-white">⚡</span>
          </div>

          <h1 className="gradient-text text-3xl font-bold">
            EngageAI
          </h1>
        </div>

        {/* Card */}
        <div className="glass-dark rounded-2xl border border-purple-500/20 p-8 shadow-2xl">
          <h2 className="mb-2 text-center text-3xl font-bold">
            {title}
          </h2>

          <p className="mb-8 text-center text-foreground/70">
            {subtitle}
          </p>

          {children}
        </div>
      </motion.div>
    </div>
  );
}