import { site } from "@/data/portfolio";

export function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: "Senior Full Stack WordPress Developer",
    description: site.positioning,
    email: site.email,
    url: "https://cliffordsayson.dev",
    address: {
      "@type": "PostalAddress",
      addressCountry: "PH",
      addressLocality: "Philippines",
    },
    sameAs: [site.github, site.linkedin, site.telegram, site.whatsapp],
    knowsAbout: [
      "WordPress",
      "Custom Plugin Development",
      "Full Stack Development",
      "AI Automation",
      "API Integration",
      "WooCommerce",
      "PHP",
      "React",
      "TypeScript",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
