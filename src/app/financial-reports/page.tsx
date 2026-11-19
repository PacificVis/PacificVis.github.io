import type { Metadata } from "next";
import { ArrowUpRight, FileDown } from "lucide-react";
import ResourceHeader from "@/components/ResourceHeader";
import { getFinancialReports } from "@/lib/content";

export const metadata: Metadata = {
  title: "Financial Reports — PacificVis",
  description: "Annual PacificVis conference financial reports.",
};

export default function FinancialReportsPage() {
  const { items } = getFinancialReports();
  const reports = [...items].sort((a, b) => b.year - a.year);

  return (
    <div>
      <ResourceHeader
        title="Financial Reports"
        subtitle="Annual reports on conference income and expenditure, shared with the PacificVis community."
        label="About PacificVis"
      />
      <div className="mx-auto max-w-4xl px-6 py-10 sm:py-14">
        <ul className="space-y-5">
          {reports.map((report) => (
            <li key={report.year} className="rounded-2xl border border-border p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <h2 className="text-2xl font-bold tracking-tight">PacificVis {report.year}</h2>
                  <p className="mt-2 text-text-secondary">{report.location}</p>
                  <p className="mt-2 text-xs text-text-secondary">
                    Report dated <time dateTime={report.reportDate}>{new Intl.DateTimeFormat("en", {
                      day: "numeric", month: "long", year: "numeric", timeZone: "UTC",
                    }).format(new Date(`${report.reportDate}T00:00:00Z`))}</time>
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <a
                    href={report.pdfHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View PacificVis ${report.year} financial report PDF (opens in a new tab)`}
                    className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-medium hover:border-accent/40 hover:text-accent transition-colors"
                  >
                    View report (PDF) <ArrowUpRight size={16} aria-hidden="true" />
                  </a>
                  <a
                    href={report.pdfHref}
                    download
                    aria-label={`Download PacificVis ${report.year} financial report PDF`}
                    className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
                  >
                    <FileDown size={16} aria-hidden="true" /> Download
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
