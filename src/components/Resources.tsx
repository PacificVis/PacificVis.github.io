"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRightIcon,
  BookOpenIcon,
  FileTextIcon,
  ShieldCheckIcon,
  ScalesIcon,
  type Icon as PhosphorIcon,
} from "@phosphor-icons/react";
import type { ResourcesData } from "@/lib/content";

const iconMap: Record<string, PhosphorIcon> = {
  BookOpen: BookOpenIcon,
  FileText: FileTextIcon,
  ShieldCheck: ShieldCheckIcon,
  Scale: ScalesIcon,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
};

const ruleDraw = {
  hidden: { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: {
      duration: 0.7,
      delay: 0.2 + i * 0.06,
      ease: [0.65, 0, 0.35, 1] as const,
    },
  }),
};

export default function Resources({ data }: { data: ResourcesData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="resources"
      className="section-padding bg-surface-alt"
      style={{ ["--accent" as string]: "var(--accent-orange)" }}
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

        <ul className="relative">
          {data.items.map((res, i) => {
            const Icon = iconMap[res.icon];
            return (
              <li key={res.title} className="relative">
                <motion.span
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                  variants={ruleDraw}
                  custom={i}
                  className="absolute top-0 left-0 right-0 block h-px bg-foreground/15 origin-left"
                />
                <a
                  href={res.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-[1.5rem_1fr_1.25rem] sm:grid-cols-[1.75rem_1fr_1.5rem] items-start gap-x-3 sm:gap-x-4 py-7 sm:py-9"
                >
                  <span className="text-text-secondary group-hover:text-accent transition-colors pt-1">
                    {Icon && <Icon size={22} weight="regular" />}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl sm:text-[1.6rem] leading-[1.15] tracking-tight text-foreground mb-2 transition-colors group-hover:text-accent">
                      {res.title}
                    </h3>
                    <p className="text-[14.5px] leading-relaxed text-text-secondary max-w-[42rem]">
                      {res.description}
                    </p>
                  </div>
                  <ArrowUpRightIcon
                    size={18}
                    weight="regular"
                    className="self-start pt-1.5 justify-self-end text-text-secondary group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 ease-out"
                  />
                </a>
              </li>
            );
          })}
          <motion.span
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={ruleDraw}
            custom={data.items.length}
            className="absolute bottom-0 left-0 right-0 block h-px bg-foreground/15 origin-left"
          />
        </ul>
      </div>
    </section>
  );
}
