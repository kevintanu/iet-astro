import { DIRECTOR, ICONS, type SeoEntry } from "../_shared";
import { AE_LOCATIONS } from "../_shared";

import powerPlant from "../../../assets/projects/005_powerplantid-768x409.jpg";
import plant3d from "../../../assets/projects/006_3dplant-768x385.jpg";
import structuralDesign from "../../../assets/projects/012_structural_design-768x414.jpg";
import mechanicalDesign from "../../../assets/projects/013_mechanical_design-768x417.jpg";

// PILLAR — Engineering services outsourcing / engineering outsourcing companies — UAE
const entry: SeoEntry = {
  slug: "engineering-services-outsourcing",
  page: {
    title: "Engineering Services Outsourcing in the UAE | Abu Dhabi & Dubai | IET",
    description:
      "Outsource engineering services to an Indonesian engineering team serving the UAE. FEED, detail engineering, mechanical, CAD/BIM and process safety to ASME/API/ISO and ADNOC standards for Abu Dhabi, Dubai and Sharjah — NDA + UAE PDPL compliant.",
    metaKeywords:
      "engineering services outsourcing, engineering outsourcing companies, offshore engineering UAE, outsource engineering Abu Dhabi Dubai",
    h1: "Engineering Services Outsourcing in the UAE",
    breadcrumbLabel: "Engineering Services Outsourcing",
    serviceType: "Engineering Services Outsourcing",

    heroBadge: "Indonesia-based engineering team · ISO 9001/14001/45001 certified · Serving Abu Dhabi, Dubai & the UAE",
    heroTitleAccent: "An Offshore Engineering Partner for the UAE",
    heroIntroHtml:
      'We\'re an <strong class="text-white font-semibold">ISO-certified Indonesia-based engineering consultancy</strong> with 20+ years across Oil &amp; Gas, power and process — providing <strong class="text-white font-semibold">engineering services outsourcing for the UAE</strong>. From FEED and detail engineering to mechanical design, CAD/BIM drafting and process safety, we deliver to <strong class="text-white font-semibold">ASME, API, ISO, IEC and ADNOC standards</strong> for clients in Abu Dhabi, Dubai and Sharjah. Scale your engineering capacity for project peaks without expanding headcount.',
    heroChips: [
      "FEED · Detail · Mechanical · CAD/BIM · Process safety",
      "ASME · API · ISO · IEC · ADNOC AGES",
      "NDA + UAE PDPL compliant",
      "Overlapping Gulf working hours — GMT+7",
    ],
    heroImage: {
      src: powerPlant,
      alt: "Power plant engineering deliverable produced by an offshore engineering team for a UAE client",
    },
    heroImageCaption: "Engineering Services Outsourcing — ASME / API / ISO Standards",

    certs: ["ISO 9001:2015", "ISO 14001:2015", "ISO 45001:2018", "ASME", "API", "IEC", "ADNOC AGES"],

    directorQuoteHtml:
      'International codes are how we work every day — <span class="text-brand-500">ASME, API, ISO and IEC</span> across Oil &amp; Gas, power and process. When you outsource engineering to our team, you get deliverables built to the standards UAE and ADNOC-ecosystem projects are run on, clean and ready to issue from the first submission.',
    directorName: DIRECTOR.name,
    directorTitle: DIRECTOR.title,
    directorPhoto: DIRECTOR.photo,
    directorPhotoAlt: DIRECTOR.photoAlt,

    painEyebrow: "The constraint",
    painTitleHtml:
      'Can your engineering team <span class="text-brand-500">scale fast enough</span> for EPC project peaks — without blowing the budget?',
    painIntro:
      "Engineering firms and EPC contractors across Abu Dhabi, Dubai and Sharjah win large, fast-moving projects — then have to staff them at UAE expat rates on tight schedules. Outsourcing overflow engineering lets you ramp capacity up and down on demand, keep bids competitive, and protect delivery dates.",
    painCards: [
      {
        t: "Project peaks outpace your team",
        d: "EPC and consultancy workloads spike with each award. Outsourcing gives you trained engineering capacity on day one — no recruitment lead time, no idle bench between projects.",
      },
      {
        t: "Margin pressure on competitive bids",
        d: "Expat engineering staff in the UAE carry significant fully-loaded cost. Outsourcing converts fixed headcount into a per-project variable cost, so you can price work competitively and keep margin.",
      },
      {
        t: "Standards & data assurance",
        d: "UAE projects demand ASME/API/ISO and ADNOC-compliant deliverables, and your designs must stay protected under UAE PDPL and contractual confidentiality. That assurance has to come from a partner who knows the codes.",
      },
    ],

    servicesEyebrow: "What we deliver",
    servicesTitle: "A complete engineering team you can plug into your projects",
    servicesIntro:
      "Outsource a discipline, a deliverable or an entire engineering scope. Our team covers the full project lifecycle to ASME/API/ISO and ADNOC standards, using your templates and title blocks — with overlapping Gulf working hours for real-time collaboration.",
    services: [
      {
        title: "FEED & Detail Engineering",
        body: "Front-end and detail engineering across process, mechanical, piping, structural and electrical disciplines — calculations, datasheets, drawings and specifications to ASME/API/ISO and your project basis of design.",
        icon: ICONS.doc,
      },
      {
        title: "Mechanical Engineering Outsourcing",
        body: "Equipment, skids, pressure vessels and rotating-equipment design to ASME VIII, API and ISO — sizing calculations, GA and fabrication drawings, and BOMs ready for shop or client review.",
        icon: ICONS.bolt,
      },
      {
        title: "CAD Drafting & BIM Modeling",
        body: "AutoCAD 2D production drafting, SolidWorks 3D modeling and Revit/BIM to ASME Y14.5 / ISO and ADNOC drawing standards — clean, issue-ready DWG, SLDDRW and RVT files in your standards.",
        icon: ICONS.pencil,
      },
      {
        title: "Piping & Plant Design",
        body: "3D plant modeling, piping layout, isometrics and pipe stress analysis (CAESAR II) to ASME B31.3 for process and energy facilities — coordinated, clash-checked and ready to issue.",
        icon: ICONS.layers,
      },
      {
        title: "Process Safety Studies",
        body: "HAZOP facilitation, LOPA and SIL determination/verification to IEC 61511 — independent process safety support aligned to ADNOC HSE and UAE requirements for new plants and modifications.",
        icon: ICONS.check,
      },
      {
        title: "Structural Engineering",
        body: "Steel and concrete design and detailing to AISC, ACI, BS and the Abu Dhabi International Building Code / Dubai Building Code — framing, connections and arrangement drawings, analysed and checked before issue.",
        icon: ICONS.grid,
      },
    ],

    stats: [
      { v: "20+", l: "Years engineering experience" },
      { v: "ASME / API / ISO", l: "Standards we engineer to" },
      { v: "~5h", l: "Daily overlap with UAE working hours" },
      { v: "24h", l: "Typical scope & fixed-fee quote turnaround" },
    ],

    compliance: {
      eyebrow: "Standards & regulations",
      title: "Engineered to the codes UAE projects are built on",
      intro:
        "Every deliverable is produced to the international standards the UAE market runs on, and aligned to the local regulatory frameworks that govern engineering in Abu Dhabi, Dubai and the wider Emirates.",
      items: [
        {
          t: "ASME · API · ISO · IEC · BS EN",
          d: "The international codes UAE engineering is built on — ASME (vessels, piping), API (tanks, rotating equipment), ISO, IEC and British/European standards as your project basis requires.",
        },
        {
          t: "ADNOC Group Engineering Standards (AGES)",
          d: "Familiarity with ADNOC specifications and AGES for Oil & Gas work across the Abu Dhabi ecosystem, so deliverables align to operator expectations.",
        },
        {
          t: "ESMA / MoIAT conformity",
          d: "Awareness of Emirates conformity requirements — ESMA / Ministry of Industry & Advanced Technology, ECAS and the Emirates Quality Mark (EQM) — where products require UAE market conformity.",
        },
        {
          t: "Building & life-safety codes",
          d: "Abu Dhabi International Building Code (ADIBC) and the Dubai Building Code for building/infrastructure scope, plus the UAE Fire & Life Safety Code of Practice (Civil Defence).",
        },
      ],
    },

    whyTitle: "An engineering partner UAE firms can trust",
    whyPoints: [
      {
        t: "Fluent in international codes",
        d: "ASME, API, ISO and IEC are our daily working standards across Oil & Gas, power and process — the same codes UAE and ADNOC-ecosystem projects are run on.",
      },
      {
        t: "ISO-certified management systems",
        d: "Our ISO 9001 (quality), 14001 (environment) and 45001 (occupational health & safety) systems govern every deliverable — documented QA, traceability and confidentiality.",
      },
      {
        t: "Overlapping working hours",
        d: "Indonesia (GMT+7) overlaps the UAE (GMT+4) working day by around five hours — share scope in your morning, collaborate in real time, and receive deliverables the same day or by your next morning.",
      },
      {
        t: "UAE PDPL + NDA from day one",
        d: "We sign a mutual NDA before any files are shared. Project data is segregated and access-controlled, governed by our ISO systems and aligned to the UAE Personal Data Protection Law (and DIFC/ADGM regimes for free-zone clients).",
      },
    ],
    whyImages: [
      { src: structuralDesign, alt: "Structural engineering deliverable to AISC / ADIBC" },
      { src: mechanicalDesign, alt: "Mechanical engineering and design deliverable to ASME" },
      { src: plant3d, alt: "3D plant model produced for a UAE engineering outsourcing client" },
    ],
    whyCalloutTitle: "FEED · Detail · Mechanical · CAD/BIM · Safety",
    whyCalloutBody:
      "full-lifecycle engineering delivered to ASME / API / ISO and ADNOC standards across Oil & Gas, power, process and infrastructure for the UAE market.",

    dataSecurity: {
      eyebrow: "Your IP, protected",
      title: "How we protect your proprietary engineering designs",
      intro:
        "Your designs are valuable IP, and UAE law sets clear data-protection obligations. We treat your data as if it were our own — here is exactly how it is protected when you outsource to us.",
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
          t: "UAE PDPL-aligned handling",
          d: "Our data handling aligns to the UAE Personal Data Protection Law (Federal Decree-Law 45/2021), and to DIFC / ADGM data-protection regimes for clients in those free zones.",
        },
        {
          t: "You retain full IP ownership",
          d: "All deliverables, native files and design IP are yours. We claim no rights over the work product and return or destroy project data on request.",
        },
      ],
    },

    processTitle: "From your scope to issue-ready deliverables",
    steps: [
      {
        n: "01",
        t: "Send the scope",
        d: "Share your basis of design, drawings, datasheets or a deliverables register, plus your standards and templates. A senior engineer scopes it and quotes a fixed fee and timeline — usually same business day.",
      },
      {
        n: "02",
        t: "We engineer & QA in overlapping hours",
        d: "We progress the engineering or drawings during working hours that overlap yours, with an internal QA pass against ASME/API/ISO and your brief — and real-time clarification when you need it.",
      },
      {
        n: "03",
        t: "Deliverables on a fast turnaround",
        d: "You receive native files plus issued PDFs, in your templates and standards, ready to review or issue — typically the same day or by your next morning.",
      },
      {
        n: "04",
        t: "Scale up or down",
        d: "Add or release capacity as your project workload moves — no recruitment lead time, no idle staffing cost. Treat us as an elastic extension of your team.",
      },
    ],

    geo: {
      title: "Supporting engineering firms across the UAE",
      intro:
        "We support engineering firms and EPC contractors across Abu Dhabi, Dubai and Sharjah — and the industrial hubs of Jebel Ali, KIZAD, Musaffah and Ruwais — with scalable offshore engineering and drafting.",
      hubs: ["Abu Dhabi", "Dubai", "Sharjah", "Jebel Ali (JAFZA)", "KIZAD / Musaffah", "Ruwais"],
    },

    faqs: [
      {
        q: "What is engineering services outsourcing?",
        a: "Engineering services outsourcing means delegating engineering work — calculations, drawings, models, studies or whole disciplines — to an external team instead of hiring in-house. You keep design ownership and direction; we provide the trained capacity and deliverables to your standards, on a per-project fixed fee.",
      },
      {
        q: "Why outsource engineering to Indonesia for UAE projects?",
        a: "You get trained engineers on demand for project peaks, deliverables built to ASME/API/ISO and ADNOC standards, and working hours that overlap the UAE day by around five hours for real-time collaboration — at a fraction of the fully-loaded cost of expanding your UAE team.",
      },
      {
        q: "Which engineering disciplines do you cover?",
        a: "FEED and detail engineering, mechanical, piping and plant design, structural, electrical and instrumentation, CAD/BIM drafting, and process safety (HAZOP, LOPA, SIL). You can outsource a single deliverable, one discipline, or an entire engineering scope.",
      },
      {
        q: "Do you work to ASME, API and ADNOC standards?",
        a: "Yes. ASME, API, ISO and IEC are our daily working standards, and we are familiar with ADNOC specifications (AGES) for Oil & Gas work, plus the Abu Dhabi International Building Code / Dubai Building Code and UAE Fire & Life Safety Code for building scope.",
      },
      {
        q: "How do you protect our data and intellectual property?",
        a: "We sign a mutual NDA before any project files are shared. Files are stored on segregated, access-controlled storage, our ISO 9001/14001/45001 systems govern confidentiality, and our handling aligns to the UAE PDPL (and DIFC/ADGM for free-zone clients). You retain full IP ownership of all deliverables.",
      },
    ],

    relatedLinks: [
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
      {
        slug: "process-safety-services",
        label: "HAZOP & SIL Verification",
        blurb: "Process safety studies and functional safety to IEC 61511.",
      },
    ],

    leadEyebrow: "Talk to an engineer",
    leadTitle: "Tell us your scope. Get a fixed-fee quote fast.",
    leadIntro:
      "Describe the engineering work you'd like to outsource — a discipline, a deliverable or a full scope. A senior engineer — not a salesperson — reviews it and replies with a clear fee and timeline. NDA available before you share any files.",
    leadBullets: [
      "Delivered to ASME / API / ISO and ADNOC standards",
      "NDA signed before files shared — UAE PDPL aligned",
      "Fixed fee — no surprise hourly creep",
    ],
    leadNoteHtml:
      'A senior engineer on our Indonesia-based team personally reviews every scope and replies within <strong class="text-white">24 hours</strong> — our day overlaps yours for fast, real-time turnaround.',
    formServiceOptions: [
      "FEED / Detail Engineering",
      "Mechanical Engineering",
      "CAD Drafting / BIM",
      "Piping & Plant Design",
      "Process Safety (HAZOP / SIL)",
      "Structural Engineering",
      "Other / Not sure",
    ],
    formLocationOptions: AE_LOCATIONS,
  },
};

export default entry;
