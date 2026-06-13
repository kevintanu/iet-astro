import { DIRECTOR, ICONS, type SeoEntry } from "./_shared";
import { NL_LOCATIONS } from "./_shared";

import polymerization from "../../assets/projects/022_polymerization_plant-768x386.jpg";
import wasteWater from "../../assets/projects/019_waster_water_treatment-768x408.jpg";
import analysisDesign from "../../assets/projects/011_analysis_design-768x406.jpg";
import pipeStress from "../../assets/projects/014_pipe_stress_analysis-768x403.jpg";

// SPOKE — Process safety: HAZOP study + SIL verification — Netherlands
const entry: SeoEntry = {
  slug: "process-safety-services",
  page: {
    title: "HAZOP & SIL Verification Services for the Netherlands | Process Safety | IET",
    description:
      "HAZOP study and SIL verification services for Dutch process plants, from an Indonesian engineering team. Functional safety to IEC 61508/61511, aligned to Seveso/BRZO, PGS and ATEX — NDA + AVG/GDPR compliant, trusted by FrieslandCampina.",
    metaKeywords:
      "hazop study service providers, sil verification services, sil determination, functional safety IEC 61511, process safety Netherlands, LOPA",
    h1: "HAZOP & SIL Verification Services for Dutch Plants",
    breadcrumbLabel: "HAZOP & SIL Verification",
    serviceType: "Process Safety & Functional Safety Services",

    heroBadge: "Indonesia-based process safety team · Engineering partner to FrieslandCampina's Indonesian operations · Serving the Netherlands",
    heroTitleAccent: "HAZOP, LOPA & SIL Verification to IEC 61511",
    heroIntroHtml:
      'We\'re an <strong class="text-white font-semibold">Indonesia-based process safety team</strong> — an engineering partner to <strong class="text-white font-semibold">FrieslandCampina (PT Kievit Indonesia)</strong> — providing <strong class="text-white font-semibold">HAZOP study and SIL verification services for the Netherlands</strong>. Independent functional safety to IEC 61508/61511, aligned to Seveso/BRZO, PGS and ATEX — for new plants and brownfield modifications.',
    heroChips: [
      "HAZOP · LOPA · SIL determination & verification",
      "IEC 61508 / 61511 · Seveso/BRZO · PGS · ATEX",
      "NDA + AVG/GDPR compliant",
      "Remote facilitation — GMT+7",
    ],
    heroImage: {
      src: polymerization,
      alt: "Polymerization plant — process safety and HAZOP study deliverable for a Dutch client",
    },
    heroImageCaption: "HAZOP · LOPA · SIL Verification — IEC 61508 / 61511",

    certs: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "IEC 61508 / 61511", "Seveso III / BRZO", "PGS · ATEX"],

    directorQuoteHtml:
      'We have delivered <span class="text-brand-500">HAZOP and engineering studies for FrieslandCampina\'s Indonesian operations (PT Kievit Indonesia)</span> and other process clients. Functional safety is core to our work — when you outsource HAZOP or SIL verification to our team, you get rigorous, IEC 61511-aligned studies led by experienced facilitators.',
    directorName: DIRECTOR.name,
    directorTitle: DIRECTOR.title,
    directorPhoto: DIRECTOR.photo,
    directorPhotoAlt: DIRECTOR.photoAlt,

    painEyebrow: "The constraint",
    painTitleHtml:
      'Process safety deadlines, <span class="text-brand-500">scarce functional-safety specialists</span>, and Seveso/BRZO obligations that can\'t slip.',
    painIntro:
      "Dutch process operators and engineering firms face strict Seveso III / BRZO and PGS obligations — but experienced HAZOP facilitators and functional-safety engineers are scarce and expensive to retain in the Netherlands. Outsourcing gives you independent, qualified process safety capacity when your project schedule demands it.",
    painCards: [
      {
        t: "Scarce functional-safety specialists",
        d: "Qualified HAZOP chairs and SIL/IEC 61511 specialists are in short supply and costly to retain in the Netherlands. Outsourcing gives you experienced facilitators on demand — without carrying them between projects.",
      },
      {
        t: "Regulatory obligations can't slip",
        d: "Seveso III / BRZO and PGS impose hard requirements on hazard identification and safety-instrumented functions. Studies that slip put compliance — and start-up — at risk.",
      },
      {
        t: "Independence & data risk",
        d: "Good process safety needs independent review, and your P&IDs and cause-and-effect data are sensitive IP that must stay protected under AVG/GDPR.",
      },
    ],

    servicesEyebrow: "What we deliver",
    servicesTitle: "Independent process safety, from hazard study to SIL verification",
    servicesIntro:
      "Outsource a single HAZOP, a full SIL lifecycle, or ongoing process safety support. We facilitate and document to IEC 61508/61511 and Dutch regulatory expectations — remotely or on a hybrid basis.",
    services: [
      {
        title: "HAZOP Study Facilitation",
        body: "Independent HAZOP chair and scribe for new plants and modifications — structured node-by-node review of P&IDs with full worksheets, recommendations and close-out tracking.",
        icon: ICONS.book,
      },
      {
        title: "LOPA (Layer of Protection Analysis)",
        body: "Semi-quantitative LOPA to test the adequacy of protection layers and derive required risk reduction — the bridge between HAZOP findings and SIL targets.",
        icon: ICONS.layers,
      },
      {
        title: "SIL Determination",
        body: "Safety Integrity Level determination by LOPA or risk graph to IEC 61511 — assigning target SIL to each safety-instrumented function (SIF) with documented assumptions.",
        icon: ICONS.check,
      },
      {
        title: "SIL Verification",
        body: "Probability of failure on demand (PFDavg) calculations and architecture checks to verify each SIF meets its target SIL — covering sensors, logic solver and final elements to IEC 61508/61511.",
        icon: ICONS.doc,
      },
      {
        title: "Safety Requirements Specification",
        body: "Development of the SRS defining each SIF's functional and integrity requirements — the cornerstone document for the functional safety lifecycle.",
        icon: ICONS.grid,
      },
      {
        title: "Other Process Safety Studies",
        body: "HAZID, SIL classification reviews, cause-and-effect development, and process safety support aligned to Seveso/BRZO, PGS and ATEX requirements.",
        icon: ICONS.bolt,
      },
    ],

    stats: [
      { v: "20+", l: "Years process & safety engineering experience" },
      { v: "IEC 61511", l: "Functional safety standard we work to" },
      { v: "GMT+7", l: "Overnight delivery vs Amsterdam (CET/CEST)" },
      { v: "24h", l: "Typical scope & fixed-fee quote turnaround" },
    ],

    compliance: {
      eyebrow: "Standards & regulations",
      title: "Process safety to the standards and regulations Dutch sites must meet",
      intro:
        "Our studies are produced to recognised functional safety standards and aligned to the Dutch and European regulatory frameworks that govern major-hazard process facilities.",
      items: [
        {
          t: "IEC 61508 / 61511",
          d: "The functional safety lifecycle for safety-instrumented systems — SIL determination, verification (PFDavg) and the safety requirements specification, to the governing international standards.",
        },
        {
          t: "Seveso III / BRZO",
          d: "Studies aligned to the Seveso III Directive, implemented in the Netherlands as the BRZO (Besluit risico's zware ongevallen), for major-hazard establishments.",
        },
        {
          t: "PGS guidelines",
          d: "Alignment to the Dutch PGS (Publicatiereeks Gevaarlijke Stoffen) guidelines for the storage and handling of hazardous substances.",
        },
        {
          t: "ATEX & Arbowet",
          d: "Hazardous-area considerations to the ATEX directives and occupational-safety obligations under the Dutch Arbowet, where relevant to your scope.",
        },
      ],
    },

    whyTitle: "A process safety partner Dutch operators can trust",
    whyPoints: [
      {
        t: "Proven Dutch MNC reference",
        d: "FrieslandCampina (PT Kievit Indonesia) engaged us for HAZOP and engineering studies. Dutch companies are not a new market for us — they are an existing one.",
      },
      {
        t: "Rigorous IEC 61511 method",
        d: "We facilitate and document to IEC 61508/61511 — structured HAZOP, defensible LOPA, and SIL verification with transparent PFDavg calculations and assumptions.",
      },
      {
        t: "Independent and remote-capable",
        d: "An independent facilitation team avoids in-house bias, and remote HAZOP sessions (with optional on-site attendance) fit your schedule without travel cost or delay.",
      },
      {
        t: "AVG/GDPR + NDA from day one",
        d: "We sign a mutual NDA before any P&IDs or data are shared. Project data is segregated and access-controlled, governed by our ISO systems and aligned to AVG/GDPR.",
      },
    ],
    whyImages: [
      { src: wasteWater, alt: "Process plant requiring HAZOP and process safety study" },
      { src: analysisDesign, alt: "Process analysis and safety engineering deliverable" },
      { src: pipeStress, alt: "Process piping requiring safety and integrity review" },
    ],
    whyCalloutTitle: "HAZOP · LOPA · SIL determination & verification",
    whyCalloutBody:
      "functional safety delivered to IEC 61508/61511 and aligned to Seveso/BRZO and PGS for MNC clients including FrieslandCampina across process, chemical and energy facilities.",

    dataSecurity: {
      eyebrow: "Your IP, protected",
      title: "How we protect your P&IDs and safety data",
      intro:
        "P&IDs, cause-and-effect matrices and SIF data are highly sensitive IP. European operators are bound by strict GDPR/AVG and IP law — here is exactly how we protect your data.",
      cards: [
        {
          t: "NDA before any data is shared",
          d: "A mutual non-disclosure agreement is signed before you send a single P&ID or dataset — request it before even scoping the study.",
        },
        {
          t: "Secure, segregated storage",
          d: "Safety data lives on access-controlled, project-segregated storage, accessible only to the facilitators and engineers on your study.",
        },
        {
          t: "AVG/GDPR-aligned handling",
          d: "Our data handling aligns to European AVG/GDPR requirements, governed by our ISO 9001/14001/45001 management systems.",
        },
        {
          t: "You retain full IP ownership",
          d: "All study reports, worksheets, calculations and IP are yours. We claim no rights over the work product and return or destroy project data on request.",
        },
      ],
    },

    processTitle: "From P&IDs to a verified, defensible safety case",
    steps: [
      {
        n: "01",
        t: "Scope & prepare",
        d: "Share P&IDs, design data and the study basis under NDA. A senior process safety engineer scopes the HAZOP/SIL work and quotes a fixed fee and schedule — usually same business day.",
      },
      {
        n: "02",
        t: "Facilitate the study",
        d: "We chair structured HAZOP, LOPA and SIL determination sessions — remote or hybrid — capturing full worksheets, deviations, safeguards and recommendations.",
      },
      {
        n: "03",
        t: "Verify & document",
        d: "We perform SIL verification (PFDavg) on each SIF, develop the safety requirements specification, and deliver a clear, auditable report aligned to IEC 61511 and Seveso/BRZO expectations.",
      },
      {
        n: "04",
        t: "Close-out & support",
        d: "We track recommendations to close-out and support follow-up reviews, modifications and revalidation cycles as your facility evolves.",
      },
    ],

    geo: {
      title: "Supporting process operators across the Netherlands",
      intro:
        "We support process, chemical and energy operators across Rotterdam's port and petrochemical cluster, Amsterdam, Eindhoven and the wider Netherlands with independent process safety studies.",
      hubs: ["Rotterdam", "Amsterdam", "Eindhoven", "Utrecht", "The Hague (Den Haag)"],
    },

    faqs: [
      {
        q: "What is the difference between HAZOP, LOPA, SIL determination and SIL verification?",
        a: "HAZOP is a structured hazard identification of your P&IDs. LOPA tests whether your protection layers reduce risk enough. SIL determination assigns a target Safety Integrity Level to each safety-instrumented function. SIL verification then proves, by PFDavg calculation, that each function's design actually meets its target SIL. We provide all four, or any single step.",
      },
      {
        q: "Which standards and regulations do your studies follow?",
        a: "Functional safety to IEC 61508 and IEC 61511, aligned to the Dutch and European regulatory frameworks for major-hazard sites — Seveso III (implemented as BRZO in the Netherlands), the PGS guidelines for hazardous substances, ATEX for explosive atmospheres, and the Arbowet where relevant.",
      },
      {
        q: "Can the HAZOP be run remotely?",
        a: "Yes. We facilitate HAZOP and SIL sessions remotely via video with shared P&ID markup, which removes travel cost and lets us fit your schedule. Where on-site attendance is required, we can arrange a hybrid approach.",
      },
      {
        q: "Who chairs the study?",
        a: "An experienced, independent HAZOP chair leads the sessions with a dedicated scribe, supported by functional-safety engineers for the LOPA and SIL work. Independence from the design team is a key part of a credible study.",
      },
      {
        q: "How do you protect our P&IDs and safety data?",
        a: "We sign a mutual NDA before any data is shared, store everything on segregated access-controlled storage, and align our handling to AVG/GDPR under our ISO-certified systems. You retain full IP ownership of all reports and worksheets.",
      },
    ],

    relatedLinks: [
      {
        slug: "engineering-services-outsourcing",
        label: "Engineering Services Outsourcing",
        blurb: "The full picture: FEED, detail, mechanical and CAD/BIM.",
      },
      {
        slug: "outsource-mechanical-engineering",
        label: "Outsource Mechanical Engineering",
        blurb: "Equipment, skids and pressure-equipment design to EN/ISO and PED.",
      },
      {
        slug: "cad-drafting-services",
        label: "CAD Drafting Services",
        blurb: "AutoCAD, SolidWorks and Revit/BIM drafting to NEN/EN standards.",
      },
    ],

    leadEyebrow: "Talk to a process safety engineer",
    leadTitle: "Send your study scope. Get a fixed-fee quote by tomorrow morning.",
    leadIntro:
      "Tell us about your HAZOP, LOPA, SIL determination or SIL verification scope. A senior process safety engineer — not a salesperson — reviews it and replies with a clear fee and timeline. NDA available before you share any P&IDs.",
    leadBullets: [
      "Facilitated and verified to IEC 61508 / 61511",
      "NDA signed before data shared — AVG/GDPR aligned",
      "Fixed fee — no surprise hourly creep",
    ],
    leadNoteHtml:
      'A senior process safety engineer on our Indonesia-based team personally reviews every scope and replies within <strong class="text-white">24 hours</strong> — often waiting in your inbox the next morning.',
    formServiceOptions: [
      "HAZOP Study Facilitation",
      "LOPA",
      "SIL Determination",
      "SIL Verification",
      "Safety Requirements Specification",
      "Other Process Safety Study",
      "Other / Not sure",
    ],
    formLocationOptions: NL_LOCATIONS,
  },
};

export default entry;
