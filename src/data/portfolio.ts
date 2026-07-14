export const site = {
  name: "Clifford Klent Sayson",
  shortName: "Clifford Sayson",
  role: "Senior Full Stack WordPress Developer | AI-Powered Web Platform Engineer | Custom Plugin Architect",
  headline:
    "Building Scalable WordPress Platforms, AI-Powered Automation Systems, and Custom Web Solutions",
  subheadline:
    "Full Stack WordPress Developer with 6+ years of experience building enterprise platforms, custom plugins, AI-powered content systems, identity verification workflows, and API-driven business applications.",
  positioning:
    "I don't just build WordPress websites. I engineer scalable platforms, automation systems, AI-powered solutions, and custom business applications.",
  location: "Philippines",
  locationDetail: "Pagadian City, Zamboanga del Sur, Philippines",
  email: "cliffordsayson68@gmail.com",
  phone: "+639700448723",
  phoneDisplay: "+63 970 044 8723",
  whatsapp: "https://wa.me/639477571921",
  whatsappDisplay: "+63 947 757 1921",
  telegram: "https://t.me/Bearman_TG",
  telegramHandle: "@Bearman_TG",
  github: "https://github.com/netizen178",
  linkedin: "https://www.linkedin.com/in/clifford-sayson-129b81420",
  resumeUrl: "/resume",
} as const;

export const highlights = [
  "Custom WordPress Development",
  "AI Automation",
  "Enterprise Integrations",
  "Full Stack Engineering",
  "Plugin Architecture",
] as const;

export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#expertise", label: "Expertise" },
  { href: "#projects", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#architecture", label: "Architecture" },
  { href: "#insights", label: "Insights" },
  { href: "#contact", label: "Contact" },
] as const;

export const about = {
  lead: "Most developers use WordPress to create websites. Clifford uses WordPress as a foundation to build platforms.",
  paragraphs: [
    "With 6+ years building WordPress solutions for enterprise clients, I design systems that outgrow the plugin marketplace — multi-tenant architectures, custom admin experiences, and workflow automation that maps directly to how businesses operate.",
    "My work spans AI-powered content systems, identity verification pipelines, financial data synchronization, and analytics platforms. I focus on business impact: less manual work, faster onboarding, safer transactions, and infrastructure that scales with the product.",
    "Whether you need a custom plugin architect, a full-stack engineer for API-heavy platforms, or a partner who can turn WordPress into a real application layer — I build beyond existing plugins.",
  ],
  focus: [
    {
      icon: "platforms",
      label: "Enterprise platforms",
      detail: "Multi-tenant WordPress systems with centralized control",
    },
    {
      icon: "plugins",
      label: "Custom plugins",
      detail: "Purpose-built features that replace fragile plugin stacks",
    },
    {
      icon: "ai",
      label: "AI automation",
      detail: "Content and workflow systems that ship at scale",
    },
    {
      icon: "api",
      label: "API orchestration",
      detail: "Secure integrations across CRM, KYC, and analytics",
    },
  ],
} as const;

export const skillCategories = [
  {
    id: "wordpress",
    title: "WordPress Engineering",
    description: "Platform architecture, themes, and plugin systems built for long-term ownership.",
    items: [
      "Custom Theme Development",
      "Custom Plugin Development",
      "Gutenberg Blocks",
      "WordPress Multisite",
      "Multi-tenant Architecture",
      "WooCommerce",
      "Gravity Forms",
      "Genesis Framework",
      "WP Engine",
    ],
  },
  {
    id: "fullstack",
    title: "Full Stack Development",
    description: "Modern frontend and solid backend foundations for product-grade experiences.",
    groups: [
      {
        label: "Frontend",
        items: ["JavaScript", "TypeScript", "React", "HTML5", "CSS3"],
      },
      {
        label: "Backend",
        items: ["PHP", "MySQL", "REST APIs"],
      },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    description: "Intelligent pipelines that turn content and operations into automated systems.",
    items: [
      "AI-powered WordPress Plugins",
      "SEO Content Generation Systems",
      "Workflow Automation",
      "Data Processing",
      "Business Intelligence",
    ],
  },
  {
    id: "integrations",
    title: "Enterprise Integrations",
    description: "Reliable orchestration across CRMs, KYC providers, analytics, and messaging.",
    items: [
      "HubSpot API",
      "Persona API",
      "IDology API",
      "FastTrack API",
      "Looker API",
      "AfterShip API",
      "Slack API",
      "Google Analytics",
    ],
  },
] as const;

export const projects = [
  {
    id: "multi-tenant",
    name: "Enterprise Multi-Tenant WordPress Platform",
    image: "/images/img3.png",
    summary:
      "A scalable WordPress platform supporting enterprise clients with centralized administration and customized content delivery.",
    problem:
      "Enterprise teams were maintaining fragmented WordPress installations, creating inconsistent content delivery and heavy operational overhead.",
    challenge:
      "Deliver tenant-specific experiences from a single platform without sacrificing performance, security, or editorial control.",
    solution:
      "Architected a Multisite-based platform with custom plugins, a centralized admin dashboard, and optimized data access patterns for tenant-aware content.",
    architecture: [
      "WordPress Multisite",
      "Custom Plugins",
      "Custom Admin Dashboard",
      "Database Optimization",
    ],
    technologies: ["WordPress Multisite", "PHP", "MySQL", "Custom Plugins", "REST APIs"],
    impact: [
      "Reduced maintenance overhead across enterprise clients",
      "Improved content management with centralized administration",
      "Enabled scalable enterprise deployments from one foundation",
    ],
  },
  {
    id: "ai-seo",
    name: "AI-Powered SEO Landing Page Generator",
    image: "/images/img1.png",
    summary:
      "An AI-powered WordPress plugin that automatically generated hundreds of SEO-optimized local landing pages.",
    problem:
      "Manual creation of local SEO landing pages could not keep pace with geographic expansion goals.",
    challenge:
      "Produce unique, search-ready pages at scale while remaining editable and governed inside WordPress.",
    solution:
      "Built a plugin that orchestrates AI content generation, SEO structure, and WordPress publishing into a repeatable workflow.",
    architecture: [
      "AI automation layer",
      "Content generation workflow",
      "SEO optimization templates",
      "WordPress plugin architecture",
    ],
    technologies: ["WordPress", "PHP", "AI APIs", "JavaScript", "MySQL"],
    impact: [
      "Reduced manual content creation dramatically",
      "Enabled large-scale SEO expansion without proportional headcount",
    ],
  },
  {
    id: "identity",
    name: "Identity Verification Platform",
    image: "/images/img2.png",
    summary:
      "An identity verification workflow integrating HubSpot, Persona, and IDology into a secure customer onboarding path.",
    problem:
      "Customer verification before financial applications was fragmented across tools and slowed onboarding.",
    challenge:
      "Orchestrate multiple KYC providers with CRM state, secure data handling, and clear verification outcomes.",
    solution:
      "Designed an API orchestration layer that routes applicants through Persona/IDology and syncs verified status back into HubSpot.",
    architecture: [
      "API orchestration",
      "Customer verification workflow",
      "Secure data processing",
      "CRM status sync",
    ],
    technologies: ["HubSpot API", "Persona API", "IDology API", "PHP", "REST APIs"],
    impact: [
      "Automated customer verification end-to-end",
      "Improved onboarding speed and operational clarity",
    ],
  },
  {
    id: "real-estate",
    name: "Real Estate Listings & Agent Platform",
    image: "/images/img4.png",
    summary:
      "A responsive WordPress real estate platform connecting property search, local offices, and agent discovery in one streamlined experience.",
    problem:
      "Property buyers needed a faster way to search listings and connect with the right local agent across multiple service areas.",
    challenge:
      "Unify dynamic property filters, location-specific office information, and agent profiles while keeping content simple for staff to manage.",
    solution:
      "Built a custom WordPress experience with structured listing search, reusable location content, responsive agent profiles, and clear conversion paths.",
    architecture: [
      "Custom WordPress theme",
      "Property search and filters",
      "Location content modules",
      "Agent profile system",
    ],
    technologies: [
      "WordPress",
      "PHP",
      "JavaScript",
      "MySQL",
      "Custom Theme Development",
    ],
    impact: [
      "Made property discovery faster across multiple markets",
      "Improved visibility and lead routing for local agents",
      "Simplified ongoing listing and office content management",
    ],
  },
  {
    id: "fintech-sync",
    name: "Financial Data Synchronization Platform",
    image: "/images/img5.png",
    summary:
      "A real-time financial data synchronization system powered by the FastTrack API.",
    problem:
      "Financial documents and transaction data lived in disconnected systems, creating delays and reconciliation risk.",
    challenge:
      "Keep financial records synchronized in near real time while handling document processing reliably.",
    solution:
      "Implemented an API-driven sync engine that ingests FastTrack data, processes documents, and keeps downstream systems current.",
    architecture: [
      "API integration",
      "Data synchronization",
      "Document processing",
      "Status monitoring",
    ],
    technologies: ["FastTrack API", "PHP", "REST APIs", "MySQL"],
    impact: [
      "Improved data freshness across financial workflows",
      "Reduced manual reconciliation effort",
    ],
  },
  {
    id: "woo-analytics",
    name: "WooCommerce Analytics Platform",
    image: "/images/img6.png",
    summary:
      "Advanced subscription analytics beyond native WooCommerce reporting for retention-focused teams.",
    problem:
      "Native WooCommerce reporting lacked the retention and behavior insights needed for subscription growth decisions.",
    challenge:
      "Model customer behavior and retention metrics without disrupting existing commerce operations.",
    solution:
      "Built analytics layers that track customer behavior, subscription retention, and business insight surfaces for operators.",
    architecture: [
      "Customer behavior tracking",
      "Retention metrics",
      "Business insights dashboards",
      "WooCommerce extension layer",
    ],
    technologies: ["WooCommerce", "PHP", "MySQL", "JavaScript", "Looker API"],
    impact: [
      "Gave teams retention visibility beyond stock reports",
      "Supported healthier subscription decision-making",
    ],
  },
] as const;

export const experience = [
  {
    title: "Full Stack / WordPress Developer",
    company: "Andela",
    period: "03/2025 – 03/2026",
    place: "New York, NY, USA (Remote)",
    highlights: [
      "Enterprise WordPress platforms",
      "AI plugins",
      "API integrations",
      "Security systems",
      "Healthcare scheduling integrations",
    ],
    points: [
      "Built scalable multi-tenant WordPress platforms with centralized administration for enterprise clients.",
      "Developed AI-powered plugins for SEO content generation and workflow automation.",
      "Architected identity, financial, and healthcare integrations across HubSpot, Persona, IDology, and related APIs.",
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Turing",
    period: "11/2023 – 02/2025",
    place: "Boca Raton, Florida, USA",
    highlights: [
      "Custom WordPress development",
      "Gutenberg architecture",
      "WP Engine optimization",
      "SEO integrations",
    ],
    points: [
      "Shipped fully custom WordPress experiences with responsive, brand-aligned architecture.",
      "Designed reusable Gutenberg blocks and modular templates that cut content management effort.",
      "Optimized WP Engine hosting with CDN, caching, and security best practices.",
    ],
  },
  {
    title: "Web Developer",
    company: "Spectral Technologies Inc",
    period: "02/2020 – 05/2023",
    place: "Melbourne, Australia",
    highlights: [
      "Custom themes",
      "Custom plugins",
      "Client solutions",
      "Genesis Framework",
    ],
    points: [
      "Delivered custom WordPress websites and applications for international clients.",
      "Converted design systems into high-performance themes and extended platforms with custom plugins.",
      "Built business-specific solutions beyond off-the-shelf plugin capabilities.",
    ],
  },
] as const;

export const education = {
  degree: "Bachelor of Science, Computer Engineering",
  school: "Southern Mindanao Colleges",
  period: "06/2016 – 03/2020",
} as const;

export const architectures = [
  {
    id: "wordpress-platform",
    title: "WordPress Platform Architecture",
    description:
      "How enterprise WordPress systems layer presentation, core, plugins, APIs, and data.",
    why: "Shows how Clifford designs scalable platforms instead of one-off brochure sites — with clear boundaries between UI, core, custom logic, integrations, and data.",
    outcome: "Reliable multi-tenant delivery with centralized control and cleaner long-term ownership.",
    steps: ["Frontend", "WordPress Core", "Custom Plugins", "External APIs", "Database"],
  },
  {
    id: "ai-pipeline",
    title: "AI Content Automation Pipeline",
    description: "From structured inputs to published SEO pages with measurable outcomes.",
    why: "Explains how AI is used as a production system: input → generation → publishing → measurement — not a one-click demo.",
    outcome: "Hundreds of SEO pages shipped with less manual content work and stronger editorial control.",
    steps: [
      "Input Data",
      "AI Processing",
      "SEO Content Generation",
      "WordPress Publishing",
      "Analytics",
    ],
  },
  {
    id: "identity-flow",
    title: "Identity Verification Flow",
    description: "API orchestration across CRM and KYC providers for secure onboarding.",
    why: "Clarifies why custom orchestration matters when HubSpot, Persona, and IDology must move as one secure workflow.",
    outcome: "Faster customer verification and cleaner CRM state for finance-ready onboarding.",
    steps: [
      "User Application",
      "HubSpot",
      "Persona / IDology",
      "Verification Result",
      "CRM Update",
    ],
  },
] as const;

export const articles = [
  {
    title: "Building Enterprise WordPress Platforms",
    excerpt:
      "How to move from brochure sites to multi-tenant platforms with governance, performance, and owner-friendly administration.",
    topic: "Architecture",
    icon: "architecture",
  },
  {
    title: "When Custom Plugins Beat Plugin Stacks",
    excerpt:
      "Decision criteria for replacing brittle third-party stacks with purpose-built WordPress plugins.",
    topic: "Engineering",
    icon: "plugins",
  },
  {
    title: "Automating SEO with AI and WordPress",
    excerpt:
      "Designing generation workflows that stay unique, editorial, and technically optimized for search.",
    topic: "AI",
    icon: "ai",
  },
  {
    title: "Designing Scalable WordPress Architectures",
    excerpt:
      "Patterns for Multisite, tenancy boundaries, caching, and database decisions that survive growth.",
    topic: "Architecture",
    icon: "scale",
  },
  {
    title: "Integrating External APIs into WordPress",
    excerpt:
      "Reliable orchestration patterns for CRM, KYC, analytics, and messaging systems inside WordPress.",
    topic: "Integrations",
    icon: "api",
  },
  {
    title: "Securing Enterprise WordPress Deployments",
    excerpt:
      "Hardening patterns for authentication, data handling, plugin boundaries, and compliance-ready production environments.",
    topic: "Security",
    icon: "security",
  },
] as const;
