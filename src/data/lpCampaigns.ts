// Registry of Google Ads landing-page campaigns. Each ad group lives in its own
// file under ./lp/ and is imported below — to add a new ad group, create a file
// in ./lp/ (copy an existing one), then add it to ENTRIES here. Nothing else to
// touch: src/pages/lp/[slug].astro prerenders one page per registered slug.
import type { LpCampaign, LpEntry } from "./lp/_shared";
import pipingStressAnalysis from "./lp/piping-stress-analysis";
import cadDrafting from "./lp/cad-drafting";
import steelDetailing from "./lp/steel-detailing";

export type { LpCampaign } from "./lp/_shared";

const ENTRIES: LpEntry[] = [pipingStressAnalysis, cadDrafting, steelDetailing];

export const CAMPAIGNS: Record<string, LpCampaign> = Object.fromEntries(
  ENTRIES.map((e) => [e.slug, e.campaign])
);

export const getCampaign = (slug: string | undefined): LpCampaign | undefined =>
  slug ? CAMPAIGNS[slug] : undefined;
