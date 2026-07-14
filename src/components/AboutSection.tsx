import Image from "next/image";
import { about, site } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { focusIcons, Icons } from "@/lib/icons";

export function AboutSection() {
  return (
    <section id="about" className="section-pad section-alt section-frame">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="About"
            title="WordPress as a platform foundation"
            description={about.lead}
          />
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <Reveal className="min-w-0 space-y-5">
            <div className="relative overflow-hidden rounded-2xl border border-line shadow-[var(--shadow)]">
              <div className="relative aspect-[16/10]">
                <Image
                  src="/images/img2.png"
                  alt="Selected WordPress platform delivery"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 560px"
                />
              </div>
            </div>
            <div className="space-y-4 text-[1.02rem] text-muted md:text-lg">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="inline-flex items-center gap-2 text-sm text-ink-soft md:text-base">
                <Icons.mapPin className="text-accent" size={16} />
                Based in {site.location}. Open to senior roles and platform engagements.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {about.focus.map((item) => {
              const Icon = focusIcons[item.icon] ?? Icons.layers;
              return (
                <div
                  key={item.label}
                  className="flex gap-4 rounded-xl border border-line bg-canvas p-4 transition-colors hover:border-accent"
                >
                  <span className="icon-chip">
                    <Icon size={18} />
                  </span>
                  <div className="min-w-0">
                    <p className="font-display text-lg font-semibold text-ink">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm text-muted">{item.detail}</p>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
