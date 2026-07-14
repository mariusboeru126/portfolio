"use client";

import { useEffect, useState } from "react";
import { navLinks, site } from "@/data/portfolio";
import { useTheme } from "@/components/ThemeProvider";
import { Icons } from "@/lib/icons";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line bg-[var(--header-bg)] backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="section-shell flex h-16 items-center justify-between gap-4 md:h-[4.25rem]">
        <a
          href="#home"
          className="inline-flex min-w-0 items-center gap-2 font-display text-base font-semibold tracking-tight text-ink md:text-lg"
          onClick={() => setOpen(false)}
        >
          <span className="icon-chip h-8 w-8">
            <Icons.wordpress size={14} />
          </span>
          <span className="truncate">{site.shortName}</span>
        </a>

        <nav className="hidden items-center gap-6 xl:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.78rem] font-medium uppercase tracking-[0.12em] text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-muted transition-colors hover:border-line-strong hover:text-ink"
          >
            {theme === "dark" ? <Icons.sun size={16} /> : <Icons.moon size={16} />}
          </button>
          <a href="#contact" className="btn-primary px-4 py-2 text-[0.78rem] uppercase tracking-[0.1em]">
            <Icons.mail size={14} />
            Contact
          </a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-muted"
          >
            {theme === "dark" ? <Icons.sun size={16} /> : <Icons.moon size={16} />}
          </button>
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="relative z-50 flex h-10 w-10 items-center justify-center"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex w-5 flex-col gap-1.5">
              <span
                className={`block h-0.5 w-full bg-ink transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span className={`block h-0.5 w-full bg-ink transition ${open ? "opacity-0" : ""}`} />
              <span
                className={`block h-0.5 w-full bg-ink transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </span>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        } absolute inset-x-0 top-16 border-b border-line bg-[var(--header-bg)] backdrop-blur-xl transition-opacity`}
      >
        <nav className="section-shell flex flex-col gap-1 py-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 text-sm font-medium uppercase tracking-[0.12em] text-ink-soft"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary mt-2 mb-2 w-fit px-4 py-2.5 text-sm uppercase tracking-[0.1em]"
            onClick={() => setOpen(false)}
          >
            <Icons.mail size={14} />
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
