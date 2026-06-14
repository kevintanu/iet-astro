import { DIRECTOR, ICONS, type SeoEntry } from "../_shared";
import { AE_LOCATIONS } from "../_shared";

import uaeCad from "../../../assets/projects/002_uaecad-768x411.jpg";
import plant3d from "../../../assets/projects/006_3dplant-768x385.jpg";
import pidConv from "../../../assets/projects/007_pidconv-768x375.jpg";
import structuralDesign from "../../../assets/projects/012_structural_design-768x414.jpg";

// SPOKE — CAD drafting services — UAE (organic SEO)
const entry: SeoEntry = {
  slug: "cad-drafting-services",
  page: {
    title: "CAD Drafting Services in the UAE | Dubai & Abu Dhabi | AutoCAD, SolidWorks & BIM | IET",
    description:
      "CAD drafting services for UAE engineering firms from an Indonesian team. AutoCAD, SolidWorks & Revit/BIM drafting to ASME/ISO and ADNOC standards for Dubai, Abu Dhabi and Sharjah — NDA + UAE PDPL compliant, overlapping Gulf working hours.",
    metaKeywords:
      "cad drafting services, cad drafting outsourcing UAE, autocad drafting Dubai Abu Dhabi, solidworks outsourcing, bim modeling UAE",
    h1: "CAD Drafting Services in the UAE",
    breadcrumbLabel: "CAD Drafting Services",
    serviceType: "CAD Drafting Services",

    heroBadge: "Indonesia-based drafting team · ISO 9001/14001/45001 certified · Serving Dubai, Abu Dhabi & the UAE",
    heroTitleAccent: "AutoCAD, SolidWorks & Revit/BIM Drafting",
    heroIntroHtml:
      'We\'re an <strong class="text-white font-semibold">ISO-certified Indonesia-based engineering and drafting team</strong> with 20+ years across Oil &amp; Gas, power and process — providing <strong class="text-white font-semibold">CAD drafting services for the UAE</strong> to ASME, ISO and ADNOC standards. Production drafting across AutoCAD, SolidWorks and Revit/BIM for clients in Dubai, Abu Dhabi and Sharjah, on a fast turnaround within your working hours.',
    heroChips: [
      "AutoCAD · SolidWorks · Revit · BIM",
      "ASME Y14.5 · ISO · ADNOC drawing standards",
      "NDA + UAE PDPL compliant",
      "Overlapping Gulf working hours — GMT+7",
    ],
    heroImage: {
      src: uaeCad,
      alt: "CAD drafting deliverable produced by an offshore team for a UAE engineering project",
    },
    heroImageCaption: "AutoCAD, SolidWorks & BIM Drafting — ASME / ISO Standards",

    certs: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "AutoCAD", "SolidWorks", "Autodesk Revit / BIM", "ASME Y14.5"],

    directorQuoteHtml:
      'International codes are how we work every day — <span class="text-brand-500">ASME, ISO and operator drawing standards</span>. When you outsource CAD drafting to our team, you get clean, standards-consistent deliverables built to the conventions UAE and ADNOC-ecosystem projects expect, ready to issue from the first drawing.',
    directorName: DIRECTOR.name,
    directorTitle: DIRECTOR.title,
    directorPhoto: DIRECTOR.photo,
    directorPhotoAlt: DIRECTOR.photoAlt,

    painEyebrow: "The bottleneck",
    painTitleHtml:
      'Is <span class="text-brand-500">drafting capacity</span> capping how much project work you can take on?',
    painIntro:
      "UAE engineering firms and EPC contractors win the design work — then have to resource the drafting at local expat rates, and ramp it up and down with each award. A flexible offshore drafting team lets you absorb project peaks without carrying idle headcount between them.",
    painCards: [
      {
        t: "Drafting capacity is hard to flex",
        d: "Hiring and releasing drafters to match project peaks is slow and costly in the UAE. Outsourcing converts a fixed salary and licence overhead into a per-project variable cost — you pay for output, not headcount.",
      },
      {
        t: "Tight EPC delivery dates",
        d: "Drawings sit on the critical path. With working hours that overlap yours, we progress markups and new scope during your day and return them on a fast turnaround — keeping issue dates on track.",
      },
      {
        t: "Standards & data assurance",
        d: "UAE projects expect ASME/ISO and operator (ADNOC) drawing conventions, and your drawings are sensitive IP that must stay protected under UAE PDPL. That assurance has to come from a partner who knows the standards.",
      },
    ],

    servicesEyebrow: "What we deliver",
    servicesTitle: "A remote drafting team that works in your hours — to your standards",
    servicesIntro:
      "Plug a complete CAD drafting and BIM modeling team into your project — from production 2D drafting to coordinated 3D models. Fixed fee, ASME/ISO-compliant output, your CAD templates and title blocks — on a fast turnaround.",
    services: [
      {
        title: "AutoCAD Drafting Services",
        body: "Production 2D AutoCAD drafting to ASME/ISO and operator drawing conventions — GAs, details, schedules and markups turned into clean, issue-ready DWG files using your layer standards, title blocks and templates.",
        icon: ICONS.pencil,
      },
      {
        title: "SolidWorks Outsourcing & 3D Modeling",
        body: "SolidWorks outsourcing for mechanical parts, assemblies and fabrication drawings — GD&T to ASME Y14.5 / ISO, BOMs, exploded views and shop-ready SLDDRW deliverables for your engineering or manufacturing workflow.",
        icon: ICONS.cube,
      },
      {
        title: "Revit / BIM Modeling",
        body: "Coordinated, LOD-appropriate Revit models — families, sheets and schedules — built to your BIM execution plan and the Dubai BIM mandate, ready to drop into your federated model for UAE building and infrastructure projects.",
        icon: ICONS.layers,
      },
      {
        title: "Mechanical Drafting Services",
        body: "Mechanical drafting for equipment, skids and assemblies — GAs, fabrication details and BOMs produced to ASME/ISO standards and ready for shop or client review.",
        icon: ICONS.bolt,
      },
      {
        title: "Structural Drafting Services",
        body: "Structural drafting for steel and concrete — framing plans, connection details and arrangement drawings drafted to AISC/ACI and the Abu Dhabi International Building Code / Dubai Building Code, checked before issue.",
        icon: ICONS.grid,
      },
      {
        title: "2D to 3D CAD Conversion",
        body: "Turn legacy drawings, PDFs and markups into accurate 3D CAD or BIM models in SolidWorks, AutoCAD or Revit — cleaned up, dimensioned to ASME/ISO tolerancing conventions and aligned to your current standards.",
        icon: ICONS.swap,
      },
    ],

    stats: [
      { v: "20+", l: "Years engineering & drafting experience" },
      { v: "ASME / ISO", l: "Drafting standards we follow" },
      { v: "~5h", l: "Daily overlap with UAE working hours" },
      { v: "24h", l: "Typical scope & fixed-fee quote turnaround" },
    ],

    compliance: {
      eyebrow: "Standards & regulations",
      title: "Drafted to the standards UAE projects expect",
      intro:
        "Drawings arrive ready for your engineers to use — produced to the international drawing conventions UAE and ADNOC-ecosystem projects run on, and aligned to local building codes for building/infrastructure scope.",
      items: [
        {
          t: "ASME Y14.5 & ISO conventions",
          d: "Geometric dimensioning and tolerancing to ASME Y14.5 / ISO 1101, line types, scales and annotation to international drawing standards.",
        },
        {
          t: "Operator / ADNOC drawing standards",
          d: "Title block layout, layer naming and drawing-numbering conventions to operator and ADNOC standards so deliverables drop straight into your project structure.",
        },
        {
          t: "ADIBC & Dubai Building Code",
          d: "Structural and building drafting aligned to the Abu Dhabi International Building Code (ADIBC) and Dubai Building Code for building and infrastructure projects.",
        },
        {
          t: "Dubai BIM mandate",
          d: "BIM models structured to your BIM execution plan and the Dubai BIM requirements for qualifying buildings and infrastructure.",
        },
      ],
    },

    whyTitle: "An offshore drafting team UAE engineers can trust",
    whyPoints: [
      {
        t: "Fluent in ASME and ISO drafting",
        d: "We produce to ASME Y14.5 / ISO conventions and operator drawing standards — GD&T, title block layout, layer standards — so drawings arrive ready to use, not in need of reformatting.",
      },
      {
        t: "ISO-certified management systems",
        d: "Our ISO 9001/14001/45001 systems govern drawing QA, document control and confidentiality on every project.",
      },
      {
        t: "Overlapping working hours",
        d: "Indonesia (GMT+7) overlaps the UAE (GMT+4) working day by around five hours — send markups in your morning, clarify in real time, and receive completed drawings on a fast turnaround.",
      },
      {
        t: "UAE PDPL + NDA from day one",
        d: "We sign a mutual NDA before any files are shared. Storage is project-segregated, our ISO systems govern confidentiality, and our handling aligns to the UAE PDPL (and DIFC/ADGM for free-zone clients).",
      },
    ],
    whyImages: [
      { src: structuralDesign, alt: "Structural drafting deliverable to ADIBC / AISC" },
      { src: plant3d, alt: "3D plant CAD model produced for a UAE project" },
      { src: pidConv, alt: "2D to 3D CAD conversion from legacy drawings and P&IDs" },
    ],
    whyCalloutTitle: "AutoCAD · SolidWorks · Revit · BIM",
    whyCalloutBody:
      "drafting and modelling delivered to ASME / ISO and ADNOC standards across Oil & Gas, power, process and infrastructure for the UAE market.",

    dataSecurity: {
      eyebrow: "Your IP, protected",
      title: "How we protect your proprietary drawings and models",
      intro:
        "Your drawings and CAD models are valuable IP, and UAE law sets clear data-protection obligations. Here is exactly how we protect your data when you outsource drafting.",
      cards: [
        {
          t: "NDA before any files are shared",
          d: "A mutual non-disclosure agreement is signed before you send a single drawing — request it before even scoping the work.",
        },
        {
          t: "Secure, segregated storage",
          d: "Drawings and models live on access-controlled, project-segregated storage, accessible only to the drafters on your project — no co-mingling between clients.",
        },
        {
          t: "UAE PDPL-aligned handling",
          d: "Our data handling aligns to the UAE Personal Data Protection Law, and to DIFC / ADGM regimes for clients in those free zones.",
        },
        {
          t: "You retain full IP ownership",
          d: "All drawings, native CAD files and IP are yours. We claim no rights over the work product and return or destroy project data on request.",
        },
      ],
    },

    processTitle: "From your markups to issue-ready drawings",
    steps: [
      {
        n: "01",
        t: "Send the scope",
        d: "Share sketches, markups, models or a drawing register, plus your CAD standards and title blocks. A senior drafter scopes it and quotes a fixed fee and timeline — usually same business day.",
      },
      {
        n: "02",
        t: "We draft & QA in overlapping hours",
        d: "We produce the drawings or models in AutoCAD, SolidWorks or Revit during hours that overlap yours, with an internal QA pass against ASME/ISO standards and real-time clarification when needed.",
      },
      {
        n: "03",
        t: "Files on a fast turnaround",
        d: "You receive native files (DWG / SLDDRW / RVT) plus issued PDFs, in your title blocks and layer standards, ready to issue or coordinate — typically same day or by your next morning.",
      },
      {
        n: "04",
        t: "Revisions & ongoing overflow support",
        d: "Further revision rounds follow the same cycle. Scale the drafting team up or down as your project workload moves — no recruitment lead time, no idle licence cost.",
      },
    ],

    geo: {
      title: "Supporting drafting teams across the UAE",
      intro:
        "We support engineering firms and EPC contractors across Dubai, Abu Dhabi and Sharjah — and the industrial hubs of Jebel Ali, KIZAD and Musaffah — with scalable offshore drafting.",
      hubs: ["Dubai", "Abu Dhabi", "Sharjah", "Jebel Ali (JAFZA)", "KIZAD / Musaffah", "Ruwais"],
    },

    faqs: [
      {
        q: "How does outsourced CAD drafting pricing work?",
        a: "There's no monthly salary or idle licence cost — you pay per drawing package or per project scope, with no retainer. Send us your scope and we'll quote a fixed fee against it, so you only pay when you actually have drafting work.",
      },
      {
        q: "What CAD software do you use?",
        a: "AutoCAD for 2D production drafting (DWG), SolidWorks for mechanical 3D modeling and fabrication drawings (SLDDRW/SLDPRT), and Autodesk Revit for BIM modeling (RVT). We also use plant 3D tools for equipment layout and routing. All deliverables include native files alongside issued PDFs.",
      },
      {
        q: "Do you draft to ASME, ISO and ADNOC drawing standards?",
        a: "Yes. We produce to ASME Y14.5 / ISO conventions and operator/ADNOC drawing standards — GD&T, title block layout, layer naming and drawing numbering — so drawings arrive ready for your engineers to use without reformatting. For building scope we work to ADIBC / Dubai Building Code and the Dubai BIM mandate.",
      },
      {
        q: "How does the time-zone overlap work in practice?",
        a: "Indonesia is GMT+7; the UAE is GMT+4 — only three hours apart, so our working days overlap by around five hours. You send a markup batch or new scope in your morning, we process it during the overlap, and completed drawings come back on a same-day or next-morning turnaround.",
      },
      {
        q: "How do you protect our data and intellectual property?",
        a: "We sign a mutual NDA before any project files are shared. Files are stored on segregated, access-controlled storage, our ISO 9001/14001/45001 systems govern confidentiality, and our handling aligns to the UAE PDPL (and DIFC/ADGM for free-zone clients). You retain full IP ownership of all drawings.",
      },
    ],

    relatedLinks: [
      {
        slug: "engineering-services-outsourcing",
        label: "Engineering Services Outsourcing",
        blurb: "The full picture: FEED, detail, mechanical and process safety.",
      },
      {
        slug: "outsource-mechanical-engineering",
        label: "Outsource Mechanical Engineering",
        blurb: "Equipment, skids and pressure-equipment design to ASME VIII and API.",
      },
      {
        slug: "process-safety-services",
        label: "HAZOP & SIL Verification",
        blurb: "Process safety studies and functional safety to IEC 61511.",
      },
    ],

    leadEyebrow: "Get your free quote",
    leadTitle: "Send your scope. Get a fixed-fee quote fast.",
    leadIntro:
      "Tell us about your AutoCAD, SolidWorks, Revit/BIM, mechanical, structural or 2D-to-3D conversion scope. A senior drafter — not a salesperson — reviews it and replies with a clear fee and timeline. NDA available before you share any files.",
    leadBullets: [
      "Drafted to ASME / ISO and ADNOC standards",
      "NDA signed before files shared — UAE PDPL aligned",
      "Fixed fee — no surprise hourly creep",
    ],
    leadNoteHtml:
      'A senior drafter on our Indonesia-based team personally reviews every scope and replies within <strong class="text-white">24 hours</strong> — our day overlaps yours for fast, real-time turnaround.',
    formServiceOptions: [
      "AutoCAD 2D Drafting",
      "SolidWorks 3D & Fabrication Drawings",
      "Revit / BIM Modeling",
      "Mechanical Drafting",
      "Structural Drafting",
      "2D to 3D CAD Conversion",
      "Other / Not sure",
    ],
    formLocationOptions: AE_LOCATIONS,
  },
};

export default entry;
