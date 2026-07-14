import type { Metadata } from "next";
import { PrintButton } from "@/components/PrintButton";
import { experience, site } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Resume",
  description: `Resume for ${site.name} — ${site.role}`,
  robots: { index: false, follow: false },
};

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-ink">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold tracking-tight">
            {site.name}
          </h1>
          <p className="mt-2 max-w-xl text-sm text-muted">{site.role}</p>
          <p className="mt-3 text-sm text-ink-soft">
            {site.email} · {site.location}
          </p>
        </div>
        <a
          href="/"
          className="rounded-md border border-line px-3 py-2 text-sm text-muted transition-colors hover:text-ink print:hidden"
        >
          ← Back to portfolio
        </a>
      </div>

      <p className="mt-8 text-sm leading-relaxed text-muted">{site.positioning}</p>

      <section className="mt-10">
        <h2 className="font-display text-xl font-semibold">Experience</h2>
        <div className="mt-6 space-y-8">
          {experience.map((job) => (
            <article key={`${job.company}-${job.period}`}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-semibold">
                  {job.title} — {job.company}
                </h3>
                <p className="font-mono text-xs uppercase tracking-[0.1em] text-muted">
                  {job.period}
                </p>
              </div>
              <p className="mt-1 text-sm text-muted">{job.place}</p>
              <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-ink-soft">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-10 print:hidden">
        <PrintButton />
      </div>
    </main>
  );
}
