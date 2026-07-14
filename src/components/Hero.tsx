"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { highlights, site } from "@/data/portfolio";
import { Icons } from "@/lib/icons";

type CodePart = { text: string; color?: string };

const codeLines: CodePart[][] = [
  [
    { text: "class ", color: "text-sky-300" },
    { text: "PlatformEngineer {" },
  ],
  [
    { text: "  stack = [" },
    { text: "'WordPress'", color: "text-emerald-300" },
    { text: ", " },
    { text: "'AI'", color: "text-amber-300" },
    { text: ", " },
    { text: "'APIs'", color: "text-cyan-300" },
    { text: "]" },
  ],
  [
    { text: "  build(" },
    { text: "enterprise", color: "text-sky-300" },
    { text: ") {" },
  ],
  [
    { text: "    return " },
    { text: "scalable_system", color: "text-emerald-300" },
    { text: ";" },
  ],
  [{ text: "  }" }],
  [{ text: "}" }],
];

const ecosystem = [
  { label: "WordPress", icon: Icons.wordpress, x: "14%", y: "28%" },
  { label: "Plugins", icon: Icons.box, x: "48%", y: "16%" },
  { label: "AI Layer", icon: Icons.cpu, x: "78%", y: "30%" },
  { label: "HubSpot", icon: Icons.plug, x: "18%", y: "70%" },
  { label: "Persona", icon: Icons.shield, x: "48%", y: "78%" },
  { label: "Analytics", icon: Icons.grid, x: "78%", y: "68%" },
] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="home" className="relative overflow-hidden section-frame pt-24 md:pt-28">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 grid-fade opacity-50" />
        <div className="absolute -right-16 top-10 h-72 w-72 rounded-full bg-[radial-gradient(circle,var(--glow-a),transparent_70%)] blur-2xl" />
        <div className="absolute -left-20 bottom-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,var(--glow-b),transparent_70%)] blur-2xl" />
      </div>

      <div className="section-shell relative grid items-center gap-10 pb-16 pt-6 lg:grid-cols-2 lg:gap-12 lg:pb-24 lg:pt-10">
        <div className="min-w-0">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/90 px-3 py-1.5 text-xs font-medium text-ink-soft shadow-sm"
            initial={reduceMotion ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Icons.wordpress className="text-accent" size={14} />
            Platform engineer · 6+ years
          </motion.div>

          <motion.p
            className="mt-5 font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl md:text-5xl"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.04 }}
          >
            {site.name}
          </motion.p>

          <motion.p
            className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-accent md:text-[0.95rem]"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
          >
            {site.role}
          </motion.p>

          <motion.h1
            className="mt-6 max-w-xl font-display text-2xl font-semibold leading-tight tracking-tight text-ink-soft sm:text-3xl lg:text-[2.05rem] lg:leading-[1.2]"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
          >
            {site.headline}
          </motion.h1>

          <motion.p
            className="mt-5 max-w-xl text-base text-muted md:text-lg"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
          >
            {site.subheadline}
          </motion.p>

          <motion.ul
            className="mt-7 grid gap-2 sm:grid-cols-2"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {highlights.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-lg border border-line bg-surface px-3 py-2 text-sm font-medium text-ink-soft"
              >
                <Icons.check className="shrink-0 text-accent" size={15} />
                {item}
              </li>
            ))}
          </motion.ul>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24 }}
          >
            <a href="#projects" className="btn-primary">
              View My Work
              <Icons.arrowRight size={16} />
            </a>
            <a href={site.resumeUrl} className="btn-secondary">
              <Icons.download size={16} />
              Download Resume
            </a>
          </motion.div>

          <motion.div
            className="mt-7 flex flex-wrap items-center gap-3"
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <SocialLink href={site.github} label="GitHub" icon={Icons.github} />
            <SocialLink href={site.linkedin} label="LinkedIn" icon={Icons.linkedin} />
            <SocialLink href={site.whatsapp} label="WhatsApp" icon={Icons.whatsapp} />
            <SocialLink href={site.telegram} label="Telegram" icon={Icons.telegram} />
            <SocialLink href={`mailto:${site.email}`} label="Email" icon={Icons.mail} />
          </motion.div>
        </div>

        <motion.div
          className="relative min-w-0 float-soft"
          initial={reduceMotion ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.14 }}
        >
          <div className="relative overflow-hidden rounded-2xl border border-line shadow-[var(--shadow-lg)]">
            <div className="relative h-44 overflow-hidden sm:h-52">
              <Image
                src="/images/img3.png"
                alt="Enterprise WordPress platform work"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 560px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-code-bg via-code-bg/40 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 text-xs font-medium text-white/90">
                <span className="inline-flex items-center gap-1.5 rounded-md bg-black/45 px-2.5 py-1 backdrop-blur">
                  <Icons.layers size={12} />
                  Live platform systems
                </span>
              </div>
            </div>
            <HeroVisual reduceMotion={!!reduceMotion} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SocialLink({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: typeof Icons.github;
}) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-md border border-line bg-surface px-3 py-2 text-sm font-medium text-muted transition-colors hover:border-accent hover:text-ink"
    >
      <Icon size={15} />
      {label}
    </a>
  );
}

function HeroVisual({ reduceMotion }: { reduceMotion: boolean }) {
  return (
    <div className="bg-surface">
      <div className="flex items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.14em] text-muted">
          platform.architect.ts
        </p>
      </div>

      <pre className="overflow-x-auto bg-code-bg px-5 py-4 font-mono text-[0.78rem] leading-7 text-code-ink md:text-[0.82rem]">
        <code>
          {codeLines.map((line, index) => (
            <motion.div
              key={index}
              initial={reduceMotion ? false : { opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.35 + index * 0.08, duration: 0.35 }}
            >
              {line.map((part, partIndex) => (
                <span key={partIndex} className={part.color}>
                  {part.text}
                </span>
              ))}
            </motion.div>
          ))}
          <span className="code-caret text-sky-300">▌</span>
        </code>
      </pre>

      <div className="relative min-h-[200px] border-t border-line hero-orbit p-5">
        <p className="mb-3 flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.16em] text-muted">
          <Icons.zap size={12} className="text-accent" />
          WordPress + AI ecosystem
        </p>
        <div className="relative h-[150px]">
          <svg className="absolute inset-0 h-full w-full" aria-hidden>
            <line
              x1="22%"
              y1="34%"
              x2="48%"
              y2="24%"
              className="flow-pulse stroke-[color:var(--accent)]"
              strokeWidth="1.25"
            />
            <line
              x1="55%"
              y1="24%"
              x2="78%"
              y2="36%"
              className="flow-pulse stroke-[color:var(--accent)]"
              strokeWidth="1.25"
              style={{ animationDelay: "0.4s" }}
            />
            <line
              x1="22%"
              y1="40%"
              x2="24%"
              y2="68%"
              className="flow-pulse stroke-[color:var(--line-strong)]"
              strokeWidth="1.25"
              style={{ animationDelay: "0.8s" }}
            />
            <line
              x1="52%"
              y1="30%"
              x2="52%"
              y2="74%"
              className="flow-pulse stroke-[color:var(--line-strong)]"
              strokeWidth="1.25"
              style={{ animationDelay: "1.1s" }}
            />
            <line
              x1="78%"
              y1="42%"
              x2="78%"
              y2="64%"
              className="flow-pulse stroke-[color:var(--line-strong)]"
              strokeWidth="1.25"
              style={{ animationDelay: "1.4s" }}
            />
          </svg>
          {ecosystem.map((node, index) => {
            const Icon = node.icon;
            return (
              <motion.div
                key={node.label}
                className="absolute -translate-x-1/2 -translate-y-1/2 inline-flex items-center gap-1.5 rounded-md border border-line bg-surface px-2.5 py-1.5 text-[0.68rem] font-medium text-ink-soft shadow-sm"
                style={{ left: node.x, top: node.y }}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.07, duration: 0.35 }}
              >
                <Icon size={12} className="text-accent" />
                {node.label}
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
