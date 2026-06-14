import { DIRECTOR, ICONS, type SeoEntry } from "../_shared";
import { NL_LOCATIONS } from "../_shared";

import mechanicalDesign from "../../../assets/projects/013_mechanical_design-768x417.jpg";
import typicalSkid from "../../../assets/projects/016_typical_skid-768x416.jpg";
import centrifugalPump from "../../../assets/projects/017_centrifugal_pump-768x374.jpg";
import skidGa from "../../../assets/projects/015_skid_ga-768x429.jpg";

// SPOKE — Outsource mechanical engineering — Netherlands
const entry: SeoEntry = {
  slug: "outsource-mechanical-engineering",
  page: {
    title: "Outsource Mechanical Engineering for the Netherlands | Equipment & Skid Design | IET",
    description:
      "Outsource mechanical engineering to an Indonesian team serving Dutch firms. Equipment, skid and pressure-vessel design to EN/ISO/PED, CE-marking support, fabrication drawings — overnight turnaround, NDA + AVG/GDPR compliant, trusted by FrieslandCampina.",
    metaKeywords:
      "outsource mechanical engineering, mechanical engineering outsourcing Netherlands, mechanical design outsourcing, offshore mechanical engineering",
    h1: "Outsource Mechanical Engineering to a Remote Team",
    breadcrumbLabel: "Outsource Mechanical Engineering",
    serviceType: "Mechanical Engineering Outsourcing",

    heroBadge: "Indonesia-based mechanical team · Engineering partner to FrieslandCampina's Indonesian operations · Serving the Netherlands",
    heroTitleAccent: "Equipment, Skid & Pressure-Equipment Design",
    heroIntroHtml:
      'We\'re an <strong class="text-white font-semibold">Indonesia-based mechanical engineering team</strong> — an engineering partner to <strong class="text-white font-semibold">FrieslandCampina (PT Kievit Indonesia)</strong> — providing <strong class="text-white font-semibold">outsource mechanical engineering for the Netherlands</strong>. Equipment, skids, pressure vessels and rotating-equipment design to EN, ISO and PED, with CE-marking support and fabrication-ready drawings. Send your scope at 5 PM Amsterdam time; progressed work is waiting the next morning.',
    heroChips: [
      "Equipment · Skids · Pressure vessels · Rotating equipment",
      "EN / ISO / PED · CE marking",
      "NDA + AVG/GDPR compliant",
      "Overnight turnaround — GMT+7",
    ],
    heroImage: {
      src: mechanicalDesign,
      alt: "Mechanical engineering design deliverable produced by an offshore team for a Dutch client",
    },
    heroImageCaption: "Mechanical Engineering — EN / ISO / PED, CE-marking support",

    certs: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "PED 2014/68/EU", "Machinery Directive", "EN / ISO"],

    directorQuoteHtml:
      'We have delivered mechanical engineering, skid design and equipment packages for clients including <span class="text-brand-500">FrieslandCampina\'s Indonesian operations (PT Kievit Indonesia)</span>. When you outsource mechanical engineering to our team, you get EN/ISO and PED-compliant calculations and drawings, checked before issue and ready to fabricate.',
    directorName: DIRECTOR.name,
    directorTitle: DIRECTOR.title,
    directorPhoto: DIRECTOR.photo,
    directorPhotoAlt: DIRECTOR.photoAlt,

    painEyebrow: "The constraint",
    painTitleHtml:
      'Too much mechanical work, <span class="text-brand-500">too few engineers to hire</span> — and Dutch salaries that make scaling expensive.',
    painIntro:
      "Dutch mechanical engineering firms across Eindhoven's Brainport, Rotterdam and Amsterdam are constrained by a shortage of mechanical engineers and high domestic salary costs. Outsourcing overflow design work lets you take on more projects without recruiting.",
    painCards: [
      {
        t: "Mechanical engineers are scarce",
        d: "Skilled mechanical design engineers are hard to recruit in the Netherlands and slow to onboard. Outsourcing gives you experienced capacity immediately — no hiring lead time.",
      },
      {
        t: "High fully-loaded cost",
        d: "A Dutch mechanical engineer's salary, employer charges, CAD/FEA licences and overhead add up fast. Outsourcing turns that fixed cost into a per-project variable cost.",
      },
      {
        t: "Compliance & data risk",
        d: "Equipment for the EU market must meet PED, the Machinery Directive and CE-marking obligations, with EN/ISO-compliant documentation — and your designs must stay protected under AVG/GDPR.",
      },
    ],

    servicesEyebrow: "What we deliver",
    servicesTitle: "A mechanical engineering team that works while you sleep",
    servicesIntro:
      "Plug a complete mechanical engineering team into your project — from sizing calculations to fabrication-ready drawings. Fixed fee, EN/ISO/PED-compliant output, your templates and title blocks — delivered overnight.",
    services: [
      {
        title: "Equipment & Skid Design",
        body: "Process skids, packages and equipment layouts — GA drawings, structural frames, pipe routing and BOMs designed to EN/ISO and ready for fabrication and FAT.",
        icon: ICONS.cube,
      },
      {
        title: "Pressure Vessel & Heat Exchanger Design",
        body: "Pressure vessels, tanks and heat exchangers designed and verified to PED 2014/68/EU and EN 13445 / ASME VIII — calculations, GAs and detail drawings with the technical file documentation.",
        icon: ICONS.bolt,
      },
      {
        title: "Rotating Equipment & Piping",
        body: "Pump, compressor and rotating-equipment installation design, plus connected piping layout and supports — engineered to EN/ISO and your project standards.",
        icon: ICONS.wrench,
      },
      {
        title: "Mechanical Calculations & FEA",
        body: "Sizing, stress and lifting calculations, and finite-element analysis where required — documented to EN/ISO and ready for client or certifying-body review.",
        icon: ICONS.doc,
      },
      {
        title: "Fabrication & Detail Drawings",
        body: "Shop-ready fabrication drawings, weld details and assembly drawings with GD&T to ISO/EN — native files plus issued PDFs in your title blocks.",
        icon: ICONS.pencil,
      },
      {
        title: "CE Marking & Technical Files",
        body: "Documentation support for CE marking under the Machinery Directive and PED — risk assessments, technical construction files and declarations of conformity.",
        icon: ICONS.check,
      },
    ],

    stats: [
      { v: "20+", l: "Years mechanical engineering experience" },
      { v: "GMT+7", l: "Overnight delivery vs Amsterdam (CET/CEST)" },
      { v: "EN / ISO / PED", l: "Standards we engineer to" },
      { v: "24h", l: "Typical scope & fixed-fee quote turnaround" },
    ],

    compliance: {
      eyebrow: "Standards & regulations",
      title: "Mechanical engineering to the codes the EU market requires",
      intro:
        "Equipment destined for the Dutch and European market carries regulatory obligations. We engineer and document to the standards and directives that keep your equipment compliant and certifiable.",
      items: [
        {
          t: "PED 2014/68/EU",
          d: "Pressure equipment designed and verified to the Pressure Equipment Directive and EN 13445 (or ASME VIII), with the calculations and technical file to support conformity assessment.",
        },
        {
          t: "Machinery Directive 2006/42/EC",
          d: "Machinery and assemblies engineered to support CE marking — risk assessment, technical construction file and declaration of conformity.",
        },
        {
          t: "EN & ISO standards",
          d: "Design, tolerancing (GD&T to ISO 1101), welding (EN ISO 3834 / ISO 5817) and documentation to European EN and ISO standards, alongside Dutch NEN where applicable.",
        },
        {
          t: "ATEX where required",
          d: "Equipment for potentially explosive atmospheres engineered to ATEX directives when your scope involves hazardous areas.",
        },
      ],
    },

    whyTitle: "A mechanical team Dutch engineers can trust",
    whyPoints: [
      {
        t: "Proven Dutch MNC reference",
        d: "FrieslandCampina (PT Kievit Indonesia) engaged us for engineering execution including mechanical scope. Dutch companies are not a new market for us — they are an existing one.",
      },
      {
        t: "Engineers to EN/ISO and PED",
        d: "We design to European EN/ISO standards and the PED, with calculation conventions, title blocks and documentation that integrate directly into your workflow.",
      },
      {
        t: "The overnight advantage",
        d: "Send a scope at 5 PM CET and receive progressed design before your 9 AM. Indonesia's GMT+7 timezone extends your working day and clears your queue while you sleep.",
      },
      {
        t: "AVG/GDPR + NDA from day one",
        d: "We sign a mutual NDA before any files are shared. Project data is segregated and access-controlled, governed by our ISO management systems and aligned to AVG/GDPR.",
      },
    ],
    whyImages: [
      { src: typicalSkid, alt: "Typical process skid mechanical design to EN/ISO" },
      { src: centrifugalPump, alt: "Centrifugal pump installation mechanical engineering" },
      { src: skidGa, alt: "Skid general arrangement drawing for fabrication" },
    ],
    whyCalloutTitle: "Equipment · Skids · Pressure equipment",
    whyCalloutBody:
      "mechanical engineering delivered to EN / ISO / PED standards for MNC clients including FrieslandCampina across Oil & Gas, power, process and food & dairy.",

    dataSecurity: {
      eyebrow: "Your IP, protected",
      title: "How we protect your proprietary mechanical designs",
      intro:
        "Your equipment designs and calculations are valuable IP. European firms are bound by strict GDPR/AVG and IP law — here is exactly how we protect your data when you outsource.",
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
          t: "AVG/GDPR-aligned handling",
          d: "Our data handling aligns to European AVG/GDPR requirements, governed by our ISO 9001/14001/45001 management systems.",
        },
        {
          t: "You retain full IP ownership",
          d: "All designs, calculations, native files and IP are yours. We claim no rights over the work product and return or destroy project data on request.",
        },
      ],
    },

    processTitle: "From your scope to fabrication-ready drawings — overnight",
    steps: [
      {
        n: "01",
        t: "Send the scope",
        d: "Share datasheets, P&IDs, sketches or a deliverables register, plus your standards and templates. A senior mechanical engineer scopes it and quotes a fixed fee and timeline — usually same business day.",
      },
      {
        n: "02",
        t: "We engineer & QA overnight",
        d: "Your brief reaches our team as they start their morning (GMT+7). We produce calculations and drawings, with an internal QA pass against EN/ISO/PED and your brief.",
      },
      {
        n: "03",
        t: "Deliverables before 9 AM",
        d: "You receive native files plus issued PDFs, in your templates and standards, ready to review, fabricate or issue — waiting when you arrive.",
      },
      {
        n: "04",
        t: "Revisions & overflow support",
        d: "Further revision rounds follow the same overnight cycle. Scale the team up or down as your project workload moves — no recruitment lead time, no idle licence cost.",
      },
    ],

    geo: {
      title: "Supporting mechanical engineering firms across the Netherlands",
      intro:
        "We support mechanical engineering and equipment firms across Eindhoven's Brainport region, Rotterdam, Amsterdam and the wider Netherlands with scalable offshore design capacity.",
      hubs: ["Eindhoven", "Rotterdam", "Amsterdam", "Utrecht", "The Hague (Den Haag)"],
    },

    faqs: [
      {
        q: "What mechanical engineering work can you take on?",
        a: "Equipment and skid design, pressure vessels and heat exchangers, rotating-equipment installation, mechanical calculations and FEA, fabrication and detail drawings, and CE-marking technical files. You can outsource a single calculation package, a full equipment design, or ongoing overflow.",
      },
      {
        q: "Do you design pressure equipment to PED?",
        a: "Yes. We design and verify pressure equipment to PED 2014/68/EU and EN 13445 (or ASME VIII on request), producing the calculations, drawings and technical file documentation needed to support conformity assessment for the EU market.",
      },
      {
        q: "Can you support CE marking?",
        a: "We provide the engineering documentation that underpins CE marking under the Machinery Directive 2006/42/EC and PED — risk assessments, technical construction files and supporting calculations. The declaration of conformity remains with the responsible manufacturer.",
      },
      {
        q: "How does the time-zone advantage work?",
        a: "Indonesia is GMT+7; the Netherlands is GMT+1/+2 — a 5–6 hour difference. You send a scope at end-of-day Amsterdam time; our team works it during their morning and progressed design is in your inbox before your 9 AM. It functions as an overnight extension of your team.",
      },
      {
        q: "How do you protect our designs and IP?",
        a: "We sign a mutual NDA before any files are shared, store project data on segregated access-controlled storage, and align our handling to AVG/GDPR under our ISO-certified systems. You retain full IP ownership of all deliverables.",
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
        blurb: "AutoCAD, SolidWorks and Revit/BIM drafting to NEN/EN standards.",
      },
      {
        slug: "process-safety-services",
        label: "HAZOP & SIL Verification",
        blurb: "Process safety studies and functional safety to IEC 61511.",
      },
    ],

    leadEyebrow: "Talk to an engineer",
    leadTitle: "Send your mechanical scope. Get a fixed-fee quote by tomorrow morning.",
    leadIntro:
      "Tell us about your equipment, skid, pressure-vessel, rotating-equipment or fabrication-drawing scope. A senior mechanical engineer — not a salesperson — reviews it and replies with a clear fee and timeline. NDA available before you share any files.",
    leadBullets: [
      "Designed to EN / ISO / PED standards",
      "NDA signed before files shared — AVG/GDPR aligned",
      "Fixed fee — no surprise hourly creep",
    ],
    leadNoteHtml:
      'A senior mechanical engineer on our Indonesia-based team personally reviews every scope and replies within <strong class="text-white">24 hours</strong> — often waiting in your inbox the next morning.',
    formServiceOptions: [
      "Equipment / Skid Design",
      "Pressure Vessel / Heat Exchanger",
      "Rotating Equipment & Piping",
      "Mechanical Calculations / FEA",
      "Fabrication & Detail Drawings",
      "CE Marking / Technical File",
      "Other / Not sure",
    ],
    formLocationOptions: NL_LOCATIONS,
  },
};

export default entry;
