export interface JourneyNode {
  step: string
  stage: string
  actor: string
  userGoal: string
  frictionEliminated: string
  uxResolution: string
  engineeringContract: string
  touchpoints: string[]
}

export interface StickyNote {
  tone: "amber" | "emerald" | "sky" | "rose" | "violet" | "orange"
  tag: string
  text: string
}

export interface WireframeSpec {
  id: string
  title: string
  caption: string
  layout: "dashboard" | "drawer" | "grid" | "split" | "mobile-home" | "mobile-queue" | "mobile-heatmap" | "mobile-ledger"
}
export interface PersonaQuote {
  quote: string
  name: string
  designation: string
}

export interface CollabTrack {
  phase: string
  title: string
  detail: string
  deliverable: string
}

export interface CaseStudyProject {
  id: string
  index: string
  name: string
  codename?: string
  category: string
  portfolioCategory: "Developer tools" | "Mobile" | "Design systems" | "Product & UX" | "Content & web"
  featured?: boolean
  summary: string
  headlineStart: string
  headlineAccent: string
  lede: string
  role: string
  team: string
  scope: string
  platform: string
  heroImage: string
  audienceTitle?: string
  audienceGoal?: string
  personaQuotes?: PersonaQuote[]
  secondaryImage?: string
  liveUrl?: string
  mandateTitle: string
  mandateBody: string
  ownershipPillars: [string, string][]
  discoverySummary: string
  discoveryMethods: [string, string][]
  figmaNotes: StickyNote[]
  principles: [string, string][]
  journeySummary: string
  journeyFlow: JourneyNode[]
  wireframes: WireframeSpec[]
  architecturalPivot: {
    summary: string
    before: string
    after: string
  }
  engineeringSummary: string
  collabTracks: CollabTrack[]
  contractBridge: {
    figmaTitle: string
    codeTitle: string
    figmaSpecs: [string, string][]
    codeSpecs: [string, string][]
  }
  decisions: {
    title: string
    body: string
    badge: string
    image?: string
  }[]
  outcomes: [string, string, string][]
}

export const assetBase = "https://danieljohnson.bio/assets/"

export const experienceTimeline = [
  {
    period: "Sep 2025 — Present",
    role: "VP, UX Operations & Innovation",
    company: "JPMorgan Chase",
    focus:
      "Leading UX operations, AI-enabled design workflows, cross-org design governance, and platform delivery standards across enterprise product teams.",
  },
  {
    period: "Oct 2023 — Sep 2025",
    role: "VP, Content & Design",
    company: "JPMorgan Chase",
    focus:
      "Directed product content strategy, design systems alignment, and end-to-end UX execution across regulated financial workflows.",
  },
  {
    period: "Apr 2022 — Jun 2022",
    role: "UI/UX Designer",
    company: "Photon Infotech",
    focus:
      "Designed responsive enterprise web and mobile interfaces in close partnership with distributed engineering squads.",
  },
  {
    period: "Mar 2020 — Apr 2021",
    role: "Product Designer",
    company: "Dms Smith",
    focus:
      "Led product discovery, information architecture, wireframing, and interactive prototyping for customer-facing digital products.",
  },
  {
    period: "Feb 2013 — Aug 2016",
    role: "UI/UX Designer",
    company: "United Bank for Africa",
    focus:
      "Shaped digital banking journeys, customer onboarding flows, and multi-channel financial service interfaces.",
  },
  {
    period: "Sep 2008 — Present",
    role: "Principal Product Design Consultant",
    company: "Independent Practice",
    focus:
      "Partnering with founders and engineering leaders to architect developer tools, SaaS platforms, design systems, and mobile products.",
  },
]

export const leadershipPillars = [
  {
    number: "01",
    title: "Product & UX Strategy",
    summary:
      "Frame ambiguous product problems into structured workflows, clear user journeys, and measurable engineering milestones.",
    tags: ["Journey Architecture", "State Modeling", "Executive Alignment"],
  },
  {
    number: "02",
    title: "Design × Engineering Systems",
    summary:
      "Co-author typed component contracts, semantic tokens, and Storybook workbenches so design intent survives implementation.",
    tags: ["Design Tokens", "Storybook 10.6", "API Contracts"],
  },
  {
    number: "03",
    title: "Content & Interaction Clarity",
    summary:
      "Turn dense data, permissions, and operational exceptions into calm, scannable decisions across desktop and mobile.",
    tags: ["Progressive Disclosure", "Exception Recovery", "Microcopy"],
  },
  {
    number: "04",
    title: "Prototyping & Delivery",
    summary:
      "Build production-grade React and TypeScript prototypes to validate complex state transitions alongside engineering.",
    tags: ["React + TypeScript", "WCAG Accessibility", "Zero-Loss Handoff"],
  },
]

export const toolStack = [
  { name: "Figma & FigJam", category: "Architecture & Systems" },
  { name: "React & TypeScript", category: "Code Prototypes" },
  { name: "Storybook 10.6", category: "Component Workbenches" },
  { name: "Claude Code", category: "AI-Native Workflows" },
  { name: "Salt Design System", category: "Enterprise Foundations" },
  { name: "Highcharts & AG Grid", category: "Data Visualization" },
  { name: "Framer", category: "Interactive Web Systems" },
  { name: "Contentful & AEM", category: "Content Architecture" },
]

export const portfolioProjects: CaseStudyProject[] = [
  {
    id: "rapidbi",
    liveUrl: "./rapidbi-storybook/index.html",
    index: "01",
    name: "RapidBI (Signal BI)",
    codename: "Signal BI Workbench",
    category: "Developer tools · Analytics platform",
    portfolioCategory: "Developer tools",
    featured: true,
    summary:
      "A developer-facing analytics workbench for composing canvases, configuring widgets, inspecting 1,440+ commerce records, and shipping reusable data experiences.",
    headlineStart: "Analytics built to drive a ",
    headlineAccent: "confident decision.",
    lede: "As Design Lead, I partnered with frontend and data platform engineers to unify KPI signals, Highcharts visualizations, AG Grid row models, and Storybook 10.6 component contracts into one coherent workbench.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope:
      "Developer workflow · Interaction model · Salt tokens · Storybook 10.6",
    platform: "Responsive Web Application & Component Workbench",
    heroImage: "/rapidbi-overview.png",
    mandateTitle:
      "Turn fragmented charting and grid capabilities into one governed analytics loop.",
    mandateBody:
      "Engineering had powerful data, charting, grid, and export primitives, but product teams experienced them as disconnected demos and dense settings panels. I led the end-to-end UX architecture, progressive configuration model, and React + Storybook delivery.",
    ownershipPillars: [
      [
        "Canvas Architecture",
        "Connected KPIs, charts, filters, server-side grids, and inline commentary on one surface.",
      ],
      [
        "Engineering Contracts",
        "Co-defined `groupBy`, `pivotBy`, `delta`, and filter schemas with frontend engineers.",
      ],
      [
        "System Delivery",
        "Shipped Salt token foundations, density modes, and automated a11y checks in Storybook 10.6.",
      ],
    ],
    discoverySummary:
      "Working alongside our UX researchers, we audited existing analytics implementations across product squads. I then paired with engineers on AG Grid and Highcharts constraints and mapped every state transition required for production.",
    discoveryMethods: [
      [
        "Decision Mapping",
        "Traced every step from spotting a metric delta to inspecting rows and exporting a decision.",
      ],
      [
        "Technical Pairing",
        "Aligned directly with engineering on server-side grouping, pivots, and 1,440-row pagination.",
      ],
      [
        "State Inventory",
        "Specified empty, loading, configured, filtered, saved, and assistant-review states upfront.",
      ],
    ],
    figmaNotes: [
      {
        tone: "amber",
        tag: "Analyst Truth",
        text: "“A chart only earns trust when I can open the exact commerce rows behind the spike.”",
      },
      {
        tone: "rose",
        tag: "Layout Constraint",
        text: "Configuration must never replace the canvas; keep edits mounted beside the active widget.",
      },
      {
        tone: "sky",
        tag: "Hierarchy Rule",
        text: "Every analytical view must immediately answer: What changed? Why? What action comes next?",
      },
      {
        tone: "emerald",
        tag: "Engineering Sync",
        text: "Map every Figma variant directly to typed Storybook controls (`groupBy`, `pivotBy`, `delta`).",
      },
      {
        tone: "orange",
        tag: "AI Governance",
        text: "Assistant recommendations must preview their impact and wait for explicit human approval.",
      },
      {
        tone: "violet",
        tag: "Continuity",
        text: "Persist the filtered analytical state and inline commentary—never just export a static image.",
      },
    ],
    principles: [
      [
        "Orient first",
        "Lead with the KPI signal, active timeframe, and comparison delta before exposing controls.",
      ],
      [
        "Progressive depth",
        "Reveal grouping, pivot, and display rules in a contextual drawer only when needed.",
      ],
      [
        "Equal footing for evidence",
        "Keep the server-side data grid and commentary synchronized with the active chart.",
      ],
      [
        "Reviewable automation",
        "Present AI assistant changes as inspectable proposals before mutating the canvas.",
      ],
    ],
    journeySummary:
      "I architected a 5-stage loop where user intent, interface resolution, and React/Storybook contracts stay locked in sync.",
    journeyFlow: [
      {
        step: "01",
        stage: "Scan",
        actor: "Product / Ops Lead",
        userGoal:
          "Identify what changed across net revenue, orders, and conversion",
        frictionEliminated:
          "Headline KPIs were previously detached from time range and comparison baselines.",
        uxResolution:
          "Unified KPI header strip with explicit period selector and directional delta badges.",
        engineeringContract:
          "SavedView header state + Salt semantic status tokens",
        touchpoints: ["KPI Strip", "Period Selector", "Delta Badges"],
      },
      {
        step: "02",
        stage: "Explore",
        actor: "Data Analyst",
        userGoal:
          "Drill from a Q1 revenue spike into product groups and underlying records",
        frictionEliminated:
          "Switching between chart views and data tables reset active filters.",
        uxResolution:
          "Synchronized Highcharts + AG Grid canvas sharing a single filter state.",
        engineeringContract:
          "Shared query context across chart and 1,440-row server model",
        touchpoints: ["Chart Switcher", "Advanced Filters", "AG Grid Groups"],
      },
      {
        step: "03",
        stage: "Configure",
        actor: "Product Builder",
        userGoal:
          "Adjust grouping, monthly pivots, and delta calculations in real time",
        frictionEliminated:
          "Full-screen settings pages hid the visualization being configured.",
        uxResolution:
          "Contextual side inspector updates the active widget in place without unmounting.",
        engineeringContract:
          'Typed props (`groupBy: ["product"]`, `pivotBy: ["month"]`, `delta: boolean`)',
        touchpoints: ["Contextual Drawer", "Pivot Controls", "Density Toggle"],
      },
      {
        step: "04",
        stage: "Explain",
        actor: "Analyst + Stakeholders",
        userGoal:
          "Attach rationale and review AI-suggested segment comparisons",
        frictionEliminated:
          "Insights were copied into Slack or decks, losing the live data context.",
        uxResolution:
          "Inline commentary threads and human-reviewed assistant suggestion cards.",
        engineeringContract:
          "Annotation schema bound to view ID + approval gate",
        touchpoints: ["Inline Commentary", "@Mentions", "AI Review Card"],
      },
      {
        step: "05",
        stage: "Hand Off",
        actor: "Design & Engineering",
        userGoal:
          "Save the view or embed the verified component into a host application",
        frictionEliminated:
          "Engineers had to reverse-engineer behavior from static mocks.",
        uxResolution:
          "Persistent saved views paired with live Storybook 10.6 component documentation.",
        engineeringContract:
          "Storybook Controls, Actions, Interactions & 3 A11y checks",
        touchpoints: ["Saved Views", "CSV / PDF Export", "Storybook 10.6"],
      },
    ],
    wireframes: [
      {
        id: "01",
        title: "Canvas overview hierarchy",
        caption:
          "Establishes KPI signal, timeframe, and primary trend before any settings.",
        layout: "dashboard",
      },
      {
        id: "02",
        title: "Mounted configuration drawer",
        caption:
          "Keeps the active chart and grid visible while adjusting data rules.",
        layout: "drawer",
      },
      {
        id: "03",
        title: "Grouped grid investigation",
        caption: "Expands product groups across Jan/Feb/Mar summary columns.",
        layout: "grid",
      },
      {
        id: "04",
        title: "Inline commentary & assistant gate",
        caption:
          "Links human rationale and reviewable AI prompts to the filtered state.",
        layout: "split",
      },
    ],
    architecturalPivot: {
      summary:
        "During joint architecture reviews with engineering, we replaced the legacy full-page widget editor with an adjacent contextual drawer so the live canvas state never unmounts.",
      before: "Detached settings route (context lost)",
      after: "In-place drawer synced with live canvas",
    },
    engineeringSummary:
      "I worked side-by-side with frontend engineers to align Salt design tokens, AG Grid server-side row models, and Storybook 10.6 controls.",
    collabTracks: [
      {
        phase: "01 / API & Props",
        title: "Co-authored widget prop schemas",
        detail:
          "Defined exact TypeScript interfaces for `groupBy`, `pivotBy`, `delta`, and multi-condition filters prior to UI lock.",
        deliverable: "Typed React component contracts",
      },
      {
        phase: "02 / Grid & Charts",
        title: "Engineered 1,440-record grid fluency",
        detail:
          "Aligned Highcharts drilldowns with AG Grid server-side row grouping, summary aggregations, and keyboard navigation.",
        deliverable: "Synchronized chart-to-grid workbench",
      },
      {
        phase: "03 / System QA",
        title: "Delivered Storybook 10.6 workbench",
        detail:
          "Documented Salt foundations, Light/Dark themes, medium density modes, and automated accessibility assertions.",
        deliverable: "Storybook 10.6 system artifact",
      },
    ],
    contractBridge: {
      figmaTitle: "Figma Component Spec · Advanced Grid",
      codeTitle: "Storybook 10.6 & React Implementation",
      figmaSpecs: [
        ["Row hierarchy", "Group by Product → Expandable monthly summaries"],
        [
          "Theme & density",
          "Salt Light/Dark tokens · Compact / Medium / Touch",
        ],
        [
          "Interaction states",
          "Empty, Loading, Filtered, Grouped, Saved, Export",
        ],
      ],
      codeSpecs: [
        [
          "groupBy: string[]",
          '["product"] (Server-side row model · 1,440 records)',
        ],
        ["pivotBy: string[]", '["month"] (Jan, Feb, Mar sum aggregations)'],
        ["delta: boolean", "false | true + 3 automated a11y checks"],
      ],
    },
    decisions: [
      {
        title: "Keep overview and evidence on a single canvas.",
        body: "KPI tiles, charts, and the server-side AG Grid share one state model so analysts move from a high-level delta to product-level rows without losing context.",
        badge: "Signal → Evidence Continuity",
        image: "/rapidbi-overview.png",
      },
      {
        title: "Progressive configuration with zero context switching.",
        body: "Common actions stay on the surface while advanced grouping, pivot rules, and delta toggles unfold in an adjacent drawer.",
        badge: "Progressive Disclosure",
      },
      {
        title: "Human-reviewed AI assistant recommendations.",
        body: "Assistant suggestions explain which filters or chart changes will occur and wait for explicit approval before modifying the canvas.",
        badge: "Governed AI Pattern",
      },
    ],
    outcomes: [
      [
        "Signal orientation",
        "Unified KPI header, timeframe context, and comparison deltas",
        "Immediate executive & analyst scan",
      ],
      [
        "Deep data inspection",
        "Synchronized Highcharts + 1,440-row AG Grid grouping",
        "Zero context loss across drilldowns",
      ],
      [
        "Engineering velocity",
        "Storybook 10.6 workbench with live controls & a11y checks",
        "Direct design-to-code parity",
      ],
    ],
  },
  {
    id: "shiftsnap",
    index: "02",
    name: "ShiftSnap",
    codename: "Dual-Role Workforce Mobile App",
    category: "Mobile SaaS · Workforce scheduling",
    portfolioCategory: "Mobile",
    featured: true,
    summary:
      "A dual-role mobile scheduling and shift-swap platform connecting hourly workers and store managers through a shared, auditable state machine.",
    headlineStart: "Shift changes that protect ",
    headlineAccent: "everybody’s day.",
    lede: "As Design Lead, I architected the dual-role mobile experience and 5-state swap engine connecting hourly baristas (Maya) and store managers (Priya) from schedule conflict to approved store coverage.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope:
      "Dual-role mobile UX · 5-state swap engine · Coverage heatmap · 9-screen system",
    platform: "iOS & Android Mobile Application",
    heroImage: "/shiftsnap-hero-phones.png",
    secondaryImage: "/shiftsnap-complete-user-experience.png",
    mandateTitle:
      "Give hourly workers schedule flexibility while protecting store coverage.",
    mandateBody:
      "Shift changes were happening across fragmented group chats and text messages—leaving employees uncertain if a swap was official and managers blind to certification gaps or overtime risk. I designed one stateful workflow serving both roles.",
    ownershipPillars: [
      [
        "5-State Swap Lifecycle",
        "Defined Pending, Accepted, Approved, Declined, and Expired states across client and API.",
      ],
      [
        "Manager Risk Guardrails",
        "Surfaced coverage heatmaps, certification badges, and overtime risk at the moment of approval.",
      ],
      [
        "Role-Aware Mobile System",
        "Designed automatic SSO role routing and thumb-friendly mobile patterns for floor use.",
      ],
    ],
    discoverySummary:
      "Together with our UX researchers, we traced real scheduling exceptions across hourly workers and store managers. I then partnered with mobile and backend engineers to turn informal chat promises into an atomic roster transaction.",
    discoveryMethods: [
      [
        "Dual-Role Task Mapping",
        "Balanced worker speed (request a swap in seconds) with manager safety (coverage & qualifications).",
      ],
      [
        "Exception Triage Audit",
        "Identified why swaps failed: uncertified replacements, evening rush gaps, and overtime spikes.",
      ],
      [
        "State Contract Modeling",
        "Mapped exact ownership and notifications for every handoff between worker, peer, and manager.",
      ],
    ],
    figmaNotes: [
      {
        tone: "amber",
        tag: "Operational Rule",
        text: "“A coworker saying yes in a chat thread is not an approved schedule change.”",
      },
      {
        tone: "emerald",
        tag: "Role Routing",
        text: "Detect role on work SSO sign-in: Team Member vs. Manager requires a distinct home screen.",
      },
      {
        tone: "rose",
        tag: "Manager Triage",
        text: "Surface 3 coverage gaps today, 5 open shifts, and 8 overtime risks before approving trades.",
      },
      {
        tone: "sky",
        tag: "Zero-Typing Flow",
        text: "Carry shift date, time (7:00 AM–3:00 PM), store, and Barista role automatically into the request.",
      },
      {
        tone: "orange",
        tag: "Coverage Heatmap",
        text: "Color-code weekly coverage (90%+ green, 75–89% amber, <75% red) so rush gaps jump out.",
      },
      {
        tone: "violet",
        tag: "Audit Ledger",
        text: "Show a permanent “You gave up / You received” summary with manager approval timestamps.",
      },
    ],
    principles: [
      [
        "Schedule first",
        "Anchor the worker home view on Today’s Confirmed Shift and a 1-tap Request Swap action.",
      ],
      [
        "Agreement ≠ Approval",
        "Distinguish peer acceptance from manager approval with explicit status pills and timeline steps.",
      ],
      [
        "Eligibility in context",
        "Expose Barista, Shift Lead, and Certified badges plus weekly hours directly in the roster.",
      ],
      [
        "Exception-led manager view",
        "Prioritize urgent coverage gaps and pending approvals at the top of the manager workspace.",
      ],
    ],
    journeySummary:
      "The 5-stage journey connects Maya (Barista), Jordan (Certified Peer), and Priya (Store Manager) through one synchronized backend state contract.",
    journeyFlow: [
      {
        step: "01",
        stage: "Role Sign-In",
        actor: "Work SSO + Router",
        userGoal:
          "Sign in with Harbor Coffee account and land on the right role home",
        frictionEliminated:
          "Generic navigation hid urgent manager approvals and worker shift cards.",
        uxResolution:
          "Work SSO verifies identity and routes Team Member vs. Manager workspaces.",
        engineeringContract:
          "Auth session role claim (`TEAM_MEMBER` | `MANAGER`)",
        touchpoints: ["Work SSO", "Account Verified", "Role-Scoped Nav"],
      },
      {
        step: "02",
        stage: "Initiate Swap",
        actor: "Maya · Barista",
        userGoal:
          "Request coverage for Mon, May 29 (7:00 AM–3:00 PM) at Downtown",
        frictionEliminated:
          "Workers had to manually type shift details and message coworkers one by one.",
        uxResolution:
          "One-tap “Request swap” on Today’s Shift card pre-populates shift metadata.",
        engineeringContract:
          "`SwapRequest` payload initialized in `PENDING_PEER` state",
        touchpoints: [
          "Today’s Shift Card",
          "1-Tap Request Swap",
          "Pending Banner",
        ],
      },
      {
        step: "03",
        stage: "Match Certified Peer",
        actor: "Jordan · Teammate",
        userGoal:
          "Claim the swap with verified certification and safe weekly hours",
        frictionEliminated:
          "Swaps collapsed when replacements lacked Barista/Shift Lead certification.",
        uxResolution:
          "Team Roster filters by role and displays `Certified` badges and weekly hour totals.",
        engineeringContract:
          "Eligibility guard (`isCertified && weeklyHours + shiftHours <= 40`)",
        touchpoints: ["Team Roster", "Certified Filter", "Peer Acceptance"],
      },
      {
        step: "04",
        stage: "Manager Triage",
        actor: "Priya · Manager",
        userGoal:
          "Approve the trade while protecting evening rush coverage and labor budget",
        frictionEliminated:
          "Managers approved requests blind to store coverage gaps and overtime risk.",
        uxResolution:
          "Manager home pairs 12 Pending Approvals with the 6AM–9PM Coverage Heatmap.",
        engineeringContract:
          "Coverage matrix (`>=90%`, `75-89%`, `<75%`) + manager approval lock",
        touchpoints: [
          "Manager Queue",
          "Coverage Heatmap",
          "Critical Gap Alert",
        ],
      },
      {
        step: "05",
        stage: "Confirmed Roster",
        actor: "Both Calendars",
        userGoal: "Confirm the swap is official and both schedules are updated",
        frictionEliminated:
          "Employees confused peer agreement with final manager confirmation.",
        uxResolution:
          "Swap Status ledger displays “You gave up / You received” cards and audit timeline.",
        engineeringContract:
          "Atomic calendar mutation (`APPROVED` → `COMPLETED` at 2:15 PM)",
        touchpoints: [
          "Swap Status Ledger",
          "Gave Up / Received Diff",
          "Activity Timeline",
        ],
      },
    ],
    wireframes: [
      {
        id: "01",
        title: "Employee schedule home",
        caption:
          "Confirmed shift card, pending approval banner, and thumb-zone Request Swap CTA.",
        layout: "mobile-home",
      },
      {
        id: "02",
        title: "Manager exception dashboard",
        caption:
          "Red coverage gap alert + 2×2 operational KPI grid (Open, Pending, Gaps, Overtime).",
        layout: "mobile-queue",
      },
      {
        id: "03",
        title: "Weekly coverage heatmap",
        caption:
          "Mon–Sat hourly matrix (6AM–9PM) flagging <75% critical windows.",
        layout: "mobile-heatmap",
      },
      {
        id: "04",
        title: "Two-party swap ledger",
        caption:
          "Explicit “You gave up / You received” shift diff and timestamped approval trail.",
        layout: "mobile-ledger",
      },
    ],
    architecturalPivot: {
      summary:
        "In early reviews with engineering, we separated peer acceptance from manager approval and introduced the “You gave up / You received” ledger so no worker ever mistakes a pending trade for a confirmed schedule update.",
      before: "Single chat-style acceptance state",
      after: "Two-party diff ledger + timestamped manager approval",
    },
    engineeringSummary:
      "I partnered with mobile and backend engineers to lock the 5-state swap lifecycle, coverage threshold math, and accessible non-color status badges.",
    collabTracks: [
      {
        phase: "01 / State Machine",
        title: "Co-authored 5-state swap API",
        detail:
          "Mapped deterministic transitions and cancellation rules across `Pending`, `Accepted`, `Approved`, `Declined`, and `Expired`.",
        deliverable: "Shared state contract & notification triggers",
      },
      {
        phase: "02 / Coverage Math",
        title: "Engineered real-time coverage heatmaps",
        detail:
          "Defined hourly store staffing thresholds (`90%+`, `75–89%`, `<75%`) and critical gap alerts for manager triage.",
        deliverable: "Coverage View & exception cards",
      },
      {
        phase: "03 / Mobile UI Kit",
        title: "Built accessible dual-role components",
        detail:
          "Paired every status color with semantic icons and labels (`Confirmed`, `Urgent`, `Certified`) for fast floor scanning.",
        deliverable: "9-screen production mobile system",
      },
    ],
    contractBridge: {
      figmaTitle: "Figma Mobile Spec · Dual-Role System",
      codeTitle: "Mobile Client & Backend State Contract",
      figmaSpecs: [
        [
          "Role home routing",
          "Team Member (Maya) vs. Manager (Priya) home layouts",
        ],
        [
          "Coverage heatmap tiers",
          "Green ≥90% · Amber 75–89% · Red <75% critical gap",
        ],
        [
          "Swap confirmation ledger",
          "Gave up (Mon 7a–3p) ↔ Received (Tue 2p–10p)",
        ],
      ],
      codeSpecs: [
        [
          "userRole: RoleEnum",
          '"TEAM_MEMBER" | "MANAGER" (auto-detected via SSO)',
        ],
        ["swapStatus: StateEnum", '"PENDING" | "APPROVED" | "COMPLETED"'],
        ["rosterEligibility", "isCertified === true && weeklyHours <= 40"],
      ],
    },
    decisions: [
      {
        title: "Role-aware onboarding and home hierarchies.",
        body: "Work SSO automatically detects whether the user is a Team Member or Manager, tailoring the home screen to either personal shift actions or store-wide exception triage.",
        badge: "Role-Verified UX",
        image: "/shiftsnap-hero-phones.png",
      },
      {
        title: "6-screen operational loop across worker and manager.",
        body: "Connects Employee Home, Manager Exception Home, Weekly Coverage Heatmap, Swap Status Ledger, Certified Team Roster, and 30-Day Labor Reports in one coherent system.",
        badge: "94% Store Coverage Rate",
        image: "/shiftsnap-complete-user-experience.png",
      },
      {
        title: "Auditable “You gave up / You received” ledger.",
        body: "Replaces ambiguous chat threads with a structured shift diff and timestamped activity log (`Manager approved 11:30 AM` → `Swap completed 2:15 PM`).",
        badge: "Zero Schedule Ambiguity",
      },
    ],
    outcomes: [
      [
        "Role-verified onboarding",
        "Work SSO detects Harbor Coffee role and scopes navigation",
        "Zero setup friction",
      ],
      [
        "Stateful swap resolution",
        "1-tap swap initiation through two-party ledger confirmation",
        "Eliminated chat ambiguity",
      ],
      [
        "Manager coverage safety",
        "6AM–9PM coverage heatmap + Certified roster filters",
        "94% coverage rate visibility",
      ],
    ],
  },
  {
    id: "navflow-ai",
    index: "03",
    name: "NAVFlow AI",
    codename: "Governed Financial AI Operations",
    category: "Developer tools · AI operations",
    portfolioCategory: "Developer tools",
    featured: true,
    summary:
      "A governed AI workflow platform that helps financial operations teams move from incoming Net Asset Value (NAV) reports to auditable delivery.",
    headlineStart: "Governed AI for ",
    headlineAccent: "high-stakes operations.",
    lede: "As Design Lead, I architected the human-in-the-loop AI command center that coordinates ingestion, extraction, field-level confidence review, exception triage, and auditable sign-off.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope:
      "AI governance · Field-level confidence · Exception routing · Enterprise UI",
    platform: "Enterprise Web Application",
    heroImage: `${assetBase}navflow/executive-dashboard-wide.png`,
    mandateTitle:
      "Let AI automate routine NAV extraction while humans retain explicit control over exceptions.",
    mandateBody:
      "Manual NAV operations relied on inboxes, spreadsheets, and disconnected approval chains. I designed a governed orchestration model where stages, source evidence, confidence scores, and human sign-offs live in one operating surface.",
    ownershipPillars: [
      [
        "Stage Orchestration",
        "Connected Ingestion → Extraction → Validation → Approval → Delivery in one pipeline.",
      ],
      [
        "Field-Level Trust",
        "Placed AI confidence scores and source document highlights directly beside extracted values.",
      ],
      [
        "Audit-Ready Handoff",
        "Designed immutable approval gates and exception routing with engineering.",
      ],
    ],
    discoverySummary:
      "Alongside our UX researchers, we mapped end-to-end NAV processing across operations analysts and fund controllers, identifying every moment where automation required source evidence and human sign-off.",
    discoveryMethods: [
      [
        "Pipeline Mapping",
        "Traced report ingestion, schema extraction, tolerance checks, and controller release.",
      ],
      [
        "Exception Taxonomy",
        "Categorized low-confidence fields, variance breaches, and missing attachments.",
      ],
      [
        "Governance Modeling",
        "Defined role permissions and audit trail requirements with platform engineers.",
      ],
    ],
    figmaNotes: [
      {
        tone: "amber",
        tag: "Trust Rule",
        text: "“A global AI confidence score is useless—show confidence per extracted field.”",
      },
      {
        tone: "rose",
        tag: "Risk Triage",
        text: "Route high-variance NAV exceptions to the top of the operator queue automatically.",
      },
      {
        tone: "sky",
        tag: "Evidence Link",
        text: "Clicking any extracted number must highlight the exact line in the source PDF.",
      },
      {
        tone: "emerald",
        tag: "Human Gate",
        text: "Downstream delivery remains locked until a controller signs off on flagged fields.",
      },
    ],
    principles: [
      [
        "The workflow is the product",
        "Make pipeline stage health and bottlenecks visible at a glance.",
      ],
      [
        "Confidence beside evidence",
        "Pair every extracted figure with its source document snippet and tolerance check.",
      ],
      [
        "Risk-ranked exceptions",
        "Prioritize human attention by financial impact and confidence threshold.",
      ],
      [
        "Accountable sign-off",
        "Record who approved an override, when, and why before downstream release.",
      ],
    ],
    journeySummary:
      "The 5-stage operating model keeps AI agents and financial operators aligned from raw document arrival to downstream ledger delivery.",
    journeyFlow: [
      {
        step: "01",
        stage: "Ingest",
        actor: "Ingestion Agent",
        userGoal: "Capture incoming fund reports and classify document schemas",
        frictionEliminated:
          "Analysts manually hunted through shared inboxes for arriving NAV packets.",
        uxResolution:
          "Live ingestion queue with automated fund matching and SLA timers.",
        engineeringContract:
          "Document ingestion webhook + schema classifier state",
        touchpoints: ["Ingestion Queue", "SLA Tracker", "Source Hash"],
      },
      {
        step: "02",
        stage: "Extract",
        actor: "Extraction Agent",
        userGoal:
          "Parse line items with field-level confidence and source coordinates",
        frictionEliminated:
          "Black-box extraction forced analysts to re-key numbers manually.",
        uxResolution:
          "Split-pane PDF bounding boxes linked to structured table rows.",
        engineeringContract:
          "Bounding-box coordinate map + per-field confidence float",
        touchpoints: ["Source Viewer", "Field Confidence", "Auto-Parse"],
      },
      {
        step: "03",
        stage: "Validate",
        actor: "Validation Engine",
        userGoal: "Run tolerance and period-over-period variance checks",
        frictionEliminated:
          "Spreadsheet formula errors hid reconciliation discrepancies.",
        uxResolution:
          "Automated variance rules flag anomalies in amber/crimson.",
        engineeringContract:
          "Deterministic reconciliation ruleset + exception severity",
        touchpoints: ["Variance Rules", "Exception Badges", "Delta Check"],
      },
      {
        step: "04",
        stage: "Approve",
        actor: "Fund Controller",
        userGoal:
          "Review flagged fields, apply overrides, and sign off with audit notes",
        frictionEliminated:
          "Approvals happened in email threads detached from the data.",
        uxResolution:
          "Explicit human approval gate with required rationale on overrides.",
        engineeringContract:
          "Role-gated approval mutation + immutable audit log",
        touchpoints: ["Approval Gate", "Override Note", "Audit Trail"],
      },
      {
        step: "05",
        stage: "Deliver",
        actor: "Downstream Systems",
        userGoal:
          "Publish verified NAV package to accounting and client portals",
        frictionEliminated:
          "Unclear post-approval status caused duplicate downstream exports.",
        uxResolution: "Real-time delivery receipt with payload verification.",
        engineeringContract:
          "Idempotent delivery dispatch + acknowledgement status",
        touchpoints: ["Delivery Receipt", "Payload Log", "SLA Complete"],
      },
    ],
    wireframes: [
      {
        id: "01",
        title: "Executive command center",
        caption: "Pipeline health, agent throughput, and SLA risk queue.",
        layout: "dashboard",
      },
      {
        id: "02",
        title: "Split evidence verifier",
        caption: "Source PDF bounding boxes beside extracted NAV fields.",
        layout: "split",
      },
      {
        id: "03",
        title: "Exception triage table",
        caption: "Risk-sorted anomalies with confidence and variance columns.",
        layout: "grid",
      },
      {
        id: "04",
        title: "Controller approval drawer",
        caption: "Override rationale and cryptographic audit trail.",
        layout: "drawer",
      },
    ],
    architecturalPivot: {
      summary:
        "We replaced a document-level AI confidence badge with field-level confidence tied directly to source PDF coordinates so operators only review the exact cells that need judgment.",
      before: "Single document-level AI score",
      after: "Field-level confidence + source PDF bounding box",
    },
    engineeringSummary:
      "Co-designed the agent state machine, bounding-box coordinate overlay, and role-based approval locks with AI and backend engineers.",
    collabTracks: [
      {
        phase: "01 / AI Trust",
        title: "Field-level provenance schema",
        detail:
          "Mapped every extracted value to PDF page, bounding box, and confidence score.",
        deliverable: "Provenance UI contract",
      },
      {
        phase: "02 / Orchestration",
        title: "Stage & exception routing",
        detail:
          "Defined state transitions between automated checks and human review queues.",
        deliverable: "Command center workflow",
      },
      {
        phase: "03 / Governance",
        title: "Audit-compliant sign-off",
        detail:
          "Enforced controller permissions and rationale capture on manual overrides.",
        deliverable: "Immutable audit log pattern",
      },
    ],
    contractBridge: {
      figmaTitle: "Figma Spec · AI Evidence & Approval",
      codeTitle: "AI Pipeline & Audit API",
      figmaSpecs: [
        [
          "Confidence display",
          "High (≥98% Green) · Review (90–97% Amber) · Low (<90% Red)",
        ],
        [
          "Source linkage",
          "Click field → highlight PDF bounding box coordinates",
        ],
        ["Approval gate", "Locked until all Low/Review fields are resolved"],
      ],
      codeSpecs: [
        [
          "fieldConfidence",
          "{ value: string, score: number, bbox: [x,y,w,h] }",
        ],
        [
          "workflowState",
          '"INGESTED" | "NEEDS_REVIEW" | "APPROVED" | "DELIVERED"',
        ],
        ["auditRecord", "{ actorId, timestamp, overrideReason }"],
      ],
    },
    decisions: [
      {
        title: "Pipeline command center with live agent telemetry.",
        body: "Surfaces active NAV packets, SLA health, and exception queues in one operational cockpit.",
        badge: "Governed Orchestration",
        image: `${assetBase}navflow/executive-dashboard-wide.png`,
      },
      {
        title: "Side-by-side source PDF evidence and extracted schema.",
        body: "Eliminates manual hunting by syncing every extracted number directly to the source paragraph or table cell.",
        badge: "Verifiable AI Extraction",
      },
      {
        title: "Mandatory human approval gate on tolerance breaches.",
        body: "Protects downstream accounting systems by requiring explicit controller sign-off whenever variance thresholds are exceeded.",
        badge: "Human-in-the-Loop Safety",
      },
    ],
    outcomes: [
      [
        "Pipeline visibility",
        "End-to-end status from inbox ingestion to downstream delivery",
        "Zero blind handoffs",
      ],
      [
        "Focused review",
        "Field-level confidence and source PDF highlighting",
        "Operators review exceptions, not entire PDFs",
      ],
      [
        "Audit readiness",
        "Role-gated approvals with timestamped override rationale",
        "100% traceable sign-off trail",
      ],
    ],
  },
  {
    id: "meridian",
    liveUrl: "./meridian-prototype.html",
    index: "04",
    name: "Meridian",
    codename: "Payments API Developer Workspace",
    category: "Developer platform · Payments API",
    portfolioCategory: "Developer tools",
    featured: true,
    summary:
      "A payments and ledger developer workspace that helps engineers move from API evaluation to a confident first integration and production readiness.",
    headlineStart: "From first API call to ",
    headlineAccent: "production readiness.",
    lede: "As Design Lead, I designed the guided developer journey that keeps API reference docs, runnable request playgrounds, webhook delivery logs, and production checklists in one workspace.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope:
      "Developer journey · Split API explorer · Error recovery · Webhook ledger",
    platform: "Responsive Web Application",
    heroImage: `${assetBase}meridian/overview.svg`,
    mandateTitle:
      "Turn a complex payments API into a sequence developers can test, debug, and ship.",
    mandateBody:
      "Developers evaluating payment APIs lose momentum when documentation, sandbox credentials, error recovery, and webhook logs live in separate tools. I unified the entire integration loop into one stateful workspace.",
    ownershipPillars: [
      [
        "Guided Quickstart",
        "Connected scoped sandbox setup, runnable requests, and live response inspection.",
      ],
      [
        "Actionable Error Recovery",
        "Designed distinct recovery paths for 401 auth, 403 permission, and 422 validation errors.",
      ],
      [
        "Webhook & Ledger Clarity",
        "Separated payment business state from webhook delivery attempts and retries.",
      ],
    ],
    discoverySummary:
      "Working with our UX researchers and platform engineers, we mapped the integration lifecycle, identifying where first-time evaluators stall between reading docs and verifying webhook delivery.",
    discoveryMethods: [
      [
        "First-Call Audit",
        "Measured the steps required to authenticate, execute a payment request, and inspect the ledger result.",
      ],
      [
        "Failure-Mode Design",
        "Collaborated with API engineers to map status codes to human-readable recovery actions.",
      ],
      [
        "Readiness Modeling",
        "Defined the exact checklist required to promote an integration from sandbox to production.",
      ],
    ],
    figmaNotes: [
      {
        tone: "amber",
        tag: "Developer Trust",
        text: "“The first API call is a confidence test—show why it worked and what changed.”",
      },
      {
        tone: "rose",
        tag: "Error UX",
        text: "Status codes alone are not enough; every 403 or 422 must point to the exact fix.",
      },
      {
        tone: "sky",
        tag: "Split Workspace",
        text: "Keep parameter docs beside the runnable request so reading and testing reinforce each other.",
      },
      {
        tone: "emerald",
        tag: "State Separation",
        text: "Never conflate a settled payment with an acknowledged webhook delivery.",
      },
    ],
    principles: [
      [
        "Keep guidance beside execution",
        "Pair schema reference with a runnable request playground in one split view.",
      ],
      [
        "Turn errors into recovery paths",
        "Explain the root cause and offer an in-place fix for auth and scope failures.",
      ],
      [
        "Separate business state from delivery state",
        "Track ledger settlement separately from webhook retry attempts.",
      ],
      [
        "Make production readiness explicit",
        "Provide a live integration checklist tied to observed sandbox milestones.",
      ],
    ],
    journeySummary:
      "Developers move from initial sandbox orientation to verified webhook retry and production sign-off without leaving the workspace.",
    journeyFlow: [
      {
        step: "01",
        stage: "Orient & Scope",
        actor: "Evaluating Engineer",
        userGoal:
          "Configure sandbox app scopes and inspect payment capabilities",
        frictionEliminated:
          "Developers had to hunt across multiple portals for API keys and permission scopes.",
        uxResolution:
          "Guided quickstart header with visible credential status and scope toggles.",
        engineeringContract:
          "Scoped sandbox session + OpenAPI capability manifest",
        touchpoints: ["Quickstart Header", "Scope Selector", "Sample Response"],
      },
      {
        step: "02",
        stage: "Run First Call",
        actor: "Backend Engineer",
        userGoal:
          "Execute a POST payment request alongside live parameter docs",
        frictionEliminated:
          "Copying curl snippets into external clients broke parameter context.",
        uxResolution:
          "Split explorer with editable JSON payload and instant response inspector.",
        engineeringContract:
          "Runnable request runner + idempotency key generator",
        touchpoints: [
          "Split Explorer",
          "Request Runner",
          "201 Response Inspector",
        ],
      },
      {
        step: "03",
        stage: "Recover Errors",
        actor: "Backend Engineer",
        userGoal: "Diagnose and resolve a 403 missing-permission failure",
        frictionEliminated:
          "Opaque error payloads forced developers to search support forums.",
        uxResolution:
          "Inline recovery card names the missing scope and applies the fix in place.",
        engineeringContract:
          "Structured error taxonomy (`CAUSE`, `REQUIRED_SCOPE`, `RETRY_ACTION`)",
        touchpoints: [
          "403 Diagnostic Banner",
          "Scope Fix Action",
          "Instant Retry",
        ],
      },
      {
        step: "04",
        stage: "Verify Webhooks",
        actor: "Integration Engineer",
        userGoal: "Inspect event delivery attempts and replay failed webhooks",
        frictionEliminated:
          "Engineers could not tell if a silent webhook was a ledger failure or endpoint timeout.",
        uxResolution:
          "Dedicated attempt timeline with stable event IDs and 1-click retry.",
        engineeringContract:
          "Event delivery log (`event_id`, `attempt_count`, `http_status`)",
        touchpoints: ["Webhook Timeline", "Event ID Trace", "Replay Button"],
      },
      {
        step: "05",
        stage: "Go Live Check",
        actor: "Engineering Lead",
        userGoal: "Complete production readiness verification",
        frictionEliminated:
          "Teams launched without verifying idempotency, error handling, or webhook retries.",
        uxResolution:
          "Live readiness checklist that updates automatically as sandbox milestones pass.",
        engineeringContract: "Readiness state machine + compliance gate",
        touchpoints: [
          "Readiness Checklist",
          "Milestone Badges",
          "Production Handoff",
        ],
      },
    ],
    wireframes: [
      {
        id: "01",
        title: "Guided quickstart overview",
        caption: "Capability summary, milestone strip, and sample response.",
        layout: "dashboard",
      },
      {
        id: "02",
        title: "Split API explorer",
        caption:
          "Parameter documentation paired with runnable request builder.",
        layout: "split",
      },
      {
        id: "03",
        title: "Webhook attempt ledger",
        caption: "Event IDs, delivery status, and retry controls.",
        layout: "grid",
      },
      {
        id: "04",
        title: "Inline error recovery drawer",
        caption: "403 scope diagnostic with guided remediation.",
        layout: "drawer",
      },
    ],
    architecturalPivot: {
      summary:
        "In engineering reviews, we separated the payment ledger status from the webhook delivery log so developers never confuse a successful transaction with a failed webhook endpoint.",
      before: "Single combined status badge",
      after: "Distinct Ledger State vs. Webhook Delivery Timeline",
    },
    engineeringSummary:
      "Partnered with API and developer-platform engineers to align OpenAPI schemas, error codes, request IDs, and webhook retry semantics.",
    collabTracks: [
      {
        phase: "01 / OpenAPI Sync",
        title: "Unified docs & runner schema",
        detail:
          "Connected field descriptions and validation rules directly to the request playground.",
        deliverable: "Split API Explorer",
      },
      {
        phase: "02 / Error Taxonomy",
        title: "Structured 401/403/422 recovery",
        detail:
          "Standardized error payloads to include cause, required permission, and next action.",
        deliverable: "Inline recovery patterns",
      },
      {
        phase: "03 / Event Delivery",
        title: "Traceable webhook state machine",
        detail:
          "Exposed stable event IDs, attempt history, and manual retry triggers.",
        deliverable: "Webhook delivery monitor",
      },
    ],
    contractBridge: {
      figmaTitle: "Figma Spec · API Explorer & Recovery",
      codeTitle: "Developer Portal & OpenAPI Contract",
      figmaSpecs: [
        [
          "Workspace layout",
          "Persistent reference left · Runnable request & response right",
        ],
        [
          "Error remediation",
          "403 Permission Denied → Inline scope elevation CTA",
        ],
        [
          "Webhook monitor",
          "Separate Business Milestone from Delivery Attempt status",
        ],
      ],
      codeSpecs: [
        [
          "requestState",
          '{ endpoint, scope: ["payments:write"], status: 201 | 403 }',
        ],
        ["webhookAttempt", '{ eventId: "evt_01", attempt: 2, ack: true }'],
        [
          "readinessChecks",
          '["auth_verified", "error_recovered", "webhook_acked"]',
        ],
      ],
    },
    decisions: [
      {
        title: "Keep API documentation and runnable execution side by side.",
        body: "Developers read a field definition, edit the payload, and inspect the live response without switching tabs or losing context.",
        badge: "Split Explorer Pattern",
        image: `${assetBase}meridian/overview.svg`,
      },
      {
        title: "Turn 403 and 422 errors into guided recovery loops.",
        body: "Each failure state names the exact missing scope or invalid parameter and lets the engineer test the fix immediately.",
        badge: "Self-Healing DX",
      },
      {
        title: "Decouple transaction settlement from webhook delivery.",
        body: "Gives engineers crystal-clear visibility into whether an issue lies in the payment ledger or their own webhook listener.",
        badge: "Operational Clarity",
      },
    ],
    outcomes: [
      [
        "First-call speed",
        "Guided quickstart with inline request runner",
        "Zero context switching during evaluation",
      ],
      [
        "Error resolution",
        "Actionable 401/403/422 diagnostic and retry loop",
        "Self-service debugging in place",
      ],
      [
        "Production confidence",
        "Separated ledger state, webhook logs, and readiness checklist",
        "Auditable path to launch",
      ],
    ],
  },
]

const rawCatalog: {
  id: string
  index: string
  name: string
  category: string
  portfolioCategory: CaseStudyProject["portfolioCategory"]
  summary: string
  role: string
  team?: string
  scope: string
  platform: string
  image: string
  liveUrl?: string
  decisions: [string, string][]
}[] = [
  {
    id: "dev-mode",
    liveUrl: "./dev-mode-prototype.html",
    index: "05",
    name: "API Launchpad",
    category: "Developer platform · API integration",
    portfolioCategory: "Developer tools",
    summary:
      "An API developer workspace that connects discovery, first call, debugging, and operational readiness in one coherent environment.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope:
      "Journey strategy · Information architecture · Interaction design · Prototype",
    platform: "Responsive Web Application",
    image: `${assetBase}dev-mode/overview.png`,
    decisions: [
      [
        "Keep guidance beside execution",
        "The API reference and runnable request share a workspace so developers can understand a field, change a value, and inspect the response in place.",
      ],
      [
        "Turn errors into recovery paths",
        "Authentication, permission, and validation failures each identify a distinct cause and corrective action.",
      ],
      [
        "Separate business state from delivery state",
        "Stable event IDs and an attempt timeline make webhook retries inspectable without implying duplicate transactions.",
      ],
    ],
  },
  {
    id: "citi-homepage",
    index: "07",
    name: "Citi Homepage Redesign",
    category: "Financial services · Web experience",
    portfolioCategory: "Content & web",
    summary:
      "Restructuring a high-traffic banking homepage around clearer customer journeys, relevant offer comparison, and responsive content hierarchy.",
    role: "Co-lead Designer",
    team: "Fellow lead designer · Product · Engineering",
    scope:
      "Homepage strategy · Journey design · Content hierarchy · Responsive UX",
    platform: "Enterprise Responsive Web Experience",
    image: `${assetBase}citi-homepage-desktop.png`,
    decisions: [
      [
        "Start with customer intent, not internal product silos",
        "Organized top-level entry points around recognizable banking needs—cards, checking, mortgage, and wealth.",
      ],
      [
        "Make offers comparable at a glance",
        "Standardized rate, benefit, and CTA hierarchy so visitors can evaluate options without opening multiple tabs.",
      ],
      [
        "Carry hierarchy cleanly from desktop to mobile",
        "Preserved primary journey starts and offer legibility across narrow viewports.",
      ],
    ],
  },
  {
    id: "enta",
    index: "08",
    name: "Enta",
    category: "Fintech · Cross-border money",
    portfolioCategory: "Content & web",
    summary:
      "Connecting everyday multi-currency payments, beneficiaries, payment links, and digital assets in one transparent account workspace.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope:
      "Product architecture · Transaction flows · Multi-currency wallet UX",
    platform: "Web Application",
    image: `${assetBase}enta/dashboard.png`,
    liveUrl: "https://www.entashiga.io/",
    decisions: [
      [
        "Organize around recognizable money goals",
        "Framed top-level actions around Send, Receive, Buy, and Hold with network details revealed progressively.",
      ],
      [
        "Show paid and received amounts before commitment",
        "Brought exchange rates, fees, destination, and settlement conditions into one review surface.",
      ],
      [
        "Separate wallets, payment links, and beneficiaries",
        "Gave each operational task a stable destination outside the account overview.",
      ],
    ],
  },
  {
    id: "sendory",
    index: "09",
    name: "Sendory",
    category: "Innovation · Newsletter creation workbench",
    portfolioCategory: "Content & web",
    summary:
      "A block-based newsletter authoring studio combining communication-purpose templates, a live composition canvas, and a contextual properties inspector.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope: "Authoring architecture · Block palette · Live canvas · HTML export",
    platform: "Web Authoring Application",
    image: `${assetBase}sendory/builder.png`,
    decisions: [
      [
        "Start from communication purpose, not a blank page",
        "Named starter templates by editorial intent so authors begin with a proven content sequence.",
      ],
      [
        "Separate document structure from block styling",
        "Kept layout insertion on the canvas distinct from block-level typography and spacing controls in the inspector.",
      ],
      [
        "Built-in narrow viewport preview and undo safety",
        "Let authors verify mobile rendering and reverse layout experiments immediately.",
      ],
    ],
  },
  {
    id: "flownode",
    index: "10",
    name: "Flownode",
    category: "Innovation · AI workflow automation",
    portfolioCategory: "Developer tools",
    summary:
      "Turning plain-language automation ideas into an inspectable, editable node graph with explicit human approval gates and operational telemetry.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope:
      "AI plan review · Node graph canvas · Human approval gates · Ops telemetry",
    platform: "Web Application",
    image: `${assetBase}flownode/canvas.png`,
    decisions: [
      [
        "Insert an explicit plan review before canvas generation",
        "Shows proposed steps, human approval gates, and estimated credit cost before mutating the workflow graph.",
      ],
      [
        "Keep the node graph visible while configuring a step",
        "Paired the workflow canvas with an adjacent inspector so upstream and downstream connections remain clear.",
      ],
      [
        "Distinguish waiting-on-human from execution failure",
        "Gave human handoffs and system errors distinct visual states and recovery paths in operations views.",
      ],
    ],
  },
  {
    id: "iretv",
    index: "11",
    name: "IreTV",
    category: "Streaming · Independent cinema platform",
    portfolioCategory: "Content & web",
    summary:
      "A faith- and family-centered streaming platform connecting editorial discovery, a Faith & Family suitability guide, transparent rental terms, and saved library continuity.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope:
      "Product strategy · Discovery IA · Rental checkout · Playback continuity",
    platform: "Responsive Web Platform",
    image: `${assetBase}iretv/welcome.png`,
    liveUrl: "https://iretv.net",
    decisions: [
      [
        "Make suitability part of discovery",
        "Paired synopsis and trailer with a structured Faith & Family Guide so households evaluate titles with confidence.",
      ],
      [
        "State price and viewing window beside the primary CTA",
        "Presented the exact rental price, 14-day entitlement window, and no-subscription promise before checkout.",
      ],
      [
        "Separate active rentals, watchlist, and viewing history",
        "Built return continuity so saved interest and paid entitlements never blur together.",
      ],
    ],
  },
  {
    id: "finwise",
    index: "12",
    name: "ArtoQu (FinWise)",
    category: "Fintech · Personal finance workspace",
    portfolioCategory: "Product & UX",
    summary:
      "A financial workspace connecting savings goals, cash-flow trends, transaction investigation, and multi-account wallet context.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope:
      "Dashboard hierarchy · Transaction workspace · Wallet & statistics views",
    platform: "Responsive Web Application",
    image: `${assetBase}finwise-web/dashboard.png`,
    liveUrl: "https://finance-dashboard-slice-ui.vercel.app/dashboard",
    decisions: [
      [
        "Frame savings goals with horizon, target, and progress",
        "Made long-term targets recognizable at a glance without requiring a separate planning session.",
      ],
      [
        "Give transactions a dedicated investigation workspace",
        "Kept the overview calm while providing full filtering and record inspection in Transactions.",
      ],
      [
        "Consistent time-period and currency framing",
        "Aligned cash-flow charts and statistics views so comparisons never require guesswork.",
      ],
    ],
  },
  {
    id: "pulse",
    index: "13",
    name: "Pulse",
    category: "Fintech · Settlement infrastructure",
    portfolioCategory: "Content & web",
    summary:
      "An enterprise payment operations and settlement platform making quote-to-settlement lifecycles, exceptions, and webhook endpoints traceable.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope: "Operational monitoring · Exception workspace · Webhook visibility",
    platform: "Enterprise Web Application",
    image: `${assetBase}pulse/dashboard.png`,
    liveUrl: "https://www.pulseshiga.io/",
    decisions: [
      [
        "Separate expected, received, and settled amounts",
        "Answered distinct operational questions clearly across high-density transaction tables.",
      ],
      [
        "Pair exception badges with root-cause context",
        "Helped operators distinguish timing delays from amount mismatches before escalating.",
      ],
      [
        "Dedicated webhook & integration health navigation",
        "Kept technical endpoint monitoring accessible without crowding daily settlement triage.",
      ],
    ],
  },
  {
    id: "arca",
    index: "14",
    name: "Arca",
    category: "Fintech · Mobile wallet",
    portfolioCategory: "Mobile",
    summary:
      "A calm mobile wallet unifying account balances, category budgets, recent activity, and contextual card security controls.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope: "Mobile financial hierarchy · Card controls · Interactive prototype",
    platform: "Mobile Web Application",
    image: `${assetBase}arca/home.png`,
    liveUrl: "https://personal-finance-wallet-mobile-app.vercel.app/",
    decisions: [
      [
        "Answer three questions on load: What do I have, what changed, what’s next",
        "Structured the mobile home screen around total balance, primary money actions, and recent activity.",
      ],
      [
        "Keep the selected card visible above security actions",
        "Placed Freeze, Limits, and masked card details directly below the visual card to prevent action errors.",
      ],
      [
        "Dedicated Activity view for deeper spend inspection",
        "Separated quick daily checks from full transaction history and budget tracking.",
      ],
    ],
  },
  {
    id: "interoly",
    index: "15",
    name: "Interoly",
    category: "Commerce · Mobile inventory & order ops",
    portfolioCategory: "Mobile",
    summary:
      "A mobile inventory and order operations app built for work happening close to the shelf, stock room, and fulfillment line.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope:
      "Information architecture · Stock exception workflows · Mobile prototype",
    platform: "Mobile Web Application",
    image: `${assetBase}interoly/home.png`,
    liveUrl: "https://inventory-management-mobile-app.vercel.app/",
    decisions: [
      [
        "Surface below-reorder exceptions first",
        "Called out low-stock items and urgent order statuses at the top of the home overview.",
      ],
      [
        "Give Items and Orders predictable bottom-nav homes",
        "Let floor operators jump straight to SKU inspection or order fulfillment with one thumb tap.",
      ],
      [
        "Clear item recognition before stock adjustment",
        "Grouped SKU identifiers, stock counts, and status badges to prevent warehouse miscounts.",
      ],
    ],
  },
  {
    id: "shoppulse",
    index: "16",
    name: "ShopPulse",
    category: "E-commerce · Store analytics & operations",
    portfolioCategory: "Product & UX",
    summary:
      "An e-commerce operations workspace connecting top-line store performance signals to the product catalog, inventory, and orders behind them.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope:
      "Analytical journey · Information architecture · Responsive prototype",
    platform: "Responsive Web Dashboard",
    image: `${assetBase}shoppulse/dashboard.png`,
    liveUrl: "https://shoppulse-saas.vercel.app/dashboard",
    decisions: [
      [
        "Connect revenue signals directly to product and order records",
        "Designed seamless transitions from dashboard KPI spikes into the underlying Products and Orders views.",
      ],
      [
        "Dedicated Analytics destination for period comparisons",
        "Kept daily store triage fast while supporting deeper cohort and channel exploration.",
      ],
      [
        "Consistent status language across orders and stock",
        "Unified fulfillment and inventory badges across tables and summary cards.",
      ],
    ],
  },
  {
    id: "urbandrive",
    index: "17",
    name: "UrbanDrive",
    category: "Travel · Vehicle discovery & rental booking",
    portfolioCategory: "Product & UX",
    summary:
      "A considered vehicle-rental experience connecting trip search, side-by-side fleet comparison, transparent protection options, and booking confirmation.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope: "Search experience · Fleet comparison · Transparent checkout flow",
    platform: "Responsive Web Application",
    image: `${assetBase}urbandrive/home.png`,
    liveUrl: "https://urbandrive-host.netlify.app/",
    decisions: [
      [
        "Filter by real trip needs and vehicle attributes",
        "Structured fleet discovery around passenger capacity, luggage, transmission, and daily total.",
      ],
      [
        "Place protection choices beside a live booking summary",
        "Let travelers see the exact cost impact of dates, locations, and coverage before committing.",
      ],
      [
        "Clear step progression from search to reservation",
        "Reduced checkout drop-off by making requirements and policies visible upfront.",
      ],
    ],
  },
  {
    id: "pennwise",
    index: "18",
    name: "Pennwise",
    category: "Fintech · Personal finance planning",
    portfolioCategory: "Product & UX",
    summary:
      "A personal finance app that turns accounts, budgets, goals, debt, and future scenarios into one understandable planning system.",
    role: "Lead Product Designer",
    team: "Product · UX research · Engineering",
    scope:
      "Financial compass · Planning flows · Scenario analysis · Design system",
    platform: "Responsive Web & Mobile Product System",
    audienceTitle: "People building a confident financial plan",
    audienceGoal:
      "“I want to see where my money stands today, understand the trade-offs behind my goals, and know which next step I can act on.”",
    personaQuotes: [
      { quote: "I want to see where my money stands today before I make another decision.", name: "Maya Thompson", designation: "Early-career professional" },
      { quote: "Show me the trade-offs behind a goal, not just a number that looks optimistic.", name: "Jordan Lee", designation: "Household planner" },
      { quote: "I need to understand what changes if my income, spending, or returns move.", name: "Omar Khan", designation: "Long-term planner" },
      { quote: "Give me a next step I can act on without becoming a financial expert first.", name: "Priya Shah", designation: "First-time investor" },
    ],
    image: "/pennwise-overview.svg",
    liveUrl:
      "https://www.figma.com/design/NZbmIQrN9GMHgTasujs7Xv/Pennwise-%E2%80%94-Personal-Finance-App?m=auto&t=MkSK5hpyyhXRYMvc-6",
    decisions: [
      [
        "Start with a financial compass, not a pile of accounts",
        "Made current position, upcoming milestones, and the next useful action visible from the dashboard.",
      ],
      [
        "Turn long-term planning into comparable scenarios",
        "Designed sensitivity views that show how returns, inflation, and income changes affect a plan without hiding the assumptions.",
      ],
      [
        "Use one semantic system across dense financial states",
        "Defined light/dark tokens, accessible status colors, and reusable mobile components across the product journeys.",
      ],
    ],
  },
  {
    id: "solshine",
    index: "19",
    name: "Solshine",
    category: "Clean energy · Reusable Framer web system",
    portfolioCategory: "Content & web",
    summary:
      "A complete, modular website template system for solar and renewable-energy businesses connecting service discovery, proof, and project enquiries.",
    role: "Lead Designer",
    team: "UX researchers · Product · Engineering",
    scope:
      "Full template architecture · Repeatable sections · Responsive enquiry flow",
    platform: "Framer Website System",
    image: `${assetBase}solshine/home.png`,
    liveUrl: "https://solshine.framer.ai/",
    decisions: [
      [
        "Modular page system built for easy adaptation",
        "Created reusable hero, service breakdown, savings proof, and FAQ components that scale across clean-energy brands.",
      ],
      [
        "Connect educational content to a low-friction enquiry path",
        "Guided homeowners and commercial buyers from solar capability overview to consultation booking.",
      ],
      [
        "Editorial typography paired with high-trust project proof",
        "Balanced aspirational sustainability storytelling with concrete installation metrics.",
      ],
    ],
  },
]

const generatedMandates: Record<CaseStudyProject["portfolioCategory"], string> = {
  "Developer tools": "I translated a technical platform problem into a clearer build, configure, and validate workflow, working with product and engineering to make system state legible at each step.",
  Mobile: "I reshaped the mobile workflow around the moments people need to act quickly, using clearer prioritization, feedback, and recovery states to reduce uncertainty.",
  "Design systems": "I turned recurring product decisions into a usable visual and component language, aligning foundations, responsive rules, and implementation guidance for the teams using the system.",
  "Product & UX": "I mapped the operational journey end to end, then simplified the places where people had to interpret status, compare options, or decide what to do next.",
  "Content & web": "I organized the experience around audience intent, making the content hierarchy, entry points, and next actions easier to scan across responsive states.",
}

const personaNames = [
  ["Alex Morgan", "Primary operator"],
  ["Taylor Reed", "Daily user"],
  ["Jordan Ellis", "Team lead"],
]

const generatedProjects: CaseStudyProject[] = rawCatalog.map((item) => ({
  id: item.id,
  index: item.index,
  name: item.name,
  category: item.category,
  portfolioCategory: item.portfolioCategory,
  summary: item.summary,
  headlineStart: `${item.name}: `,
  headlineAccent: "architected for clarity.",
  lede: `As ${item.role.toLowerCase()}, I led the end-to-end UX architecture, interaction model, and engineering alignment for ${item.name}—turning complex requirements into a cohesive, production-ready system.`,
  role: item.role,
  team: item.team ?? "UX researchers · Product · Engineering",
  scope: item.scope,
  platform: item.platform,
  heroImage: item.image,
  audienceTitle:
    item.audienceTitle ??
    ({
      "Developer tools": "Developers and platform teams",
      Mobile: "People managing work or daily tasks on the move",
      "Design systems": "Product teams building consistently",
      "Product & UX": "Operators making high-context decisions",
      "Content & web": "People looking for a clear next step",
    } satisfies Record<CaseStudyProject["portfolioCategory"], string>)[item.portfolioCategory],
  audienceGoal:
    item.audienceGoal ??
    "Understand the current state, find the right starting path, and move through the workflow with confidence.",
  personaQuotes:
    item.personaQuotes ??
    personaNames.map(([name, designation], index) => ({
      quote:
        index === 0
          ? `I need ${item.name} to show me where I am, what matters now, and where to begin.`
          : index === 1
            ? `I need the important detail in context so I can make the right decision without rebuilding the workflow.`
            : `I need a clear next action and enough feedback to know the work is moving forward.`,
      name,
      designation,
    })),
  liveUrl: item.liveUrl,
  mandateTitle: item.summary,
  mandateBody: generatedMandates[item.portfolioCategory],
  ownershipPillars: [
    [
      "Information Architecture",
      `Structured ${item.name} around clear user intents and predictable navigation destinations.`,
    ],
    [
      "Interaction & State Design",
      "Defined loading, empty, active, exception, and confirmation states before visual polish.",
    ],
    [
      "Engineering Collaboration",
      "Delivered tokenized specs, responsive rules, and interactive prototypes aligned with code.",
    ],
  ],
  discoverySummary: `Working alongside our UX researchers, we audited the end-to-end workflow for ${item.name} and mapped where users lost context. I then partnered with engineering to establish a single shared state model.`,
  discoveryMethods: [
    [
      "Journey & Task Audit",
      "Mapped every critical decision from initial entry to verified completion.",
    ],
    [
      "System & State Inventory",
      "Documented data dependencies, edge cases, and role permissions with engineers.",
    ],
    [
      "Comparative UX Review",
      "Established clear hierarchy rules so primary actions and supporting evidence stay connected.",
    ],
  ],
  figmaNotes: [
    {
      tone: "amber",
      tag: "Core Intent",
      text: `“Users in ${item.name} need to see what matters first and what action comes next.”`,
    },
    {
      tone: "emerald",
      tag: "System Rule",
      text: "Keep summary signals connected to the detailed records that explain them.",
    },
    {
      tone: "sky",
      tag: "State Continuity",
      text: "Preserve filter, selection, and task context across every screen transition.",
    },
    {
      tone: "rose",
      tag: "Engineering Sync",
      text: "Align Figma component props and status tokens 1:1 with frontend state.",
    },
  ],
  principles: [
    [
      "Orient immediately",
      "Establish status, scope, and primary actions on the first viewport.",
    ],
    [
      "Progressive disclosure",
      "Keep common tasks effortless while revealing advanced controls in context.",
    ],
    [
      "Visible state transitions",
      "Ensure pending, active, and completed states are unmistakable.",
    ],
    [
      "Built for engineering scale",
      "Use semantic tokens and repeatable component contracts across all breakpoints.",
    ],
  ],
  journeySummary: `I mapped the 5-stage user and system journey for ${item.name} so design and engineering worked from one blueprint.`,
  journeyFlow: [
    {
      step: "01",
      stage: "Orient",
      actor: "Primary User",
      userGoal:
        "Understand current status and available starting paths on load",
      frictionEliminated:
        "Competing modules and equal-weight links previously obscured the primary task.",
      uxResolution:
        "Focused overview hierarchy with clear status framing and primary CTA.",
      engineeringContract: "Initial route state + semantic summary payload",
      touchpoints: ["Overview Header", "Primary Action", "Status Strip"],
    },
    {
      step: "02",
      stage: "Explore & Filter",
      actor: "Primary User",
      userGoal: "Narrow scope and compare relevant options or records",
      frictionEliminated:
        "Filtering or switching views previously forced users to rebuild context.",
      uxResolution:
        "Persistent filter bar and synchronized list/detail inspection.",
      engineeringContract:
        "URL/store-synced filter query + deterministic list rendering",
      touchpoints: ["Scoped Filters", "Comparison Cards", "Record Table"],
    },
    {
      step: "03",
      stage: "Configure & Review",
      actor: "User + System",
      userGoal:
        "Inspect full details and verify consequences before committing",
      frictionEliminated:
        "Key terms, costs, or dependencies were hidden until after submission.",
      uxResolution:
        "Contextual review surface showing live impact beside the active selection.",
      engineeringContract: "Validation schema + real-time state preview",
      touchpoints: [
        "Contextual Inspector",
        "Impact Summary",
        "Validation Check",
      ],
    },
    {
      step: "04",
      stage: "Execute & Recover",
      actor: "System + User",
      userGoal: "Complete the action or recover cleanly from exceptions",
      frictionEliminated:
        "Generic error states left users unsure how to fix an issue.",
      uxResolution:
        "Explicit confirmation states and guided inline recovery for exceptions.",
      engineeringContract:
        "Idempotent action handler + structured error recovery state",
      touchpoints: ["Action Confirmation", "Exception Handler", "Audit Status"],
    },
    {
      step: "05",
      stage: "Return & Extend",
      actor: "Team / Returning User",
      userGoal: "Track ongoing status and reuse saved patterns across sessions",
      frictionEliminated:
        "One-time actions were not reflected in a durable history or saved workspace.",
      uxResolution:
        "Persistent activity timeline and reusable component patterns.",
      engineeringContract:
        "Persisted workspace state + documented UI component kit",
      touchpoints: ["Saved State", "Activity History", "Component System"],
    },
  ],
  wireframes: [
    {
      id: "01",
      title: "Primary overview hierarchy",
      caption:
        "Establishes orientation, key signals, and top-level navigation.",
      layout: item.portfolioCategory === "Mobile" ? "mobile-home" : "dashboard",
    },
    {
      id: "02",
      title: "Contextual inspection & review",
      caption: "Keeps selection context visible while reviewing details.",
      layout: item.portfolioCategory === "Mobile" ? "mobile-queue" : "split",
    },
    {
      id: "03",
      title: "Structured comparison view",
      caption: "Aligns attributes, status, and actions for fast scanning.",
      layout: item.portfolioCategory === "Mobile" ? "mobile-heatmap" : "grid",
    },
    {
      id: "04",
      title: "Confirmation & state continuity",
      caption: "Provides an auditable record of the completed action.",
      layout: item.portfolioCategory === "Mobile" ? "mobile-ledger" : "drawer",
    },
  ],
  architecturalPivot: {
    summary: `During joint reviews with engineering on ${item.name}, we consolidated fragmented sub-screens into a connected overview-to-detail architecture so users never lose their active context.`,
    before: "Disconnected multi-page steps",
    after: "Connected workspace with persistent context",
  },
  engineeringSummary: `I partnered with engineers to translate ${item.name} into clean component contracts, responsive layout rules, and accessible state semantics.`,
  collabTracks: [
    {
      phase: "01 / Architecture",
      title: "Aligned IA & state contracts",
      detail:
        "Mapped every user-facing status and filter to deterministic frontend state.",
      deliverable: "Information architecture & state spec",
    },
    {
      phase: "02 / Components",
      title: "Built reusable UI primitives",
      detail:
        "Standardized cards, tables, forms, and status badges across desktop and mobile.",
      deliverable: "Tokenized component library",
    },
    {
      phase: "03 / Delivery QA",
      title: "Verified responsive & a11y parity",
      detail:
        "Reviewed keyboard navigation, contrast ratios, and narrow-viewport behavior.",
      deliverable: "Shipped interactive experience",
    },
  ],
  contractBridge: {
    figmaTitle: `Figma System Spec · ${item.name}`,
    codeTitle: "Frontend Implementation Contract",
    figmaSpecs: [
      [
        "Hierarchy & layout",
        "Primary signal → Contextual inspection → Clear next action",
      ],
      ["State coverage", "Default, Loading, Filtered, Exception, Confirmed"],
      [
        "Responsive behavior",
        "Fluid grid with preserved action visibility on mobile",
      ],
    ],
    codeSpecs: [
      ["viewState", '"IDLE" | "LOADING" | "ACTIVE" | "CONFIRMED"'],
      [
        "a11ySemantics",
        "WCAG AA contrast + keyboard focus order + ARIA live status",
      ],
      ["componentProps", "Typed interfaces synced with design tokens"],
    ],
  },
  decisions: item.decisions.map(([title, body], idx) => ({
    title,
    body,
    badge: `Core Decision 0${idx + 1}`,
    image: idx === 0 ? item.image : undefined,
  })),
  outcomes: [
    [
      "Clarity on load",
      item.decisions[0]?.[0] || "Clear primary hierarchy",
      "Immediate user orientation",
    ],
    [
      "Connected workflow",
      item.decisions[1]?.[0] || "Seamless summary-to-detail flow",
      "Zero context loss",
    ],
    [
      "System durability",
      item.decisions[2]?.[0] || "Reusable component architecture",
      "Production-ready delivery",
    ],
  ],
}))

export const allCaseStudies: CaseStudyProject[] = [
  ...portfolioProjects,
  ...generatedProjects,
]
