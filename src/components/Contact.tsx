import { site } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { Icons } from "@/lib/icons";

export function Contact() {
  return (
    <section id="contact" className="pb-20 pt-4 md:pb-28 md:pt-6">
      <div className="section-shell">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-line bg-surface px-6 py-14 shadow-[var(--shadow-lg)] md:px-12 md:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-0 grid-fade opacity-40" />
              <div className="absolute -right-10 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,var(--glow-a),transparent_70%)] blur-2xl" />
              <div className="absolute -left-10 bottom-0 h-48 w-48 rounded-full bg-[radial-gradient(circle,var(--glow-b),transparent_70%)] blur-2xl" />
            </div>

            <div className="relative mx-auto max-w-3xl text-center">
              <p className="section-eyebrow justify-center">
                <Icons.mail size={12} />
                Contact
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink md:text-5xl">
                Have a complex WordPress, automation, or web platform challenge?
                Let&apos;s build a solution.
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-muted">
                Available for senior WordPress and full-stack roles, AI-powered web
                platforms, and enterprise engagements.
              </p>

              <div className="mt-8 flex flex-col items-center gap-2 text-sm text-ink-soft">
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 font-medium transition-colors hover:text-accent"
                >
                  <Icons.mail size={15} className="text-accent" />
                  {site.email}
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium transition-colors hover:text-accent"
                >
                  <Icons.whatsapp size={15} className="text-accent" />
                  WhatsApp: {site.whatsappDisplay}
                </a>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium transition-colors hover:text-accent"
                >
                  <Icons.telegram size={15} className="text-accent" />
                  Telegram: {site.telegramHandle}
                </a>
                <p className="inline-flex items-center gap-2">
                  <Icons.mapPin size={15} className="text-accent" />
                  {site.location}
                </p>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <a href={`mailto:${site.email}`} className="btn-primary">
                  <Icons.mail size={16} />
                  Contact Me
                </a>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Icons.whatsapp size={16} />
                  WhatsApp
                </a>
                <a
                  href={site.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Icons.telegram size={16} />
                  Telegram
                </a>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Icons.linkedin size={16} />
                  LinkedIn
                </a>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <Icons.github size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
