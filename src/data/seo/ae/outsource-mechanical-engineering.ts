import { DIRECTOR, ICONS, type SeoEntry } from "../_shared";
import { AE_LOCATIONS } from "../_shared";

import mechanicalDesign from "../../../assets/projects/013_mechanical_design-768x417.jpg";
import typicalSkid from "../../../assets/projects/016_typical_skid-768x416.jpg";
import centrifugalPump from "../../../assets/projects/017_centrifugal_pump-768x374.jpg";
import skidGa from "../../../assets/projects/015_skid_ga-768x429.jpg";

// SPOKE — Outsource mechanical engineering — UAE
const entry: SeoEntry = {
  slug: "outsource-mechanical-engineering",
  page: {
    title: "Outsource Mechanical Engineering in the UAE | Abu Dhabi & Dubai | IET",
    description:
      "Outsource mechanical engineering to an Indonesian team serving the UAE. Equipment, skid and pressure-vessel design to ASME VIII, API and ISO for Abu Dhabi, Dubai and Sharjah — NDA + UAE PDPL compliant, overlapping Gulf working hours.",
    metaKeywords:
      "outsource mechanical engineering, mechanical engineering outsourcing UAE, mechanical design Abu Dhabi Dubai, offshore mechanical engineering",
    h1: "Outsource Mechanical Engineering in the UAE",
    breadcrumbLabel: "Outsource Mechanical Engineering",
    serviceType: "Mechanical Engineering Outsourcing",

    heroBadge: "Indonesia-based mechanical team · ISO 9001/14001/45001 certified · Serving Abu Dhabi, Dubai & the UAE",
    heroTitleAccent: "Equipment, Skid & Pressure-Equipment Design",
    heroIntroHtml:
      'We\'re an <strong class="text-white font-semibold">ISO-certified Indonesia-based mechanical engineering team</strong> with 20+ years across Oil &amp; Gas, power and process — providing <strong class="text-white font-semibold">outsource mechanical engineering for the UAE</strong>. Equipment, skids, pressure vessels and rotating-equipment design to <strong class="text-white font-semibold">ASME VIII, API and ISO</strong>, with fabrication-ready drawings for clients in Abu Dhabi, Dubai and Sharjah.',
    heroChips: [
      "Equipment · Skids · Pressure vessels · Rotating equipment",
      "ASME VIII · ASME B31.3 · API · ISO",
      "NDA + UAE PDPL compliant",
      "Overlapping Gulf working hours — GMT+7",
    ],
    heroImage: {
      src: mechanicalDesign,
      alt: "Mechanical engineering design deliverable produced by an offshore team for a UAE client",
    },
    heroImageCaption: "Mechanical Engineering — ASME / API / ISO",

    certs: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "ASME VIII", "ASME B31.3", "API 650 / 610", "ADNOC AGES"],

    directorQuoteHtml:
      'International codes are how we work every day — <span class="text-brand-500">ASME, API and ISO</span> across mechanical, equipment and skid design. When you outsource mechanical engineering to our team, you get calculations and drawings built to the standards UAE and ADNOC-ecosystem projects demand, checked before issue and ready to fabricate.',
    directorName: DIRECTOR.name,
    directorTitle: DIRECTOR.title,
    directorPhoto: DIRECTOR.photo,
    directorPhotoAlt: DIRECTOR.photoAlt,

    painEyebrow: "The constraint",
    painTitleHtml:
      'More mechanical scope than your team can absorb — on <span class="text-brand-500">EPC schedules that can\'t slip</span>.',
    painIntro:
      "Mechanical engineering firms and equipment fabricators across Abu Dhabi, Dubai and Sharjah face peaks they can't staff fast enough at UAE expat rates. Outsourcing overflow mechanical design lets you take on more equipment packages without recruiting, and keep bids competitive.",
    painCards: [
      {
        t: "Project peaks outpace your team",
        d: "Equipment and skid packages arrive in bursts. Outsourcing gives you experienced mechanical capacity immediately — no recruitment lead time, no idle bench between awards.",
      },
      {
        t: "Margin pressure on bids",
        d: "Expat mechanical engineers carry a high fully-loaded cost in the UAE. Outsourcing turns that fixed cost into a per-project variable cost so you can price competitively.",
      },
      {
        t: "Code & data assurance",
        d: "Equipment for the UAE market must meet ASME, API and ADNOC requirements with full calculation and documentation backing — and your designs must stay protected under UAE PDPL.",
      },
    ],

    servicesEyebrow: "What we deliver",
    servicesTitle: "A mechanical engineering team that works in your hours",
    servicesIntro:
      "Plug a complete mechanical engineering team into your project — from sizing calculations to fabrication-ready drawings. Fixed fee, ASME/API/ISO-compliant output, your templates and title blocks — with overlapping Gulf working hours.",
    services: [
      {
        title: "Equipment & Skid Design",
        body: "Process skids, packages and equipment layouts — GA drawings, structural frames, pipe routing and BOMs designed to ASME/API/ISO and ready for fabrication and FAT.",
        icon: ICONS.cube,
      },
      {
        title: "Pressure Vessel & Heat Exchanger Design",
        body: "Pressure vessels, tanks and heat exchangers designed and verified to ASME VIII (Div 1/2), API 650/620 and TEMA — calculations, GAs and detail drawings with full design backup.",
        icon: ICONS.bolt,
      },
      {
        title: "Rotating Equipment & Piping",
        body: "Pump, compressor and rotating-equipment installation design to API 610/617, plus connected piping layout and supports to ASME B31.3 and your project standards.",
        icon: ICONS.wrench,
      },
      {
        title: "Mechanical Calculations & FEA",
        body: "Sizing, stress and lifting calculations, and finite-element analysis where required — documented to ASME/API/ISO and ready for client or third-party review.",
        icon: ICONS.doc,
      },
      {
        title: "Fabrication & Detail Drawings",
        body: "Shop-ready fabrication drawings, weld details and assembly drawings with GD&T to ASME Y14.5 — native files plus issued PDFs in your title blocks.",
        icon: ICONS.pencil,
      },
      {
        title: "Design Dossiers & Documentation",
        body: "Datasheets, design reports and manufacturing record books to support client, operator (ADNOC) and third-party inspection requirements.",
        icon: ICONS.check,
      },
    ],

    stats: [
      { v: "20+", l: "Years mechanical engineering experience" },
      { v: "ASME / API / ISO", l: "Standards we engineer to" },
      { v: "~5h", l: "Daily overlap with UAE working hours" },
      { v: "24h", l: "Typical scope & fixed-fee quote turnaround" },
    ],

    compliance: {
      eyebrow: "Standards & regulations",
      title: "Mechanical engineering to the codes the UAE market requires",
      intro:
        "Equipment for the UAE carries clear code and documentation obligations. We engineer and document to the international standards UAE and ADNOC-ecosystem projects are run on.",
      items: [
        {
          t: "ASME VIII & ASME B31.3",
          d: "Pressure vessels to ASME VIII (Div 1/2) and process piping to ASME B31.3, with the calculations and documentation to support inspection and certification.",
        },
        {
          t: "API standards",
          d: "Tanks to API 650/620, rotating equipment to API 610/617, and related API codes for Oil & Gas mechanical scope.",
        },
        {
          t: "ADNOC AGES & operator specs",
          d: "Familiarity with ADNOC Group Engineering Standards and operator specifications so equipment design aligns to UAE Oil & Gas expectations.",
        },
        {
          t: "ESMA / MoIAT conformity",
          d: "Awareness of Emirates conformity requirements (ESMA / MoIAT, ECAS, EQM) where equipment requires UAE market conformity assessment.",
        },
      ],
    },

    whyTitle: "A mechanical team UAE firms can trust",
    whyPoints: [
      {
        t: "Fluent in ASME, API and ISO",
        d: "These are our daily working standards across mechanical, equipment and piping design — the same codes UAE and ADNOC-ecosystem projects require.",
      },
      {
        t: "ISO-certified management systems",
        d: "Our ISO 9001/14001/45001 systems govern calculations, drawings and document control — documented QA and traceability on every package.",
      },
      {
        t: "Overlapping working hours",
        d: "Indonesia (GMT+7) overlaps the UAE (GMT+4) working day by around five hours — share scope in your morning, resolve queries in real time, and receive design on a fast turnaround.",
      },
      {
        t: "UAE PDPL + NDA from day one",
        d: "We sign a mutual NDA before any files are shared. Project data is segregated and access-controlled, governed by our ISO systems and aligned to the UAE PDPL (and DIFC/ADGM for free-zone clients).",
      },
    ],
    whyImages: [
      { src: typicalSkid, alt: "Typical process skid mechanical design to ASME/API" },
      { src: centrifugalPump, alt: "Centrifugal pump installation mechanical engineering to API 610" },
      { src: skidGa, alt: "Skid general arrangement drawing for fabrication" },
    ],
    whyCalloutTitle: "Equipment · Skids · Pressure equipment",
    whyCalloutBody:
      "mechanical engineering delivered to ASME / API / ISO and ADNOC standards across Oil & Gas, power and process for the UAE market.",

    dataSecurity: {
      eyebrow: "Your IP, protected",
      title: "How we protect your proprietary mechanical designs",
      intro:
        "Your equipment designs and calculations are valuable IP, and UAE law sets clear data-protection obligations. Here is exactly how we protect your data when you outsource.",
      cards: [
        {
          t: "NDA before any files are shared",
          d: "A mutual non-disclosure agreement is signed before you send a single drawing or datasheet — request it before even scoping the work.",
        },
        {
          t: "Secure, segregated storage",
          d: "Designs and calculations live on access-controlled, project-segregated storage, accessible only to the engineers on your project.",
        },
        {
          t: "UAE PDPL-aligned handling",
          d: "Our data handling aligns to the UAE Personal Data Protection Law, and to DIFC / ADGM regimes for clients in those free zones.",
        },
        {
          t: "You retain full IP ownership",
          d: "All designs, calculations, native files and IP are yours. We claim no rights over the work product and return or destroy project data on request.",
        },
      ],
    },

    processTitle: "From your scope to fabrication-ready drawings",
    steps: [
      {
        n: "01",
        t: "Send the scope",
        d: "Share datasheets, P&IDs, sketches or a deliverables register, plus your standards and templates. A senior mechanical engineer scopes it and quotes a fixed fee and timeline — usually same business day.",
      },
      {
        n: "02",
        t: "We engineer & QA in overlapping hours",
        d: "We produce calculations and drawings during hours that overlap yours, with an internal QA pass against ASME/API/ISO and real-time clarification when needed.",
      },
      {
        n: "03",
        t: "Deliverables on a fast turnaround",
        d: "You receive native files plus issued PDFs, in your templates and standards, ready to review, fabricate or issue — typically same day or by your next morning.",
      },
      {
        n: "04",
        t: "Revisions & overflow support",
        d: "Further revision rounds follow the same cycle. Scale the team up or down as your project workload moves — no recruitment lead time, no idle cost.",
      },
    ],

    geo: {
      title: "Supporting mechanical engineering firms across the UAE",
      intro:
        "We support mechanical engineering firms and equipment fabricators across Abu Dhabi, Dubai and Sharjah — and the industrial hubs of Jebel Ali, KIZAD, Musaffah and Ruwais — with scalable offshore design capacity.",
      hubs: ["Abu Dhabi", "Dubai", "Sharjah", "Jebel Ali (JAFZA)", "KIZAD / Musaffah", "Ruwais"],
    },

    faqs: [
      {
        q: "What mechanical engineering work can you take on?",
        a: "Equipment and skid design, pressure vessels and heat exchangers, rotating-equipment installation, mechanical calculations and FEA, fabrication and detail drawings, and design documentation/dossiers. You can outsource a single calculation package, a full equipment design, or ongoing overflow.",
      },
      {
        q: "Do you design pressure equipment to ASME?",
        a: "Yes. We design and verify pressure equipment to ASME VIII (Div 1/2), tanks to API 650/620, and process piping to ASME B31.3, producing the calculations, drawings and documentation needed to support inspection and certification for the UAE market.",
      },
      {
        q: "Are you familiar with ADNOC standards?",
        a: "Yes. We work to ADNOC Group Engineering Standards (AGES) and operator specifications for Oil & Gas mechanical scope, alongside the ASME, API and ISO codes that underpin them.",
      },
      {
        q: "How does the time-zone overlap work?",
        a: "Indonesia is GMT+7; the UAE is GMT+4 — only three hours apart, so our working days overlap by around five hours. You can share scope and resolve queries in real time during your morning, with deliverables on a same-day or next-morning turnaround.",
      },
      {
        q: "How do you protect our designs and IP?",
        a: "We sign a mutual NDA before any files are shared, store project data on segregated access-controlled storage, and align our handling to the UAE PDPL under our ISO-certified systems. You retain full IP ownership of all deliverables.",
      },
    ],

    relatedLinks: [
      {
        slug: "engineering-services-outsourcing",
        label: "Engineering Services Outsourcing",
        blurb: "The full picture: FEED, detail, CAD/BIM and process safety.",
      },
      {
        slug: "cad-drafting-services",
        label: "CAD Drafting Services",
        blurb: "AutoCAD, SolidWorks and Revit/BIM drafting to ASME / ISO standards.",
      },
      {
        slug: "process-safety-services",
        label: "HAZOP & SIL Verification",
        blurb: "Process safety studies and functional safety to IEC 61511.",
      },
    ],

    leadEyebrow: "Talk to an engineer",
    leadTitle: "Send your mechanical scope. Get a fixed-fee quote fast.",
    leadIntro:
      "Tell us about your equipment, skid, pressure-vessel, rotating-equipment or fabrication-drawing scope. A senior mechanical engineer — not a salesperson — reviews it and replies with a clear fee and timeline. NDA available before you share any files.",
    leadBullets: [
      "Designed to ASME / API / ISO standards",
      "NDA signed before files shared — UAE PDPL aligned",
      "Fixed fee — no surprise hourly creep",
    ],
    leadNoteHtml:
      'A senior mechanical engineer on our Indonesia-based team personally reviews every scope and replies within <strong class="text-white">24 hours</strong> — our day overlaps yours for fast, real-time turnaround.',
    formServiceOptions: [
      "Equipment / Skid Design",
      "Pressure Vessel / Heat Exchanger",
      "Rotating Equipment & Piping",
      "Mechanical Calculations / FEA",
      "Fabrication & Detail Drawings",
      "Design Dossiers / Documentation",
      "Other / Not sure",
    ],
    formLocationOptions: AE_LOCATIONS,
  },
};

export default entry;
