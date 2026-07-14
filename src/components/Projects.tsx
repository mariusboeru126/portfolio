"use client";

import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useId, useState } from "react";
import { createPortal } from "react-dom";
import { projects } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { Icons } from "@/lib/icons";

type Project = (typeof projects)[number];
type ProjectId = Project["id"];

export function Projects() {
  const [activeId, setActiveId] = useState<ProjectId | null>(null);
  const [mounted, setMounted] = useState(false);
  const active = projects.find((project) => project.id === activeId) ?? null;
  const titleId = useId();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!activeId) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [activeId]);

  const modal = mounted
    ? createPortal(
        <AnimatePresence mode="wait">
          {active ? (
            <ProjectModal
              key={active.id}
              project={active}
              index={projects.findIndex((item) => item.id === active.id)}
              titleId={titleId}
              onClose={() => setActiveId(null)}
            />
          ) : null}
        </AnimatePresence>,
        document.body,
      )
    : null;

  return (
    <section id="projects" className="section-pad section-frame">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Featured Projects"
            title="Production systems, not brochure sites"
            description="Case studies focused on problem framing, technical constraint, architecture, and business impact."
          />
        </Reveal>

        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <StaggerItem key={project.id} className="h-full">
              <ProjectCard
                project={project}
                index={index}
                onOpen={() => setActiveId(project.id)}
              />
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {modal}
    </section>
  );
}

function ProjectCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className="interactive-card group relative flex h-full w-full flex-col overflow-hidden rounded-2xl bg-surface text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-surface-muted">
        <Image
          src={project.image}
          alt={project.name}
          fill
          className="object-cover object-top transition-transform duration-700 ease-out will-change-transform group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-canvas/85 via-transparent to-transparent" />

        <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-white backdrop-blur">
          Case 0{index + 1}
        </div>

        <div className="absolute right-3 top-3 inline-flex h-9 w-9 translate-y-1 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white opacity-0 backdrop-blur transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <Icons.arrowRight size={15} />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-ink transition-colors group-hover:text-accent sm:text-xl">
            {project.name}
          </h3>
          <Icons.layers className="mt-1 shrink-0 text-accent" size={16} />
        </div>

        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted">
          {project.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-line bg-canvas px-2 py-1 text-[0.7rem] text-ink-soft"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 ? (
            <span className="rounded-md border border-line bg-canvas px-2 py-1 text-[0.7rem] text-muted">
              +{project.technologies.length - 3}
            </span>
          ) : null}
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-line pt-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted transition-colors group-hover:text-accent">
            <Icons.zap size={12} />
            Case study
          </span>
          <span className="inline-flex items-center gap-1 text-sm font-medium text-ink transition-transform duration-300 group-hover:translate-x-1">
            View details
            <Icons.arrowRight size={14} className="text-accent" />
          </span>
        </div>
      </div>
    </button>
  );
}

function ProjectModal({
  project,
  index,
  titleId,
  onClose,
}: {
  project: Project;
  index: number;
  titleId: string;
  onClose: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-end justify-center sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
    >
      <motion.button
        type="button"
        className="absolute inset-0 bg-black/70 backdrop-blur-md"
        aria-label="Close project details"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.article
        className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-t-2xl border border-line bg-surface shadow-[var(--shadow-lg)] sm:rounded-2xl"
        initial={
          reduceMotion
            ? { opacity: 1 }
            : { opacity: 0, y: 48 }
        }
        animate={{ opacity: 1, y: 0 }}
        exit={
          reduceMotion
            ? { opacity: 0 }
            : { opacity: 0, y: 32 }
        }
        transition={{ type: "spring", stiffness: 320, damping: 30 }}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative h-48 w-full shrink-0 sm:h-64 md:h-72">
          <Image
            src={project.image}
            alt={project.name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 896px) 100vw, 896px"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />

          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-full border border-line bg-surface/95 text-ink shadow-sm backdrop-blur transition-colors hover:border-accent hover:text-accent"
            aria-label="Close"
          >
            <span className="text-xl leading-none" aria-hidden>
              ×
            </span>
          </button>

          <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-7">
            <p className="inline-flex items-center gap-2 font-mono text-[0.68rem] uppercase tracking-[0.14em] text-accent">
              <Icons.layers size={12} />
              Case 0{index + 1} · Case Study
            </p>
            <h3
              id={titleId}
              className="mt-2 max-w-3xl font-display text-2xl font-semibold tracking-tight text-ink sm:text-3xl"
            >
              {project.name}
            </h3>
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-5 sm:p-7">
          <p className="text-base leading-relaxed text-muted">{project.summary}</p>

          <dl className="mt-7 grid gap-5 sm:grid-cols-2">
            <StudyBlock icon={Icons.zap} label="Problem" value={project.problem} />
            <StudyBlock
              icon={Icons.code}
              label="Technical Challenge"
              value={project.challenge}
            />
            <StudyBlock
              icon={Icons.server}
              label="Solution"
              value={project.solution}
              className="sm:col-span-2"
            />
          </dl>

          <div className="mt-7 grid gap-6 border-t border-line pt-6 sm:grid-cols-2">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                <Icons.grid size={12} />
                Architecture
              </p>
              <ul className="mt-3 space-y-2.5">
                {project.architecture.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                    <Icons.arrowRight size={12} className="text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
                <Icons.cpu size={12} />
                Technologies
              </p>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((item) => (
                  <li
                    key={item}
                    className="rounded-md border border-line bg-canvas px-2.5 py-1.5 text-xs text-ink-soft"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-7 rounded-xl border border-line bg-canvas p-5">
            <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
              <Icons.award size={12} />
              Business Impact
            </p>
            <ul className="mt-3 space-y-2.5">
              {project.impact.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-relaxed text-ink-soft">
                  <Icons.check className="mt-0.5 shrink-0 text-accent" size={14} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex shrink-0 items-center justify-between gap-3 border-t border-line bg-surface px-5 py-4 sm:px-7">
          <p className="hidden text-sm text-muted sm:block">
            Press Esc or click outside to close
          </p>
          <button type="button" onClick={onClose} className="btn-primary ml-auto">
            Close details
          </button>
        </div>
      </motion.article>
    </motion.div>
  );
}

function StudyBlock({
  label,
  value,
  icon: Icon,
  className = "",
}: {
  label: string;
  value: string;
  icon: typeof Icons.zap;
  className?: string;
}) {
  return (
    <div className={className}>
      <dt className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
        <Icon size={12} />
        {label}
      </dt>
      <dd className="mt-2 text-sm leading-relaxed text-ink-soft md:text-[0.95rem]">
        {value}
      </dd>
    </div>
  );
}
