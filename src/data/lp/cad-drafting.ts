import { DIRECTOR, ICONS, type LpEntry } from "./_shared";

import plant3d from "../../assets/projects/006_3dplant-768x385.jpg";
import pidConv from "../../assets/projects/007_pidconv-768x375.jpg";
import structuralDesign from "../../assets/projects/012_structural_design-768x414.jpg";
import mechanicalDesign from "../../assets/projects/013_mechanical_design-768x417.jpg";

// AD GROUP — CAD / BIM / drafting outsourcing
const entry: LpEntry = {
  slug: "outsource-cad-drafting-services-australia",
  campaign: {
    title: "Outsource CAD Drafting Services | AutoCAD, Revit & BIM | Australia | IET",
    description:
      "Outsource CAD drafting services to an offshore drafting team for Australia. AutoCAD & Revit drafting outsourcing, BIM modeling, mechanical, structural, MEP and plant layout drafting, plus 2D to 3D CAD conversion — from ISO-certified engineers, aligned to your timezone.",

    heroBadge: "Indonesia-based drafting team · Serving Perth, Brisbane, Sydney & Melbourne",
    heroTitle: "Outsource CAD Drafting Services to a",
    heroTitleAccent: "Remote AutoCAD, Revit & BIM Team",
    heroIntroHtml:
      'We\'re an <strong class="text-white font-semibold">Indonesia-based offshore drafting team</strong> delivering <strong class="text-white font-semibold">CAD drafting services for Australia</strong> — AutoCAD and Revit drafting outsourcing, BIM modeling, mechanical, structural, MEP and plant layout drafting, plus 2D to 3D CAD conversion. World-class deliverables, offshore rates, your timezone. Clear the drafting backlog, hit the deadline, keep the margin.',
    heroChips: [
      "AutoCAD · Revit · BIM",
      "Subcontract overflow support",
      "NDA & ISO-governed",
      "Fixed-fee per drawing package",
    ],
    heroImage: {
      src: plant3d,
      alt: "3D plant CAD model produced by an offshore drafting team",
    },
    heroImageCaption: "AutoCAD, Revit & BIM Drafting Production",

    certs: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "AutoCAD", "Autodesk Revit / BIM"],

    directorQuoteHtml:
      'When you outsource CAD drafting to us, you work directly with the drafters doing the production — an Indonesia-based team delivering <span class="text-brand-500">AutoCAD, Revit and BIM deliverables that are clean, standards-compliant, and ready to issue</span> from the first drawing.',
    directorName: DIRECTOR.name,
    directorTitle: DIRECTOR.title,
    directorPhoto: DIRECTOR.photo,
    directorPhotoAlt: DIRECTOR.photoAlt,

    painEyebrow: "The bottleneck",
    painTitleHtml:
      'Is your <span class="text-brand-500">engineering drafting overflow</span> holding up drawing issue?',
    painIntro:
      "Australian engineering and design teams win the work — then drown in the drafting. Hiring a CAD drafter takes months. Revit and BIM seats sit idle between projects. And every drawing that misses the issue date pushes your schedule and your margin the wrong way.",
    painCards: [
      {
        t: "Drafting overflow",
        d: "Your project pipeline outpaces your drafting bench, and drawings queue up while milestones and IFC dates slip.",
      },
      {
        t: "Licence & overhead drag",
        d: "AutoCAD and Revit seats plus full-time drafters are expensive to carry through the quiet months between projects.",
      },
      {
        t: "Standards & QA exposure",
        d: "Without a second set of eyes, layer standards, title blocks and BIM model integrity slip — and rework surfaces late in client review.",
      },
    ],

    servicesEyebrow: "The solution",
    servicesTitle: "A remote drafting bench, on demand — when you subcontract CAD work",
    servicesIntro:
      "Plug a complete drafting and BIM modeling team into your project for as long as you need it. Fixed fee, standards-compliant output, your CAD standards and templates.",
    services: [
      {
        title: "AutoCAD Drafting Services Outsourcing",
        body: "Hand us the drafting scope and reclaim your team's calendar. Production 2D AutoCAD drafting to your layer standards, title blocks and templates — GAs, details, schedules and markups turned into clean, issue-ready drawings.",
        icon: ICONS.pencil,
      },
      {
        title: "Revit Drafting Services & BIM Modeling",
        body: "Outsource BIM modeling and Revit drafting to a team that builds coordinated, LOD-appropriate models — families, sheets and schedules — ready to drop into your federated BIM environment.",
        icon: ICONS.cube,
      },
      {
        title: "Mechanical Drafting Services",
        body: "Mechanical drafting services for equipment, skids and assemblies — GAs, fabrication details and BOMs produced to your standards and ready for shop or review.",
        icon: ICONS.bolt,
      },
      {
        title: "Structural Drafting Services",
        body: "Structural drafting services for steel and concrete — framing plans, connection details, and arrangement drawings — drafted to your project standards and checked before issue.",
        icon: ICONS.grid,
      },
      {
        title: "MEP & Plant Layout Drafting Services",
        body: "MEP drafting services outsourcing and plant layout drafting — equipment layouts, routing, and services coordination — produced in AutoCAD or Revit and coordinated against your model.",
        icon: ICONS.layers,
      },
      {
        title: "2D to 3D CAD Conversion Services",
        body: "2D to 3D CAD conversion services — turn legacy drawings, PDFs and markups into accurate 3D CAD or BIM models, fully cleaned up and aligned to your current standards.",
        icon: ICONS.swap,
      },
    ],

    stats: [
      { v: "20+", l: "Years engineering & drafting experience" },
      { v: "AutoCAD", l: "Revit · BIM · 3D modelling" },
      { v: "AEST", l: "Aligned to Australian working hours" },
      { v: "24h", l: "Typical scope & quote turnaround" },
    ],

    whyTitle: "An offshore drafting team your engineers will trust",
    whyPoints: [
      {
        t: "Indonesia-based, built for Australian projects",
        d: "We're an Indonesian drafting firm, not an Australian one — that's the point. You get CAD drafting services to your standards, AS conventions on request, and the deliverables your clients expect, at offshore rates.",
      },
      {
        t: "Drafted to your CAD standards",
        d: "We work in your templates, layer standards and title blocks — AutoCAD or Revit — so what comes back looks like your team drafted it, not an outside one.",
      },
      {
        t: "Checked before it's issued",
        d: "Every drawing and model is reviewed by a senior drafter against your standards and the brief before it reaches you, so you spend less time marking up rework.",
      },
      {
        t: "Timezone that works with yours",
        d: "We align to AWST/AEST hours so markups and revisions turn around within your working day — overflow support that keeps pace with your deadlines.",
      },
    ],
    whyImages: [
      { src: structuralDesign, alt: "Structural drafting and design deliverable" },
      { src: mechanicalDesign, alt: "Mechanical drafting and design deliverable" },
      { src: pidConv, alt: "2D to 3D CAD conversion from P&ID and legacy drawings" },
    ],
    whyCalloutTitle: "AutoCAD · Revit · BIM",
    whyCalloutBody:
      "drafting and modelling delivered to global MNC clients across Oil & Gas, power, process and infrastructure.",

    processTitle: "From markup to issue-ready drawings in four steps",
    steps: [
      {
        n: "01",
        t: "Send the scope",
        d: "Share your sketches, markups, models or drawing register, plus your CAD standards. A senior drafter scopes it and quotes a fixed fee and timeline — usually same business day.",
      },
      {
        n: "02",
        t: "We draft & check",
        d: "We produce the drawings or BIM model in AutoCAD or Revit, with an internal QA pass against your standards and the brief before anything reaches you.",
      },
      {
        n: "03",
        t: "Issue-ready delivery",
        d: "You receive native files (DWG / RVT) plus PDFs, set up to your title blocks and layer standards and ready to issue or coordinate.",
      },
      {
        n: "04",
        t: "Revisions & overflow support",
        d: "Aligned to AWST/AEST hours, we turn around markups and revisions fast — and scale the drafting team up or down as your workload moves.",
      },
    ],

    faqs: [
      {
        q: "Why outsource CAD drafting instead of hiring a drafter?",
        a: "Drafting demand is spiky. Outsourcing converts a fixed salary plus AutoCAD and Revit licences into a variable, per-project cost — you scale a remote CAD drafting team up for a busy period and back down again, with no recruitment lead time.",
      },
      {
        q: "Do you work to our CAD standards and Australian conventions?",
        a: "Yes. We draft in your templates, layer standards and title blocks, and work to AS conventions on request. We provide offshore drafting team support for Australia-based engineering, design and architecture firms across all states.",
      },
      {
        q: "Which software do you use?",
        a: "AutoCAD and Revit for 2D drafting and BIM modeling, plus 3D CAD tools for 2D to 3D conversion and plant layout work. We deliver native DWG / RVT files alongside issued PDFs.",
      },
      {
        q: "How do you protect our data and IP?",
        a: "We work under NDA, on segregated project storage, and our ISO 9001 / 14001 / 45001 management systems govern document control, confidentiality, and quality checking on every drawing and model.",
      },
      {
        q: "Can you handle subcontract overflow on short notice?",
        a: "Yes — overflow and subcontract CAD drafting work is most of what we do. Send the register and standards and we'll scope a fixed-fee package, usually within the same business day, so you can keep drawings moving.",
      },
    ],

    leadEyebrow: "Get your free quote",
    leadTitle: "Send your drawings. Get a fixed-fee quote within 24 hours.",
    leadIntro:
      "Tell us about your CAD drafting, Revit / BIM, mechanical, structural, MEP or 2D-to-3D conversion scope. A senior drafter — not a salesperson — reviews it and replies with a clear fee and timeline. No obligation.",
    leadBullets: [
      "Drafted to your CAD standards and templates",
      "NDA available before you share files",
      "Fixed fee — no surprise hourly creep",
    ],
    leadNoteHtml:
      'A senior drafter on our Indonesia-based team personally reviews every scope and replies within <strong class="text-white">24 business hours</strong>, aligned to Australian (AWST / AEST) working days.',
    formServiceOptions: [
      "AutoCAD 2D Drafting",
      "Revit / BIM Modeling",
      "Mechanical Drafting",
      "Structural Drafting",
      "MEP / Plant Layout Drafting",
      "2D to 3D CAD Conversion",
      "Other / Not sure",
    ],
    formLocationOptions: [
      "Perth, WA",
      "Brisbane, QLD",
      "Sydney, NSW",
      "Melbourne, VIC",
      "Other (Australia)",
      "International",
    ],
  },
};

export default entry;
