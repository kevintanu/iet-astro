import { DIRECTOR, ICONS, type SeoEntry } from "../_shared";
import { NL_LOCATIONS } from "../_shared";

import powerPlant from "../../../assets/projects/005_powerplantid-768x409.jpg";
import plant3d from "../../../assets/projects/006_3dplant-768x385.jpg";
import structuralDesign from "../../../assets/projects/012_structural_design-768x414.jpg";
import mechanicalDesign from "../../../assets/projects/013_mechanical_design-768x417.jpg";

// PILLAR — Engineering services outsourcing / engineering outsourcing companies — Netherlands
const entry: SeoEntry = {
  slug: "engineering-services-outsourcing",
  page: {
    title: "Engineering Services Outsourcing for the Netherlands | Offshore Engineering Partner | IET",
    description:
      "Outsource engineering services to an Indonesian engineering team serving Dutch firms. FEED, detail engineering, mechanical, CAD/BIM and process safety to NEN/EN/ISO standards — overnight turnaround, NDA + AVG/GDPR compliant, trusted by FrieslandCampina.",
    metaKeywords:
      "engineering services outsourcing, engineering outsourcing companies, offshore engineering Netherlands, outsource engineering Netherlands",
    h1: "Engineering Services Outsourcing for Dutch Firms",
    breadcrumbLabel: "Engineering Services Outsourcing",
    serviceType: "Engineering Services Outsourcing",

    heroBadge: "Indonesia-based engineering team · Engineering partner to FrieslandCampina's Indonesian operations · Serving the Netherlands",
    heroTitleAccent: "An Offshore Engineering Partner for the Netherlands",
    heroIntroHtml:
      'We\'re an <strong class="text-white font-semibold">Indonesia-based engineering consultancy</strong> — an engineering partner to <strong class="text-white font-semibold">FrieslandCampina (PT Kievit Indonesia)</strong> — providing <strong class="text-white font-semibold">engineering services outsourcing for Dutch firms</strong>. From FEED and detail engineering to mechanical design, CAD/BIM drafting and process safety studies, we deliver to NEN, EN and ISO standards. Scale your engineering capacity without the cost and lead time of hiring in the Netherlands.',
    heroChips: [
      "FEED · Detail · Mechanical · CAD/BIM · Process safety",
      "NEN / EN / ISO standards",
      "NDA + AVG/GDPR compliant",
      "Overnight turnaround — GMT+7",
    ],
    heroImage: {
      src: powerPlant,
      alt: "Power plant engineering deliverable produced by an offshore engineering team for a Dutch client",
    },
    heroImageCaption: "Engineering Services Outsourcing — NEN / EN / ISO Standards",

    certs: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "Eurocodes (EN)", "NEN Normen", "IEC 61511"],

    directorQuoteHtml:
      'We have delivered engineering studies, HAZOP and full execution for <span class="text-brand-500">FrieslandCampina\'s Indonesian operations (PT Kievit Indonesia)</span> — Dutch companies are not a new market for us. When you outsource engineering to our team, you get NEN and EN-compliant deliverables from an organisation that has worked to European expectations for years.',
    directorName: DIRECTOR.name,
    directorTitle: DIRECTOR.title,
    directorPhoto: DIRECTOR.photo,
    directorPhotoAlt: DIRECTOR.photoAlt,

    painEyebrow: "The constraint",
    painTitleHtml:
      'A <span class="text-brand-500">shortage of engineers</span> and high domestic salaries are capping how much work you can take on.',
    painIntro:
      "Dutch engineering firms across Amsterdam, Rotterdam and Eindhoven are turning down work — not for lack of demand, but for lack of engineers. The Netherlands has one of Europe's tightest technical labour markets, and salary, recruitment and overhead costs make scaling in-house slow and expensive.",
    painCards: [
      {
        t: "Engineering labour shortage",
        d: "Qualified mechanical, process and CAD engineers are scarce and slow to recruit in the Netherlands. Outsourcing gives you trained capacity on day one — no 3–6 month hiring lead time.",
      },
      {
        t: "High domestic salary cost",
        d: "Dutch engineering salaries are among the highest in Europe, before employer charges, software licences and office overhead. Outsourcing converts that fixed cost into a per-project variable cost — you pay for output, not headcount.",
      },
      {
        t: "Standards & data governance risk",
        d: "European projects demand NEN/EN/ISO-compliant deliverables and strict data privacy under AVG/GDPR. Getting that assurance from an unknown offshore supplier is a real risk — which is why our references and certifications matter.",
      },
    ],

    servicesEyebrow: "What we deliver",
    servicesTitle: "A complete engineering team you can plug into your projects",
    servicesIntro:
      "Outsource a discipline, a deliverable or an entire engineering scope. Our team covers the full project lifecycle to NEN/EN/ISO standards, using your templates and title blocks — delivered overnight on a fixed fee.",
    services: [
      {
        title: "FEED & Detail Engineering",
        body: "Front-end and detail engineering across process, mechanical, piping, structural and electrical disciplines — calculations, datasheets, drawings and specifications to EN/ISO and your project basis of design.",
        icon: ICONS.doc,
      },
      {
        title: "Mechanical Engineering Outsourcing",
        body: "Equipment, skids, pressure vessels and rotating-equipment design to EN/ISO and PED — sizing calculations, GA and fabrication drawings, and BOMs ready for shop or client review.",
        icon: ICONS.bolt,
      },
      {
        title: "CAD Drafting & BIM Modeling",
        body: "AutoCAD 2D production drafting, SolidWorks 3D modeling and Revit/BIM to NEN/EN conventions — clean, issue-ready DWG, SLDDRW and RVT files in your standards.",
        icon: ICONS.pencil,
      },
      {
        title: "Piping & Plant Design",
        body: "3D plant modeling, piping layout, isometrics and pipe stress analysis (CAESAR II) for process and energy facilities — coordinated, clash-checked and ready to issue.",
        icon: ICONS.layers,
      },
      {
        title: "Process Safety Studies",
        body: "HAZOP facilitation, LOPA and SIL determination/verification to IEC 61511 — independent process safety support for new plants and brownfield modifications.",
        icon: ICONS.check,
      },
      {
        title: "Structural Engineering",
        body: "Steel and concrete design and detailing to Eurocodes and EN 1090 — framing, connections and arrangement drawings, analysed and checked before issue.",
        icon: ICONS.grid,
      },
    ],

    stats: [
      { v: "20+", l: "Years engineering experience" },
      { v: "GMT+7", l: "Overnight delivery vs Amsterdam (CET/CEST)" },
      { v: "NEN / EN / ISO", l: "Standards we engineer to" },
      { v: "24h", l: "Typical scope & fixed-fee quote turnaround" },
    ],

    compliance: {
      eyebrow: "Standards & regulations",
      title: "Engineered to the codes Dutch and European projects require",
      intro:
        "Every deliverable is produced to recognised Dutch (NEN) and European (EN/ISO) standards, and aligned to the regulatory frameworks that govern engineering in the Netherlands and the EU.",
      items: [
        {
          t: "NEN & EN / ISO standards",
          d: "Dutch NEN normen alongside European EN and ISO standards for drawings, calculations, tolerancing and documentation — so deliverables arrive ready to use, not reformat.",
        },
        {
          t: "Eurocodes (EN 1990–1999)",
          d: "Structural and civil work analysed and detailed to the Eurocodes with the Dutch National Annex where applicable.",
        },
        {
          t: "CE marking & Machinery Directive",
          d: "Mechanical equipment and assemblies engineered to support CE marking under the Machinery Directive 2006/42/EC, with the technical file documentation to back it.",
        },
        {
          t: "PED, ATEX & functional safety",
          d: "Pressure equipment to PED 2014/68/EU, hazardous-area work to ATEX, and functional safety to IEC 61508/61511 where your scope demands it.",
        },
      ],
    },

    whyTitle: "An engineering partner Dutch firms can trust",
    whyPoints: [
      {
        t: "Proven Dutch MNC reference",
        d: "FrieslandCampina (PT Kievit Indonesia) engaged us for Biomass Power Plant consultation, BOOT and feasibility studies, HAZOP and engineering execution. Dutch companies are not a new market for us — they are an existing one.",
      },
      {
        t: "Engineers to NEN and EN",
        d: "We work to European (EN) and Dutch (NEN) normen — calculation conventions, title block layout, layer and document standards — so deliverables integrate directly into your workflow.",
      },
      {
        t: "The overnight advantage",
        d: "Send a scope at 5 PM CET and receive progressed work before your 9 AM. Indonesia's GMT+7 timezone effectively extends your working day and clears your queue while you sleep.",
      },
      {
        t: "AVG/GDPR + NDA from day one",
        d: "We sign a mutual NDA before any files are shared. Project data is segregated and access-controlled, governed by our ISO 9001/14001/45001 systems and aligned to European AVG/GDPR.",
      },
    ],
    whyImages: [
      { src: structuralDesign, alt: "Structural engineering deliverable to Eurocodes" },
      { src: mechanicalDesign, alt: "Mechanical engineering and design deliverable" },
      { src: plant3d, alt: "3D plant model produced for an engineering outsourcing client" },
    ],
    whyCalloutTitle: "FEED · Detail · Mechanical · CAD/BIM · Safety",
    whyCalloutBody:
      "full-lifecycle engineering delivered to NEN / EN / ISO standards for MNC clients including FrieslandCampina across Oil & Gas, power, process and infrastructure.",

    dataSecurity: {
      eyebrow: "Your IP, protected",
      title: "How we protect your proprietary engineering designs",
      intro:
        "European firms are bound by strict GDPR/AVG and IP law. We treat your designs as if they were our own — here is exactly how your data is protected when you outsource to us.",
      cards: [
        {
          t: "NDA before any files are shared",
          d: "A mutual non-disclosure agreement is signed before you send a single drawing — you can request it before even scoping the work.",
        },
        {
          t: "Secure, segregated storage",
          d: "Project files live on access-controlled, project-segregated storage. Access is limited to the engineers assigned to your project, with no co-mingling between clients.",
        },
        {
          t: "AVG/GDPR-aligned handling",
          d: "Our data handling practices are aligned to European AVG/GDPR requirements for clients in the Netherlands and EU, governed by our ISO-certified management systems.",
        },
        {
          t: "You retain full IP ownership",
          d: "All deliverables, native files and design IP are yours. We claim no rights over the work product and return or destroy project data on request.",
        },
      ],
    },

    processTitle: "From your scope to issue-ready deliverables — overnight",
    steps: [
      {
        n: "01",
        t: "Send the scope",
        d: "Share your basis of design, drawings, datasheets or a deliverables register, plus your standards and templates. A senior engineer scopes it and quotes a fixed fee and timeline — usually same business day.",
      },
      {
        n: "02",
        t: "We engineer & QA overnight",
        d: "Your brief reaches our team as they start their morning (GMT+7). We produce the engineering or drawings, with an internal QA pass against NEN/EN/ISO standards and your brief.",
      },
      {
        n: "03",
        t: "Deliverables before 9 AM",
        d: "You receive native files plus issued PDFs, in your templates and standards, ready to review or issue — waiting when you arrive.",
      },
      {
        n: "04",
        t: "Scale up or down",
        d: "Add or release capacity as your project workload moves — no recruitment lead time, no idle salary or licence cost. Treat us as an elastic extension of your team.",
      },
    ],

    geo: {
      title: "Supporting engineering firms across the Netherlands",
      intro:
        "We support engineering firms across Amsterdam, Rotterdam and Eindhoven — and the wider Randstad and Brainport regions — with scalable offshore engineering and drafting. Wherever your office is, the overnight workflow is the same.",
      hubs: ["Amsterdam", "Rotterdam", "Eindhoven", "Utrecht", "The Hague (Den Haag)"],
    },

    faqs: [
      {
        q: "What is engineering services outsourcing?",
        a: "Engineering services outsourcing means delegating engineering work — calculations, drawings, models, studies or whole disciplines — to an external team instead of hiring in-house. You keep design ownership and direction; we provide the trained capacity and deliverables to your standards, on a per-project fixed fee.",
      },
      {
        q: "Why outsource engineering to Indonesia rather than hire in the Netherlands?",
        a: "The Netherlands has a tight engineering labour market and high salary costs, so scaling in-house is slow and expensive. Outsourcing to our Indonesia-based team gives you trained engineers on day one, NEN/EN/ISO-compliant output, and a GMT+7 timezone that turns your overnight into productive working hours — at a fraction of the fully-loaded cost of a Dutch hire.",
      },
      {
        q: "Which engineering disciplines do you cover?",
        a: "FEED and detail engineering, mechanical, piping and plant design, structural, electrical and instrumentation, CAD/BIM drafting, and process safety (HAZOP, LOPA, SIL). You can outsource a single deliverable, one discipline, or an entire engineering scope.",
      },
      {
        q: "Do you work to Dutch NEN and European standards?",
        a: "Yes. We produce to Dutch NEN normen and European EN/ISO standards, including the Eurocodes with Dutch National Annex, and align to regulatory frameworks such as the Machinery Directive, PED and IEC 61511 where your scope requires.",
      },
      {
        q: "How do you protect our data and intellectual property?",
        a: "We sign a mutual NDA before any project files are shared. Files are stored on segregated, access-controlled storage, our ISO 9001/14001/45001 systems govern confidentiality, and our data handling aligns to European AVG/GDPR. You retain full IP ownership of all deliverables.",
      },
    ],

    relatedLinks: [
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
      {
        slug: "process-safety-services",
        label: "HAZOP & SIL Verification",
        blurb: "Process safety studies and functional safety to IEC 61511.",
      },
    ],

    leadEyebrow: "Talk to an engineer",
    leadTitle: "Tell us your scope. Get a fixed-fee quote by tomorrow morning.",
    leadIntro:
      "Describe the engineering work you'd like to outsource — a discipline, a deliverable or a full scope. A senior engineer — not a salesperson — reviews it and replies with a clear fee and timeline. NDA available before you share any files.",
    leadBullets: [
      "Delivered to NEN / EN / ISO standards",
      "NDA signed before files shared — AVG/GDPR aligned",
      "Fixed fee — no surprise hourly creep",
    ],
    leadNoteHtml:
      'A senior engineer on our Indonesia-based team personally reviews every scope and replies within <strong class="text-white">24 hours</strong> — often waiting in your inbox the next morning.',
    formServiceOptions: [
      "FEED / Detail Engineering",
      "Mechanical Engineering",
      "CAD Drafting / BIM",
      "Piping & Plant Design",
      "Process Safety (HAZOP / SIL)",
      "Structural Engineering",
      "Other / Not sure",
    ],
    formLocationOptions: NL_LOCATIONS,
  },
};

export default entry;
