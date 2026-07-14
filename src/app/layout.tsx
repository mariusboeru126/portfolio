import type { Metadata } from "next";
import { IBM_Plex_Mono, Outfit, Space_Grotesk } from "next/font/google";
import { JsonLd } from "@/components/JsonLd";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const themeInitScript = `(function(){try{var t=localStorage.getItem('theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;var v=t==='dark'||(t!=='light'&&d);if(v)document.documentElement.classList.add('dark');}catch(e){}})();`;

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cliffordsayson.dev"),
  title: {
    default:
      "Clifford Klent Sayson | Senior Full Stack WordPress Developer & Platform Engineer",
    template: "%s | Clifford Klent Sayson",
  },
  description:
    "Senior Full Stack WordPress Developer engineering scalable platforms, custom plugins, AI-powered automation, and enterprise API integrations. 6+ years building production systems.",
  keywords: [
    "WordPress Developer",
    "Full Stack Developer",
    "Custom WordPress Plugins",
    "AI WordPress",
    "Enterprise WordPress",
    "API Integration",
    "WooCommerce",
    "Multisite",
    "Clifford Sayson",
  ],
  authors: [{ name: "Clifford Klent Sayson" }],
  creator: "Clifford Klent Sayson",
  openGraph: {
    title:
      "Clifford Klent Sayson | Senior Full Stack WordPress Developer & Platform Engineer",
    description:
      "I don't just build WordPress websites. I engineer scalable platforms, automation systems, AI-powered solutions, and custom business applications.",
    type: "website",
    locale: "en_US",
    siteName: "Clifford Klent Sayson",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clifford Klent Sayson | Platform Engineer",
    description:
      "Scalable WordPress platforms, AI automation, and enterprise integrations.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${spaceGrotesk.variable} ${plexMono.variable} h-full`}
      suppressHydrationWarning
    >
      <body className="min-h-full antialiased">
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <JsonLd />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
