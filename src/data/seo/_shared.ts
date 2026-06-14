// -----------------------------------------------------------------------------
// Shared types, defaults and helpers for ORGANIC SEO pages under /nl/.
//
// These are distinct from the Google Ads landing pages in ../lp/: SEO pages are
// indexable (index, follow), included in the sitemap, carry full site nav +
// footer + internal links + JSON-LD, and target the Dutch organic market.
//
// One page = one file in this directory, registered in ../seoPages.ts.
// Base section types, the shared director and the icon library are reused from
// ../lp/_shared so the proven section design stays in one place.
//
// Fields ending in `Html` are rendered with set:html (may contain <strong>,
// <span class="text-brand-500"> highlights, etc). All other strings are plain.
// -----------------------------------------------------------------------------

import { DIRECTOR, ICONS } from "../lp/_shared";
import type {
  LpImage,
  ServiceCard,
  Step,
  Stat,
  Faq,
  PainCard,
  WhyPoint,
} from "../lp/_shared";

// Re-export the shared building blocks so SEO data files import from one place.
export { DIRECTOR, ICONS };
export type { LpImage, ServiceCard, Step, Stat, Faq, PainCard, WhyPoint };

export interface InfoCard {
  t: string;
  d: string;
}
export interface RelatedLink {
  slug: string; // sibling/pillar slug under /nl/
  label: string;
  blurb: string;
}

export interface SeoPage {
  // SEO / meta
  title: string; // <title> — keyword-rich, distinct from h1
  description: string; // meta description
  metaKeywords?: string;
  h1: string; // on-page H1 (visible hero headline)
  breadcrumbLabel: string; // last breadcrumb crumb
  serviceType: string; // for Service JSON-LD (e.g. "CAD Drafting Services")

  // Hero
  heroBadge: string;
  heroTitleAccent: string; // gradient-highlighted line shown under the H1
  heroIntroHtml: string; // rich (may contain <strong>)
  heroChips: string[];
  heroImage: LpImage;
  heroImageCaption: string;

  certs: string[];

  // Director / quote
  directorQuoteHtml: string; // rich
  directorName: string;
  directorTitle: string;
  directorPhoto: string; // public path
  directorPhotoAlt: string;

  // Pain (localized Dutch pain points)
  painEyebrow: string;
  painTitleHtml: string; // rich
  painIntro: string;
  painCards: PainCard[];

  // Services
  servicesEyebrow: string;
  servicesTitle: string;
  servicesIntro: string;
  services: ServiceCard[];

  // Stats
  stats: Stat[];

  // Standards & regulations (NEN/EN/ISO standards + regulatory frameworks)
  compliance: {
    eyebrow: string;
    title: string;
    intro: string;
    items: InfoCard[];
  };

  // Why us
  whyTitle: string;
  whyPoints: WhyPoint[];
  whyImages: LpImage[]; // exactly 3
  whyCalloutTitle: string;
  whyCalloutBody: string;

  // Data security (GDPR/AVG + IP protection)
  dataSecurity: {
    eyebrow: string;
    title: string;
    intro: string;
    cards: InfoCard[];
  };

  // Process
  processTitle: string;
  steps: Step[];

  // Geographic / Dutch industrial hubs
  geo: {
    title: string;
    intro: string;
    hubs: string[];
  };

  // FAQ
  faqs: Faq[];

  // Related services (internal linking — pillar + siblings)
  relatedLinks: RelatedLink[];

  // Lead form
  leadEyebrow: string;
  leadTitle: string;
  leadIntro: string;
  leadBullets: string[];
  leadNoteHtml: string; // rich
  formServiceOptions: string[];
  formLocationOptions: string[];
}

// A page module exports one of these. The slug maps to /nl/<slug>.
export interface SeoEntry {
  slug: string;
  page: SeoPage;
}

// Shared Dutch location options for the lead form, reused across all NL pages.
export const NL_LOCATIONS = [
  "Amsterdam",
  "Rotterdam",
  "Eindhoven",
  "Utrecht",
  "The Hague (Den Haag)",
  "Other (Netherlands)",
  "International",
];

// Shared UAE location options for the lead form, reused across all AE pages.
export const AE_LOCATIONS = [
  "Dubai",
  "Abu Dhabi",
  "Sharjah",
  "Ras Al Khaimah",
  "Other (UAE)",
  "GCC / Middle East",
  "International",
];
