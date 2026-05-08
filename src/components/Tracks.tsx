"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  ArrowUpRightIcon,
  BookOpenIcon,
  FileTextIcon,
  NoteIcon,
  SquaresFourIcon,
  PresentationIcon,
  UsersIcon,
  type Icon as PhosphorIcon,
} from "@phosphor-icons/react";
import type { TracksData, TrackItem } from "@/lib/content";

const iconMap: Record<string, PhosphorIcon> = {
  BookOpen: BookOpenIcon,
  FileText: FileTextIcon,
  StickyNote: NoteIcon,
  Layout: SquaresFourIcon,
  Presentation: PresentationIcon,
  Users: UsersIcon,
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

function Row({ track }: { track: TrackItem }) {
  const Icon = iconMap[track.icon];

  const inner = (
    <div className="grid grid-cols-[1.5rem_1fr_1.25rem] sm:grid-cols-[1.75rem_1fr_1.5rem] items-start gap-x-3 sm:gap-x-4 py-7 sm:py-9">
      <span className="text-text-secondary group-hover:text-accent transition-colors pt-1">
        {Icon && <Icon size={22} weight="regular" />}
      </span>
      <div>
        <h3 className="font-serif text-xl sm:text-[1.6rem] leading-[1.15] tracking-tight text-foreground mb-2 transition-colors group-hover:text-accent">
          {track.title}
        </h3>
        <p className="text-[14.5px] leading-relaxed text-text-secondary max-w-[42rem]">
          {track.description}
        </p>
      </div>
      <span className="self-start pt-1.5 justify-self-end text-text-secondary">
        {track.href ? (
          <ArrowUpRightIcon
            size={18}
            weight="regular"
            className="opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-accent transition-all duration-300 ease-out"
          />
        ) : null}
      </span>
    </div>
  );

  if (track.href) {
    return (
      <a
        href={track.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {inner}
      </a>
    );
  }
  return <div className="group">{inner}</div>;
}

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

        <ul className="relative">
          {data.items.map((track, i) => (
            <li key={track.title} className="relative">
              <motion.span
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={ruleDraw}
                custom={i}
                className="absolute top-0 left-0 right-0 block h-px bg-foreground/15 origin-left"
              />
              <Row track={track} />
            </li>
          ))}
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
