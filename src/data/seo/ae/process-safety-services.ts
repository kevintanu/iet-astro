import { DIRECTOR, ICONS, type SeoEntry } from "../_shared";
import { AE_LOCATIONS } from "../_shared";

import polymerization from "../../../assets/projects/022_polymerization_plant-768x386.jpg";
import wasteWater from "../../../assets/projects/019_waster_water_treatment-768x408.jpg";
import analysisDesign from "../../../assets/projects/011_analysis_design-768x406.jpg";
import pipeStress from "../../../assets/projects/014_pipe_stress_analysis-768x403.jpg";

// SPOKE — Process safety: HAZOP study + SIL verification — UAE
const entry: SeoEntry = {
  slug: "process-safety-services",
  page: {
    title: "HAZOP & SIL Verification Services in the UAE | Abu Dhabi & Dubai | IET",
    description:
      "HAZOP study and SIL verification services for UAE process plants, from an Indonesian engineering team. Functional safety to IEC 61508/61511, aligned to ADNOC HSE and OSHAD for Abu Dhabi, Dubai and Sharjah — NDA + UAE PDPL compliant.",
    metaKeywords:
      "hazop study service providers, sil verification services, sil determination, functional safety IEC 61511, process safety UAE Abu Dhabi, LOPA",
    h1: "HAZOP & SIL Verification Services in the UAE",
    breadcrumbLabel: "HAZOP & SIL Verification",
    serviceType: "Process Safety & Functional Safety Services",

    heroBadge: "Indonesia-based process safety team · ISO 9001/14001/45001 certified · Serving Abu Dhabi, Dubai & the UAE",
    heroTitleAccent: "HAZOP, LOPA & SIL Verification to IEC 61511",
    heroIntroHtml:
      'We\'re an <strong class="text-white font-semibold">ISO-certified Indonesia-based process safety team</strong> with 20+ years across Oil &amp; Gas, power and process — providing <strong class="text-white font-semibold">HAZOP study and SIL verification services for the UAE</strong>. Independent functional safety to <strong class="text-white font-semibold">IEC 61508/61511</strong>, aligned to ADNOC HSE and OSHAD, for clients in Abu Dhabi, Dubai and Sharjah.',
    heroChips: [
      "HAZOP · LOPA · SIL determination & verification",
      "IEC 61508 / 61511 · ADNOC HSE · OSHAD",
      "NDA + UAE PDPL compliant",
      "Remote facilitation in your hours — GMT+7",
    ],
    heroImage: {
      src: polymerization,
      alt: "Process plant — process safety and HAZOP study deliverable for a UAE client",
    },
    heroImageCaption: "HAZOP · LOPA · SIL Verification — IEC 61508 / 61511",

    certs: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "IEC 61508 / 61511", "ADNOC HSE", "OSHAD-SF"],

    directorQuoteHtml:
      'Functional safety is core to our work — <span class="text-brand-500">IEC 61508/61511</span>, HAZOP and SIL across Oil &amp; Gas and process. When you outsource HAZOP or SIL verification to our team, you get rigorous, standards-aligned studies led by experienced facilitators, documented to the expectations of UAE operators and ADNOC HSE.',
    directorName: DIRECTOR.name,
    directorTitle: DIRECTOR.title,
    directorPhoto: DIRECTOR.photo,
    directorPhotoAlt: DIRECTOR.photoAlt,

    painEyebrow: "The constraint",
    painTitleHtml:
      'Process safety deadlines on UAE projects — and <span class="text-brand-500">scarce functional-safety specialists</span> to meet them.',
    painIntro:
      "UAE operators and EPC contractors face strict HSE and process-safety expectations — ADNOC HSE, OSHAD — but experienced HAZOP facilitators and functional-safety engineers are scarce and expensive to retain. Outsourcing gives you independent, qualified process safety capacity when your project schedule demands it.",
    painCards: [
      {
        t: "Scarce functional-safety specialists",
        d: "Qualified HAZOP chairs and SIL/IEC 61511 specialists are in short supply and costly to retain in the UAE. Outsourcing gives you experienced facilitators on demand — without carrying them between projects.",
      },
      {
        t: "HSE obligations can't slip",
        d: "ADNOC HSE, OSHAD and operator requirements impose hard expectations on hazard identification and safety-instrumented functions. Studies that slip put approvals — and start-up — at risk.",
      },
      {
        t: "Independence & data assurance",
        d: "Good process safety needs independent review, and your P&IDs and cause-and-effect data are sensitive IP that must stay protected under UAE PDPL.",
      },
    ],

    servicesEyebrow: "What we deliver",
    servicesTitle: "Independent process safety, from hazard study to SIL verification",
    servicesIntro:
      "Outsource a single HAZOP, a full SIL lifecycle, or ongoing process safety support. We facilitate and document to IEC 61508/61511 and UAE operator expectations — remotely in your working hours, or on a hybrid basis.",
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
        body: "HAZID, SIL classification reviews, cause-and-effect development, and process safety support aligned to ADNOC HSE, OSHAD and UAE Fire & Life Safety requirements.",
        icon: ICONS.bolt,
      },
    ],

    stats: [
      { v: "20+", l: "Years process & safety engineering experience" },
      { v: "IEC 61511", l: "Functional safety standard we work to" },
      { v: "~5h", l: "Daily overlap with UAE working hours" },
      { v: "24h", l: "Typical scope & fixed-fee quote turnaround" },
    ],

    compliance: {
      eyebrow: "Standards & regulations",
      title: "Process safety to the standards and regulations UAE sites must meet",
      intro:
        "Our studies are produced to recognised functional safety standards and aligned to the UAE regulatory frameworks that govern process and major-hazard facilities.",
      items: [
        {
          t: "IEC 61508 / 61511",
          d: "The functional safety lifecycle for safety-instrumented systems — SIL determination, verification (PFDavg) and the safety requirements specification, to the governing international standards.",
        },
        {
          t: "ADNOC HSE & process-safety codes",
          d: "Studies aligned to ADNOC HSE management standards and process-safety codes of practice for work across the Abu Dhabi Oil & Gas ecosystem.",
        },
        {
          t: "OSHAD-SF (Abu Dhabi)",
          d: "Alignment to the Abu Dhabi Occupational Safety and Health framework (OSHAD-SF) and emirate-level HSE requirements where relevant.",
        },
        {
          t: "UAE Fire & Life Safety Code",
          d: "Consideration of the UAE Fire & Life Safety Code of Practice (Civil Defence) and Dubai/Abu Dhabi municipal requirements where applicable to your scope.",
        },
      ],
    },

    whyTitle: "A process safety partner UAE operators can trust",
    whyPoints: [
      {
        t: "Rigorous IEC 61511 method",
        d: "We facilitate and document to IEC 61508/61511 — structured HAZOP, defensible LOPA, and SIL verification with transparent PFDavg calculations and assumptions.",
      },
      {
        t: "ISO-certified, independent team",
        d: "An independent facilitation team under ISO 9001/14001/45001 systems avoids in-house bias and gives you auditable, traceable study documentation.",
      },
      {
        t: "Remote-capable in your hours",
        d: "Indonesia (GMT+7) overlaps the UAE (GMT+4) working day by around five hours, so remote HAZOP sessions (with optional on-site attendance) run live within your schedule.",
      },
      {
        t: "UAE PDPL + NDA from day one",
        d: "We sign a mutual NDA before any P&IDs or data are shared. Project data is segregated and access-controlled, governed by our ISO systems and aligned to the UAE PDPL (and DIFC/ADGM for free-zone clients).",
      },
    ],
    whyImages: [
      { src: wasteWater, alt: "Process plant requiring HAZOP and process safety study" },
      { src: analysisDesign, alt: "Process analysis and safety engineering deliverable" },
      { src: pipeStress, alt: "Process piping requiring safety and integrity review" },
    ],
    whyCalloutTitle: "HAZOP · LOPA · SIL determination & verification",
    whyCalloutBody:
      "functional safety delivered to IEC 61508/61511 and aligned to ADNOC HSE and OSHAD across process, chemical and energy facilities for the UAE market.",

    dataSecurity: {
      eyebrow: "Your IP, protected",
      title: "How we protect your P&IDs and safety data",
      intro:
        "P&IDs, cause-and-effect matrices and SIF data are highly sensitive IP, and UAE law sets clear data-protection obligations. Here is exactly how we protect your data.",
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
          t: "UAE PDPL-aligned handling",
          d: "Our data handling aligns to the UAE Personal Data Protection Law, and to DIFC / ADGM regimes for clients in those free zones.",
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
        t: "Facilitate the study live",
        d: "We chair structured HAZOP, LOPA and SIL determination sessions — remote in your working hours, or hybrid — capturing full worksheets, deviations, safeguards and recommendations.",
      },
      {
        n: "03",
        t: "Verify & document",
        d: "We perform SIL verification (PFDavg) on each SIF, develop the safety requirements specification, and deliver a clear, auditable report aligned to IEC 61511 and ADNOC HSE expectations.",
      },
      {
        n: "04",
        t: "Close-out & support",
        d: "We track recommendations to close-out and support follow-up reviews, modifications and revalidation cycles as your facility evolves.",
      },
    ],

    geo: {
      title: "Supporting process operators across the UAE",
      intro:
        "We support process, chemical and energy operators and EPC contractors across Abu Dhabi, Dubai and Sharjah — and the industrial hubs of Ruwais, KIZAD, Musaffah and Jebel Ali — with independent process safety studies.",
      hubs: ["Abu Dhabi", "Dubai", "Sharjah", "Ruwais", "KIZAD / Musaffah", "Jebel Ali (JAFZA)"],
    },

    faqs: [
      {
        q: "What is the difference between HAZOP, LOPA, SIL determination and SIL verification?",
        a: "HAZOP is a structured hazard identification of your P&IDs. LOPA tests whether your protection layers reduce risk enough. SIL determination assigns a target Safety Integrity Level to each safety-instrumented function. SIL verification then proves, by PFDavg calculation, that each function's design actually meets its target SIL. We provide all four, or any single step.",
      },
      {
        q: "Which standards and regulations do your studies follow?",
        a: "Functional safety to IEC 61508 and IEC 61511, aligned to the UAE frameworks for process and major-hazard facilities — ADNOC HSE management standards and process-safety codes, the Abu Dhabi OSHAD-SF framework, and the UAE Fire & Life Safety Code where relevant.",
      },
      {
        q: "Can the HAZOP be run remotely?",
        a: "Yes. We facilitate HAZOP and SIL sessions remotely via video with shared P&ID markup. Because Indonesia (GMT+7) overlaps the UAE (GMT+4) working day by around five hours, sessions run live within your schedule. Where on-site attendance is required, we can arrange a hybrid approach.",
      },
      {
        q: "Who chairs the study?",
        a: "An experienced, independent HAZOP chair leads the sessions with a dedicated scribe, supported by functional-safety engineers for the LOPA and SIL work. Independence from the design team is a key part of a credible study.",
      },
      {
        q: "How do you protect our P&IDs and safety data?",
        a: "We sign a mutual NDA before any data is shared, store everything on segregated access-controlled storage, and align our handling to the UAE PDPL under our ISO-certified systems. You retain full IP ownership of all reports and worksheets.",
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
        blurb: "Equipment, skids and pressure-equipment design to ASME VIII and API.",
      },
      {
        slug: "cad-drafting-services",
        label: "CAD Drafting Services",
        blurb: "AutoCAD, SolidWorks and Revit/BIM drafting to ASME / ISO standards.",
      },
    ],

    leadEyebrow: "Talk to a process safety engineer",
    leadTitle: "Send your study scope. Get a fixed-fee quote fast.",
    leadIntro:
      "Tell us about your HAZOP, LOPA, SIL determination or SIL verification scope. A senior process safety engineer — not a salesperson — reviews it and replies with a clear fee and timeline. NDA available before you share any P&IDs.",
    leadBullets: [
      "Facilitated and verified to IEC 61508 / 61511",
      "NDA signed before data shared — UAE PDPL aligned",
      "Fixed fee — no surprise hourly creep",
    ],
    leadNoteHtml:
      'A senior process safety engineer on our Indonesia-based team personally reviews every scope and replies within <strong class="text-white">24 hours</strong> — our day overlaps yours for live sessions and fast turnaround.',
    formServiceOptions: [
      "HAZOP Study Facilitation",
      "LOPA",
      "SIL Determination",
      "SIL Verification",
      "Safety Requirements Specification",
      "Other Process Safety Study",
      "Other / Not sure",
    ],
    formLocationOptions: AE_LOCATIONS,
  },
};

export default entry;
