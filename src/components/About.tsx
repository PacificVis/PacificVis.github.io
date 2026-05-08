"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRightIcon } from "@phosphor-icons/react";
import Link from "next/link";
import type { AboutCard, AboutData } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

const ruleDraw = {
  hidden: { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: {
      duration: 0.8,
      delay: 0.25 + i * 0.08,
      ease: [0.65, 0, 0.35, 1] as const,
    },
  }),
};

function CardVisual({ card }: { card: AboutCard }) {
  if (!card.image) return <div className="w-full h-full bg-surface" />;
  return (
    <img
      src={card.image}
      alt=""
      className="w-full h-full object-cover grayscale-[0.15] saturate-[0.85]"
      loading="lazy"
    />
  );
}

function ImageCard({ card, index }: { card: AboutCard; index: number }) {
  return (
    <div className="flex flex-col">
      <div className="aspect-[4/3] mb-6 overflow-hidden bg-surface">
        <CardVisual card={card} />
      </div>
      <div className="relative pt-6">
        <motion.span
          variants={ruleDraw}
          custom={index}
          className="absolute top-0 left-0 right-0 block h-px bg-foreground/15 origin-left"
        />
        <h3 className="font-serif text-2xl sm:text-[1.7rem] leading-[1.15] tracking-tight text-foreground mb-4 text-balance">
          {card.title}
        </h3>
        <p className="text-[15px] leading-relaxed text-text-secondary text-pretty">
          {card.description}
        </p>
      </div>
    </div>
  );
}

export default function About({ data }: { data: AboutData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="about"
      className="section-padding bg-background"
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
            <br />
            {data.headingLine2}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
          className="grid md:grid-cols-3 gap-x-8 gap-y-14 mb-20"
        >
          {data.cards.map((card, i) => (
            <ImageCard key={card.title} card={card} index={i} />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={5}
          className="text-center"
        >
          <Link
            href={data.charterLink.href}
            className="group inline-flex items-center gap-2 text-sm font-medium border border-border hover:border-accent/40 rounded-full px-5 py-2.5 text-text-secondary hover:text-accent transition-all"
          >
            {data.charterLink.text}
            <ArrowRightIcon
              size={14}
              weight="regular"
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
