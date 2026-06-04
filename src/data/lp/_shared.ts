import type { ImageMetadata } from "astro";

// -----------------------------------------------------------------------------
// Shared types, defaults and icon library for Google Ads landing pages.
// One ad group = one campaign file in this directory, registered in
// ../lpCampaigns.ts. See that file for the public API the template consumes.
// Fields ending in `Html` are rendered with set:html (may contain <strong>,
// <span class="text-brand-500"> highlights, etc). All other strings are plain.
// -----------------------------------------------------------------------------

export interface LpImage {
  src: ImageMetadata;
  alt: string;
}
export interface ServiceCard {
  title: string;
  body: string;
  icon: string; // SVG path `d`
}
export interface Step {
  n: string;
  t: string;
  d: string;
}
export interface Stat {
  v: string;
  l: string;
}
export interface Faq {
  q: string;
  a: string;
}
export interface PainCard {
  t: string;
  d: string;
}
export interface WhyPoint {
  t: string;
  d: string;
}

export interface LpCampaign {
  // SEO / meta
  title: string;
  description: string;

  // Hero
  heroBadge: string;
  heroTitle: string; // plain leading line(s)
  heroTitleAccent: string; // gradient-highlighted line
  heroIntroHtml: string; // rich (may contain <strong>)
  heroChips: string[];
  heroImage: LpImage;
  heroImageCaption: string;

  certs: string[];

  // Director / quote
  directorQuoteHtml: string; // rich (contains <span class="text-brand-500"> highlight)
  directorName: string;
  directorTitle: string;
  directorPhoto: string; // public path
  directorPhotoAlt: string;

  // Pain
  painEyebrow: string;
  painTitleHtml: string; // rich (contains highlight span)
  painIntro: string;
  painCards: PainCard[];

  // Services
  servicesEyebrow: string;
  servicesTitle: string;
  servicesIntro: string;
  services: ServiceCard[];

  // Stats
  stats: Stat[];

  // Why us
  whyTitle: string;
  whyPoints: WhyPoint[];
  whyImages: LpImage[]; // exactly 3
  whyCalloutTitle: string;
  whyCalloutBody: string;

  // Process
  processTitle: string;
  steps: Step[];

  // FAQ
  faqs: Faq[];

  // Lead form
  leadEyebrow: string;
  leadTitle: string;
  leadIntro: string;
  leadBullets: string[];
  leadNoteHtml: string; // rich (contains <strong>)
  formServiceOptions: string[];
  formLocationOptions: string[];
}

// A campaign module exports one of these. The slug maps to /lp/<slug>.
export interface LpEntry {
  slug: string;
  campaign: LpCampaign;
}

// Shared defaults reused across campaigns (override per campaign as needed).
export const DEFAULT_LOCATIONS = [
  "Perth, WA",
  "Brisbane, QLD",
  "Sydney, NSW",
  "Melbourne, VIC",
  "Other (Australia)",
  "International",
];

// Shared director (same person across every campaign).
export const DIRECTOR = {
  name: "Aarti Sandhal",
  title: "Director · PT. Indo Energy Tekniko (Indonesia)",
  photo: "/team/aarti-sandhal.jpg",
  photoAlt: "Aarti Sandhal — Director, PT. Indo Energy Tekniko",
} as const;

// Icon path library (Heroicons-style 24x24 stroke paths).
export const ICONS = {
  bolt: "M13 10V3L4 14h7v7l9-11h-7z",
  check: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
  doc: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
  cube: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",
  grid: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10",
  book: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  layers: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2",
  pencil: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z",
  swap: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  users: "M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m6-1.13a4 4 0 10-4-4 4 4 0 004 4zm6 0a4 4 0 10-3-1.354",
  wrench:
    "M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z",
} as const;
