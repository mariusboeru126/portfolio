"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { skillCategories } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillChip } from "@/components/SkillChip";
import { categoryTones, getSkillTone } from "@/lib/skillMeta";

type SkillCategory = (typeof skillCategories)[number];
type SkillCategoryId = SkillCategory["id"];

function hasGroups(
  category: SkillCategory,
): category is SkillCategory & {
  groups: ReadonlyArray<{ label: string; items: readonly string[] }>;
} {
  return "groups" in category && Array.isArray(category.groups);
}

export function Expertise() {
  const [activeId, setActiveId] = useState<SkillCategoryId>(skillCategories[0].id);
  const active =
    skillCategories.find((category) => category.id === activeId) ??
    skillCategories[0];
  const activeTone = categoryTones[active.id] ?? categoryTones.wordpress;
  const ActiveIcon = activeTone.icon;

  return (
    <section id="expertise" className="section-pad section-alt section-frame">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Technical Expertise"
            title="Engineering depth across the WordPress platform stack"
            description="Interactive skill map covering WordPress architecture, full-stack delivery, AI automation, and enterprise integrations."
          />
        </Reveal>

        <Reveal delay={0.08} className="mt-10">
          <div
            role="tablist"
            aria-label="Skill categories"
            className="flex flex-wrap gap-2"
          >
            {skillCategories.map((category) => {
              const selected = category.id === activeId;
              const tone = categoryTones[category.id] ?? categoryTones.wordpress;
              const Icon = tone.icon;
              return (
                <button
                  key={category.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  id={`skill-tab-${category.id}`}
                  onClick={() => setActiveId(category.id)}
                  className="btn-tab"
                  style={
                    selected
                      ? {
                          background: tone.color,
                          color: "#071018",
                          borderColor: tone.color,
                          boxShadow: `0 0 0 3px ${tone.soft}`,
                        }
                      : undefined
                  }
                >
                  <Icon size={15} style={{ color: selected ? "#071018" : tone.color }} />
                  {category.title}
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              role="tabpanel"
              aria-labelledby={`skill-tab-${active.id}`}
              className="mt-6 rounded-2xl border bg-surface p-6 shadow-[var(--shadow)] md:p-8"
              style={{
                borderColor: activeTone.border,
                boxShadow: `0 18px 40px rgba(0,0,0,0.12), inset 0 0 0 1px ${activeTone.soft}`,
              }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28 }}
            >
              <div className="flex items-start gap-4">
                <span
                  className="inline-flex h-11 w-11 items-center justify-center rounded-xl border"
                  style={{
                    color: activeTone.color,
                    background: activeTone.soft,
                    borderColor: activeTone.border,
                  }}
                >
                  <ActiveIcon size={20} />
                </span>
                <div>
                  <p className="font-display text-2xl font-semibold text-ink">
                    {active.title}
                  </p>
                  <p className="mt-2 max-w-2xl text-muted">{active.description}</p>
                </div>
              </div>

              {hasGroups(active) ? (
                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  {active.groups.map((group) => (
                    <div key={group.label}>
                      <p
                        className="text-xs font-semibold uppercase tracking-[0.14em]"
                        style={{ color: activeTone.color }}
                      >
                        {group.label}
                      </p>
                      <ul className="mt-4 flex flex-wrap gap-2.5">
                        {group.items.map((item) => {
                          const tone = getSkillTone(item);
                          return (
                            <li key={item} className="flex">
                              <SkillChip
                                label={item}
                                icon={tone.icon}
                                color={tone.color}
                                soft={tone.soft}
                                border={tone.border}
                              />
                            </li>
                          );
                        })}
                      </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="mt-8 flex flex-wrap gap-2.5">
                {"items" in active &&
                  active.items.map((item) => {
                    const tone = getSkillTone(item);
                    return (
                      <li key={item} className="flex">
                        <SkillChip
                          label={item}
                          icon={tone.icon}
                          color={tone.color}
                          soft={tone.soft}
                          border={tone.border}
                        />
                      </li>
                    );
                  })}
              </ul>
              )}
            </motion.div>
          </AnimatePresence>
        </Reveal>
      </div>
    </section>
  );
}
