"use client";

import type { IconType } from "react-icons";
import {
  FiCode,
  FiCpu,
  FiDatabase,
  FiGrid,
  FiLayers,
  FiLink2,
  FiServer,
  FiShield,
  FiZap,
} from "react-icons/fi";
import {
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiReact,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import { Reveal, Stagger, StaggerItem } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillChip } from "@/components/SkillChip";
import { getSkillTone } from "@/lib/skillMeta";

type SkillGroup = {
  title: string;
  icon: IconType;
  accent: string;
  soft: string;
  skills: string[];
};

const skillGroups: SkillGroup[] = [
  {
    title: "WordPress Platform",
    icon: SiWordpress,
    accent: "#22d3ee",
    soft: "rgba(34, 211, 238, 0.38)",
    skills: [
      "Custom Plugins",
      "Themes",
      "Gutenberg",
      "Multisite",
      "WooCommerce",
      "WP Engine",
    ],
  },
  {
    title: "Full Stack",
    icon: FiCode,
    accent: "#22d3ee",
    soft: "rgba(34, 211, 238, 0.36)",
    skills: ["PHP", "MySQL", "JavaScript", "TypeScript", "React", "HTML/CSS"],
  },
  {
    title: "AI & Automation",
    icon: FiCpu,
    accent: "#2dd4bf",
    soft: "rgba(45, 212, 191, 0.38)",
    skills: ["AI Plugins", "SEO Systems", "Workflows", "Data Processing"],
  },
  {
    title: "Integrations",
    icon: FiLink2,
    accent: "#5eead4",
    soft: "rgba(94, 234, 212, 0.36)",
    skills: [
      "HubSpot",
      "Persona / KYC",
      "REST APIs",
      "Analytics",
      "FastTrack",
      "Looker",
    ],
  },
];

const extras = [
  "CSS3",
  "GitHub",
  "Gravity Forms",
  "Genesis",
  "AfterShip",
  "IDology",
  "Slack API",
];

const brandIcons: Record<string, IconType> = {
  PHP: SiPhp,
  MySQL: SiMysql,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  React: SiReact,
  "HTML/CSS": SiHtml5,
  GitHub: SiGithub,
  Gutenberg: SiWordpress,
  Themes: FiGrid,
  Multisite: FiServer,
  WooCommerce: FiZap,
  "WP Engine": FiShield,
  "Custom Plugins": FiLayers,
  "AI Plugins": FiCpu,
  "SEO Systems": FiZap,
  Workflows: FiLayers,
  "Data Processing": FiDatabase,
};

export function SkillSet() {
  return (
    <section id="skills" className="section-pad section-frame">
      <div className="section-shell">
        <Reveal>
          <SectionHeading
            eyebrow="Skill Set"
            title="Technologies I engineer with"
            description="A recruiter-friendly map of the platforms, languages, and integration systems I use to ship production WordPress solutions."
          />
        </Reveal>

        <Stagger className="mt-12 grid items-stretch gap-5 md:grid-cols-2">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <StaggerItem key={group.title} className="flex h-full">
                <div
                  className="interactive-card flex h-full w-full flex-col rounded-2xl bg-surface/90 p-5 md:p-6"
                  style={{
                    boxShadow: `inset 0 0 0 1.5px ${group.accent}88, 0 8px 28px -12px ${group.soft}`,
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl border"
                      style={{
                        color: group.accent,
                        background: group.soft,
                        borderColor: `${group.accent}cc`,
                        boxShadow: `0 0 18px -4px ${group.soft}`,
                      }}
                    >
                      <GroupIcon size={20} />
                    </span>
                    <h3 className="font-display text-xl font-semibold text-ink">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="mt-5 grid flex-1 content-start grid-cols-2 gap-2.5">
                    {group.skills.map((skill) => {
                      const tone = getSkillTone(skill);
                      const SkillIcon = brandIcons[skill] ?? tone.icon;
                      return (
                        <li key={skill} className="flex">
                          <SkillChip
                            label={skill}
                            icon={SkillIcon}
                            color={tone.color}
                            soft={tone.soft}
                            border={tone.border}
                            className="w-full"
                          />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>

        <Reveal delay={0.12} className="mt-6 flex flex-wrap gap-2.5">
          {extras.map((name) => {
            const tone = getSkillTone(name);
            const Icon = brandIcons[name] ?? tone.icon;
            return (
              <SkillChip
                key={name}
                label={name}
                icon={Icon}
                color={tone.color}
                soft={tone.soft}
                border={tone.border}
                size="sm"
              />
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
