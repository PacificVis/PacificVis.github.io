"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import type { SponsorsData } from "@/lib/content";

export default function Sponsors({ data }: { data: SponsorsData }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section className="py-12 sm:py-16 bg-background border-t border-border" ref={ref}>
      <div className="mx-auto max-w-5xl px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-text-secondary mb-8"
        >
          Sponsored by
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-10 sm:gap-14"
        >
          {data.logos.map((logo) => (
            <a
              key={logo.alt}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className={`${logo.height || "h-10 sm:h-12"} w-auto object-contain`}
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
