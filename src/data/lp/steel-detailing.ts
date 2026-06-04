import { DEFAULT_LOCATIONS, DIRECTOR, ICONS, type LpEntry } from "./_shared";

import structuralDesign from "../../assets/projects/012_structural_design-768x414.jpg";
import circularPlatform from "../../assets/projects/010_circularplatform-768x416.jpg";
import skidInPlace from "../../assets/projects/009_skidinplace-768x353.jpg";
import coalHandling3d from "../../assets/projects/023_coal_handling_3d-768x396.jpg";

// AD GROUP — Structural steel detailing / shop drawings (Tekla)
const entry: LpEntry = {
  slug: "outsource-structural-steel-detailing-australia",
  campaign: {
    title: "Outsource Structural Steel Detailing & Shop Drawings | Tekla | Australia | IET",
    description:
      "Outsource structural steel detailing to an offshore team for Australia. Tekla shop drawings, steel fabrication drawings, connection detailing and rebar detailing outsourcing — AISC / AWS D1.1 / AS standards, from ISO-certified detailers aligned to your timezone.",

    heroBadge: "Indonesia-based detailing team · Serving Perth, Brisbane, Sydney & Melbourne",
    heroTitle: "Outsource Structural Steel Detailing to a",
    heroTitleAccent: "Remote Tekla Detailing Team",
    heroIntroHtml:
      'We\'re an <strong class="text-white font-semibold">Indonesia-based structural steel detailing team</strong> delivering <strong class="text-white font-semibold">shop drawings and fabrication drawings for Australia</strong> — Tekla Structures detailing, steel connection detailing, rebar detailing and industrial structural drafting. Fabrication-ready deliverables, offshore rates, your timezone. Clear the detailing backlog, hold the fab schedule, keep the margin.',
    heroChips: [
      "Tekla Structures · SDS/2 · Advance Steel",
      "AISC / AWS D1.1 / AS standards",
      "NDA & ISO-governed",
      "Fixed-fee per drawing package",
    ],
    heroImage: {
      src: structuralDesign,
      alt: "Structural steel detailing model and shop drawings produced in Tekla",
    },
    heroImageCaption: "Tekla Structural Steel Detailing & Shop Drawings",

    certs: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "AISC", "AWS D1.1"],

    directorQuoteHtml:
      'When you outsource steel detailing to us, you work directly with the detailers doing the production — an Indonesia-based team delivering <span class="text-brand-500">Tekla shop drawings and connection details that are accurate, fabrication-ready, and clash-free</span> from the first submission.',
    directorName: DIRECTOR.name,
    directorTitle: DIRECTOR.title,
    directorPhoto: DIRECTOR.photo,
    directorPhotoAlt: DIRECTOR.photoAlt,

    painEyebrow: "The bottleneck",
    painTitleHtml:
      'Is your <span class="text-brand-500">steel detailing backlog</span> holding up fabrication?',
    painIntro:
      "Australian fabricators and engineering teams win the contract — then hit the wall on detailing capacity. Experienced Tekla detailers are scarce and expensive to hire. And every shop drawing that misses its date stalls the workshop, the steel order, and your margin.",
    painCards: [
      {
        t: "Detailing overflow",
        d: "Your fab pipeline outpaces your detailing bench, and shop drawings queue up while the workshop waits and fabrication dates slip.",
      },
      {
        t: "Scarce, costly detailers",
        d: "Senior Tekla detailers are hard to find and expensive to carry through the quiet months between projects.",
      },
      {
        t: "Connection & accuracy risk",
        d: "Without independent checking, connection detailing errors and clashes surface on the shop floor — where rework is slow and costly.",
      },
    ],

    servicesEyebrow: "The solution",
    servicesTitle: "A remote detailing bench, on demand — when you outsource shop drawings",
    servicesIntro:
      "Plug a complete steel detailing team into your project for as long as you need it. Fixed fee, fabrication-ready output, your standards and connection design.",
    services: [
      {
        title: "Structural Steel Detailing Services",
        body: "Full structural steel detailing services in Tekla Structures — accurate 3D models, GAs, assembly and single-part drawings — built to your project standards and ready for the workshop.",
        icon: ICONS.cube,
      },
      {
        title: "Steel Shop Drawing Services",
        body: "Hand us the detailing scope and reclaim your team's calendar. We produce steel shop drawings — fabrication and erection drawings, CNC/NC files and bolt lists — that drop straight into your fab workflow.",
        icon: ICONS.pencil,
      },
      {
        title: "Tekla Structural Detailing Outsourcing",
        body: "Tekla structural detailing outsourcing from experienced detailers — full modelling, reports, IFC export and drawing production — so you scale capacity without buying seats or recruiting.",
        icon: ICONS.bolt,
      },
      {
        title: "Steel Connection Detailing Outsourcing",
        body: "Steel connection detailing outsourcing to AISC and AS standards — standard and engineered connections detailed per your connection design, checked for fit and constructability before issue.",
        icon: ICONS.wrench,
      },
      {
        title: "Rebar Detailing Services Outsourcing",
        body: "Rebar detailing services outsourcing — reinforcement drawings, bar bending schedules and placing drawings for concrete works, produced to your standards alongside the steel package.",
        icon: ICONS.grid,
      },
      {
        title: "Industrial Structural Drafting",
        body: "Industrial structural drafting and structural CAD drafting services for platforms, supports, pipe racks and plant steel — coordinated with your layouts and ready to fabricate.",
        icon: ICONS.layers,
      },
    ],

    stats: [
      { v: "20+", l: "Years structural detailing experience" },
      { v: "Tekla", l: "AISC / AWS D1.1 / AS standards" },
      { v: "AEST", l: "Aligned to Australian working hours" },
      { v: "24h", l: "Typical scope & quote turnaround" },
    ],

    whyTitle: "An offshore detailing team your fabricators will trust",
    whyPoints: [
      {
        t: "Indonesia-based, built for Australian projects",
        d: "We're an Indonesian detailing firm, not an Australian one — that's the point. You get steel detailing to AISC, AWS D1.1 and AS standards, your connection design, and the deliverables your fabricators expect, at offshore rates.",
      },
      {
        t: "Detailed to your standards",
        d: "We work in Tekla to your model setup, profiles, naming and drawing templates — so what comes back integrates cleanly with your fabrication workflow and erection sequence.",
      },
      {
        t: "Checked before it's issued",
        d: "Every model and shop drawing is reviewed by a senior detailer against your standards and the connection design before it reaches you, so errors don't reach the shop floor.",
      },
      {
        t: "Timezone that works with yours",
        d: "We align to AWST/AEST hours so RFIs, markups and revisions turn around within your working day — overflow detailing that keeps the workshop fed.",
      },
    ],
    whyImages: [
      { src: circularPlatform, alt: "Structural steel platform detailing and shop drawings" },
      { src: skidInPlace, alt: "Structural steel skid framing and fabrication drawings" },
      { src: coalHandling3d, alt: "Industrial structural steel 3D detailing model" },
    ],
    whyCalloutTitle: "Tekla Structures",
    whyCalloutBody:
      "steel detailing and shop drawings delivered to global MNC clients and fabricators across Oil & Gas, power, mining and infrastructure.",

    processTitle: "From model to fabrication-ready drawings in four steps",
    steps: [
      {
        n: "01",
        t: "Send the scope",
        d: "Share your design drawings, connection design and standards, plus tonnage or drawing register. A senior detailer scopes it and quotes a fixed fee and timeline — usually same business day.",
      },
      {
        n: "02",
        t: "We model & check",
        d: "We build the Tekla model and produce shop and erection drawings, with an internal QA pass against your standards and connection design before anything reaches you.",
      },
      {
        n: "03",
        t: "Fabrication-ready delivery",
        d: "You receive the native Tekla model, GAs, assembly and single-part drawings, NC/CNC files, bolt and material lists — ready for approval and the workshop.",
      },
      {
        n: "04",
        t: "Revisions & overflow support",
        d: "Aligned to AWST/AEST hours, we turn around RFIs, markups and revisions fast — and scale the detailing team up or down as your fab workload moves.",
      },
    ],

    faqs: [
      {
        q: "Why outsource steel detailing instead of hiring a detailer?",
        a: "Detailing demand follows your fab contracts, which are spiky. Outsourcing converts a fixed salary plus a Tekla seat into a variable, per-project cost — you scale a remote detailing team up for a big job and back down again, with no recruitment lead time.",
      },
      {
        q: "Do you detail to AISC, AWS and Australian standards?",
        a: "Yes. We provide structural steel detailing services to AISC and AWS D1.1, and to AS standards (AS 4100, AS/NZS 5131) on request, working from your connection design, profiles and drawing templates.",
      },
      {
        q: "Which detailing software do you use?",
        a: "Primarily Tekla Structures, with SDS/2 and Advance Steel as required. We deliver the native model plus GAs, assembly and single-part shop drawings, NC/CNC files, and bolt and material lists.",
      },
      {
        q: "Can you handle connection and rebar detailing too?",
        a: "Yes — steel connection detailing per your engineer's connection design, plus rebar detailing (bar bending schedules and placing drawings) for the concrete works, all coordinated within the same package.",
      },
      {
        q: "How do you protect our data and IP?",
        a: "We work under NDA, on segregated project storage, and our ISO 9001 / 14001 / 45001 management systems govern document control, confidentiality, and quality checking on every model and drawing.",
      },
    ],

    leadEyebrow: "Get your free quote",
    leadTitle: "Send your drawings. Get a fixed-fee quote within 24 hours.",
    leadIntro:
      "Tell us about your steel detailing, shop drawings, Tekla modelling, connection detailing or rebar scope. A senior detailer — not a salesperson — reviews it and replies with a clear fee and timeline. No obligation.",
    leadBullets: [
      "Detailed to AISC / AWS D1.1 / AS standards",
      "NDA available before you share files",
      "Fixed fee — no surprise hourly creep",
    ],
    leadNoteHtml:
      'A senior detailer on our Indonesia-based team personally reviews every scope and replies within <strong class="text-white">24 business hours</strong>, aligned to Australian (AWST / AEST) working days.',
    formServiceOptions: [
      "Structural Steel Detailing (Tekla)",
      "Steel Shop / Fabrication Drawings",
      "Steel Connection Detailing",
      "Rebar Detailing",
      "Industrial Structural Drafting",
      "Other / Not sure",
    ],
    formLocationOptions: DEFAULT_LOCATIONS,
  },
};

export default entry;
