"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Users, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import type { AboutData } from "@/lib/content";

const iconMap: Record<string, React.ReactNode> = {
  Globe: <Globe size={24} />,
  BookOpen: <BookOpen size={24} />,
  Users: <Users size={24} />,
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15 },
  }),
};

export default function About({ data }: { data: AboutData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="mx-auto max-w-5xl">
        {/* Section header */}
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

        {/* Description cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {data.cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={fadeUp}
              custom={i + 1}
              className="rounded-2xl border border-border bg-surface p-6 sm:p-8"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-4">
                {iconMap[card.icon]}
              </div>
              <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={5}
          className="text-center mt-12"
        >
          <Link
            href={data.charterLink.href}
            className="group inline-flex items-center gap-2 text-sm font-medium border border-border hover:border-accent/40 rounded-full px-5 py-2.5 text-text-secondary hover:text-accent transition-all"
          >
            {data.charterLink.text}
            <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
