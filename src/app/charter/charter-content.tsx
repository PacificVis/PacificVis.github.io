"use client";

import ResourceHeader from "@/components/ResourceHeader";
import { FileDown } from "lucide-react";

export default function CharterContent({
  title,
  subtitle,
  label,
  pdfHref,
  html,
}: {
  title: string;
  subtitle: string;
  label: string;
  pdfHref: string;
  html: string;
}) {
  return (
    <div>
      <ResourceHeader title={title} subtitle={subtitle} label={label} />
      <div className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
        <article className="prose-custom">
          <div className="not-prose mb-8">
            <a
              href={pdfHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-5 py-3 text-sm font-medium hover:border-accent/30 transition-colors"
            >
              <FileDown size={18} className="text-accent" />
              Download Charter PDF
            </a>
          </div>
          <div dangerouslySetInnerHTML={{ __html: html }} />
        </article>
      </div>
    </div>
  );
}
