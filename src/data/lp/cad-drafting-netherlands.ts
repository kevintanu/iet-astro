import { DIRECTOR, ICONS, type LpEntry } from "./_shared";

import plant3d from "../../assets/projects/006_3dplant-768x385.jpg";
import pidConv from "../../assets/projects/007_pidconv-768x375.jpg";
import structuralDesign from "../../assets/projects/012_structural_design-768x414.jpg";
import mechanicalDesign from "../../assets/projects/013_mechanical_design-768x417.jpg";

// AD GROUP — CAD / BIM / SolidWorks outsourcing — Netherlands market
const entry: LpEntry = {
  slug: "outsource-cad-drafting-services-netherlands",
  campaign: {
    title: "Outsource CAD Drafting Services Netherlands | AutoCAD, SolidWorks & BIM | IET",
    description:
      "Outsource CAD drafting services to an Indonesian engineering team serving the Netherlands. AutoCAD, SolidWorks & Revit/BIM drafting to EN/NEN/ISO standards — overnight turnaround, NDA + AVG/GDPR compliant, trusted by FrieslandCampina.",

    heroBadge: "Indonesia-based drafting team · Engineering partner to FrieslandCampina's Indonesian operations · Serving the Netherlands",
    heroTitle: "Outsource CAD Drafting Services to a",
    heroTitleAccent: "Remote AutoCAD, SolidWorks & BIM Team",
    heroIntroHtml:
      'We\'re an <strong class="text-white font-semibold">Indonesia-based engineering and drafting team</strong> — an engineering partner to <strong class="text-white font-semibold">FrieslandCampina (PT Kievit Indonesia)</strong> — delivering <strong class="text-white font-semibold">outsource CAD drafting services for the Netherlands</strong> to EN, NEN and ISO standards. Remote drafting services and engineering outsourcing across AutoCAD, SolidWorks and Revit/BIM. Send your markups at 5 PM Amsterdam time; completed drawings are waiting in your inbox the next morning.',
    heroChips: [
      "AutoCAD · SolidWorks · Revit · BIM",
      "European EN / NEN / ISO standards",
      "NDA + AVG/GDPR compliant",
      "Overnight turnaround — GMT+7",
    ],
    heroImage: {
      src: plant3d,
      alt: "3D plant CAD model produced by an offshore drafting team for a Dutch engineering client",
    },
    heroImageCaption: "AutoCAD, SolidWorks & BIM Drafting — EN / NEN / ISO Standards",

    certs: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "AutoCAD", "SolidWorks", "Autodesk Revit / BIM", "EN / NEN Normen drafting"],

    directorQuoteHtml:
      'We have delivered engineering studies, HAZOP and technical documentation for <span class="text-brand-500">FrieslandCampina\'s Indonesian operations (PT Kievit Indonesia)</span> — Dutch companies are not a new market for us. When you outsource CAD drafting to our team, you get EN and NEN-compliant deliverables that are clean, standards-consistent, and ready to issue from the first drawing.',
    directorName: DIRECTOR.name,
    directorTitle: DIRECTOR.title,
    directorPhoto: DIRECTOR.photo,
    directorPhotoAlt: DIRECTOR.photoAlt,

    painEyebrow: "The bottleneck",
    painTitleHtml:
      'Is <span class="text-brand-500">drafting overhead and slow revision cycles</span> eating into your engineering margin?',
    painIntro:
      "Dutch engineering firms win the design work — then absorb the drafting cost at local rates. A full-time CAD drafter in the Netherlands runs a significant monthly salary, plus AutoCAD or SolidWorks licences and overhead. And when markups arrive at 5 PM Amsterdam time, they sit until the next morning anyway.",
    painCards: [
      {
        t: "High in-house drafting cost",
        d: "Dutch engineering rates are among the highest in Europe. CAD outsourcing converts a fixed salary and licence overhead into a per-project variable cost — you pay for output, not headcount.",
      },
      {
        t: "Overnight markups go nowhere",
        d: "Revision requests sent at end-of-day Amsterdam time wait until the next morning regardless. With our GMT+7 team, those same markups are processed during our working morning and completed before your 9 AM.",
      },
      {
        t: "Standards & data governance risk",
        d: "European projects demand EN and NEN-compliant drafting and strict data privacy under AVG/GDPR. Getting that assurance from an unknown offshore supplier is a real risk.",
      },
    ],

    servicesEyebrow: "The solution",
    servicesTitle: "Engineering design and drafting services — a remote team that works while you sleep",
    servicesIntro:
      "Plug a complete CAD drafting and BIM modeling team into your project — full engineering outsourcing services, from outsourcing drawings to coordinated 3D models. Fixed fee, EN/NEN/ISO-compliant output, your CAD templates and title blocks — delivered overnight.",
    services: [
      {
        title: "AutoCAD Drafting Services",
        body: "Production 2D AutoCAD drafting to EN and NEN normen conventions — GAs, details, schedules and markups turned into clean, issue-ready DWG files using your layer standards, title blocks and templates.",
        icon: ICONS.pencil,
      },
      {
        title: "SolidWorks Outsourcing & 3D Modeling",
        body: "SolidWorks outsourcing for mechanical parts, assemblies and fabrication drawings — GD&T to ISO/EN standards, BOMs, exploded views and shop-ready SLDDRW deliverables for your engineering or manufacturing workflow.",
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
        body: "Structural drafting for steel and concrete — framing plans, connection details and arrangement drawings drafted to EN 1090 and your project standards, checked before issue.",
        icon: ICONS.grid,
      },
      {
        title: "2D to 3D CAD Conversion",
        body: "Turn legacy drawings, PDFs and markups into accurate 3D CAD or BIM models in SolidWorks, AutoCAD or Revit — fully cleaned up, dimensioned to EN/ISO tolerancing conventions and aligned to your current standards.",
        icon: ICONS.swap,
      },
    ],

    stats: [
      { v: "20+", l: "Years engineering & drafting experience" },
      { v: "GMT+7", l: "Overnight delivery vs Amsterdam (CET/CEST)" },
      { v: "NEN / EN / ISO", l: "Drafting standards we follow" },
      { v: "24h", l: "Typical scope & fixed-fee quote turnaround" },
    ],

    whyTitle: "An offshore drafting team Dutch engineers can trust",
    whyPoints: [
      {
        t: "Proven Dutch MNC reference",
        d: "FrieslandCampina (PT Kievit Indonesia) engaged us for Biomass Power Plant consultation, BOOT study, feasibility study, HAZOP, and engineering execution. Dutch companies are not a new market for us — they are an existing one.",
      },
      {
        t: "Drafts to EN and NEN normen",
        d: "We produce to European (EN) and Dutch (NEN) normen conventions — geometric dimensioning and tolerancing, title block layout, layer standards — so drawings arrive ready to use, not in need of reformatting.",
      },
      {
        t: "The overnight service advantage",
        d: "Send markups at 5 PM CET and receive completed drawings before your 9 AM the next morning. Indonesia's GMT+7 timezone means your revision queue clears while you sleep — it works as an overnight drafting service.",
      },
      {
        t: "AVG/GDPR + NDA from day one",
        d: "We sign a mutual NDA before any files are shared. Document storage is project-segregated. Our ISO 9001/14001/45001 systems govern confidentiality, and our data handling practices are aligned to European AVG/GDPR requirements.",
      },
    ],
    whyImages: [
      { src: structuralDesign, alt: "Structural drafting deliverable to EN standards" },
      { src: mechanicalDesign, alt: "Mechanical drafting and SolidWorks 3D modeling deliverable" },
      { src: pidConv, alt: "2D to 3D CAD conversion from legacy drawings and P&IDs" },
    ],
    whyCalloutTitle: "AutoCAD · SolidWorks · Revit · BIM",
    whyCalloutBody:
      "drafting and modelling delivered to EN / NEN / ISO standards for MNC clients including FrieslandCampina across Oil & Gas, power, process and infrastructure.",

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
        d: "Your brief reaches our team as they start their morning (GMT+7). We produce the drawings or models in AutoCAD, SolidWorks or Revit, with an internal QA pass against EN/NEN standards and your brief.",
      },
      {
        n: "03",
        t: "Files in your inbox before 9 AM",
        d: "You receive native files (DWG / SLDDRW / RVT) plus issued PDFs, in your title blocks and layer standards, ready to issue or coordinate — waiting when you arrive.",
      },
      {
        n: "04",
        t: "Revisions & ongoing overflow support",
        d: "Further revision rounds follow the same overnight cycle. Scale the drafting team up or down as your project workload moves — no recruitment lead time, no idle licence costs.",
      },
    ],

    faqs: [
      {
        q: "How much do CAD drafters charge per month?",
        a: "As a guide, a full-time CAD drafter in the Netherlands is generally in the region of €3,500–€5,500/month gross salary, before AutoCAD or SolidWorks licence fees and employer overhead. With IET, there's no monthly salary at all — you pay per drawing package or per project scope, with no retainer, no licences and no idle overhead, so you only pay when you actually have work to do. Send us your scope and we'll quote a fixed fee against it.",
      },
      {
        q: "What CAD drawing software do you use?",
        a: "AutoCAD for 2D production drafting (DWG files), SolidWorks for mechanical 3D modeling and fabrication drawings (SLDDRW/SLDPRT), and Autodesk Revit for BIM modeling (RVT). We also use plant 3D tools for equipment layout and routing work. All deliverables include native files alongside issued PDFs.",
      },
      {
        q: "Do you draft to Dutch NEN and European EN standards?",
        a: "Yes. We produce to EN and NEN normen conventions — including geometric dimensioning and tolerancing (GD&T) to ISO 1101/EN standards, NEN title block layout, layer naming conventions, and drawing numbering schemes. Drawings arrive ready for your engineers to use without reformatting.",
      },
      {
        q: "How does the time zone advantage work in practice?",
        a: "Indonesia is GMT+7; the Netherlands is GMT+1 (CET) or GMT+2 (CEST) — a 5–6 hour difference. You send a markup batch or new scope brief at end-of-day Amsterdam time; our team processes it at the start of their working morning and the completed drawings are in your inbox before your 9 AM. It functions as an overnight drafting service with no extra effort on your side.",
      },
      {
        q: "How do you protect our data and intellectual property?",
        a: "We sign a mutual NDA before any project files are shared — you can request this before even sending a scope. Project files are stored on segregated, access-controlled storage. Our ISO 9001/14001/45001 management systems govern document control and confidentiality on every project, and our data handling practices align to European AVG/GDPR requirements for clients in the Netherlands and EU.",
      },
    ],

    leadEyebrow: "Get your free quote",
    leadTitle: "Send your scope. Get a fixed-fee quote by tomorrow morning.",
    leadIntro:
      "Tell us about your AutoCAD, SolidWorks, Revit/BIM, mechanical, structural or 2D-to-3D conversion scope. A senior drafter — not a salesperson — reviews it and replies with a clear fee and timeline. NDA available before you share any files.",
    leadBullets: [
      "Drafted to EN / NEN / ISO standards",
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
    formLocationOptions: [
      "Amsterdam",
      "Rotterdam",
      "Eindhoven",
      "The Hague (Den Haag)",
      "Utrecht",
      "Other (Netherlands)",
      "International",
    ],
  },
};

export default entry;
