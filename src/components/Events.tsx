"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ConferencesData } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
};

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function formatDates(dates?: string): string {
  if (!dates) return "";
  let stripped = dates.replace(/,\s*\d{4}\s*$/, "");
  for (const m of MONTHS) {
    stripped = stripped.replace(new RegExp(`\\b${m}\\b`, "g"), m.slice(0, 3));
  }
  return stripped;
}

export default function Events({ data }: { data: ConferencesData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section id="events" className="section-padding bg-surface-alt" ref={ref}>
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="text-center mb-16"
        >
          <p className="text-accent text-sm font-medium tracking-widest uppercase mb-3">
            {data.sectionLabel}
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            {data.heading}
          </h2>
          <p className="mt-4 text-text-secondary max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 border-t border-l border-foreground/15"
        >
          {data.items.map((conf) => (
            <a
              key={conf.year}
              href={conf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative block px-5 py-6 sm:px-6 sm:py-7 border-r border-b border-foreground/15 transition-colors hover:bg-foreground/[0.025]"
            >
              <ArrowUpRight
                size={14}
                className="absolute top-6 right-5 sm:top-7 sm:right-6 text-text-secondary opacity-0 -translate-x-0.5 translate-y-0.5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-accent transition-all duration-300 ease-out"
              />
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="font-serif text-[1.9rem] sm:text-[2.1rem] leading-none tracking-tight text-foreground transition-colors group-hover:text-accent">
                  {conf.year}
                </span>
                {conf.highlight && (
                  <span
                    aria-hidden
                    className="inline-block w-1.5 h-1.5 rounded-full bg-accent translate-y-[-0.7em]"
                  />
                )}
              </div>
              <p className="text-[14px] font-medium text-foreground leading-tight">
                {conf.location}
              </p>
              <p className="text-[13px] text-text-secondary leading-tight mt-0.5">
                {conf.country}
              </p>
              {conf.dates && (
                <p className="font-mono text-[10.5px] tracking-[0.14em] uppercase text-text-secondary mt-3">
                  {formatDates(conf.dates)}
                </p>
              )}
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
