"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FileText,
  BookOpen,
  StickyNote,
  LayoutGrid,
  Presentation,
  Users,
  ExternalLink,
} from "lucide-react";
import type { TracksData } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  FileText: <FileText size={28} />,
  BookOpen: <BookOpen size={28} />,
  StickyNote: <StickyNote size={28} />,
  Layout: <LayoutGrid size={28} />,
  Presentation: <Presentation size={28} />,
  Users: <Users size={28} />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Tracks({ data }: { data: TracksData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tracks" className="section-padding bg-background" ref={ref}>
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
          <p className="mt-4 text-text-secondary max-w-xl mx-auto">
            {data.subtitle}
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.items.map((track, i) => {
            const card = (
              <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-5">
                {iconMap[track.icon]}
              </div>
            );

            const inner = (
              <>
                {card}
                <h3 className="text-lg font-semibold mb-3 flex items-center gap-1.5">
                  {track.title}
                  {track.href && (
                    <ExternalLink
                      size={14}
                      className="text-text-secondary opacity-0 group-hover:opacity-100 transition-all"
                    />
                  )}
                </h3>
                <p className="text-sm leading-relaxed text-text-secondary">
                  {track.description}
                </p>
              </>
            );

            return (
              <motion.div
                key={track.title}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={fadeUp}
                custom={i + 1}
              >
                {track.href ? (
                  <a
                    href={track.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full rounded-2xl border border-border bg-surface p-6 sm:p-8 hover:border-accent/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  >
                    {inner}
                  </a>
                ) : (
                  <div className="group h-full rounded-2xl border border-border bg-surface p-6 sm:p-8 hover:border-accent/30 transition-colors">
                    {inner}
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
