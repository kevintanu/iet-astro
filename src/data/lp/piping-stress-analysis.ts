import { DEFAULT_LOCATIONS, DIRECTOR, ICONS, type LpEntry } from "./_shared";

import pipeStress from "../../assets/projects/014_pipe_stress_analysis-768x403.jpg";
import analysisDesign from "../../assets/projects/011_analysis_design-768x406.jpg";
import meteringSkid from "../../assets/projects/018_metering_skid_design-768x413.jpg";
import skidGa from "../../assets/projects/015_skid_ga-768x429.jpg";

// AD GROUP — Piping stress analysis / CAESAR II
const entry: LpEntry = {
  slug: "offshore-piping-stress-analysis-australia",
  campaign: {
    title: "Outsource Piping Stress Analysis & CAESAR II Services | Australia | IET",
    description:
      "Offshore piping design outsourcing for Perth & Brisbane engineering teams. CAESAR II piping analysis service, ASME B31.3 compliance review, and pressure vessel engineering design outsourcing from ISO-certified professional engineers.",

    heroBadge: "Indonesia-based engineers · Serving Perth (WA) & Brisbane (QLD)",
    heroTitle: "Outsource Piping Stress Analysis to a",
    heroTitleAccent: "CAESAR II Engineering Team",
    heroIntroHtml:
      'We\'re an <strong class="text-white font-semibold">Indonesia-based team of designers and engineers</strong> delivering <strong class="text-white font-semibold">piping design outsourcing for Australia</strong> — CAESAR II piping analysis service, ASME B31.3 piping compliance review, and pressure vessel engineering design outsourcing to international codes. World-class deliverables, offshore rates, your timezone. Clear the backlog, protect the deadline, keep the margin.',
    heroChips: [
      "No CAESAR II licence to buy",
      "Independent ASME B31.3 checking",
      "NDA & ISO-governed",
      "Fixed-fee per package",
    ],
    heroImage: {
      src: pipeStress,
      alt: "CAESAR II pipe stress analysis model for an offshore piping system",
    },
    heroImageCaption: "CAESAR II Pipe Stress & Flexibility Analysis",

    certs: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "ASME B31.3", "API"],

    directorQuoteHtml:
      'When you outsource piping stress analysis to us, you deal directly with the engineers doing the work — an Indonesia-based team delivering <span class="text-brand-500">CAESAR II and ASME B31.3 deliverables that are buildable, safe, and cost-effective</span> from day one.',
    directorName: DIRECTOR.name,
    directorTitle: DIRECTOR.title,
    directorPhoto: DIRECTOR.photo,
    directorPhotoAlt: DIRECTOR.photoAlt,

    painEyebrow: "The bottleneck",
    painTitleHtml:
      'Is your <span class="text-brand-500">industrial piping design layout overflow</span> putting milestones at risk?',
    painIntro:
      "Perth and Brisbane engineering teams win the work — then hit the wall on stress analysis capacity. Hiring takes months. Software licences sit idle between projects. And every late deliverable chips away at your schedule and your margin.",
    painCards: [
      {
        t: "Capacity overflow",
        d: "Your bid pipeline outpaces your bench, and critical stress lines sit in a queue while the schedule slips.",
      },
      {
        t: "Licence & overhead drag",
        d: "A CAESAR II seat and a senior stress engineer are expensive to carry through the quiet months between projects.",
      },
      {
        t: "Compliance exposure",
        d: "Without independent checking, ASME B31.3 non-conformances surface late — in client review or, worse, in the field.",
      },
    ],

    servicesEyebrow: "The solution",
    servicesTitle: "A senior engineering bench, on demand — when you outsource piping design",
    servicesIntro:
      "Plug a complete piping and pressure-equipment discipline into your project for as long as you need it. Fixed fee, audit-ready output, your specs and codes.",
    services: [
      {
        title: "CAESAR II Piping Analysis Service",
        body: "Full pipe flexibility and stress analysis in CAESAR II — thermal, sustained, occasional, and dynamic load cases — with nozzle load checks, support optimisation, and clear, audit-ready reports your reviewers can sign off.",
        icon: ICONS.bolt,
      },
      {
        title: "Outsource Piping Stress Analysis",
        body: "Hand us the stress scope and reclaim your team's calendar. We deliver verified critical-line analysis and load summaries that drop straight into your project deliverables — no licence, no ramp-up, no overhead.",
        icon: ICONS.check,
      },
      {
        title: "ASME B31.3 Piping Compliance Review",
        body: "Independent ASME B31.3 piping compliance review of layouts, wall thickness, and supports — plus B31.1, B31.4 and B31.8 where required — so your pressure piping is defensible before it reaches the client or regulator.",
        icon: ICONS.doc,
      },
      {
        title: "Pressure Vessel Engineering Design Outsourcing",
        body: "Pressure vessel engineering design outsourcing to ASME VIII Div 1/2 — shell and head sizing, nozzle reinforcement, and FEA — fully coordinated with your piping interfaces and offshore structural loads.",
        icon: ICONS.cube,
      },
      {
        title: "Industrial Piping Design & 3D Layout",
        body: "When your in-house industrial piping design layout overflow stalls milestones, our team takes routing, isometrics, and 3D modelling end-to-end — built around constructability and offshore weight and access constraints.",
        icon: ICONS.grid,
      },
      {
        title: "Pressure Piping Design Consultant",
        body: "Engage a senior pressure piping design consultant on demand — for an independent check, a second opinion on a tricky tie-in, or to lead a discipline package when your bid pipeline outpaces your bench.",
        icon: ICONS.book,
      },
    ],

    stats: [
      { v: "20+", l: "Years professional engineering experience" },
      { v: "ASME", l: "B31.3 / B31.1 / VIII compliance" },
      { v: "AEST", l: "Aligned to Perth & Brisbane hours" },
      { v: "24h", l: "Typical scope & quote turnaround" },
    ],

    whyTitle: "A pressure piping design consultant your reviewers will trust",
    whyPoints: [
      {
        t: "Indonesia-based, built for Australian projects",
        d: "We're an Indonesian engineering firm, not an Australian one — that's the point. You get piping design outsourcing to ASME B31.3, AS standards on request, and the offshore specs your Perth and Brisbane clients demand, at offshore rates.",
      },
      {
        t: "Independent checking on every job",
        d: "Every CAESAR II model and layout is checked by a second senior engineer against code before it reaches you — so what you submit holds up under scrutiny.",
      },
      {
        t: "Margin-friendly, not corner-cutting",
        d: "Competitive offshore rates with international-quality, English-language deliverables. You protect schedule and margin without compromising the engineering.",
      },
      {
        t: "Timezone that works with yours",
        d: "We align to AWST/AEST hours so revisions and queries turn around within your working day, not after it.",
      },
    ],
    whyImages: [
      { src: analysisDesign, alt: "Piping analysis and design deliverable" },
      { src: meteringSkid, alt: "Metering skid piping design and layout" },
      { src: skidGa, alt: "Skid general arrangement piping layout" },
    ],
    whyCalloutTitle: "CAESAR II",
    whyCalloutBody:
      "engineering services delivered to global MNC clients across Oil & Gas, power and process.",

    processTitle: "From scope to stamped report in four steps",
    steps: [
      {
        n: "01",
        t: "Send the scope",
        d: "Share your line list, P&IDs, isometrics or stress-critical lines. A senior engineer scopes it and quotes a fixed fee and timeline — usually same business day.",
      },
      {
        n: "02",
        t: "We engineer & check",
        d: "We run the CAESAR II analysis or piping design, with independent internal checking against ASME B31.3 and your project specs before anything reaches you.",
      },
      {
        n: "03",
        t: "Audit-ready delivery",
        d: "You receive native files plus a clean, stamped report — load cases, support details, and compliance statements ready to submit to your client or regulator.",
      },
      {
        n: "04",
        t: "Revisions & support",
        d: "Aligned to AWST/AEST hours, we turn around comments and revisions fast so your project stays on its critical path.",
      },
    ],

    faqs: [
      {
        q: "Why outsource piping stress analysis instead of hiring?",
        a: "Demand for stress engineers is spiky. Outsourcing your piping stress analysis converts a fixed salary and a CAESAR II licence into a variable, per-project cost — you scale capacity up for a tender or shutdown and back down again, with no recruitment lead time.",
      },
      {
        q: "Do you work to Australian and offshore project requirements?",
        a: "Yes. We deliver piping design outsourcing for Australia-based EPC, operator and consultancy teams in Perth (WA) and Brisbane (QLD), working to ASME B31.3, AS standards on request, and client-specific offshore specifications.",
      },
      {
        q: "Which software and codes do you use?",
        a: "Our CAESAR II engineering services cover piping flexibility and stress analysis, with pressure vessel work to ASME VIII and independent ASME B31.3 piping compliance review. We deliver native files plus signed reports.",
      },
      {
        q: "How do you protect our data and IP?",
        a: "We work under NDA, on segregated project storage, and our ISO 9001 / 14001 / 45001 management systems govern document control, confidentiality, and quality checking on every deliverable.",
      },
      {
        q: "What does a pressure piping design consultant engagement cost?",
        a: "Most clients start with a single fixed-fee package — a stress analysis scope or a compliance review — so you can benchmark our quality and value before committing larger industrial piping design layout overflow work to us.",
      },
    ],

    leadEyebrow: "Get your free quote",
    leadTitle: "Send your scope. Get a fixed-fee quote within 24 hours.",
    leadIntro:
      "Tell us about your piping stress analysis, CAESAR II, ASME B31.3 review or pressure vessel scope. A senior engineer — not a salesperson — reviews it and replies with a clear fee and timeline. No obligation.",
    leadBullets: [
      "Reviewed by a chartered professional engineer",
      "NDA available before you share files",
      "Fixed fee — no surprise hourly creep",
    ],
    leadNoteHtml:
      'A senior engineer on our Indonesia-based team personally reviews every scope and replies within <strong class="text-white">24 business hours</strong>, aligned to Perth (AWST) and Brisbane (AEST) working days.',
    formServiceOptions: [
      "CAESAR II Piping Stress Analysis",
      "ASME B31.3 Compliance Review",
      "Piping Design & 3D Layout",
      "Pressure Vessel Design",
      "Other / Not sure",
    ],
    formLocationOptions: DEFAULT_LOCATIONS,
  },
};

export default entry;
