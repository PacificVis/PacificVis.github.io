"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BookOpen, FileText, Scale, ShieldCheck, ExternalLink } from "lucide-react";
import type { ResourcesData } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  BookOpen: <BookOpen size={22} />,
  FileText: <FileText size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  Scale: <Scale size={22} />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

export default function Resources({ data }: { data: ResourcesData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="resources"
      className="section-padding bg-surface-alt"
      ref={ref}
    >
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

        <div className="grid sm:grid-cols-2 gap-5">
          {data.items.map((res, i) => (
            <motion.div
              key={res.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={i + 1}
            >
              <a
                href={res.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-border bg-background p-6 h-full hover:border-accent/30 hover:shadow-lg hover:-translate-y-0.5 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0 mt-0.5">
                  {iconMap[res.icon]}
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="text-base font-semibold mb-1 flex items-center gap-1.5">
                    {res.title}
                    <ExternalLink
                      size={13}
                      className="text-text-secondary opacity-0 group-hover:opacity-100 transition-all"
                    />
                  </h3>
                  <p className="text-sm leading-relaxed text-text-secondary">
                    {res.description}
                  </p>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
