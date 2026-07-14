import type { IconType } from "react-icons";
import {
  FiBox,
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
  SiCss,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiMysql,
  SiPhp,
  SiReact,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";

export type SkillTone = {
  icon: IconType;
  color: string;
  soft: string;
  border: string;
};

/** Bright, high-saturation tones for bold chip presentation */
const tones = {
  wordpress: {
    icon: SiWordpress,
    color: "#22d3ee",
    soft: "rgba(34, 211, 238, 0.38)",
    border: "rgba(34, 211, 238, 0.92)",
  },
  php: {
    icon: SiPhp,
    color: "#2dd4bf",
    soft: "rgba(45, 212, 191, 0.36)",
    border: "rgba(45, 212, 191, 0.9)",
  },
  js: {
    icon: SiJavascript,
    color: "#facc15",
    soft: "rgba(250, 204, 21, 0.4)",
    border: "rgba(250, 204, 21, 0.95)",
  },
  ts: {
    icon: SiTypescript,
    color: "#60a5fa",
    soft: "rgba(96, 165, 250, 0.38)",
    border: "rgba(96, 165, 250, 0.92)",
  },
  react: {
    icon: SiReact,
    color: "#22d3ee",
    soft: "rgba(34, 211, 238, 0.36)",
    border: "rgba(34, 211, 238, 0.9)",
  },
  mysql: {
    icon: SiMysql,
    color: "#34d399",
    soft: "rgba(52, 211, 153, 0.38)",
    border: "rgba(52, 211, 153, 0.92)",
  },
  html: {
    icon: SiHtml5,
    color: "#fb923c",
    soft: "rgba(251, 146, 60, 0.4)",
    border: "rgba(251, 146, 60, 0.94)",
  },
  css: {
    icon: SiCss,
    color: "#38bdf8",
    soft: "rgba(56, 189, 248, 0.38)",
    border: "rgba(56, 189, 248, 0.92)",
  },
  ai: {
    icon: FiCpu,
    color: "#2dd4bf",
    soft: "rgba(45, 212, 191, 0.38)",
    border: "rgba(45, 212, 191, 0.92)",
  },
  api: {
    icon: FiLink2,
    color: "#5eead4",
    soft: "rgba(94, 234, 212, 0.36)",
    border: "rgba(94, 234, 212, 0.9)",
  },
  security: {
    icon: FiShield,
    color: "#f87171",
    soft: "rgba(248, 113, 113, 0.38)",
    border: "rgba(248, 113, 113, 0.92)",
  },
  data: {
    icon: FiDatabase,
    color: "#4ade80",
    soft: "rgba(74, 222, 128, 0.38)",
    border: "rgba(74, 222, 128, 0.92)",
  },
  layers: {
    icon: FiLayers,
    color: "#60a5fa",
    soft: "rgba(96, 165, 250, 0.38)",
    border: "rgba(96, 165, 250, 0.92)",
  },
  server: {
    icon: FiServer,
    color: "#e2e8f0",
    soft: "rgba(226, 232, 240, 0.32)",
    border: "rgba(226, 232, 240, 0.82)",
  },
  zap: {
    icon: FiZap,
    color: "#fbbf24",
    soft: "rgba(251, 191, 36, 0.4)",
    border: "rgba(251, 191, 36, 0.95)",
  },
  grid: {
    icon: FiGrid,
    color: "#38bdf8",
    soft: "rgba(56, 189, 248, 0.38)",
    border: "rgba(56, 189, 248, 0.92)",
  },
  code: {
    icon: FiCode,
    color: "#22d3ee",
    soft: "rgba(34, 211, 238, 0.36)",
    border: "rgba(34, 211, 238, 0.9)",
  },
  box: {
    icon: FiBox,
    color: "#fb923c",
    soft: "rgba(251, 146, 60, 0.4)",
    border: "rgba(251, 146, 60, 0.94)",
  },
  github: {
    icon: SiGithub,
    color: "#f8fafc",
    soft: "rgba(248, 250, 252, 0.28)",
    border: "rgba(248, 250, 252, 0.78)",
  },
} as const satisfies Record<string, SkillTone>;

const skillMap: Record<string, SkillTone> = {
  "Custom Plugins": tones.box,
  "Custom Plugin Development": tones.box,
  Themes: tones.grid,
  "Custom Theme Development": tones.grid,
  Gutenberg: tones.wordpress,
  "Gutenberg Blocks": tones.wordpress,
  Multisite: tones.server,
  "WordPress Multisite": tones.server,
  WooCommerce: tones.zap,
  "WP Engine": tones.security,
  "Gravity Forms": tones.grid,
  "Genesis Framework": tones.wordpress,
  "Multi-tenant Architecture": tones.layers,
  PHP: tones.php,
  MySQL: tones.mysql,
  JavaScript: tones.js,
  TypeScript: tones.ts,
  React: tones.react,
  HTML5: tones.html,
  "HTML/CSS": tones.html,
  CSS3: tones.css,
  "AI Plugins": tones.ai,
  "AI-powered WordPress Plugins": tones.ai,
  "SEO Systems": tones.zap,
  "SEO Content Generation Systems": tones.zap,
  Workflows: tones.layers,
  "Workflow Automation": tones.layers,
  "Data Processing": tones.data,
  "Business Intelligence": tones.data,
  HubSpot: tones.api,
  "HubSpot API": tones.api,
  "Persona / KYC": tones.security,
  "Persona API": tones.security,
  "REST APIs": tones.code,
  Analytics: tones.grid,
  "Google Analytics": tones.grid,
  FastTrack: tones.zap,
  "FastTrack API": tones.zap,
  Looker: tones.data,
  "Looker API": tones.data,
  "AfterShip API": tones.api,
  "IDology API": tones.security,
  "Slack API": tones.api,
  GitHub: tones.github,
  Genesis: tones.wordpress,
  AfterShip: tones.api,
  IDology: tones.security,
};

const fallback: SkillTone = tones.code;

export function getSkillTone(name: string): SkillTone {
  return skillMap[name] ?? fallback;
}

export const categoryTones: Record<
  string,
  { color: string; soft: string; border: string; icon: IconType }
> = {
  wordpress: tones.wordpress,
  fullstack: tones.react,
  ai: tones.ai,
  integrations: tones.api,
};
