"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRightIcon } from "@phosphor-icons/react";
import type { HeroData } from "@/lib/content";

export default function Hero({ data }: { data: HeroData }) {
  return (
    <section className="relative min-h-[calc(100vh-3.5rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-hero-gradient-start via-hero-gradient-mid to-hero-gradient-end">
      {/* Decorative orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_70%)]" />
        <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.1)_0%,transparent_70%)]" />

        {/* Data-vis themed SVG decorations */}
        <svg
          className="absolute inset-0 w-full h-full animate-[fadeIn_2s_0.3s_both]"
          viewBox="0 0 1200 800"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Network graph — top-left */}
          <g stroke="rgba(147,197,253,0.15)" strokeWidth="1">
            <line x1="60" y1="60" x2="160" y2="140" />
            <line x1="160" y1="140" x2="100" y2="240" />
            <line x1="160" y1="140" x2="260" y2="100" />
            <line x1="260" y1="100" x2="300" y2="200" />
            <line x1="100" y1="240" x2="200" y2="280" />
            <line x1="200" y1="280" x2="300" y2="200" />
            <line x1="300" y1="200" x2="360" y2="160" />
            <line x1="60" y1="60" x2="140" y2="30" />
            <line x1="140" y1="30" x2="260" y2="100" />
            <line x1="200" y1="280" x2="160" y2="350" />
            <line x1="160" y1="350" x2="80" y2="320" />
            <line x1="80" y1="320" x2="100" y2="240" />
          </g>
          <g>
            <circle cx="60" cy="60" r="5" fill="rgba(147,197,253,0.2)" />
            <circle cx="160" cy="140" r="7" fill="rgba(103,232,249,0.18)" />
            <circle cx="100" cy="240" r="4" fill="rgba(147,197,253,0.15)" />
            <circle cx="260" cy="100" r="6" fill="rgba(103,232,249,0.2)" />
            <circle cx="300" cy="200" r="5" fill="rgba(147,197,253,0.18)" />
            <circle cx="200" cy="280" r="4.5" fill="rgba(103,232,249,0.15)" />
            <circle cx="360" cy="160" r="3.5" fill="rgba(147,197,253,0.12)" />
            <circle cx="140" cy="30" r="4" fill="rgba(147,197,253,0.15)" />
            <circle cx="160" cy="350" r="3.5" fill="rgba(103,232,249,0.12)" />
            <circle cx="80" cy="320" r="4" fill="rgba(147,197,253,0.14)" />
          </g>

          {/* Network graph — bottom-right */}
          <g stroke="rgba(103,232,249,0.12)" strokeWidth="1">
            <line x1="850" y1="520" x2="950" y2="580" />
            <line x1="950" y1="580" x2="920" y2="680" />
            <line x1="950" y1="580" x2="1060" y2="550" />
            <line x1="1060" y1="550" x2="1100" y2="640" />
            <line x1="920" y1="680" x2="1020" y2="720" />
            <line x1="1020" y1="720" x2="1100" y2="640" />
            <line x1="1100" y1="640" x2="1150" y2="580" />
            <line x1="850" y1="520" x2="800" y2="600" />
            <line x1="800" y1="600" x2="920" y2="680" />
            <line x1="1020" y1="720" x2="1080" y2="760" />
            <line x1="1080" y1="760" x2="1150" y2="700" />
            <line x1="1150" y1="700" x2="1100" y2="640" />
          </g>
          <g>
            <circle cx="850" cy="520" r="4.5" fill="rgba(103,232,249,0.18)" />
            <circle cx="950" cy="580" r="6.5" fill="rgba(147,197,253,0.2)" />
            <circle cx="920" cy="680" r="4" fill="rgba(103,232,249,0.15)" />
            <circle cx="1060" cy="550" r="5" fill="rgba(147,197,253,0.18)" />
            <circle cx="1100" cy="640" r="5.5" fill="rgba(103,232,249,0.2)" />
            <circle cx="1020" cy="720" r="4" fill="rgba(147,197,253,0.15)" />
            <circle cx="1150" cy="580" r="3.5" fill="rgba(103,232,249,0.12)" />
            <circle cx="800" cy="600" r="4.5" fill="rgba(147,197,253,0.14)" />
            <circle cx="1080" cy="760" r="3.5" fill="rgba(103,232,249,0.12)" />
            <circle cx="1150" cy="700" r="4" fill="rgba(147,197,253,0.15)" />
          </g>

          {/* Scattered data points — varied sizes & colors */}
          <circle cx="500" cy="90" r="3" fill="rgba(147,197,253,0.18)" />
          <circle cx="680" cy="60" r="2" fill="rgba(103,232,249,0.15)" />
          <circle cx="620" cy="130" r="4.5" fill="rgba(147,197,253,0.12)" />
          <circle cx="780" cy="160" r="2.5" fill="rgba(103,232,249,0.2)" />
          <circle cx="420" cy="200" r="3.5" fill="rgba(147,197,253,0.14)" />
          <circle cx="900" cy="120" r="3" fill="rgba(103,232,249,0.16)" />
          <circle cx="550" cy="650" r="3.5" fill="rgba(147,197,253,0.14)" />
          <circle cx="380" cy="600" r="2.5" fill="rgba(103,232,249,0.18)" />
          <circle cx="700" cy="700" r="4" fill="rgba(147,197,253,0.12)" />
          <circle cx="200" cy="480" r="3" fill="rgba(103,232,249,0.15)" />
          <circle cx="1000" cy="350" r="3.5" fill="rgba(147,197,253,0.14)" />
          <circle cx="130" cy="420" r="4" fill="rgba(103,232,249,0.12)" />
          <circle cx="1050" cy="250" r="2.5" fill="rgba(147,197,253,0.16)" />
          <circle cx="470" cy="380" r="2" fill="rgba(103,232,249,0.1)" />
          <circle cx="750" cy="440" r="3" fill="rgba(147,197,253,0.1)" />
          <circle cx="340" cy="120" r="5" fill="rgba(103,232,249,0.08)" />
          <circle cx="1120" cy="400" r="3.5" fill="rgba(147,197,253,0.1)" />
          <circle cx="60" cy="550" r="2.5" fill="rgba(103,232,249,0.14)" />
          <circle cx="650" cy="350" r="2" fill="rgba(147,197,253,0.08)" />
          <circle cx="820" cy="300" r="3" fill="rgba(103,232,249,0.12)" />

          {/* Spline curves — chart-like flowing lines */}
          <path
            d="M0 520 C150 420, 300 480, 450 400 S700 350, 850 380 S1050 300, 1200 340"
            stroke="rgba(147,197,253,0.12)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0 620 C200 540, 350 580, 500 520 S750 460, 900 500 S1100 430, 1200 460"
            stroke="rgba(103,232,249,0.1)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M0 700 C180 650, 400 680, 600 620 S850 580, 1000 600 S1150 540, 1200 560"
            stroke="rgba(147,197,253,0.08)"
            strokeWidth="1"
            fill="none"
          />

          {/* Mini bar chart — right side */}
          <g opacity="0.12">
            <rect x="1040" y="160" width="12" height="50" rx="2" fill="rgba(147,197,253,1)" />
            <rect x="1060" y="140" width="12" height="70" rx="2" fill="rgba(103,232,249,1)" />
            <rect x="1080" y="155" width="12" height="55" rx="2" fill="rgba(147,197,253,1)" />
            <rect x="1100" y="125" width="12" height="85" rx="2" fill="rgba(103,232,249,1)" />
            <rect x="1120" y="145" width="12" height="65" rx="2" fill="rgba(147,197,253,1)" />
          </g>

          {/* Coordinate axes hint — bottom-left area */}
          <g stroke="rgba(147,197,253,0.1)" strokeWidth="1">
            <line x1="50" y1="700" x2="350" y2="700" />
            <line x1="50" y1="700" x2="50" y2="500" />
            {/* Tick marks */}
            <line x1="110" y1="700" x2="110" y2="695" />
            <line x1="170" y1="700" x2="170" y2="695" />
            <line x1="230" y1="700" x2="230" y2="695" />
            <line x1="290" y1="700" x2="290" y2="695" />
            <line x1="50" y1="650" x2="55" y2="650" />
            <line x1="50" y1="600" x2="55" y2="600" />
            <line x1="50" y1="550" x2="55" y2="550" />
          </g>
          {/* Data points on the axes */}
          <circle cx="110" cy="650" r="3" fill="rgba(103,232,249,0.18)" />
          <circle cx="170" cy="610" r="3" fill="rgba(103,232,249,0.18)" />
          <circle cx="230" cy="580" r="3" fill="rgba(103,232,249,0.18)" />
          <circle cx="290" cy="560" r="3" fill="rgba(103,232,249,0.18)" />
          <path
            d="M110 650 L170 610 L230 580 L290 560"
            stroke="rgba(103,232,249,0.12)"
            strokeWidth="1"
            fill="none"
          />

          {/* Concentric rings — center-right, like a radar/target */}
          <g stroke="rgba(147,197,253,0.06)" fill="none" strokeWidth="0.8">
            <circle cx="950" cy="300" r="30" />
            <circle cx="950" cy="300" r="55" />
            <circle cx="950" cy="300" r="80" />
          </g>
          <circle cx="970" cy="280" r="2.5" fill="rgba(103,232,249,0.2)" />
          <circle cx="935" cy="320" r="2" fill="rgba(147,197,253,0.18)" />
          <circle cx="980" cy="310" r="1.8" fill="rgba(103,232,249,0.15)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-20 pb-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-blue-300/80 text-sm font-medium tracking-widest uppercase mb-10"
        >
          {data.sponsor}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-col items-center"
        >
          <Image
            src="/pacificvis-logo-white.svg"
            alt={data.title}
            width={320}
            height={122}
            className="w-[320px] sm:w-[320px] md:w-100 h-auto"
            priority
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-white/90 tracking-tight mt-10">
            {data.title} {data.titleAccent}
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-5 text-lg text-blue-100/70 max-w-2xl mx-auto leading-relaxed font-serif"
        >
          {data.tagline}
        </motion.p>

        {/* Next conference card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 inline-block"
        >
          <a
            href={data.nextEvent.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block rounded-lg border border-white/[0.12] bg-gradient-to-br from-white/[0.05] to-white/[0.015] backdrop-blur-md px-8 py-5 sm:px-12 sm:py-6 text-left transition-colors hover:border-white/20 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
          >
            <div className="flex items-center gap-8 sm:gap-10">
              <div>
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    aria-hidden
                    className="relative inline-flex w-1.5 h-1.5"
                  >
                    <span className="absolute inset-0 rounded-full bg-accent" />
                    <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
                  </span>
                  <p className="font-mono text-[10.5px] tracking-[0.24em] uppercase text-white/55">
                    Recent Event
                  </p>
                </div>
                <span className="text-2xl sm:text-3xl leading-none tracking-tight text-white">
                  {data.nextEvent.name}
                </span>
              </div>

              <div className="border-l border-white/[0.12] pl-8 sm:pl-10 flex flex-col gap-1.5 font-mono text-[11px] sm:text-[12px] tracking-[0.16em] uppercase">
                <span className="text-white/70">
                  {data.nextEvent.dates.replace(/,\s*\d{4}\s*$/, "")}
                </span>
                <span className="text-white/50">{data.nextEvent.location}</span>
              </div>

              <ArrowUpRightIcon
                size={20}
                weight="regular"
                className="text-white/30 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-300 ease-out ml-auto"
              />
            </div>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 mx-auto rounded-full border-2 border-white/20 flex items-start justify-center pt-2"
          >
            <div className="w-1 h-2 bg-white/40 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
