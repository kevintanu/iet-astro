// Registry of organic SEO pages, grouped by region. Each page lives in its own
// file under ./seo/<region>/ and is imported below. To add a page: create a file
// in ./seo/<region>/ (copy an existing one) and add it to that region's array.
// To add a region: add a REGIONS entry in ./seo/regions.ts, create the data
// files + array here, and add src/pages/<region>/[slug].astro.
//
// Distinct from ./lpCampaigns.ts (paid Google Ads pages under /lp/, noindex):
// these pages are indexable, in the sitemap, and carry full nav + JSON-LD.
import type { SeoPage, SeoEntry } from "./seo/_shared";

// Netherlands
import nlEngineering from "./seo/nl/engineering-services-outsourcing";
import nlMechanical from "./seo/nl/outsource-mechanical-engineering";
import nlCad from "./seo/nl/cad-drafting-services";
import nlProcessSafety from "./seo/nl/process-safety-services";

// United Arab Emirates
import aeEngineering from "./seo/ae/engineering-services-outsourcing";
import aeMechanical from "./seo/ae/outsource-mechanical-engineering";
import aeCad from "./seo/ae/cad-drafting-services";
import aeProcessSafety from "./seo/ae/process-safety-services";

export type { SeoPage } from "./seo/_shared";

const ENTRIES_BY_REGION: Record<string, SeoEntry[]> = {
  nl: [nlEngineering, nlMechanical, nlCad, nlProcessSafety],
  ae: [aeEngineering, aeMechanical, aeCad, aeProcessSafety],
};

// region → { slug → page }
export const PAGES_BY_REGION: Record<string, Record<string, SeoPage>> = Object.fromEntries(
  Object.entries(ENTRIES_BY_REGION).map(([region, entries]) => [
    region,
    Object.fromEntries(entries.map((e) => [e.slug, e.page])),
  ])
);

export const getSeoPage = (region: string, slug: string | undefined): SeoPage | undefined =>
  slug ? PAGES_BY_REGION[region]?.[slug] : undefined;
