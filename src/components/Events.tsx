"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, ExternalLink } from "lucide-react";
import type { ConferencesData } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05 },
  }),
};

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
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {data.items.map((conf) => (
            <a
              key={conf.year}
              href={conf.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative rounded-xl border px-4 py-3 transition-all hover:shadow-md hover:-translate-y-0.5 ${
                conf.highlight
                  ? "border-accent/40 bg-accent/5 hover:border-accent/60"
                  : "border-border bg-background hover:border-accent/30"
              }`}
            >
              {conf.highlight && (
                <span className="absolute top-2.5 right-2.5 text-[9px] font-medium bg-accent text-white px-1.5 py-0.5 rounded-full">
                  Latest
                </span>
              )}
              <p className="text-lg font-bold">{conf.year}</p>
              <div className="mt-1 flex items-center gap-1 text-xs text-text-secondary">
                <MapPin size={11} />
                <span>
                  {conf.location}, {conf.country}
                </span>
              </div>
              {conf.dates && (
                <p className="mt-0.5 text-[11px] text-text-secondary">{conf.dates}</p>
              )}
              <ExternalLink
                size={12}
                className="absolute bottom-3 right-3 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
