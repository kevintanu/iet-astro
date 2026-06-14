// Per-region configuration for the organic SEO pages. The page markup lives in
// one shared component (src/components/seo/SeoPage.astro); everything that
// varies between regions is captured here and passed in as `region`.
//
// To add a region: add an entry below, create src/data/seo/<code>/*.ts data
// files, register them in ../seoPages.ts, and add src/pages/<code>/[slug].astro.
export interface Region {
  code: string; // path + attribution key, e.g. "nl", "ae"
  pathPrefix: string; // URL prefix, e.g. "/nl"
  hreflang: string; // e.g. "en-nl" (English content, regionally targeted)
  country: string; // Service JSON-LD areaServed, e.g. "Netherlands"
  geoEyebrow: string; // decorative eyebrow above the hubs section, e.g. "Across the Netherlands"
  phonePlaceholder: string; // lead-form phone input placeholder
}

export const REGIONS: Record<string, Region> = {
  nl: {
    code: "nl",
    pathPrefix: "/nl",
    hreflang: "en-nl",
    country: "Netherlands",
    geoEyebrow: "Across the Netherlands",
    phonePlaceholder: "+31...",
  },
  ae: {
    code: "ae",
    pathPrefix: "/ae",
    hreflang: "en-ae",
    country: "United Arab Emirates",
    geoEyebrow: "Across the UAE",
    phonePlaceholder: "+971...",
  },
};
