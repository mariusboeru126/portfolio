import type { IconType } from "react-icons";
import {
  FiArrowDownRight,
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiBox,
  FiBriefcase,
  FiCheck,
  FiCode,
  FiCpu,
  FiDatabase,
  FiDownload,
  FiGithub,
  FiGrid,
  FiLayers,
  FiLinkedin,
  FiMail,
  FiMapPin,
  FiMoon,
  FiLink2,
  FiServer,
  FiShield,
  FiSun,
  FiZap,
} from "react-icons/fi";
import { SiWordpress, SiWhatsapp, SiTelegram } from "react-icons/si";

export const Icons = {
  check: FiCheck,
  code: FiCode,
  cpu: FiCpu,
  database: FiDatabase,
  download: FiDownload,
  github: FiGithub,
  grid: FiGrid,
  layers: FiLayers,
  linkedin: FiLinkedin,
  mail: FiMail,
  mapPin: FiMapPin,
  moon: FiMoon,
  plug: FiLink2,
  server: FiServer,
  shield: FiShield,
  sun: FiSun,
  whatsapp: SiWhatsapp,
  telegram: SiTelegram,
  zap: FiZap,
  award: FiAward,
  book: FiBookOpen,
  briefcase: FiBriefcase,
  arrowRight: FiArrowRight,
  arrowDownRight: FiArrowDownRight,
  wordpress: SiWordpress,
  box: FiBox,
} as const;

export const focusIcons: Record<string, IconType> = {
  platforms: FiLayers,
  plugins: FiBox,
  ai: FiCpu,
  api: FiLink2,
};

export const articleIcons: Record<string, IconType> = {
  architecture: FiServer,
  plugins: FiBox,
  ai: FiCpu,
  scale: FiLayers,
  api: FiLink2,
  security: FiShield,
};

export const skillTabIcons: Record<string, IconType> = {
  wordpress: SiWordpress,
  fullstack: FiCode,
  ai: FiCpu,
  integrations: FiLink2,
};

export const architectureIcons: Record<string, IconType> = {
  "wordpress-platform": SiWordpress,
  "ai-pipeline": FiCpu,
  "identity-flow": FiShield,
};
