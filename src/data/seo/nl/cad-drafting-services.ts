import { DIRECTOR, ICONS, type SeoEntry } from "../_shared";
import { NL_LOCATIONS } from "../_shared";

import plant3d from "../../../assets/projects/006_3dplant-768x385.jpg";
import uaeCad from "../../../assets/projects/002_uaecad-768x411.jpg";
import pidConv from "../../../assets/projects/007_pidconv-768x375.jpg";
import structuralDesign from "../../../assets/projects/012_structural_design-768x414.jpg";

// SPOKE — CAD drafting services — Netherlands (organic SEO)
const entry: SeoEntry = {
  slug: "cad-drafting-services",
  page: {
    title: "CAD Drafting Services for the Netherlands | AutoCAD, SolidWorks & BIM | IET",
    description:
      "CAD drafting services for Dutch engineering firms from an Indonesian team. AutoCAD, SolidWorks & Revit/BIM drafting to NEN/EN/ISO standards — overnight turnaround, NDA + AVG/GDPR compliant, trusted by FrieslandCampina.",
    metaKeywords:
      "cad drafting services, cad drafting outsourcing Netherlands, autocad drafting services, solidworks outsourcing, bim modeling services",
    h1: "CAD Drafting Services for Dutch Engineering Firms",
    breadcrumbLabel: "CAD Drafting Services",
    serviceType: "CAD Drafting Services",

    heroBadge: "Indonesia-based drafting team · Engineering partner to FrieslandCampina's Indonesian operations · Serving the Netherlands",
    heroTitleAccent: "AutoCAD, SolidWorks & Revit/BIM Drafting",
    heroIntroHtml:
      'We\'re an <strong class="text-white font-semibold">Indonesia-based engineering and drafting team</strong> — an engineering partner to <strong class="text-white font-semibold">FrieslandCampina (PT Kievit Indonesia)</strong> — providing <strong class="text-white font-semibold">CAD drafting services for the Netherlands</strong> to NEN, EN and ISO standards. Production drafting across AutoCAD, SolidWorks and Revit/BIM. Send your markups at 5 PM Amsterdam time; issue-ready drawings are waiting the next morning.',
    heroChips: [
      "AutoCAD · SolidWorks · Revit · BIM",
      "NEN / EN / ISO standards",
      "NDA + AVG/GDPR compliant",
      "Overnight turnaround — GMT+7",
    ],
    heroImage: {
      src: plant3d,
      alt: "3D plant CAD model produced by an offshore drafting team for a Dutch engineering client",
    },
    heroImageCaption: "AutoCAD, SolidWorks & BIM Drafting — NEN / EN / ISO Standards",

    certs: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "AutoCAD", "SolidWorks", "Autodesk Revit / BIM", "NEN Normen"],

    directorQuoteHtml:
      'We have delivered engineering and technical documentation for <span class="text-brand-500">FrieslandCampina\'s Indonesian operations (PT Kievit Indonesia)</span> — Dutch companies are not a new market for us. When you outsource CAD drafting to our team, you get NEN and EN-compliant deliverables that are clean, standards-consistent and ready to issue from the first drawing.',
    directorName: DIRECTOR.name,
    directorTitle: DIRECTOR.title,
    directorPhoto: DIRECTOR.photo,
    directorPhotoAlt: DIRECTOR.photoAlt,

    painEyebrow: "The bottleneck",
    painTitleHtml:
      'Is <span class="text-brand-500">drafting overhead and slow revision cycles</span> eating into your engineering margin?',
    painIntro:
      "Dutch engineering firms win the design work — then absorb the drafting cost at local rates, while a shortage of drafters caps how much they can take on. A full-time CAD drafter in the Netherlands carries a significant monthly salary plus licences and overhead, and end-of-day markups sit until the next morning anyway.",
    painCards: [
      {
        t: "High in-house drafting cost",
        d: "Dutch engineering rates are among the highest in Europe, and drafters are scarce to hire. CAD outsourcing converts a fixed salary and licence overhead into a per-project variable cost — you pay for output, not headcount.",
      },
      {
        t: "Overnight markups go nowhere",
        d: "Revision requests sent at end-of-day Amsterdam time wait until the next morning regardless. With our GMT+7 team, those markups are processed during our working morning and completed before your 9 AM.",
      },
      {
        t: "Standards & data governance risk",
        d: "European projects demand NEN/EN-compliant drafting and strict data privacy under AVG/GDPR. Getting that assurance from an unknown offshore supplier is a real risk.",
      },
    ],

    servicesEyebrow: "What we deliver",
    servicesTitle: "A remote drafting team that works while you sleep — to your standards",
    servicesIntro:
      "Plug a complete CAD drafting and BIM modeling team into your project — from production 2D drafting to coordinated 3D models. Fixed fee, NEN/EN/ISO-compliant output, your CAD templates and title blocks — delivered overnight.",
    services: [
      {
        title: "AutoCAD Drafting Services",
        body: "Production 2D AutoCAD drafting to NEN normen and EN conventions — GAs, details, schedules and markups turned into clean, issue-ready DWG files using your layer standards, title blocks and templates.",
        icon: ICONS.pencil,
      },
      {
        title: "SolidWorks Outsourcing & 3D Modeling",
        body: "SolidWorks outsourcing for mechanical parts, assemblies and fabrication drawings — GD&T to ISO/EN, BOMs, exploded views and shop-ready SLDDRW deliverables for your engineering or manufacturing workflow.",
        icon: ICONS.cube,
      },
      {
        title: "Revit / BIM Modeling",
        body: "Coordinated, LOD-appropriate Revit models — families, sheets and schedules — built to your BIM execution plan and ready to drop into your federated model for Dutch building and infrastructure projects.",
        icon: ICONS.layers,
      },
      {
        title: "Mechanical Drafting Services",
        body: "Mechanical drafting for equipment, skids and assemblies — GAs, fabrication details and BOMs produced to EN/ISO standards and ready for shop or client review.",
        icon: ICONS.bolt,
      },
      {
        title: "Structural Drafting Services",
        body: "Structural drafting for steel and concrete — framing plans, connection details and arrangement drawings drafted to the Eurocodes and EN 1090 and your project standards, checked before issue.",
        icon: ICONS.grid,
      },
      {
        title: "2D to 3D CAD Conversion",
        body: "Turn legacy drawings, PDFs and markups into accurate 3D CAD or BIM models in SolidWorks, AutoCAD or Revit — cleaned up, dimensioned to EN/ISO tolerancing conventions and aligned to your current standards.",
        icon: ICONS.swap,
      },
    ],

    stats: [
      { v: "20+", l: "Years engineering & drafting experience" },
      { v: "GMT+7", l: "Overnight delivery vs Amsterdam (CET/CEST)" },
      { v: "NEN / EN / ISO", l: "Drafting standards we follow" },
      { v: "24h", l: "Typical scope & fixed-fee quote turnaround" },
    ],

    compliance: {
      eyebrow: "Standards & regulations",
      title: "Drafted to the standards Dutch projects expect",
      intro:
        "Drawings arrive ready for your engineers to use — produced to Dutch (NEN) and European (EN/ISO) drawing conventions and aligned to the regulatory frameworks behind your deliverables.",
      items: [
        {
          t: "NEN drawing standards",
          d: "NEN title block layout, layer naming and drawing-numbering conventions so deliverables drop straight into your Dutch project structure.",
        },
        {
          t: "EN / ISO conventions",
          d: "Geometric dimensioning and tolerancing to ISO 1101 / EN, line types, scales and annotation to European drawing standards.",
        },
        {
          t: "Eurocodes & EN 1090",
          d: "Structural drafting aligned to the Eurocodes (with Dutch National Annex) and EN 1090 execution requirements for steelwork.",
        },
        {
          t: "Dutch BIM norms",
          d: "BIM models structured to your BIM execution plan and Dutch norms (e.g. Rijksvastgoedbedrijf BIM standards) for building and infrastructure projects.",
        },
      ],
    },

    whyTitle: "An offshore drafting team Dutch engineers can trust",
    whyPoints: [
      {
        t: "Proven Dutch MNC reference",
        d: "FrieslandCampina (PT Kievit Indonesia) engaged us for Biomass Power Plant consultation, BOOT and feasibility studies, HAZOP and engineering execution. Dutch companies are not a new market for us — they are an existing one.",
      },
      {
        t: "Drafts to NEN and EN",
        d: "We produce to European (EN) and Dutch (NEN) normen conventions — GD&T, title block layout, layer standards — so drawings arrive ready to use, not in need of reformatting.",
      },
      {
        t: "The overnight advantage",
        d: "Send markups at 5 PM CET and receive completed drawings before your 9 AM. Indonesia's GMT+7 timezone means your revision queue clears while you sleep.",
      },
      {
        t: "AVG/GDPR + NDA from day one",
        d: "We sign a mutual NDA before any files are shared. Storage is project-segregated, our ISO 9001/14001/45001 systems govern confidentiality, and our data handling aligns to AVG/GDPR.",
      },
    ],
    whyImages: [
      { src: structuralDesign, alt: "Structural drafting deliverable to the Eurocodes" },
      { src: uaeCad, alt: "AutoCAD production drafting deliverable" },
      { src: pidConv, alt: "2D to 3D CAD conversion from legacy drawings and P&IDs" },
    ],
    whyCalloutTitle: "AutoCAD · SolidWorks · Revit · BIM",
    whyCalloutBody:
      "drafting and modelling delivered to NEN / EN / ISO standards for MNC clients including FrieslandCampina across Oil & Gas, power, process and infrastructure.",

    dataSecurity: {
      eyebrow: "Your IP, protected",
      title: "How we protect your proprietary drawings and models",
      intro:
        "Your drawings and CAD models are valuable IP. European firms are bound by strict GDPR/AVG and IP law — here is exactly how we protect your data when you outsource drafting.",
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
          t: "AVG/GDPR-aligned handling",
          d: "Our data handling aligns to European AVG/GDPR requirements, governed by our ISO 9001/14001/45001 management systems.",
        },
        {
          t: "You retain full IP ownership",
          d: "All drawings, native CAD files and IP are yours. We claim no rights over the work product and return or destroy project data on request.",
        },
      ],
    },

    processTitle: "From your markups to issue-ready drawings — overnight",
    steps: [
      {
        n: "01",
        t: "Send the scope before you finish for the day",
        d: "Share sketches, markups, models or a drawing register, plus your CAD standards and title blocks. A senior drafter scopes it and quotes a fixed fee and timeline — usually same business day.",
      },
      {
        n: "02",
        t: "We draft & QA overnight",
        d: "Your brief reaches our team as they start their morning (GMT+7). We produce the drawings or models in AutoCAD, SolidWorks or Revit, with an internal QA pass against NEN/EN standards.",
      },
      {
        n: "03",
        t: "Files in your inbox before 9 AM",
        d: "You receive native files (DWG / SLDDRW / RVT) plus issued PDFs, in your title blocks and layer standards, ready to issue or coordinate — waiting when you arrive.",
      },
      {
        n: "04",
        t: "Revisions & ongoing overflow support",
        d: "Further revision rounds follow the same overnight cycle. Scale the drafting team up or down as your project workload moves — no recruitment lead time, no idle licence cost.",
      },
    ],

    geo: {
      title: "Supporting drafting teams across the Netherlands",
      intro:
        "We support engineering firms across Amsterdam, Rotterdam and Eindhoven — and the wider Randstad — with scalable offshore drafting. Wherever your office is, the overnight workflow is the same.",
      hubs: ["Amsterdam", "Rotterdam", "Eindhoven", "Utrecht", "The Hague (Den Haag)"],
    },

    faqs: [
      {
        q: "How much do CAD drafters charge per month?",
        a: "As a guide, a full-time CAD drafter in the Netherlands is generally in the region of €3,500–€5,500/month gross salary, before AutoCAD or SolidWorks licence fees and employer overhead. With IET there's no monthly salary at all — you pay per drawing package or project scope, with no retainer, no licences and no idle overhead. Send us your scope and we'll quote a fixed fee against it.",
      },
      {
        q: "What CAD software do you use?",
        a: "AutoCAD for 2D production drafting (DWG), SolidWorks for mechanical 3D modeling and fabrication drawings (SLDDRW/SLDPRT), and Autodesk Revit for BIM modeling (RVT). We also use plant 3D tools for equipment layout and routing. All deliverables include native files alongside issued PDFs.",
      },
      {
        q: "Do you draft to Dutch NEN and European EN standards?",
        a: "Yes. We produce to EN and NEN normen conventions — including GD&T to ISO 1101/EN, NEN title block layout, layer naming and drawing numbering — so drawings arrive ready for your engineers to use without reformatting.",
      },
      {
        q: "How does the time-zone advantage work in practice?",
        a: "Indonesia is GMT+7; the Netherlands is GMT+1/+2 — a 5–6 hour difference. You send a markup batch or new scope at end-of-day Amsterdam time; our team processes it at the start of their morning and the completed drawings are in your inbox before your 9 AM. It functions as an overnight drafting service.",
      },
      {
        q: "How do you protect our data and intellectual property?",
        a: "We sign a mutual NDA before any project files are shared — request it before even sending a scope. Files are stored on segregated, access-controlled storage, our ISO 9001/14001/45001 systems govern confidentiality, and our handling aligns to AVG/GDPR. You retain full IP ownership of all drawings.",
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
        blurb: "Equipment, skids and pressure-equipment design to EN/ISO and PED.",
      },
      {
        slug: "process-safety-services",
        label: "HAZOP & SIL Verification",
        blurb: "Process safety studies and functional safety to IEC 61511.",
      },
    ],

    leadEyebrow: "Get your free quote",
    leadTitle: "Send your scope. Get a fixed-fee quote by tomorrow morning.",
    leadIntro:
      "Tell us about your AutoCAD, SolidWorks, Revit/BIM, mechanical, structural or 2D-to-3D conversion scope. A senior drafter — not a salesperson — reviews it and replies with a clear fee and timeline. NDA available before you share any files.",
    leadBullets: [
      "Drafted to NEN / EN / ISO standards",
      "NDA signed before files shared — AVG/GDPR aligned",
      "Fixed fee — no surprise hourly creep",
    ],
    leadNoteHtml:
      'A senior drafter on our Indonesia-based team personally reviews every scope and replies within <strong class="text-white">24 hours</strong> — often waiting in your inbox the next morning.',
    formServiceOptions: [
      "AutoCAD 2D Drafting",
      "SolidWorks 3D & Fabrication Drawings",
      "Revit / BIM Modeling",
      "Mechanical Drafting",
      "Structural Drafting",
      "2D to 3D CAD Conversion",
      "Other / Not sure",
    ],
    formLocationOptions: NL_LOCATIONS,
  },
};

export default entry;
