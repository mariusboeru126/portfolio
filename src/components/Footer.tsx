import { site } from "@/data/portfolio";
import { Icons } from "@/lib/icons";

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="section-shell flex flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p className="inline-flex items-center gap-2">
          <Icons.wordpress className="text-accent" size={14} />
          Designed &amp; engineered by{" "}
          <span className="font-medium text-ink">{site.name}</span>
        </p>
        <div className="flex items-center gap-4">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-ink"
          >
            <Icons.github size={16} />
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-ink"
          >
            <Icons.linkedin size={16} />
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="transition-colors hover:text-ink"
          >
            <Icons.whatsapp size={16} />
          </a>
          <a
            href={site.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="transition-colors hover:text-ink"
          >
            <Icons.telegram size={16} />
          </a>
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="transition-colors hover:text-ink"
          >
            <Icons.mail size={16} />
          </a>
          <span>
            {site.location} · {new Date().getFullYear()}
          </span>
        </div>
      </div>
    </footer>
  );
}
