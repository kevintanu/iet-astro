// Registry of organic SEO pages served under /nl/. Each page lives in its own
// file under ./seo/ and is imported below — to add a new page, create a file in
// ./seo/ (copy an existing one), then add it to ENTRIES here. Nothing else to
// touch: src/pages/nl/[slug].astro prerenders one page per registered slug.
//
// Distinct from ./lpCampaigns.ts (paid Google Ads pages under /lp/, noindex):
// these pages are indexable, in the sitemap, and carry full nav + JSON-LD.
import type { SeoPage, SeoEntry } from "./seo/_shared";
import engineeringServicesOutsourcing from "./seo/engineering-services-outsourcing";
import outsourceMechanicalEngineering from "./seo/outsource-mechanical-engineering";
import cadDraftingServices from "./seo/cad-drafting-services";
import processSafetyServices from "./seo/process-safety-services";

export type { SeoPage } from "./seo/_shared";

const ENTRIES: SeoEntry[] = [
  engineeringServicesOutsourcing,
  outsourceMechanicalEngineering,
  cadDraftingServices,
  processSafetyServices,
];

export const SEO_PAGES: Record<string, SeoPage> = Object.fromEntries(
  ENTRIES.map((e) => [e.slug, e.page])
);

export const getSeoPage = (slug: string | undefined): SeoPage | undefined =>
  slug ? SEO_PAGES[slug] : undefined;
