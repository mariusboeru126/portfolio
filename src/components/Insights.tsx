import { articles } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { articleIcons, Icons } from "@/lib/icons";

export function Insights() {
  return (
    <section id="insights" className="section-pad section-frame">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Insights"
            title="Technical writing & knowledge"
            description="Selected topics on enterprise WordPress, custom plugins, AI automation, and API architecture."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {articles.map((article, index) => {
            const Icon = articleIcons[article.icon] ?? Icons.book;
            return (
              <Reveal key={article.title} delay={index * 0.04}>
                <article className="group flex h-full gap-4 rounded-xl border border-line bg-surface p-5 transition-colors hover:border-accent md:p-6">
                  <span className="icon-chip h-11 w-11">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">
                      {article.topic}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent">
                      {article.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted">
                      {article.excerpt}
                    </p>
                    <p className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted transition-colors group-hover:text-accent">
                      Coming soon
                      <Icons.arrowRight size={12} />
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
