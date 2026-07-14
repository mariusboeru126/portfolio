"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { IconType } from "react-icons";
import {
  FiBox,
  FiCheck,
  FiCode,
  FiCpu,
  FiDatabase,
  FiGrid,
  FiLink2,
  FiShield,
  FiUser,
} from "react-icons/fi";
import { SiWordpress } from "react-icons/si";
import { architectures } from "@/data/portfolio";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { architectureIcons, Icons } from "@/lib/icons";

const stepIconSets: Record<string, IconType[]> = {
  "wordpress-platform": [FiUser, FiCode, SiWordpress, FiBox, FiLink2, FiDatabase],
  "ai-pipeline": [FiDatabase, FiCpu, FiGrid, SiWordpress, FiCode],
  "identity-flow": [FiUser, FiLink2, FiShield, FiCheck, FiDatabase],
};

const flowColors: Record<string, string> = {
  "wordpress-platform": "#7dd3fc",
  "ai-pipeline": "#5eead4",
  "identity-flow": "#fde047",
};

function FlowConnector({
  color,
  delay = 0,
  reduceMotion,
}: {
  color: string;
  delay?: number;
  reduceMotion: boolean | null;
}) {
  return (
    <div
      className="grid h-8 w-full shrink-0 place-items-center"
      aria-hidden
    >
      <div
        className="relative h-full min-h-8 w-[2px] overflow-hidden rounded-full"
        style={{ backgroundColor: `${color}80` }}
      >
        {!reduceMotion ? (
          <motion.span
            className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full"
            style={{ backgroundColor: color }}
            animate={{ top: ["-10%", "110%"], opacity: [0.25, 1, 0.25] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay,
            }}
          />
        ) : null}
      </div>
    </div>
  );
}

export function Architecture() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="architecture" className="section-pad section-alt section-frame">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Engineering Architecture"
            title="How production systems are wired"
            description="These diagrams explain why Clifford ships platforms that scale: every flow shows request path, ownership boundaries, and the business outcome of that design."
          />
        </Reveal>

        <Reveal
          delay={0.06}
          className="mt-6 max-w-3xl rounded-xl border border-line bg-surface/70 p-4 text-sm leading-relaxed text-muted md:p-5"
        >
          <p className="inline-flex items-center gap-2 font-medium text-ink">
            <Icons.zap size={14} className="text-accent" />
            Why this section matters
          </p>
          <p className="mt-2">
            Recruiters and founders can see system thinking immediately — multi-tenant
            WordPress stack, AI content pipeline, and KYC orchestration — instead of a
            flat list of tools. Each board is a real delivery pattern used across
            Clifford&apos;s enterprise work.
          </p>
        </Reveal>

        <Stagger className="mt-10 grid items-stretch gap-6 lg:grid-cols-3 lg:[grid-template-rows:auto_auto_1fr_auto]">
          {architectures.map((flow) => {
            const HeaderIcon = architectureIcons[flow.id] ?? Icons.server;
            const stepIcons = stepIconSets[flow.id] ?? [];
            const color = flowColors[flow.id] ?? "#93c5fd";

            return (
              <StaggerItem
                key={flow.id}
                className="interactive-card flex h-full flex-col gap-5 rounded-2xl bg-canvas p-5 md:p-6 lg:grid lg:grid-rows-subgrid lg:row-span-4 lg:gap-5"
              >
                <div className="flex items-start gap-3">
                  <span
                    className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border"
                    style={{
                      color,
                      background: `${color}28`,
                      borderColor: `${color}88`,
                    }}
                  >
                    <HeaderIcon size={18} />
                  </span>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {flow.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted">{flow.description}</p>
                  </div>
                </div>

                <p className="rounded-lg border border-line bg-surface/80 p-3 text-sm leading-relaxed text-ink-soft">
                  <span className="font-semibold text-ink">Purpose: </span>
                  {flow.why}
                </p>

                <ol className="flex flex-col">
                  {flow.steps.map((step, index) => {
                    const StepIcon = stepIcons[index] ?? Icons.code;
                    const isLast = index === flow.steps.length - 1;

                    return (
                      <li key={step} className="flex flex-col items-stretch">
                        <motion.div
                          className="relative flex items-center gap-3 overflow-hidden rounded-lg border border-line bg-surface px-3 py-2.5 text-sm font-medium text-ink"
                          initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.5 }}
                          transition={{ delay: index * 0.08, duration: 0.4 }}
                          whileHover={
                            reduceMotion
                              ? undefined
                              : {
                                  borderColor: color,
                                  boxShadow: `0 0 0 3px ${color}33`,
                                }
                          }
                        >
                          <span
                            className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                            style={{ background: `${color}2e`, color }}
                          >
                            <StepIcon size={14} />
                          </span>
                          <span>{step}</span>
                        </motion.div>

                        {!isLast ? (
                          <FlowConnector
                            color={color}
                            delay={index * 0.15}
                            reduceMotion={reduceMotion}
                          />
                        ) : null}
                      </li>
                    );
                  })}
                </ol>

                <div
                  className="rounded-xl border p-3 text-sm leading-relaxed text-ink"
                  style={{
                    borderColor: `${color}99`,
                    background: `${color}1f`,
                  }}
                >
                  <p
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em]"
                    style={{ color }}
                  >
                    <Icons.award size={12} />
                    Business outcome
                  </p>
                  <p className="mt-2 text-ink-soft">{flow.outcome}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
