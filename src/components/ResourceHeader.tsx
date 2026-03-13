"use client";

import { motion } from "framer-motion";

export default function ResourceHeader({
  title,
  subtitle,
  label = "Author Resources",
}: {
  title: string;
  subtitle: string;
  label?: string;
}) {
  return (
    <header className="border-b border-border bg-surface-alt">
      <div className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            {label}
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">
            {title}
          </h1>
          <p className="mt-3 text-text-secondary max-w-2xl">{subtitle}</p>
        </motion.div>
      </div>
    </header>
  );
}
