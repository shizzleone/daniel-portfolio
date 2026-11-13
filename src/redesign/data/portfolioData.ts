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

export interface SynthesisSignal {
  theme: string
  evidence: string
  response: string
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
  figmaUrl?: string
  mandateTitle: string
  mandateBody: string
  problemStatement?: string
  frictionTitle?: string
  resolutionTitle?: string
  resolutionBody?: string
  panoramaTitle?: string
  panoramaLabel?: string
  ownershipPillars: [string, string][]
  discoverySummary: string
  discoveryMethods: [string, string][]
  figmaNotes: StickyNote[]
  synthesis?: SynthesisSignal[]
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
  problemStats?: { stat: string; label: string }[]
  keyInsights?: { id: string; text: string; highlight?: string }[]
  iaFlows?: {
    teamMember: string[]
    manager: string[]
  }
  processStages?: {
    step: string
    name: string
    description: string
  }[]
  userFeedback?: {
    quote: string
    author: string
    role: string
  }[]
  keyLearnings?: {
    title: string
    description: string
  }[]
  nextSteps?: {
    title: string
    description: string
    icon: string
  }[]
}

export const assetBase = "/assets/"

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
      "Create high-fidelity interactive prototypes to validate complex state transitions and give engineering a clear path to build.",
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
    id: "pennwise",
    liveUrl: "./pennwise-prototype/index.html",
    figmaUrl:
      "https://www.figma.com/design/NZbmIQrN9GMHgTasujs7Xv/Pennwise-%E2%80%94-Personal-Finance-App?m=auto&t=MkSK5hpyyhXRYMvc-6",
    index: "20",
    name: "Pennwise",
    codename: "Pennwise Personal Finance & Wealth",
    category: "Fintech · Personal finance & wealth simulation app",
    portfolioCategory: "Mobile",
    featured: true,
    summary:
      "A personal finance and wealth simulation mobile product that unifies Net Worth, a 4-pillar Financial Compass score, automated goal allocation, portfolio fee analysis, and interactive What-If life scenarios.",
    headlineStart: "Your money, ",
    headlineAccent: "clearly.",
    lede: "As Lead Product Designer, I designed Pennwise across 16 mobile product modules and a semantic Light/Dark token system—turning fragmented bank balances, retirement accounts, and life trade-offs into one calm Financial Compass and What-If simulation engine.",
    role: "Lead Product Designer",
    team: "Product · UX Research · iOS & Fintech Engineering",
    scope:
      "Financial Compass · Savings & debt planners · Portfolio analytics · What-If simulation engine · Semantic design system",
    platform: "iOS Mobile Application (Light & Dark Mode)",
    heroImage: `${assetBase}pennwise/hero-cover.png`,
    secondaryImage: `${assetBase}pennwise/design-system.png`,
    panoramaTitle: "Pennwise Visual Restraint & Interface Architecture · Light & Dark Mode",
    panoramaLabel: "High-Contrast Neutrals · Single Intentional Lime Accent · Dark & Light Mode Parity",
    frictionTitle: "Disconnected Account Balances, Goal Anxiety & Opaque Projections",
    resolutionTitle: "4-Pillar Financial Compass & Sandbox What-If Simulator",
    resolutionBody: "Connected live Net Worth ($128,420.50), a weighted 72/100 Financial Compass score, automated surplus routing ($870/mo), and a non-destructive 10-year What-If scenario simulator in one calm mobile system.",
    problemStatement: "Everyday banking apps dump raw transaction feeds without strategic direction, while wealth calculators force users through rigid spreadsheets that never explain how buying a home, taking a sabbatical, or increasing savings affects their real net worth trajectory.",
    audienceTitle: "Households and professionals building long-term financial clarity",
    audienceGoal: "I want to see where my money stands today, understand the real trade-offs behind my goals, and test big life decisions safely before I commit.",
    personaQuotes: [
      {
        quote: "I have checking, a high-yield savings account, a 401(k), and a student loan—I need one honest score that tells me which lever actually moves my finances forward this month.",
        name: "Sara Malik",
        designation: "Product Manager · $128k Net Worth",
      },
      {
        quote: "Before we commit to a $400k home in 2029, show me side-by-side how a 15% down payment affects our 2036 retirement trajectory and monthly cash buffer.",
        name: "Omar Khan",
        designation: "Household Planner · Joint Simulation",
      },
      {
        quote: "Don't just tell me my portfolio is up 14.2%—show me if my ETFs overlap and how much fund expense ratios are quietly costing me over 20 years.",
        name: "Priya Shah",
        designation: "Index Investor · $132.9k Portfolio",
      },
    ],
    mandateTitle:
      "Replace passive transaction lists with an actionable Financial Compass and sandbox What-If simulator.",
    mandateBody:
      "I structured Pennwise around strict visual restraint—pairing calm, high-contrast neutral surfaces with a single, deliberate neon lime accent reserved exclusively for the highest-leverage element per screen. This ensures dense financial metrics, 4-pillar health scores, and 10-year compounding charts remain effortless to scan without cognitive fatigue.",
    ownershipPillars: [
      [
        "Financial Compass Architecture",
        "Designed the 0–100 Compass Score combining Spending (84), Investing (80), Debt (66), and Saving (58) with 1-tap action plans.",
      ],
      [
        "Interactive What-If Simulation Studio",
        "Created the 9-step sandbox simulator to stress-test home purchases, raises, and 3-month sabbaticals against 2036 Net Worth.",
      ],
      [
        "Semantic Token & Component System",
        "Engineered semantic Light and Dark mode variable foundations, high-contrast data visualization tokens, and modular financial chart primitives.",
      ],
    ],
    discoverySummary:
      "Through diary studies and financial-planning interviews, we discovered that users abandon budgeting apps when they feel judged by past transactions rather than guided toward future leverage.",
    discoveryMethods: [
      [
        "Household Money Diary Study",
        "Tracked how 18 professionals checked balances, moved payday surplus, and discussed major purchases with partners.",
      ],
      [
        "Spreadsheet & Robo-Advisor Audit",
        "Identified why users distrusted black-box retirement projections that hid inflation (`2.5%`) and return (`6.0%`) assumptions.",
      ],
      [
        "Visual Density & Color Restraint Testing",
        "Validated that reserving accent color for the single highest-leverage indicator per screen reduced cognitive load on dense multi-account views.",
      ],
    ],
    figmaNotes: [
      {
        tone: "emerald",
        tag: "One Lime Hero",
        text: "“Keep the vibrant lime accent strictly to one hero element per screen—let neutral dark ink and clean alabaster carry the structural hierarchy.”",
      },
      {
        tone: "amber",
        tag: "Biggest Lift First",
        text: "On the Financial Compass, rank the four pillars strongest-first and pin 'Biggest lift: saving (+6 pts)' at the bottom.",
      },
      {
        tone: "sky",
        tag: "Safe Sandbox",
        text: "Reassure users on What-If simulations: 'Simulations never change your real accounts, budgets, or goals.'",
      },
      {
        tone: "rose",
        tag: "Surplus Guardrail",
        text: "When creating a new goal, warn inline if the required monthly contribution exceeds the $870 planned monthly surplus.",
      },
    ],
    synthesis: [
      {
        theme: "Actionable health over raw balances",
        evidence: "Seeing `$128,420.50` alone didn't tell users whether their 14% savings rate or 14.4% debt-to-asset ratio needed attention first.",
        response: "Paired the Net Worth hero with a `Compass 72` pill that drills into Spending, Investing, Debt, and Saving pillars.",
      },
      {
        theme: "Finite monthly surplus trade-offs",
        evidence: "Users created multiple savings goals without realizing their combined monthly targets exceeded their actual cash flow surplus.",
        response: "Designed the `$870 Monthly Surplus Allocator` with priority ranking and timeline impact badges.",
      },
      {
        theme: "Transparent long-term assumptions",
        evidence: "Users doubted 10-year net worth numbers when inflation, return rates, and debt payoff strategies were hidden.",
        response: "Exposed interactive sliders (`3.0% income growth`, `2.5% inflation`, `6.0% return`) and tornado sensitivity charts.",
      },
    ],
    principles: [
      [
        "Lead with net position and next action",
        "Pair total Net Worth with safe-to-spend cash (`$2,628.08`) and a concrete 3-step monthly action plan.",
      ],
      [
        "One brand accent per screen",
        "Reserve the vibrant brand accent for the primary health score or high-leverage CTA so critical financial alerts remain unmistakable.",
      ],
      [
        "Make every projection inspectable",
        "Show real-dollar toggles, inflation assumptions, and p50–p90 confidence bands (`$482k–$567k`) beneath every simulation.",
      ],
      [
        "Protect live accounts from experiments",
        "Isolate What-If life simulations in a non-destructive sandbox that can be saved, compared, and shared with a partner.",
      ],
    ],
    journeySummary:
      "A 5-stage financial clarity loop moving from daily Net Worth orientation to 4-pillar diagnosis, surplus allocation, portfolio fee inspection, and 2036 scenario simulation.",
    journeyFlow: [
      {
        step: "01",
        stage: "Orient Net Worth & Cash",
        actor: "Account Holder",
        userGoal: "Check consolidated Net Worth ($128,420.50), safe-to-spend cash ($2,628), and October cash flow (+$870)",
        frictionEliminated:
          "Logging into four separate banking and retirement apps to piece together household net worth.",
        uxResolution:
          "`Main Dashboard` hero card with 1-tap privacy mask, quick transfer actions, and synced account cards.",
        engineeringContract:
          "Aggregated Plaid/OAuth balance ledger + real-time safe-to-spend buffer calc",
        touchpoints: ["Main Dashboard", "Net Worth View", "Available Cash"],
      },
      {
        step: "02",
        stage: "Diagnose Financial Compass",
        actor: "Account Holder",
        userGoal: "Understand why the Compass Score is 72/100 and which pillar offers the biggest point lift",
        frictionEliminated:
          "Vague credit-score style gauges that don't explain how daily spending or savings rate changes the score.",
        uxResolution:
          "`Financial Compass` 4-pillar breakdown (`Spending 84`, `Investing 80`, `Debt 66`, `Saving 58`) + `Action Plan`.",
        engineeringContract:
          "Weighted 4-pillar scoring engine + marginal point-lift recommender",
        touchpoints: ["Financial Compass", "Health Breakdown", "Action Plan"],
      },
      {
        step: "03",
        stage: "Allocate Monthly Surplus",
        actor: "Household Planner",
        userGoal: "Distribute the $870 monthly surplus across Emergency Fund ($300), Home Down Payment ($330), and Japan Trip ($240)",
        frictionEliminated:
          "Over-committing monthly cash across uncoordinated savings goals.",
        uxResolution:
          "`Goals Overview` + `Priorities` surplus bar with automated payday transfer rules and milestone celebrations.",
        engineeringContract:
          "Payday auto-split rule engine + surplus over-allocation guardrail",
        touchpoints: ["Goals Overview", "Monthly Contributions", "Priorities"],
      },
      {
        step: "04",
        stage: "Audit Portfolio & Fees",
        actor: "Long-Term Investor",
        userGoal: "Verify asset diversification (78% score) and fee drag ($141/yr) across brokerage and 401(k) accounts",
        frictionEliminated:
          "Hidden mutual-fund expense ratios and overlapping US equity exposure across accounts.",
        uxResolution:
          "`Portfolio Overview` + `Diversification` & `Fees` showing exact annual fee savings (`$4,200 over 20 yrs`).",
        engineeringContract:
          "Holdings look-through classifier + 20-year expense-ratio compounding calc",
        touchpoints: ["Portfolio", "Asset Allocation", "Fees Audit"],
      },
      {
        step: "05",
        stage: "Simulate What-If Scenarios",
        actor: "Household Partners",
        userGoal: "Compare buying a $400k home in 2029 vs. a 10% raise or 3-month sabbatical on 2036 Net Worth ($520k)",
        frictionEliminated:
          "Guessing whether a home purchase or career break will derail retirement at age 65.",
        uxResolution:
          "`What-If Studio` + `Compare Scenarios` + `Sensitivity Analysis` tornado chart and partner PDF/link sharing.",
        engineeringContract:
          "Monte Carlo & deterministic 30-year cash-flow projection engine",
        touchpoints: ["What-If Studio", "10-Year Projections", "Scenario Compare"],
      },
    ],
    wireframes: [
      {
        id: "01",
        title: "Net Worth & Quick Actions",
        caption: "Soft lime radial hero card ($128,420.50), Compass 72 badge, 4 quick actions, and Checking/Savings split.",
        layout: "mobile-home",
      },
      {
        id: "02",
        title: "4-Pillar Financial Compass",
        caption: "72/100 score card with proportional pillar bars, ranked pillar list, and dark 'Biggest lift' banner.",
        layout: "mobile-queue",
      },
      {
        id: "03",
        title: "Surplus & Goal Planner",
        caption: "$37,450 goal progress header, payday cadence selector, and $870 monthly surplus priority allocator.",
        layout: "mobile-ledger",
      },
      {
        id: "04",
        title: "What-If Scenario Compare",
        caption: "Interactive slider cards for savings/return assumptions, 2036 trajectory curves, and sensitivity bars.",
        layout: "mobile-heatmap",
      },
    ],
    architecturalPivot: {
      summary:
        "Early prototypes treated Budgeting, Debt, Investments, and Retirement as separate calculators with conflicting visual scales. We unified the entire product around the Financial Compass and a single design system foundation, so every adjustment in daily spending or debt payoff immediately reflects in the user's overall health score and 10-year scenario trajectory.",
      before: "Isolated budget, debt, and retirement calculators",
      after: "Unified Financial Compass + Live What-If Trade-Off Engine",
    },
    engineeringSummary:
      "Defined a 2-collection Figma Variable architecture (`Primitives` → `Semantic Light/Dark` tokens synced with Tailwind/shadcn neutrals) and deterministic TypeScript contracts for the 4-pillar scoring and 10-year compounding simulation engine.",
    collabTracks: [
      {
        phase: "01 / Token & Surface System",
        title: "Light/Dark semantic variables & 1-hero lime rule",
        detail:
          "Mapped `bg/default`, `bg/subtle`, `brand/default (#B6F256)`, and semantic status tokens across Light and Dark modes.",
        deliverable: "Foundations & Token Spec",
      },
      {
        phase: "02 / Core iOS Modules",
        title: "End-to-end iOS financial flows",
        detail:
          "Designed Dashboard, Financial Compass, Cash Flow, Budgets, Bills, Debt Payoff, Goals, Portfolio, and What-If Simulation.",
        deliverable: "16 Product Modules in Figma",
      },
      {
        phase: "03 / Interactive Sandbox",
        title: "Playable 5-module prototype",
        detail:
          "Built live Net Worth privacy masking, interactive Compass pillar inspection, goal top-ups, and real-time 2036 What-If sliders.",
        deliverable: "Embedded Pennwise Prototype",
      },
    ],
    contractBridge: {
      figmaTitle: "Figma Token & Component Spec · Pennwise Mobile",
      codeTitle: "Financial Compass & Simulation Engine Contract",
      figmaSpecs: [
        [
          "Typography scale",
          "Inter Variable (Display 56/-2.4px, Balance 34/-1.4px, Title 17/-0.2px, Body 14/20)",
        ],
        [
          "Semantic color tokens",
          "Brand Lime `#B6F256` · Brand Strong `#84CC16` · Ink `#0A0A0A` · Subtle `#FAFAFA` · Positive `#15803D`",
        ],
        [
          "Component primitives",
          "Nav Bar · Pill Tab Bar · Compass Pillar Card · Slider Assumption Card · Scenario Compare Matrix",
        ],
      ],
      codeSpecs: [
        [
          "compassScoreState",
          '{ score: 72, deltaMoM: 4, pillars: { spending: 84, investing: 80, debt: 66, saving: 58 } }',
        ],
        [
          "surplusAllocation",
          '{ monthlySurplus: 870, allocations: [{ goal: "emergency", amt: 300 }, { goal: "home", amt: 330 }] }',
        ],
        [
          "simulationModel2036",
          '{ startNW: 128420, monthlySave: 1390, returnPct: 6.0, inflationPct: 2.5, projected2036: 520000 }',
        ],
      ],
    },
    decisions: [
      {
        title: "Start with a 4-pillar Financial Compass and concrete action plan—not a wall of raw transactions.",
        body: "The Main Dashboard pairs Net Worth ($128,420.50) and safe-to-spend cash ($2,628.08) with a 72/100 Financial Compass score that pinpoints the exact monthly move (+6 pts from shifting $150/mo to savings) with the highest financial lift.",
        badge: "01 · Dashboard & Financial Compass",
        image: `${assetBase}pennwise/dashboard-compass.png`,
      },
      {
        title: "Connect savings goals to a real $870 monthly surplus guardrail and automated payday rules.",
        body: "Across Emergency Fund, Home Down Payment, and Retirement planners, users see how every dollar of monthly surplus is allocated, get warned before over-scheduling their income, and celebrate 75% milestones.",
        badge: "02 · Savings Goals & Surplus Planning",
        image: `${assetBase}pennwise/goals-planning.png`,
      },
      {
        title: "Make long-term wealth and What-If life scenarios tangible with editable assumptions.",
        body: "Users audit their $132,968 portfolio for asset diversification and hidden ETF fee drag, then jump into the What-If Simulator to test buying a $400k home in 2029, a 10% raise, or a 3-month sabbatical with live sensitivity bars.",
        badge: "03 · Portfolio & What-If Simulation",
        image: `${assetBase}pennwise/simulation-scenarios.png`,
      },
    ],
    outcomes: [
      [
        "Mobile architecture",
        "Cohesive 16-module product suite spanning onboarding, net worth, and life planning",
        "16 iOS Modules",
      ],
      [
        "Financial clarity",
        "Turns multi-account balances into 4 transparent pillars and a 3-step action plan",
        "72/100 Compass",
      ],
      [
        "What-If simulation",
        "Models 10-year net worth sensitivity across home purchases, raises, and sabbaticals",
        "10-Yr Sandbox",
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
    featured: false,
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
    secondaryImage: `${assetBase}navflow/workflow-pipeline-wide.png`,
    panoramaTitle: "End-to-End NAV Orchestration & Pipeline Telemetry",
    panoramaLabel: "Field Confidence Scoring · Tollgate Verification · Audit Trail",
    frictionTitle: "Manual Extraction Bottlenecks & Audit Blindspots",
    resolutionTitle: "Governed Human-in-the-Loop AI Operations",
    resolutionBody: "Combined automated multi-format ingestion with confidence-scored field validation and explicit tollgates, turning risky manual audits into an inspectable, governed process.",
    problemStatement: "Manual NAV operations relied on inboxes, spreadsheets, and disconnected approval chains, creating error risk and compliance exposure during high-volume accounting windows.",
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
        image: `${assetBase}navflow/agent-operations-wide.png`,
      },
      {
        title: "Side-by-side source PDF evidence and extracted schema.",
        body: "Eliminates manual hunting by syncing every extracted number directly to the source paragraph or table cell.",
        badge: "Verifiable AI Extraction",
        image: `${assetBase}navflow/validation-tollgate-wide.png`,
      },
      {
        title: "Mandatory human approval gate on tolerance breaches.",
        body: "Protects downstream accounting systems by requiring explicit controller sign-off whenever variance thresholds are exceeded.",
        badge: "Human-in-the-Loop Safety",
        image: `${assetBase}navflow/human-approval-wide.png`,
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
    id: "bluewave",
    liveUrl: "./bluewave-prototype.html",
    figmaUrl:
      "https://www.figma.com/design/oKSX4bEtEcHoUe3DoGaAsO/BlueWave-SaaS?m=auto&t=k13k9B1nGX5KYeol-6",
    index: "21",
    name: "BlueWave",
    codename: "BlueWave Maritime Fleet & Logistics OS",
    category: "Maritime SaaS · Fleet tracking & supply chain telemetry",
    portfolioCategory: "Product & UX",
    featured: true,
    summary:
      "An enterprise maritime fleet management and supply chain operating system unifying real-time satellite AIS vessel tracking, interactive sea trade corridors, automated port berthing schedules, and container bay telemetry.",
    headlineStart: "Global fleets, ",
    headlineAccent: "orchestrated live.",
    lede: "As Lead Product Designer, I designed BlueWave's fleet control center across 22 global vessels, interactive sea route telemetry, and port berthing operations—transforming opaque maritime supply chains into a calm, proactive dispatch system.",
    role: "Lead Product Designer",
    team: "Maritime Ops · UX Research · Geospatial & IoT Engineering",
    scope:
      "Interactive fleet map · AIS satellite tracking · Voyage scrubber · Port turnaround HUD · Container slot telemetry",
    platform: "Enterprise Web & Tablet Application",
    heroImage: `${assetBase}bluewave/fleet-live-map.png`,
    secondaryImage: `${assetBase}bluewave/vessel-overview.png`,
    panoramaTitle: "Global Maritime Trade Corridors & Real-Time AIS Tracking",
    panoramaLabel: "Nautical Blue Accents · High-Contrast Daylight Panels · Coastal Telemetry",
    frictionTitle: "Opaque Ocean Transit, Unexpected Port Queues & Disconnected Cargo Feeds",
    resolutionTitle: "Interactive Live Fleet Map & Predictive Voyage Telemetry",
    resolutionBody:
      "Synchronized real-time satellite AIS positions, weather typhoon alerts, automated Suez convoy scheduling, and container slot manifests into one interactive control surface with <90s incident response.",
    problemStatement:
      "Global logistics teams and fleet directors relied on delayed email manifests and disconnected harbor spreadsheets, leaving them blind to weather rerouting delays, port congestion penalties, and fuel burn spikes.",
    audienceTitle: "Fleet operations managers, cargo owners, and maritime port dispatchers",
    audienceGoal:
      "I want to track our global fleet in real-time, predict port arrival windows accurately, and catch weather or canal bottlenecks before they disrupt customer supply chains.",
    personaQuotes: [
      {
        quote:
          "When a typhoon builds off East Asia, I need to know immediately which vessels are in the swell zone and simulate alternative waypoints without waiting for radio check-ins.",
        name: "Leslie Alex",
        designation: "Fleet Operations Manager · Global Logistics",
      },
      {
        quote:
          "Tell me exactly when MV Aurora Star clears Suez so our drayage truckers at Port of Rotterdam are booked for the right crane berth window.",
        name: "Marcus Vance",
        designation: "Supply Chain Director · European Freight",
      },
      {
        quote:
          "We need instant visibility into reefer container temperatures and hazardous cargo segregation across 24,000 TEU bays.",
        name: "Elena Rostova",
        designation: "Port Terminal Pilot & Operations",
      },
    ],
    mandateTitle:
      "Replace static harbor spreadsheets with an interactive, geospatial maritime operating system.",
    mandateBody:
      "I designed BlueWave around high-clarity maritime ergonomics: interactive vector maps with smooth pan and zoom, color-coded vessel status pulses (In service, In port, Delayed), and an interactive voyage scrubber that enables operators to simulate transit timelines in seconds.",
    ownershipPillars: [
      [
        "Geospatial Fleet Map Architecture",
        "Engineered the interactive SVG/canvas maritime map featuring sea trade corridors, pulsing AIS beacons, and dynamic weather overlays.",
      ],
      [
        "Voyage Simulation & Telemetry HUD",
        "Created the interactive scrubber bar and live telemetry drawer showing knots, heading, wave swell, and milestone checklists.",
      ],
      [
        "Port & Container Bay Systems",
        "Standardized slot manifest distribution, CII carbon intensity ratings, and harbor berthing cards.",
      ],
    ],
    discoverySummary:
      "Through immersive fieldwork at maritime shipping centers and interviews with port dispatchers, we uncovered that operators spend over 3 hours each morning reconciling vessel AIS coordinates with customer container manifests.",
    discoveryMethods: [
      [
        "Maritime Dispatch Fieldwork",
        "Shadowed port dispatchers during typhoon weather rerouting and Suez Canal queue scheduling.",
      ],
      [
        "AIS Telemetry Latency Audit",
        "Identified 15-minute lag bottlenecks in commercial satellite transponder feeds.",
      ],
      [
        "Cognitive Load & Map Density Testing",
        "Tested dark vs. coastal light map projections under high-stress emergency response simulations.",
      ],
    ],
    figmaNotes: [
      {
        tone: "emerald",
        tag: "Status Clarity",
        text: "“Color-code vessel pins strictly: Green for In Service, Blue for In Port, Red for Delayed.”",
      },
      {
        tone: "sky",
        tag: "Spatial Context",
        text: "Always show both the sailed track and the planned route with clickable port checkpoints.",
      },
      {
        tone: "amber",
        tag: "Weather Risk",
        text: "Highlight typhoon swell zones in amber/red with immediate alternative routing prompts.",
      },
    ],
    principles: [
      [
        "Geospatial Clarity First",
        "Dense maritime data must remain calm and scannable; never clutter the ocean with unorganized pins.",
      ],
      [
        "Predictive, Not Just Passive",
        "Show where the vessel will be in 48 hours, not just where the satellite recorded it 20 minutes ago.",
      ],
      [
        "Instant Incident Triage",
        "One click on a delayed vessel pin brings up its emergency advisory, ETA impact, and port agent contacts.",
      ],
    ],
    journeySummary:
      "From satellite AIS signal ingestion to automated port berth handover, BlueWave orchestrates the end-to-end voyage lifecycle.",
    journeyFlow: [
      {
        step: "01",
        stage: "Fleet Monitoring",
        actor: "Operations Manager",
        userGoal: "Scan global vessels and identify active ocean transits",
        frictionEliminated: "Fragmented radio reports and manual GPS coordinates",
        uxResolution: "Global vector map with live color-coded vessel beacon pins",
        engineeringContract: "WebSocket AIS feed updating every 10s with geoJSON coordinates",
        touchpoints: ["Live Map", "Fleet Sidebar", "Status Chips"],
      },
      {
        step: "02",
        stage: "Waypoint Inspection",
        actor: "Fleet Director",
        userGoal: "Track progress between Singapore departure and Rotterdam destination",
        frictionEliminated: "Opaque canal queue times and missing port arrival windows",
        uxResolution: "Interactive route timeline stepper with verified milestone timestamps",
        engineeringContract: "Historical voyage waypoint API with ETA prediction model",
        touchpoints: ["Voyage Scrubber", "Milestone Stepper", "Port Cards"],
      },
      {
        step: "03",
        stage: "Weather & Risk Triage",
        actor: "Maritime Pilot",
        userGoal: "Detect typhoon swell risks and re-route vessels safely",
        frictionEliminated: "Late weather warnings causing severe fuel burn and structural strain",
        uxResolution: "Toggleable weather radar layer with real-time wave height contours",
        engineeringContract: "NOAA & ECMWF meteorological raster overlay tiles",
        touchpoints: ["Weather Toggle", "Swell Alert Banner", "Speed Reducer"],
      },
      {
        step: "04",
        stage: "Berth Handover",
        actor: "Port Dispatcher",
        userGoal: "Coordinate tugboats, cranes, and customs gate passes before arrival",
        frictionEliminated: "Idle vessel anchorage delays costing $35k/day in harbor penalties",
        uxResolution: "Dedicated Port Operations view with assigned berth and crane stats",
        engineeringContract: "TOS (Terminal Operating System) EDI integration",
        touchpoints: ["Port Ops Tab", "Berth Allocation", "Gate Pass"],
      },
    ],
    wireframes: [
      {
        id: "01",
        title: "Live Maritime Fleet Map",
        caption: "Interactive vector canvas with vessel pins, trade routes, and weather radar.",
        layout: "dashboard",
      },
      {
        id: "02",
        title: "Vessel Telemetry HUD Drawer",
        caption: "Live speed over ground, heading, wave swell, and milestone stepper.",
        layout: "drawer",
      },
      {
        id: "03",
        title: "Container Manifest & Fuel Telemetry",
        caption: "TEU slot capacity distribution and CII carbon intensity rating.",
        layout: "grid",
      },
      {
        id: "04",
        title: "Port Berthing Schedule",
        caption: "Terminal crane moves, draft clearance, and bio-LNG bunkering.",
        layout: "split",
      },
    ],
    architecturalPivot: {
      summary:
        "Shifted from a passive static map with delayed GPS points to an interactive, predictive control center with live simulation scrubber.",
      before:
        "Operators clicked through fragmented tabbed tables and waited for static satellite maps to reload.",
      after:
        "One unified canvas with smooth pan/zoom, interactive scrubber simulation, and instant slide-out telemetry HUD.",
    },
    engineeringSummary:
      "Partnered with geospatial engineers to optimize SVG vector rendering, keeping 60 FPS pan/zoom performance across 22 simultaneous vessel telemetry streams.",
    collabTracks: [
      {
        phase: "Sprint 01–03",
        title: "Geospatial Canvas Architecture",
        detail: "Defined vector map projection coordinates and SVG rendering pipeline.",
        deliverable: "Interactive SVG map prototype",
      },
      {
        phase: "Sprint 04–06",
        title: "AIS Telemetry & Telemetry HUD",
        detail: "Co-designed slide-out telemetry drawer and 8-segment progress bars.",
        deliverable: "Telemetry drawer components",
      },
      {
        phase: "Sprint 07–09",
        title: "Voyage Scrubber & Weather Radar",
        detail: "Built interactive timeline scrubber and weather swirl overlay.",
        deliverable: "Voyage simulator and risk alerts",
      },
    ],
    contractBridge: {
      figmaTitle: "Figma Design System Tokens",
      codeTitle: "Production Component Specifications",
      figmaSpecs: [
        ["Primary Blue", "#3676F5 (BlueWave Brand 500)"],
        ["Ocean Surface", "#C3D7FF (Light Nautical Ocean)"],
        ["Status In Service", "#1E9A55 / #DDF6E8 (Pill Radius 999px)"],
        ["Status Delayed", "#DC2626 / #FEE2E2 (High Visibility Amber/Red)"],
      ],
      codeSpecs: [
        ["Vector Canvas", "Custom SVG Coordinate System with Pan/Zoom Transforms"],
        ["Radar Pulse", "Concentric CSS Keyframe Animations (2.2s ease-out)"],
        ["Scrubber State", "Synchronized Scrubber Slider updating vessel coordinates"],
        ["Container Bays", "Slot capacity breakdown with responsive flex bars"],
      ],
    },
    decisions: [
      {
        title: "Light Coastal Palette for Maritime Cockpits",
        body: "While developer tools favor dark mode, maritime operations centers are sunlit bridge environments where high-contrast nautical blue accents and clean daylight panels dramatically reduce glare and screen reflections during long watch shifts.",
        badge: "Visual Ergonomics",
        image: `${assetBase}bluewave/fleet-live-map.png`,
      },
      {
        title: "Interactive Scrubber for What-If Arrival Projections",
        body: "Operators frequently need to answer 'Where will this vessel be when the Rotterdam tide rises on Thursday?'—the interactive scrubber provides immediate visual answers.",
        badge: "Interaction Craft",
        image: `${assetBase}bluewave/dashboard-homepage.png`,
      },
      {
        title: "Segmented Progress Indicators over Linear Bars",
        body: "Replaced continuous progress bars with 8 discrete milestone segments, allowing operators to count remaining transit days at a glance.",
        badge: "Information Design",
        image: `${assetBase}bluewave/vessel-overview.png`,
      },
    ],
    outcomes: [
      [
        "Dispatch efficiency",
        "Empowers operations squads to route vessels and book berths with live telemetry",
        "+44% Turnaround",
      ],
      [
        "Incident response",
        "Cuts emergency reaction time when rerouting around typhoons and canal delays",
        "6.2x Faster",
      ],
      [
        "Fuel optimization",
        "Eliminates wasteful idle steaming through predictive waypoint scheduling",
        "$8.4M Saved",
      ],
    ],
  },
  {
    id: "simplelist",
    liveUrl: "https://ui8-bento-landing.vercel.app",
    index: "06",
    name: "SimpleList",
    codename: "Simplest List · Minimalist Bento Task Architecture",
    category: "Productivity · Minimalist task manager & bento design system",
    portfolioCategory: "Product & UX",
    featured: false,
    summary:
      "A distraction-free macOS & web task management system connecting keyboard-first list capture, dark glassmorphic bento cards, and real-time collaborative state.",
    headlineStart: "Your tasks, ",
    headlineAccent: "simplified.",
    lede: "As Lead Product Designer, I designed SimpleList's end-to-end web & desktop application, dark bento component system, and marketing landing page—stripping away task app bloat in favor of tactile drag-and-drop lists and zero-friction capture.",
    role: "Lead Product Designer",
    team: "Product · Frontend Engineering · Motion Design",
    scope:
      "App architecture · Bento card design system · macOS desktop & web UX · Responsive landing page · Component library",
    platform: "Desktop & Web Application (macOS 12+ / Modern Web)",
    heroImage: `${assetBase}simplelist/hero-header.png`,
    secondaryImage: `${assetBase}simplelist/bento-features.png`,
    panoramaTitle: "SimpleList Bento Card Architecture & 20-Screen App System",
    panoramaLabel: "Dark Glass Surfaces (#121214) · Tactile Drag & Drop · Real-Time Collaborative Cursors",
    frictionTitle: "Feature Creep, Context Loss & Overcomplicated Project Management",
    resolutionTitle: "Tactile Bento Cards & Zero-Friction Task Loops",
    resolutionBody:
      "Replaced cluttered multi-level task boards with focused glassmorphic list containers, instant radial icon branding, keyboard-first quick capture (Cmd+N), and celebratory completion feedback.",
    problemStatement:
      "Most to-do apps overwhelm users with nested subtasks, rigid gantt views, and complex configuration menus when all users need is a fast, delightful list they can trust.",
    audienceTitle: "Knowledge workers, creators, and teams seeking calm execution",
    audienceGoal:
      "I want to capture thoughts instantly without breaking flow, organize tasks into clean visual buckets, and feel genuine momentum crossing items off.",
    personaQuotes: [
      {
        quote:
          "I don't need a Jira clone for my daily priorities. Give me Cmd+N, clean typography, and a checkbox that feels satisfying to tap.",
        name: "Maya Lin",
        designation: "Senior Design Engineer · Daily Operator",
      },
      {
        quote:
          "Our team keeps losing simple follow-ups inside Jira and Slack threads. SimpleList gives us a shared board that feels like sticky notes on glass.",
        name: "Marcus Vance",
        designation: "Engineering Lead · Collaborative Lists",
      },
      {
        quote:
          "Cross-device sync has to be instant. If I add groceries on my Mac, it must be on my iPhone before I walk out the door.",
        name: "Elena Rostova",
        designation: "Solo Founder & Writer · Cross-Platform Workflow",
      },
    ],
    mandateTitle: "Eliminate task anxiety through tactile simplicity and spatial clarity",
    mandateBody:
      "We set out to create a task manager that feels like a clean physical desk: instant to jot down ideas, beautiful to look at, and devoid of the corporate bureaucracy that plagues modern project management software.",
    ownershipPillars: [
      [
        "End-to-end design & design system",
        "Crafted the 20-screen dark UI system, glassmorphic bento card tokens, and interactive landing page from scratch in Figma.",
      ],
      [
        "Keyboard-first interaction model",
        "Specified zero-latency Cmd+N quick-capture, inline category tagging, and fluid drag-and-drop spatial reordering.",
      ],
      [
        "Multiplayer collaboration UX",
        "Designed live co-presence cursors (Totoro & Kohaku) and non-intrusive shared list sync semantics.",
      ],
    ],
    discoverySummary:
      "Through user interviews with 24 founders, design engineers, and managers, we identified that 82% of task tool abandonment stemmed from input fatigue—having to fill out 4+ fields just to log an errand. We prioritized instant capture and spatial grouping over deep task hierarchy.",
    discoveryMethods: [
      [
        "Task friction audit",
        "Logged interaction clicks and modal time across Notion, Things 3, and Todoist.",
      ],
      [
        "Bento layout prototyping",
        "Tested 4 card grid densities to find the optimal balance between information density and visual breathing room.",
      ],
      [
        "Micro-interaction feedback tests",
        "Evaluated checkbox completion haptics, strikethrough timing, and empty state satisfaction.",
      ],
    ],
    figmaNotes: [
      {
        tone: "amber",
        tag: "Capture latency",
        text: "Capture latency must be sub-100ms. Pressing Cmd+N opens a raw cursor immediately with zero modal lag.",
      },
      {
        tone: "emerald",
        tag: "Completion delight",
        text: "Crossing off tasks triggers an instant micro-haptic and celebratory empty state when all items are done.",
      },
      {
        tone: "sky",
        tag: "Spatial containers",
        text: "Bento cards create natural spatial boundaries: Today, Work, Side Projects, and Completed feel distinct at a glance.",
      },
      {
        tone: "rose",
        tag: "Anxiety reduction",
        text: "Eliminate task guilt: hide completed counts behind a quiet drawer so users focus on what's ahead.",
      },
      {
        tone: "violet",
        tag: "Multiplayer cursors",
        text: "Shared live cursors (Totoro & Kohaku) provide real-time co-presence without noisy notifications.",
      },
      {
        tone: "orange",
        tag: "Dark glass aesthetic",
        text: "100% OLED contrast with translucent glass cards (rgba 255,255,255,0.06) reduces late-night eye strain.",
      },
    ],
    synthesis: [
      {
        theme: "Capture Friction",
        evidence:
          "Users abandoned to-do apps when forced to select project, due date, priority, and tags just to write a reminder.",
        response:
          "Built a natural language quick-capture input with single-keystroke inline tagging.",
      },
      {
        theme: "Visual Clutter",
        evidence:
          "Dense multi-column tables caused visual paralysis and task avoidance during peak work hours.",
        response:
          "Architected modular Bento card containers that isolate focus to 3-5 active tasks at a time.",
      },
      {
        theme: "Sync Reliability",
        evidence:
          "Users lost confidence when offline edits created duplicate lists or overwrite conflicts.",
        response:
          "Partnered with engineering to define local-first CRDT replication with immediate optimistic UI updates.",
      },
    ],
    principles: [
      [
        "Zero-latency capture",
        "Any thought should become a tracked task in under 2 seconds without mandatory forms or modals.",
      ],
      [
        "Tactile glassmorphic surfaces",
        "Bento cards elevate tasks into clean, physical-feeling workspaces with subtle edge glow.",
      ],
      [
        "Spatial list hierarchy",
        "Visual proximity and color-coded list headers replace nested sub-task rabbit holes.",
      ],
      [
        "Celebratory closure",
        "Finishing work triggers affirmative micro-motion and calm zero-inbox states.",
      ],
    ],
    journeySummary:
      "The SimpleList journey removes friction across all phases: from instant Cmd+N task entry, through fluid bento prioritization and real-time multiplayer co-working, to satisfying task completion and cross-device sync.",
    journeyFlow: [
      {
        step: "01",
        stage: "Capture",
        actor: "Operator",
        userGoal: "Jot down a sudden incoming task without losing focus on current work.",
        frictionEliminated: "No slow modal dialogs, date pickers, or mandatory project selectors.",
        uxResolution:
          "Global Cmd+N keyboard shortcut opens a fluid floating inline input field with instant cursor autofocus.",
        engineeringContract: "Local keystroke buffer with instant optimistic state insertion.",
        touchpoints: ["Global Hotkey", "Inline Input Pill", "Category Autosuggest"],
      },
      {
        step: "02",
        stage: "Organize",
        actor: "Operator & Co-worker",
        userGoal: "Group tasks into distinct priority buckets (Today, Work, Side Project).",
        frictionEliminated: "Rigid multi-tiered folders and hidden task views.",
        uxResolution:
          "Drag-and-drop into modular Bento cards with color-coded category dots (Amber, Emerald, Purple).",
        engineeringContract: "Bento container grid layout with CSS flex gap tokens and spring reorder physics.",
        touchpoints: ["Bento List Cards", "Category Tag Selector", "Drag Handle"],
      },
      {
        step: "03",
        stage: "Collaborate",
        actor: "Team Collaborators",
        userGoal: "Share a checklist with a partner and see who is actively editing.",
        frictionEliminated: "Version lockouts, merge conflicts, and annoying broadcast emails.",
        uxResolution:
          "Real-time multiplayer cursors with user avatars (Totoro, Kohaku) and active selection highlighting.",
        engineeringContract: "WebSocket / CRDT state sync engine with vector clock conflict resolution.",
        touchpoints: ["Live Cursors", "Collaborator Avatars", "Presence Banner"],
      },
      {
        step: "04",
        stage: "Execute",
        actor: "Operator",
        userGoal: "Focus on high-leverage items and cross them off as work progresses.",
        frictionEliminated: "Visual clutter from past completed tasks crowding active work.",
        uxResolution:
          "Satisfying tactile checkbox tap with instant strikethrough animation and optional auto-archive.",
        engineeringContract: "Haptic feedback dispatch + completed count decrement in list metadata.",
        touchpoints: ["Interactive Checkbox", "Strikethrough Micro-Motion", "Completed Drawer"],
      },
      {
        step: "05",
        stage: "Celebrate & Sync",
        actor: "Operator",
        userGoal: "Experience calm closure when all daily tasks are completed.",
        frictionEliminated: "Leaving the app feeling uncertain whether tasks synchronized across devices.",
        uxResolution:
          "Joyful 'All items completed!' empty state illustration with instant multi-device background sync.",
        engineeringContract: "Zero-inbox state render + local SQLite to cloud storage synchronization.",
        touchpoints: ["Celebration Graphic", "Cloud Sync Indicator", "Progress Summary Pill"],
      },
    ],
    wireframes: [
      {
        id: "01",
        title: "Bento Card Overview Grid",
        caption: "Modular dark glass containers grouping active tasks, category pills, and pinned checklists.",
        layout: "grid",
      },
      {
        id: "02",
        title: "Inline Keyboard Quick-Capture",
        caption: "Floating input with instant tag parsing, priority toggles, and zero modal overhead.",
        layout: "drawer",
      },
      {
        id: "03",
        title: "Multiplayer Co-Presence Board",
        caption: "Shared workspace with real-time collaborator cursors, live selection highlights, and presence tags.",
        layout: "split",
      },
      {
        id: "04",
        title: "Zero-Inbox Celebratory State",
        caption: "Playful completion graphic, weekly velocity breakdown, and clean empty state.",
        layout: "dashboard",
      },
    ],
    architecturalPivot: {
      summary:
        "Initial explorations followed traditional multi-column Kanban boards and dense spreadsheet-like lists. Usability tests showed this triggered cognitive overload. We pivoted to a modular Bento Card architecture where each card acts as an autonomous visual container with its own drag order, header style, and quick-add loop.",
      before: "Rigid multi-column Kanban boards with complex nested task drawers",
      after: "Modular dark glass Bento cards with inline keyboard capture and live multiplayer avatars",
    },
    engineeringSummary:
      "Partnered with frontend and platform engineers to build a design system rooted in CSS variables for glassmorphism, spring physics for drag interactions, and an optimistic CRDT sync pipeline for multiplayer presence.",
    collabTracks: [
      {
        phase: "01 / Foundations & Tokens",
        title: "Dark glass & Bento token architecture",
        detail:
          "Defined semantic color tokens, translucent card backgrounds (rgba 255,255,255,0.06), 16px corner radiuses, and crisp 1px borders.",
        deliverable: "Tokenized Bento System in Figma & CSS",
      },
      {
        phase: "02 / Micro-interactions",
        title: "Tactile drag & completion physics",
        detail:
          "Prototyped spring curves for card reordering, micro-haptics for checkbox toggles, and celebratory completion bursts.",
        deliverable: "Figma Motion Specs & Prototype",
      },
      {
        phase: "03 / Responsive Delivery",
        title: "macOS desktop & web parity",
        detail:
          "Ensured full keyboard navigation parity (Cmd+N, arrow keys, space to check) across macOS desktop wrappers and responsive web views.",
        deliverable: "Production Web App & Landing Page",
      },
    ],
    contractBridge: {
      figmaTitle: "Figma Token & Component Spec · SimpleList",
      codeTitle: "Bento Card & Multiplayer Contract",
      figmaSpecs: [
        [
          "Canvas & surface colors",
          "Background `#121214` · Surface `#18181B` · Glass `rgba(255, 255, 255, 0.06)` · Border `rgba(255, 255, 255, 0.12)`",
        ],
        [
          "Accent tokens",
          "Amber `#F59E0B` · Emerald `#10B981` · Purple `#8B5CF6` · Pink `#EC4899` · Blue `#3B82F6`",
        ],
        [
          "Typography scale",
          "Inter Display 48/-2px, Title 20/-0.5px, Task Label 15/22, Metadata 12/16",
        ],
      ],
      codeSpecs: [
        [
          "taskEntityState",
          '{ id: string, title: string, category: "work"|"personal"|"side", completed: boolean, order: number }',
        ],
        [
          "bentoLayoutSpec",
          '{ gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "24px" }',
        ],
        [
          "multiplayerPresence",
          '{ user: string, cursor: { x: number, y: number }, activeCardId: string, lastActive: number }',
        ],
      ],
    },
    decisions: [
      {
        title: "Dark glassmorphic Bento cards for spatial task organization and calm focus.",
        body: "Grouped tasks into modular Bento containers with subtle 1px border glows and custom category icons, allowing users to scan personal and work priorities effortlessly without overwhelming vertical lists.",
        badge: "01 · Bento Card Architecture",
        image: `${assetBase}simplelist/bento-features.png`,
      },
      {
        title: "Frictionless three-step onboarding and zero-setup progressive adoption.",
        body: "Designed a 3-step progressive onboarding sequence: Install, Create First List, and Sync Across Devices with zero forced logins, surveys, or complex configuration menus.",
        badge: "02 · Onboarding & Setup",
        image: `${assetBase}simplelist/how-it-works.png`,
      },
      {
        title: "20-screen cohesive dark UI application system with celebratory completion states.",
        body: "Architected the full macOS and web desktop application across 20 production screens—from empty search states and list tag pickers to celebratory zero-inbox completion screens and component style guides.",
        badge: "03 · Application & Component Suite",
        image: `${assetBase}simplelist/app-screens.png`,
      },
    ],
    outcomes: [
      [
        "Sub-100ms task capture",
        "Keyboard-first shortcuts and inline input reduced time-to-task by 65%",
        "Instant cognitive offload",
      ],
      [
        "20-screen UI design system",
        "Built modular dark bento primitives and component token library",
        "Design-to-code velocity",
      ],
      [
        "Live interactive prototype",
        "Shipped responsive web application and marketing landing experience",
        "Full production delivery",
      ],
    ],
  },
  {
    id: "motive",
    liveUrl: "./motive-prototype/index.html",
    figmaUrl:
      "https://www.figma.com/design/jcZg2FO8oGPwJtHIP1vGEC/Motive---Car-Rental-Mobile?m=auto&t=k13k9B1nGX5KYeol-6",
    index: "19",
    name: "Motive",
    codename: "Motive EV & Luxury Mobility",
    category: "Mobility · EV & luxury car rental mobile app",
    portfolioCategory: "Mobile",
    featured: false,
    summary:
      "A dual-theme iOS mobility platform connecting instant EV discovery, transparent airport valet checkout, live range/charger telemetry, and a BLE/NFC Digital Key.",
    headlineStart: "Skip the counter. Unlock ",
    headlineAccent: "with your phone.",
    lede: "As Lead Product Designer, I architected the end-to-end iOS product experience and dual-theme design system for Motive—eliminating rental counter lines, opaque protection fees, and EV range anxiety through one continuous mobile loop.",
    role: "Lead Product Designer",
    team: "Product · iOS Engineering · Fleet Telemetry",
    scope:
      "End-to-end iOS product · Dual-theme token system · Digital Key & EV telemetry · Interactive prototype",
    platform: "iOS Mobile Application (Light & Dark Mode)",
    heroImage: `${assetBase}motive/hero-light-mode.png`,
    secondaryImage: `${assetBase}motive/design-system-styleguide.png`,
    panoramaTitle: "Motive Design System · Burnt Amber & Graphite Semantic Tokens",
    panoramaLabel: "Encode Sans Expanded · Instrument Sans · Light & Dark Mode Parity",
    frictionTitle: "Rental Counter Queues, Surprise Upsells & EV Charging Anxiety",
    resolutionTitle: "Direct-to-Vehicle Digital Key & Live Telemetry Loop",
    resolutionBody: "Unified search, itemized protection pricing, 15-minute payment-decline reservation holds, and live BLE/NFC vehicle unlock with 350kW charger routing into one tactile mobile system.",
    problemStatement: "Traditional car rental apps stop at a reservation barcode—forcing travelers into 45-minute airport counter queues, surprise insurance upsells, and unfamiliar EV charging networks without live vehicle telemetry.",
    audienceTitle: "Frequent travelers & EV-curious drivers arriving at major airports",
    audienceGoal: "I want to book the exact car I see, know my real all-in total upfront, walk straight to my bay at LAX, and unlock the doors from my phone.",
    personaQuotes: [
      {
        quote: "After a five-hour flight into LAX, the last thing I want is a 40-minute counter line and a surprise $45/day insurance argument.",
        name: "Daniel Reyes",
        designation: "Principal Consultant · 18 rentals/year",
      },
      {
        quote: "I love renting EVs like the Genesis GV60 or Ioniq 5, but I need to know the real fast-charge speed and closest 350kW stall before I commit.",
        name: "Elena Vance",
        designation: "Creative Director · EV adopter",
      },
      {
        quote: "When my bank flags an airport travel charge, don't cancel my car—hold the vehicle for 15 minutes so I can tap Apple Pay and keep moving.",
        name: "Marcus Sterling",
        designation: "Founder · Frequent flyer",
      },
    ],
    mandateTitle:
      "Replace the airport rental counter with an automotive-grade Digital Key and transparent EV telemetry.",
    mandateBody:
      "Most rental apps treat booking, pickup, and on-trip driving as disconnected silos. I designed Motive across eight cohesive product modules (Auth, Onboarding, Discovery, Vehicle Stage, Checkout, Active Trip Telemetry, Profile, and Edge-Case Recovery) so vehicle discovery, itemized checkout, Face ID key provisioning, and active-trip EV telemetry share one unmistakable visual and interaction language.",
    ownershipPillars: [
      [
        "End-to-End Mobile IA",
        "Architected the complete iOS user journey spanning Onboarding, Map/List Discovery, Car Stage, Checkout, Digital Key, and Edge-Case Recovery.",
      ],
      [
        "Dual-Theme Design System",
        "Authored semantic Graphite (`#151515`) and Burnt Amber (`#C8642A`) tokens with full Light/Dark mode parity and dark automotive photo stages.",
      ],
      [
        "Resilient On-Trip & Edge Flows",
        "Engineered the persistent Active Trip Strip, 2×2 telemetry action bento, and a 15-minute vehicle hold when a card declines at checkout.",
      ],
    ],
    discoverySummary:
      "We shadowed airport pickups and audited leading peer-to-peer and fleet rental apps to pinpoint where traveler trust breaks down between browsing a fleet and returning a vehicle.",
    discoveryMethods: [
      [
        "LAX Pickup & Return Shadowing",
        "Timed every step from baggage claim to garage exit across traditional counter vs. mobile-key workflows.",
      ],
      [
        "EV Renter Telemetry Interviews",
        "Identified the 4 exact specs EV renters check first: real range (`294 mi`), `10–80%` fast-charge minutes (`18 min`), luggage capacity, and charger proximity.",
      ],
      [
        "Checkout Drop-Off & Decline Audit",
        "Found that opaque insurance tiers and travel-card fraud declines caused the highest checkout abandonment.",
      ],
    ],
    figmaNotes: [
      {
        tone: "amber",
        tag: "Zero-Tab Hunt",
        text: "“If I have an active rental, put the Digital Key strip right at the top of Home—never bury it two tabs deep.”",
      },
      {
        tone: "emerald",
        tag: "EV Confidence",
        text: "Pair 294 mi range with '18 min 10→80% charge' on the vehicle stage so first-time EV drivers feel instant clarity.",
      },
      {
        tone: "sky",
        tag: "Upfront Math",
        text: "Show the exact 3-day total ($276) on every search card and itemize protection, delivery, and refundable hold ($250) before payment.",
      },
      {
        tone: "rose",
        tag: "Decline Recovery",
        text: "When a card declines, lock the car in a 14:32 hold timer and offer 1-tap Apple Pay so the user never loses their vehicle.",
      },
    ],
    synthesis: [
      {
        theme: "Active trip immediacy",
        evidence: "Drivers returning to their car in a parking garage fumbled through navigation tabs to find lock/unlock controls.",
        response: "Added a persistent dark glass Active Trip Strip on Home that launches the Digital Key in one tap.",
      },
      {
        theme: "EV range & charging literacy",
        evidence: "Renters hesitated to book electric crossovers because kilowatt curves and luggage fit were hidden in fine print.",
        response: "Elevated spec numerals (`294 mi | 4.0s | 5 seats`) and a 2×2 charge/luggage bento on the Vehicle Detail stage.",
      },
      {
        theme: "Graceful payment recovery",
        evidence: "Travelers frequently triggered bank fraud holds when booking at airports, losing their selected car immediately.",
        response: "Designed Payment Declined Recovery with a live 15-minute vehicle hold badge and instant Apple Pay fallback.",
      },
    ],
    principles: [
      [
        "Stage the vehicle like hardware",
        "Use dark graded photo stages (`#111111`) on both light and dark themes so vehicle silhouettes and telemetry numerals pop.",
      ],
      [
        "Show the all-in total early",
        "Pair daily rates (`$92/day`) with the multi-day total (`$276 total`) and explicit refundable deposit (`$250`).",
      ],
      [
        "Keep active controls one thumb away",
        "Surface the ongoing rental strip on Home and anchor primary actions (`Slide to unlock`, `Reserve`) in the bottom thumb zone.",
      ],
      [
        "Design for real-world exceptions",
        "Treat late returns, EV charging detours, and declined travel cards as first-class flows rather than dead-end alerts.",
      ],
    ],
    journeySummary:
      "A continuous 5-stage mobile loop taking the driver from airport fleet discovery to biometric vehicle unlock and Bay C4 return.",
    journeyFlow: [
      {
        step: "01",
        stage: "Discover & Filter",
        actor: "Arriving Traveler",
        userGoal: "Find an Instant-Book EV available at LAX for a 3-day trip",
        frictionEliminated:
          "Generic car-class labels ('Intermediate Or Similar') hid the actual vehicle model and total price.",
        uxResolution:
          "Exact-model fleet cards (`Genesis GV60 · 2025`) with category chips (`Electric`, `SUV`, `Luxury`) and upfront 3-day total.",
        engineeringContract:
          "Geo-fenced hub inventory query + real-time availability lock",
        touchpoints: ["Home Feed", "Map View", "Filter Chips"],
      },
      {
        step: "02",
        stage: "Inspect Vehicle Stage",
        actor: "Arriving Traveler",
        userGoal: "Verify EV range, fast-charge speed, luggage fit, and pickup window",
        frictionEliminated:
          "Dense specification tables buried critical EV charge times and delivery fees.",
        uxResolution:
          "Dark cinematic stage with big numerals (`294 mi · 4.0s · 5 seats`), 2×2 feature bento, and LAX delivery toggle.",
        engineeringContract:
          "Vehicle telemetry manifest + dynamic delivery window slotter",
        touchpoints: ["Vehicle Detail", "Vehicle Gallery", "Model Compare"],
      },
      {
        step: "03",
        stage: "Transparent Checkout",
        actor: "Arriving Traveler + Payment Gateway",
        userGoal: "Select protection coverage and confirm payment without losing the car on card decline",
        frictionEliminated:
          "Surprise counter upsells and instant reservation loss on bank travel holds.",
        uxResolution:
          "Itemized checkout ledger (`$403.26`) paired with 15-minute reservation hold recovery.",
        engineeringContract:
          "Idempotent payment intent + 900s inventory hold TTL + Apple Pay fallback",
        touchpoints: ["Protection Tiers", "Checkout Ledger", "Payment Hold Recovery"],
      },
      {
        step: "04",
        stage: "Unlock & Drive",
        actor: "Driver + Vehicle BLE/NFC",
        userGoal: "Locate the car in Bay C4, inspect condition, and unlock doors via Digital Key",
        frictionEliminated:
          "Waiting at a kiosk for physical keys or paper inspection sheets.",
        uxResolution:
          "Guided 4-corner photo check and glassmorphic `Slide to unlock` pill with honk/flash locator.",
        engineeringContract:
          "BLE/NFC cryptographic key token + live CAN-bus SOC (`62% · 232 mi`)",
        touchpoints: ["Vehicle Inspection", "Door Unlock", "Active Trip & Digital Key"],
      },
      {
        step: "05",
        stage: "Charge & Return",
        actor: "Driver + Hub Operations",
        userGoal: "Top up at a nearby 350kW charger or extend the trip by 1 day before Bay C4 drop-off",
        frictionEliminated:
          "Hunting across third-party charging apps or calling support to extend a rental.",
        uxResolution:
          "In-app nearby charging finder (`Electrify America · 4 of 6 free · $0.48/kWh`) and 1-tap `+$68/day` extension.",
        engineeringContract:
          "OCPI live stall availability feed + automated return bay check-in",
        touchpoints: ["Nearby EV Charging", "Trip Summary & Return", "Itemized Receipt"],
      },
    ],
    wireframes: [
      {
        id: "01",
        title: "Home + Active Trip Strip",
        caption: "Persistent ongoing rental key strip above the airport search card and category chips.",
        layout: "mobile-home",
      },
      {
        id: "02",
        title: "Vehicle Stage & Spec Bento",
        caption: "Dark stage header with 3-column numerals and 2×2 EV charging & trunk bento.",
        layout: "mobile-heatmap",
      },
      {
        id: "03",
        title: "Itemized Review & Pay",
        caption: "44px total header, 3-tier protection selector, and line-by-line fee ledger.",
        layout: "mobile-ledger",
      },
      {
        id: "04",
        title: "Active Trip Digital Key",
        caption: "Live battery SOC, Bay C4 progress bar, 2×2 action tiles, and Slide-to-Unlock control.",
        layout: "mobile-queue",
      },
    ],
    architecturalPivot: {
      summary:
        "Early explorations placed dark-mode styling only in system settings, which made vehicle photos look washed out on light screens. We pivoted to a hybrid 'Dark Stage' architecture where vehicle showcases and active trip cards always render on a `#111111` automotive stage while forms and receipts adapt cleanly between warm alabaster (`#FAF9F7`) and carbon dark (`#121211`).",
      before: "Flat light-grey car cards with low-contrast spec lists",
      after: "Cinematic Dark Photo Stage + Dual-Theme Semantic Surface Tokens",
    },
    engineeringSummary:
      "Structured the Figma component architecture with strict variable bindings (`--color-primary-default`, `--color-contrast-default`, `--bg-card`), 402px iOS responsive constraints, and deterministic state props for iOS SwiftUI & React Native implementation.",
    collabTracks: [
      {
        phase: "01 / Token Foundation",
        title: "Graphite & Burnt Amber variable system",
        detail:
          "Mapped 12 Graphite neutrals, 8 Burnt Amber accents, and semantic surface/border tokens across Light and Dark modes.",
        deliverable: "Figma Variables & Style Guide",
      },
      {
        phase: "02 / Component Architecture",
        title: "Reusable mobile primitives",
        detail:
          "Built parameterized components for `Trip Strip`, `Car Card`, `Price Bar`, `Status Chip`, and `Motive Tab Bar`.",
        deliverable: "Tokenized iOS Component Library",
      },
      {
        phase: "03 / Interactive Sandbox",
        title: "Playable 5-flow mobile prototype",
        detail:
          "Implemented live category filtering, dynamic protection pricing, digital key unlock, and declined-payment hold recovery.",
        deliverable: "Live Embedded Mobile Prototype",
      },
    ],
    contractBridge: {
      figmaTitle: "Figma Variable & Component Spec · Motive Mobile System",
      codeTitle: "Mobile Client & Telemetry State Contract",
      figmaSpecs: [
        [
          "Typography scale",
          "Encode Sans Expanded (Display 30/36, H1 26/32) + Instrument Sans (Body 14/20, Label 12/16)",
        ],
        [
          "Color & surface tokens",
          "Primary Ink `#151515` · Burnt Amber `#C8642A` · Card `#FAF9F7` · Subtle `#F3F1EE` · Success `#2FB98E`",
        ],
        [
          "Component variants",
          "Status Bar (`Default` | `Inverse`) · Tab Item (`Active` pill) · Circle Button (`Outline` | `Dark` glass)",
        ],
      ],
      codeSpecs: [
        [
          "activeTripState",
          '{ vehicleId: "ioniq5", socPct: 62, rangeMi: 232, keyLocked: true, bay: "C4" }',
        ],
        [
          "checkoutBreakdown",
          '{ base3d: 276, protection: 54, pass: 43, delivery: 35, promo: -41.40, total: 403.26 }',
        ],
        [
          "holdRecoveryTTL",
          '{ status: "DECLINED_HOLD", holdSecondsRemaining: 872, fallback: ["APPLE_PAY", "MC_0921"] }',
        ],
      ],
    },
    decisions: [
      {
        title: "Pair dark automotive stages with instant EV range and fast-charge numerals.",
        body: "Instead of burying battery size and charging speed inside a secondary spec sheet, the vehicle stage surfaces 294 mi range, 4.0s 0–60 mph, and 18-minute 10–80% fast-charge telemetry above the fold.",
        badge: "01 · Discovery & Vehicle Stage",
        image: `${assetBase}motive/flow-discovery-detail.png`,
      },
      {
        title: "Eliminate checkout anxiety with itemized protection, delivery windows, and 15-minute decline holds.",
        body: "Travelers toggle between Hub pickup and LAX valet delivery, see every protection tier and refundable deposit ($250) calculated in real time, and keep their reserved vehicle for 15 minutes even if a travel card triggers a bank hold.",
        badge: "02 · Transparent Checkout & Recovery",
        image: `${assetBase}motive/flow-booking-checkout.png`,
      },
      {
        title: "Turn the active rental into a live Digital Key and 350kW charging companion.",
        body: "From the persistent Home Trip Strip to the full Active Trip screen, drivers unlock doors with Face ID, flash headlights in crowded airport garages, and route directly to available Electrify America stalls.",
        badge: "03 · Digital Key & Dark Mode Telemetry",
        image: `${assetBase}motive/dark-mode-telemetry.png`,
      },
    ],
    outcomes: [
      [
        "8 product modules",
        "Complete Light & Dark mode system across onboarding, discovery, checkout, and telemetry",
        "Cohesive iOS product architecture",
      ],
      [
        "Zero counter wait",
        "Direct-to-bay BLE/NFC Digital Key with 4-corner photo inspection",
        "Bypass airport kiosk lines",
      ],
      [
        "100% fee clarity",
        "Upfront multi-day totals, refundable hold math, and 15-min decline protection",
        "Eliminates surprise upsells",
      ],
    ],
  },
  {
    id: "rapidbi",
    liveUrl: "./rapidbi-storybook/index.html",
    index: "01",
    name: "Signal BI",
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
    heroImage: `${assetBase}rapidbi/canvas-commerce.png`,
    secondaryImage: `${assetBase}rapidbi/storybook-workbench.png`,
    panoramaTitle: "Live Analytics Canvas & Storybook 10.6 Workbench",
    panoramaLabel: "Highcharts Visualizations · AG Grid Row Model · Salt Tokens",
    frictionTitle: "Disconnected Metrics & Configuration Overhead",
    resolutionTitle: "Unified Governed Analytics Workbench",
    resolutionBody: "Synthesized Highcharts visualizations, server-side AG Grid row models, and filter schemas into one coherent canvas with inline commentary and one-click Storybook tokens.",
    problemStatement: "Engineering had powerful data, charting, and export primitives, but product teams experienced them as disconnected demos and dense settings panels that slowed down decision-making.",
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
        image: `${assetBase}rapidbi/canvas-grid-commentary.png`,
      },
      {
        title: "Progressive configuration with zero context switching.",
        body: "Common actions stay on the surface while advanced grouping, pivot rules, and delta toggles unfold in an adjacent drawer.",
        badge: "Progressive Disclosure",
        image: `${assetBase}rapidbi/widget-settings.png`,
      },
      {
        title: "Human-reviewed AI assistant recommendations.",
        body: "Assistant suggestions explain which filters or chart changes will occur and wait for explicit approval before modifying the canvas.",
        badge: "Governed AI Pattern",
        image: `${assetBase}rapidbi/ai-assistant.png`,
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
    codename: "UX Case Study • Mobile SaaS",
    category: "Mobile SaaS · Workforce Scheduling",
    portfolioCategory: "Mobile",
    featured: true,
    summary:
      "Empowering hourly workers with seamless shift management, flexible scheduling, and real-time communication.",
    headlineStart: "Empowering hourly workers with ",
    headlineAccent: "seamless shift management.",
    lede: "ShiftSnap is a comprehensive mobile workforce management solution designed specifically for hourly workers in retail and hospitality industries. The platform addresses critical pain points in shift scheduling, coverage management, and team communication.",
    role: "Lead Product Designer",
    team: "12 weeks",
    scope:
      "End-to-End Product Design · User Research · Mobile UX · Design System",
    platform: "iOS Mobile App",
    heroImage: `${assetBase}shiftsnap/overview-barista.jpg`,
    secondaryImage: `${assetBase}shiftsnap/complete-user-experience-screens.jpg`,
    panoramaTitle: "Complete User Experience",
    panoramaLabel: "6 Core Mobile Screens · Team Member & Manager Views",
    frictionTitle: "Hourly workers struggle with inflexible scheduling systems that don't accommodate their dynamic lives.",
    resolutionTitle: "Intuitive, Mobile-First Scheduling & Communication",
    resolutionBody: "Traditional workforce management tools are built for managers, not workers. They're desktop-focused, complex, and lack the flexibility that hourly employees need to balance multiple jobs, family commitments, and personal schedules.",
    problemStatement: "Traditional workforce management tools are built for managers, not workers. They're desktop-focused, complex, and lack the flexibility that hourly employees need to balance multiple jobs, family commitments, and personal schedules.",
    mandateTitle: "Project Overview",
    mandateBody: "ShiftSnap is a comprehensive mobile workforce management solution designed specifically for hourly workers in retail and hospitality industries. The platform addresses critical pain points in shift scheduling, coverage management, and team communication. Through extensive user research with baristas, retail associates, and their managers, we identified a gap in the market for an intuitive, mobile-first solution that empowers workers while giving managers operational control.",
    problemStats: [
      {
        stat: "67%",
        label: "of hourly workers cite scheduling conflicts as their top work stressor",
      },
      {
        stat: "3–5 days",
        label: "average time to find shift coverage using traditional methods",
      },
      {
        stat: "45%",
        label: "turnover rate in retail/hospitality due to scheduling issues",
      },
    ],
    ownershipPillars: [
      [
        "User-Centered Discovery",
        "Conducted 24 in-depth interviews, shadowed floor shifts across 6 locations, and mapped end-to-end exception journeys.",
      ],
      [
        "Dual-Flow Architecture",
        "Architected streamlined Team Member and Manager operational flows with automated qualification and risk guardrails.",
      ],
      [
        "Design System Foundations",
        "Built an accessible, WCAG AA compliant visual language with color tokens, typography scales, and tactile mobile components.",
      ],
    ],
    discoverySummary:
      "To understand scheduling challenges firsthand, we conducted in-depth qualitative interviews, on-site contextual inquiries, and comprehensive competitive audits across retail and food service environments.",
    discoveryMethods: [
      [
        "User Interviews",
        "Conducted 24 in-depth interviews with baristas, retail associates, and shift managers to understand pain points and workflows.",
      ],
      [
        "Contextual Inquiry",
        "Shadowed workers during shifts at 6 different locations to observe real scheduling challenges and communication patterns.",
      ],
      [
        "Competitive Analysis",
        "Evaluated 8 existing workforce management solutions to identify gaps and opportunities in the market.",
      ],
    ],
    keyInsights: [
      {
        id: "Insight 01",
        text: "Workers need last-minute flexibility but feel guilty about calling in or swapping shifts. They need a system that empowers them to self-manage.",
        highlight: "last-minute flexibility",
      },
      {
        id: "Insight 02",
        text: "Managers spend 8–12 hours per week on scheduling logistics, much of it reactive firefighting rather than strategic planning.",
        highlight: "8–12 hours per week",
      },
      {
        id: "Insight 03",
        text: "Communication breakdowns lead to 90% of scheduling conflicts. Workers and managers need a single source of truth.",
        highlight: "90% of scheduling conflicts",
      },
      {
        id: "Insight 04",
        text: "Existing tools are desktop-first, forcing workers to access schedules at work rather than on-the-go.",
        highlight: "desktop-first",
      },
    ],
    iaFlows: {
      teamMember: [
        "01. View schedule and upcoming shifts at a glance",
        "02. Initiate swap request with a single tap",
        "03. Browse available coworkers and send requests",
        "04. Track approval status in real-time",
        "05. Receive instant notifications for updates",
      ],
      manager: [
        "01. Review dashboard with key metrics and alerts",
        "02. Access prioritized requests queue",
        "03. Review request details with full context",
        "04. Approve/decline with one-tap actions",
        "05. Monitor team coverage and availability",
      ],
    },
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
        "Mobile-First is Critical",
        "Hourly workers primarily access scheduling on personal devices during breaks or commutes. Desktop views were rarely used, reinforcing mobile-first execution.",
      ],
      [
        "Balance Autonomy with Oversight",
        "The most successful features gave workers independence while maintaining manager visibility through permission modeling and smart notification design.",
      ],
      [
        "Context is Everything",
        "Managers needed full context to make fast decisions. Including shift details, requester history, and coverage impact dramatically improved approval speed.",
      ],
      [
        "Accessibility is Non-Negotiable",
        "Meeting WCAG AA standards ensured the app worked for diverse users. High-contrast modes, clear status indicators, and readable typography improved usability for everyone.",
      ],
    ],
    journeySummary:
      "The 5-stage journey connects Maya (Barista), Jordan (Certified Peer), and Priya (Store Manager) through one synchronized mobile workflow.",
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
        "The design system balances professionalism with approachability. We chose deep navy and teal to convey trust and operational efficiency, while maintaining WCAG AA accessibility standards across all components.",
      before: "Fragmented spreadsheets, sticky notes, and text messages",
      after: "Stateful mobile architecture with real-time sync and audit trails",
    },
    processStages: [
      {
        step: "1",
        name: "Sketching",
        description: "Low-fidelity exploration of flows and information hierarchy",
      },
      {
        step: "2",
        name: "Wireframing",
        description: "Detailed layouts and interaction patterns for key screens",
      },
      {
        step: "3",
        name: "Prototyping",
        description: "Interactive prototypes for user testing and validation",
      },
      {
        step: "4",
        name: "Testing & Iteration",
        description: "Continuous refinement based on user feedback",
      },
    ],
    engineeringSummary:
      "By pairing quantitative analytics with direct qualitative feedback, we tracked a dramatic reduction in scheduling friction and manager overhead.",
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
        phase: "03 / Mobile Design System",
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
        title: "Feature 01: Smart Shift Swapping",
        body: "Workers can initiate swap requests directly from their schedule with intelligent coworker matching based on role, availability, and location. The system automatically routes to qualified team members and handles approval workflows.\n\n• One-tap swap initiation from any shift\n• Filtered coworker list by qualifications\n• Real-time status tracking and notifications",
        badge: "Smart Shift Swapping",
        image: `${assetBase}shiftsnap/feature-shift-swapping.jpg`,
      },
      {
        title: "Feature 02: Intelligent Request Queue",
        body: "Managers get a prioritized dashboard with all pending requests, full context for decision-making, and one-tap approval actions. Smart notifications ensure time-sensitive requests never slip through.\n\n• Priority sorting by urgency and impact\n• Rich context for informed decisions\n• Batch actions for efficiency",
        badge: "Intelligent Request Queue",
        image: `${assetBase}shiftsnap/feature-request-queue.jpg`,
      },
      {
        title: "Feature 03: Availability Management",
        body: "Team members can set their availability preferences, request time off, and block unavailable dates. Managers gain visibility into team availability for proactive scheduling and better work-life balance.\n\n• Flexible recurring availability patterns\n• Time-off request tracking\n• Manager visibility dashboard",
        badge: "Availability Management",
        image: `${assetBase}shiftsnap/feature-availability.jpg`,
      },
    ],
    outcomes: [
      [
        "Faster Swap Resolution",
        "Average swap time reduced from 3 days to 4 hours",
        "78%",
      ],
      [
        "Manager Time Saved",
        "Per week on scheduling and admin tasks",
        "12hrs",
      ],
      [
        "User Satisfaction",
        "Team members report improved work-life balance",
        "92%",
      ],
    ],
    userFeedback: [
      {
        quote: "ShiftSnap has completely changed how our team manages schedules. What used to take days of back-and-forth now happens in minutes.",
        author: "Store Manager",
        role: "Coffee Chain",
      },
      {
        quote: "I love that I can swap shifts without feeling like I'm bothering my manager. It's so easy to find someone to cover for me.",
        author: "Barista",
        role: "Harbor Coffee",
      },
    ],
    keyLearnings: [
      {
        title: "Balance Autonomy with Oversight",
        description: "The most successful features gave workers independence while maintaining manager visibility. Creating this balance required careful permission modeling and notification design.",
      },
      {
        title: "Mobile-First is Critical",
        description: "Hourly workers primarily access scheduling on personal devices during breaks or commutes. Desktop views were rarely used, reinforcing the importance of optimizing for mobile experiences.",
      },
      {
        title: "Context is Everything",
        description: "Managers needed full context to make fast decisions. Including shift details, requester history, and coverage impact in request views dramatically improved approval speed.",
      },
      {
        title: "Accessibility is Non-Negotiable",
        description: "Meeting WCAG AA standards ensured the app worked for diverse users. High-contrast modes, clear status indicators, and readable typography improved usability for everyone.",
      },
    ],
    nextSteps: [
      {
        title: "Predictive Scheduling",
        description: "Machine learning to suggest optimal schedules based on historical patterns and preferences",
        icon: "calendar",
      },
      {
        title: "Team Chat",
        description: "Integrated messaging to reduce reliance on external communication tools",
        icon: "users",
      },
      {
        title: "Analytics Dashboard",
        description: "Insights into scheduling patterns, coverage gaps, and team performance metrics",
        icon: "chart",
      },
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
  secondaryImage?: string
  panoramaTitle?: string
  panoramaLabel?: string
  frictionTitle?: string
  resolutionTitle?: string
  resolutionBody?: string
  problemStatement?: string
  liveUrl?: string
  audienceTitle?: string
  audienceGoal?: string
  personaQuotes?: PersonaQuote[]
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
    panoramaTitle: "Production Banking Experience & Mobile Adaptation",
    panoramaLabel: "High-Traffic Enterprise Web & Mobile Hierarchy",
    frictionTitle: "Internal Silos & Cluttered Promotional Grid",
    resolutionTitle: "Customer-Intent Driven Journey Architecture",
    resolutionBody: "Re-architected the homepage around intuitive financial needs, scannable rate comparisons, and responsive touchpoints.",
    problemStatement: "The legacy homepage forced visitors through dense product silos and competing promotional banners rather than direct customer tasks.",
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
    audienceTitle: "Christian families choosing what to watch together",
    audienceGoal: "I want to discover thoughtfully curated films without social-media noise, and feel confident that what my children and family watch is clean and safe.",
    personaQuotes: [
      {
        quote: "I want recommendations with a point of view—not an endless feed shaped by noise.",
        name: "Tasha",
        designation: "Parent · Faith & family viewer",
      },
      {
        quote: "I need to know what a title contains before I put it on for my family.",
        name: "Michael",
        designation: "Father · Household decision-maker",
      },
      {
        quote: "I want something meaningful to watch without spending half the evening searching.",
        name: "Chloe",
        designation: "Viewer · Curated discovery seeker",
      },
    ],
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
    id: "solshine",
    index: "20",
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
const catalogJourneys: Record<
  string,
  [string, string, string, string, string[], string][]
> = {
  "dev-mode": [
    [
      "Discover Capability",
      "Decide whether the API supports the reconciliation job.",
      "Capability descriptions were detached from the request and response contract.",
      "Introduced one task, endpoint, sample response, and 3-step integration path.",
      ["Quickstart Header", "Endpoint Spec", "Sample JSON"],
      "GET /v1/capabilities + OpenAPI summary",
    ],
    [
      "Scope Credentials",
      "Create an application with only the permission the task needs.",
      "Credentials and scopes were easy to confuse, causing late 403 errors.",
      "Explained the task-specific scope inline while modeling key creation and revocation.",
      ["App Credentials", "Scope Selector", "Key Vault"],
      'oauthScope: ["reconciliations:write"]',
    ],
    [
      "Execute First Call",
      "Construct and run the first live request.",
      "Field formats and monetary units required guesswork across reference pages.",
      "Placed field definitions, code example, input controls, and simulated response together.",
      ["Split Explorer", "Payload Editor", "201 Inspector"],
      "POST /v1/reconciliations · amountMinorUnits",
    ],
    [
      "Recover Exceptions",
      "Diagnose a 401, 403, or 422 failure and continue.",
      "Auth, permission, and validation errors were treated as one generic failure.",
      "Gave each status code a root cause, request ID, suggested fix, and 1-click retry.",
      ["Error Banner", "Request ID Trace", "Retry CTA"],
      '{ status: 403, requiredScope, requestId }',
    ],
    [
      "Operate & Launch",
      "Verify asynchronous webhook delivery and production readiness.",
      "A green API response hid webhook delivery timeouts and missing launch gates.",
      "Tracked stable event IDs and retry attempts separately beside the launch checklist.",
      ["Webhook Log", "Event Replay", "Readiness Gate"],
      '{ eventId: "evt_92", deliveryAck: true }',
    ],
  ],
  "citi-homepage": [
    [
      "Arrive & Orient",
      "Understand which banking paths match my immediate financial need.",
      "Competing promotional banners diluted the starting point on load.",
      "Replaced hero clutter with intent-led journey entry points across Cards, Banking, and Lending.",
      ["Intent Hero", "Product Selector", "Quick Links"],
      "entryIntent: 'cards' | 'banking' | 'lending'",
    ],
    [
      "Match Need to Tier",
      "Recognize which account or card tier fits my household profile.",
      "Internal banking nomenclature forced visitors to translate jargon.",
      "Framed product cards around plain-language customer outcomes and annual value.",
      ["Tier Cards", "Benefit Highlights", "Eligibility Cue"],
      "productCardSchema · outcomeFirstCopy",
    ],
    [
      "Compare Side-by-Side",
      "Evaluate APR, rewards, and fee structures without opening 5 tabs.",
      "Key terms were scattered across separate marketing and legal pages.",
      "Unified APR, intro bonuses, and fee terms into scannable comparison rows.",
      ["Comparison Strip", "APR & Fee Table", "Term Tooltip"],
      "comparisonMatrix[3] · synchronizedBreakpoints",
    ],
    [
      "Verify Eligibility",
      "Check qualification cues before starting an application.",
      "Visitors abandoned forms when credit or deposit requirements appeared late.",
      "Surfaced pre-qualification signals and required documents right beside the CTA.",
      ["Pre-Qual Check", "Requirement List", "Primary CTA"],
      "preQualState: 'READY' | 'DOCS_REQUIRED'",
    ],
    [
      "Continue on Mobile",
      "Resume the selected product application seamlessly on phone or desktop.",
      "Mobile and desktop layouts previously showed different hierarchy and links.",
      "Preserved identical decision order and sticky action bars across all breakpoints.",
      ["Responsive Grid", "Sticky Apply Bar", "Saved Intent"],
      "viewportParity · persistedJourneyToken",
    ],
  ],
  enta: [
    [
      "Check Multi-Currency Liquidity",
      "See total available balance across NGN, USD, GBP, and stablecoins.",
      "Fragmented asset tabs obscured what the combined portfolio total meant.",
      "Displayed a unified home balance with instant currency-display toggling and asset breakdown.",
      ["Wallet Overview", "Currency Switcher", "Asset Breakdown"],
      "portfolioValuation · baseCurrency: 'USD'",
    ],
    [
      "Select Rail & Intent",
      "Choose between local bank transfer, cross-border FX, or payment link.",
      "Different payout rails had hidden beneficiary and network requirements.",
      "Started the send flow with clear destination intent and supported rail badges.",
      ["Send Drawer", "Rail Selector", "Beneficiary Picker"],
      "transferRail: 'BANK_WIRE' | 'FX_SWAP' | 'LINK'",
    ],
    [
      "Inspect Live FX Quote",
      "Verify exact exchange rate, fee, and recipient payout before locking.",
      "Users confused debited source amounts with net recipient delivery.",
      "Paired 'You send' and 'Recipient gets' with a live 30-second FX quote lock timer.",
      ["FX Quote Card", "Fee Breakdown", "Quote Timer"],
      '{ sendAmt, receiveAmt, fxRate, ttlSec: 30 }',
    ],
    [
      "Authorize & Settle",
      "Complete biometric or 2FA confirmation and fund the order.",
      "Orders needing external bank settlement looked stuck without guidance.",
      "Provided explicit step-by-step settlement instructions and countdown windows.",
      ["2FA Modal", "Funding Instructions", "Time Window"],
      "settlementStatus: 'AWAITING_FUNDS' | 'LOCKED'",
    ],
    [
      "Track Cross-Border Receipt",
      "Share auditable proof of payment and monitor final delivery.",
      "'Submitted' was frequently mistaken for 'Settled in recipient bank'.",
      "Built a live 4-step settlement tracker with shareable receipt links.",
      ["Settlement Timeline", "Receipt Export", "Webhook Status"],
      "txLifecycle: 'SUBMITTED' -> 'SETTLED'",
    ],
  ],
  sendory: [
    [
      "Pick Purpose-Led Template",
      "Start a campaign from a proven editorial or product-launch structure.",
      "A blank canvas created decision paralysis at the start of every issue.",
      "Curated starter templates organized by newsletter goal and reading time.",
      ["Template Gallery", "Goal Filter", "Structure Preview"],
      "templateInit · blockTreeSchema",
    ],
    [
      "Compose Modular Blocks",
      "Assemble hero stories, callouts, and CTA sections without coding.",
      "Writers repeatedly rebuilt the same multi-column layouts from scratch.",
      "Provided a searchable library of drag-and-drop editorial and commerce blocks.",
      ["Block Drawer", "Canvas Dropzone", "Section Library"],
      "blockNode: { id, type, props, children }",
    ],
    [
      "Tune Block Typography & Spacing",
      "Refine padding, type scale, and brand colors on the active block.",
      "Global settings panels overwhelmed authors with unrelated controls.",
      "Scoped the right-hand inspector to show only properties for the selected block.",
      ["Contextual Inspector", "Token Swatches", "Spacing Slider"],
      "activeBlockId -> scopedInspectorControls",
    ],
    [
      "Verify Across Devices",
      "Check how the issue renders in desktop, tablet, and mobile inboxes.",
      "Editing outlines and handles hid line-wrap and dark-mode clipping bugs.",
      "Built an instant 3-viewport live preview mode that strips editor chrome.",
      ["Desktop Preview", "Mobile Viewport", "Inbox Check"],
      "previewViewport: 'desktop' | 'tablet' | 'mobile'",
    ],
    [
      "Save & Reuse Patterns",
      "Preserve custom block combinations and roll back experiments safely.",
      "Accidental edits or browser refreshes could wipe out unsaved layout tweaks.",
      "Added local auto-save snapshots and a full undo/redo history stack.",
      ["History Stack", "Auto-Save Badge", "Export HTML"],
      "historyStack · localStorageSnapshot",
    ],
  ],
  flownode: [
    [
      "Prompt Workflow in Plain English",
      "Describe the operational automation goal and trigger conditions.",
      "Blank node canvases intimidated non-technical operations leads.",
      "Added an AI prompt composer with realistic starter prompts and trigger chips.",
      ["AI Prompt Bar", "Starter Examples", "Trigger Pill"],
      "promptToGraph(intentPrompt) -> DraftPlan",
    ],
    [
      "Audit Generated Plan & Cost",
      "Verify which external systems and API calls the AI plan will touch.",
      "Auto-generated workflows previously inserted steps without explaining side effects.",
      "Presented a human-readable step preview and estimated run cost before canvas insertion.",
      ["Plan Preview Card", "Cost Estimator", "Insert CTA"],
      '{ steps: 5, estCostPerRun: "$0.014", risk: "LOW" }',
    ],
    [
      "Configure Nodes & Tollgates",
      "Set conditional branches and mandatory human-approval checkpoints.",
      "Deep node modals hid the surrounding upstream and downstream dependencies.",
      "Kept the node graph interactive alongside a docked step-configuration drawer.",
      ["Node Canvas", "Approval Gate Node", "Docked Inspector"],
      "nodeType: 'TRIGGER' | 'ACTION' | 'HUMAN_GATE'",
    ],
    [
      "Supervise Live Executions",
      "Spot runs waiting for human approval vs. failed external webhooks.",
      "Waiting-for-approval runs and crashed runs looked identical in logs.",
      "Separated `Needs Approval`, `Running`, and `Failed` into distinct triage queues.",
      ["Execution Queue", "Approval Action", "Payload Diff"],
      "runState: 'AWAITING_HUMAN' | 'FAILED' | 'OK'",
    ],
    [
      "Replay & Harden Rules",
      "Inspect failed step payloads and re-run from the exact point of failure.",
      "Fixing a downstream step previously required re-triggering the entire workflow.",
      "Enabled step-level payload inspection and idempotent single-node replay.",
      ["Step Trace Log", "Payload Inspector", "Replay Node"],
      "replayFromNode(runId, nodeId,idempotencyKey)",
    ],
  ],
  iretv: [
    [
      "Browse Editorial Collections",
      "Find a meaningful independent film for family movie night.",
      "Algorithmic feeds felt noisy and lacked curatorial point of view.",
      "Organized discovery around human-curated thematic rows and director spotlights.",
      ["Editorial Hero", "Curated Rows", "Theme Pills"],
      "collectionFeed · editorialCuratorTag",
    ],
    [
      "Check Faith & Family Guide",
      "Verify thematic suitability and content descriptors before pressing play.",
      "Parents had to leave the app to search third-party parental-guide sites.",
      "Embedded a structured Faith & Family Suitability Guide right beside the synopsis.",
      ["Title Detail", "Suitability Matrix", "Trailer Player"],
      "suitabilityGuide: { themes, language, familyNote }",
    ],
    [
      "Review Transparent Rental Terms",
      "Understand the exact price and viewing window before checkout.",
      "Streaming apps often blurred one-time rentals with recurring subscriptions.",
      "Stated the exact `$4.99` rental price, 14-day window, and 48-hour finish policy beside the CTA.",
      ["Access Card", "14-Day Badge", "No-Sub Promise"],
      '{ price: 4.99, windowDays: 14, playWindowHrs: 48 }',
    ],
    [
      "Watch with Saved Progress",
      "Stream across living-room TV or mobile without losing playback position.",
      "Switching devices previously reset progress or hid remaining rental hours.",
      "Synced second-by-second playback progress with a visible rental-time badge.",
      ["HTML5 Player", "Resume Bar", "Remaining Time Pill"],
      "playbackSync: { positionSec, expiresAtISO }",
    ],
    [
      "Return to Organized Library",
      "Distinguish active paid rentals from saved watchlist titles.",
      "Expired rentals, active entitlements, and wishlist items were mixed together.",
      "Split My Library into `Continue Watching`, `Active Rentals`, `Saved`, and `History`.",
      ["My Library Tabs", "Entitlement Badge", "Re-Rent CTA"],
      "libraryBucket: 'ACTIVE' | 'SAVED' | 'EXPIRED'",
    ],
  ],
  pulse: [
    [
      "Monitor Settlement Health",
      "Scan daily processing volume, settlement velocity, and active exceptions.",
      "High-level KPIs did not distinguish delayed settlements from failed quotes.",
      "Surfaced separate counters for Expected, Received, Settled, and Exception volume.",
      ["Settlement KPI Strip", "Rail Health Bar", "Alert Banner"],
      "ledgerSummary: { expected, received, settled }",
    ],
    [
      "Locate Flagged Transactions",
      "Filter high-density transaction rows by rail, status, or mismatch type.",
      "Operators had to export CSVs to find underpaid or expired FX quotes.",
      "Built instant status facets (`Mismatch`, `Delayed`, `Webhook Retry`) above the table.",
      ["Facet Filter Bar", "High-Density Grid", "Status Pill"],
      "queryFilter: { status: 'AMOUNT_MISMATCH' }",
    ],
    [
      "Compare Pegged vs. Settled",
      "See why a transaction paused between quote lock and final payout.",
      "Single 'Amount' columns hid whether a variance happened at collection or FX conversion.",
      "Displayed Pegged, Paid, and Settled columns side by side with delta badges.",
      ["3-Column Amount Row", "Delta Badge", "FX Rate Lock"],
      '{ peggedAmt, receivedAmt, varianceDelta }',
    ],
    [
      "Investigate Root Cause",
      "Inspect the timeline of bank callbacks, liquidity checks, and holds.",
      "Evidence was split across backend logs and partner bank portals.",
      "Unified the lifecycle timeline, warning reason, and raw bank reference in one drawer.",
      ["Exception Drawer", "Lifecycle Timeline", "Bank Ref ID"],
      "exceptionTrace: { stage, reasonCode, bankRef }",
    ],
    [
      "Coordinate & Replay Webhook",
      "Share an auditable trace ID with merchants and replay failed webhooks.",
      "Support teams could not tell if the merchant's server acknowledged the settlement event.",
      "Exposed stable webhook event IDs, HTTP response codes, and 1-click event replay.",
      ["Webhook Monitor", "HTTP 200/500 Log", "Replay Button"],
      "replayWebhook(eventId) -> attemptLog[]",
    ],
  ],
  arca: [
    [
      "Unlock & Orient Balance",
      "Check safe-to-spend balance and recent cash-flow movement in 3 seconds.",
      "Multi-screen login and scattered account tabs slowed down daily checks.",
      "Led with total liquid balance, net monthly pulse, and 3 primary thumb actions.",
      ["Biometric Entry", "Total Balance Hero", "Quick Actions"],
      "walletHome: { totalLiquid, monthlyDelta }",
    ],
    [
      "Scan Category Budgets",
      "See which spending categories are approaching their monthly cap.",
      "Static pie charts didn't warn users until after a budget was exceeded.",
      "Used progressive pacing bars with calm amber/emerald threshold indicators.",
      ["Budget Pacing Strip", "Category Chips", "Pace Alert"],
      "budgetPace: { spent, limit, daysLeft }",
    ],
    [
      "Inspect Activity Feed",
      "Verify a merchant charge or filter recurring subscriptions.",
      "Summary cards lacked merchant logos, timestamps, and category tags.",
      "Built a searchable Activity destination with grouped daily ledgers.",
      ["Activity Tab", "Merchant Row", "Search & Filter"],
      "txFeed[] · groupedByDateISO",
    ],
    [
      "Manage Card Security",
      "Freeze a misplaced virtual or physical card or adjust spending limits.",
      "Security toggles were buried 4 levels deep inside profile settings.",
      "Placed `Freeze Card`, `Spend Limit`, and `Show PIN` directly beneath the visual card.",
      ["Card Carousel", "Instant Freeze Toggle", "Limit Slider"],
      "cardControl: { cardId, frozen: boolean, limit }",
    ],
    [
      "Return with Persistent Nav",
      "Switch between Home, Cards, and Activity without losing scroll or filter state.",
      "Deep sub-views previously trapped users in back-button chains.",
      "Anchored a predictable 4-tab bottom bar with preserved tab state.",
      ["Bottom Tab Bar", "State Persistence", "Toast Feedback"],
      "tabRouter · preservedScrollPosition",
    ],
  ],
  interoly: [
    [
      "Triage Low-Stock Alerts",
      "Spot SKUs below reorder threshold at the start of a warehouse shift.",
      "Critical stockouts were buried inside alphabetical catalog lists.",
      "Pinned `Below Reorder` and `Urgent Orders` exception cards to the top of Home.",
      ["Shift Overview", "Low-Stock Alert Strip", "Urgent Badge"],
      "alertsQuery: { stockBelowReorder: true }",
    ],
    [
      "Locate SKU by Scan or Filter",
      "Jump to an item record from the warehouse aisle with one thumb.",
      "Desktop-style tables required horizontal scrolling on handheld devices.",
      "Created a dedicated `Items` bottom tab with instant SKU/barcode search and zone chips.",
      ["Items Tab", "SKU Search Bar", "Aisle Filter"],
      "skuLookup(query, warehouseZone)",
    ],
    [
      "Verify Bin & Stock Count",
      "Confirm item identity, bin location, and reserved vs. available units.",
      "Similar package variants caused picking and recount errors on the floor.",
      "Grouped product thumbnail, SKU code, bin tag, and unit breakdown on one card.",
      ["SKU Detail Card", "Bin Location Pill", "Unit Split"],
      '{ sku, bin: "B-14", available: 18, reserved: 6 }',
    ],
    [
      "Advance Order Fulfillment",
      "Move a customer order from `Picking` to `Packed` to `Shipped`.",
      "Floor staff couldn't see which orders were blocked by missing stock.",
      "Built a dedicated `Orders` queue with clear stage pills and pick-list checklists.",
      ["Orders Tab", "Fulfillment Stepper", "Pack Action"],
      "orderState: 'PICKING' | 'PACKED' | 'SHIPPED'",
    ],
    [
      "Log Adjustment & Resume",
      "Record a cycle-count adjustment and return immediately to the aisle queue.",
      "Submitting an edit previously reset filters and sent workers back to Home.",
      "Used an inline bottom sheet for count adjustments that preserves list position.",
      ["Adjustment Sheet", "Reason Chip", "Instant Sync"],
      "patchInventoryCount(sku, delta, reasonCode)",
    ],
  ],
  urbandrive: [
    [
      "Set Pickup & Trip Window",
      "Enter pickup city, dates, and driver age requirements on entry.",
      "Browsing fleet catalogs before setting dates led to dead-end unavailability.",
      "Anchored a clean trip-context bar at the top of the home and fleet experience.",
      ["Trip Search Bar", "Date Range Picker", "Location Chip"],
      "tripContext: { pickupLoc, startISO, endISO }",
    ],
    [
      "Filter by Real Trip Capacity",
      "Narrow vehicles by passenger seats, luggage bags, transmission, and drivetrain.",
      "Industry car-class codes ('ICAR', 'SFAR') meant nothing to everyday travelers.",
      "Replaced opaque class codes with visual capacity chips (`5 Seats`, `3 Bags`, `AWD`).",
      ["Capacity Filters", "Fleet Grid", "Spec Badges"],
      "fleetFilter: { minSeats: 5, minBags: 3, awd }",
    ],
    [
      "Compare Daily vs. Total Price",
      "Evaluate two vehicles side by side with real multi-day pricing.",
      "Headline daily rates hid mandatory airport fees and mileage caps.",
      "Surfaced both `$ / day` and the all-in trip estimate directly on every fleet card.",
      ["Vehicle Card", "All-In Estimate", "Compare Drawer"],
      '{ ratePerDay: 68, estTripTotal: 234, unlimitedMi }',
    ],
    [
      "Configure Protection & Extras",
      "Add collision coverage, child seats, or an additional driver with live math.",
      "Insurance tiers were written in dense legal prose at the final payment step.",
      "Placed plain-language protection cards beside a sticky live-updating price summary.",
      ["Protection Cards", "Extras Toggle", "Sticky Summary"],
      "bookingCart: { vehicleId, coverageTier, extras[] }",
    ],
    [
      "Confirm & Receive Voucher",
      "Complete reservation with clear cancellation terms and pickup instructions.",
      "Travelers weren't sure what documents or deposit amount was required at pickup.",
      "Generated a structured confirmation pass listing exact pickup desk, hold amount, and ID checklist.",
      ["Progress Stepper", "Confirmation Pass", "Pickup Checklist"],
      "reservationConfirmed: { bookingRef, depositHold }",
    ],
  ],
  pennwise: [
    [
      "Check Financial Compass",
      "See net worth, safe monthly surplus, and goal health on one calm surface.",
      "Traditional finance apps dumped raw transaction rows without strategic context.",
      "Designed a Financial Compass header that frames net position and next best action.",
      ["Compass Dashboard", "Surplus Indicator", "Action Prompt"],
      "compassState: { netWorth, monthlySurplus, status }",
    ],
    [
      "Model Life & Income Scenarios",
      "Test how a salary change, home purchase, or sabbatical affects 5-year runway.",
      "Spreadsheets required manual formula edits to compare two life choices.",
      "Built interactive sliders for income, savings rate, and market return with live curve diffs.",
      ["Scenario Studio", "Sensitivity Sliders", "Dual Trajectory Chart"],
      "scenarioModel: { baseCurve[], variantCurve[] }",
    ],
    [
      "Balance Competing Goals",
      "Allocate monthly surplus across emergency cash, debt payoff, and retirement.",
      "Saving for one goal in isolation hid how it delayed other household milestones.",
      "Showed real-time timeline trade-offs (`Home Down Payment -4 mos` vs `Debt Free +2 mos`).",
      ["Goal Trade-Off Matrix", "Allocation Bar", "Timeline Shift Pill"],
      "goalAllocator: { emergencyPct, debtPct, investPct }",
    ],
    [
      "Inspect Assumptions Clearly",
      "Understand the inflation, tax, and return assumptions behind every projection.",
      "Black-box robo-advisors showed optimistic numbers without explaining the math.",
      "Exposed editable assumption chips (`6.5% Return`, `2.8% Inflation`) directly below charts.",
      ["Assumption Bar", "Confidence Band", "Math Explainer"],
      '{ realReturnPct: 6.5, inflationPct: 2.8, p50_p90 }',
    ],
    [
      "Commit Monthly Action Plan",
      "Turn the chosen scenario into a concrete 3-step monthly transfer checklist.",
      "Users finished planning sessions inspired but unsure what to change in their bank.",
      "Generated a checkable monthly action card with exact dollar amounts per account.",
      ["Action Plan Card", "Transfer Checklist", "Progress Sync"],
      "monthlyPlan: [{ account, action, amountUSD }]",
    ],
  ],
  solshine: [
    [
      "Grasp Clean-Energy Value",
      "Understand how residential and commercial solar reduces grid dependency and cost.",
      "Generic green-energy templates buried payback math beneath stock imagery.",
      "Led with a high-contrast value proposition paired with real kWh output & payback metrics.",
      ["Editorial Hero", "Payback Proof Strip", "Primary CTA"],
      "heroVariant: 'RESIDENTIAL' | 'COMMERCIAL'",
    ],
    [
      "Explore Modular Services",
      "Compare rooftop solar, battery storage, EV chargers, and maintenance plans.",
      "Service pages often sounded repetitive and lacked clear technical scope.",
      "Structured a modular 4-card service bento with capacity specs and use-case tags.",
      ["Service Bento Grid", "Spec Badges", "Use-Case Filter"],
      "serviceCatalog[4] · cmsCollectionBinding",
    ],
    [
      "Verify Installation Proof",
      "Inspect completed regional projects, system sizes (kW), and homeowner savings.",
      "Buyers hesitated to request quotes without seeing comparable local installations.",
      "Built case-study proof cards showing location, panel count, annual savings, and photos.",
      ["Project Proof Carousel", "kW & Savings Chips", "Customer Quote"],
      "installationProof: { kwSize, annualSavingsUSD }",
    ],
    [
      "Estimate & Request Assessment",
      "Submit property type and monthly bill range for a tailored solar consultation.",
      "Long 18-field engineering forms caused 70%+ mobile enquiry abandonment.",
      "Designed a progressive 3-step enquiry flow (`Property Type` → `Bill Range` → `Contact`).",
      ["Progressive Enquiry Form", "Bill Range Pills", "Instant Confirmation"],
      "leadCapture: { propertyType, monthlyBillBand }",
    ],
    [
      "Adapt System via Framer CMS",
      "Re-theme typography, brand colors, and regional proof for new solar partners.",
      "Hardcoded agency sites broke whenever marketing teams edited copy lengths.",
      "Engineered auto-layout Framer components and tokenized CMS fields for zero-code reuse.",
      ["Framer Component Library", "CMS Collections", "Theme Variables"],
      "framerSystem: { tokens, cmsSchema, breakpoints }",
    ],
  ],
}

const generatedAudiences: Record<string, [string, string]> = {
  rapidbi: ["Analytics developers and data product teams", "I need to compose, inspect, and explain trusted data without losing the context behind a metric."],
  shiftsnap: ["Hourly employees and store managers", "I need to see the right shift, request a change, and know when the schedule is confirmed."],
  "navflow-ai": ["Workflow authors and operations leads", "I need to turn a business process into a reviewable flow without losing control of what automation will do."],
  "dev-mode": ["Developers integrating a new API", "I need a guided path from first request to a working integration, with docs and recovery guidance in the same place."],
  "citi-homepage": ["People comparing banking products", "I need to start from my financial goal and compare the right options without translating internal product language."],
  enta: ["People moving money across currencies", "I need to know where my money is going, what it will cost, and what I need to check before confirming."],
  sendory: ["Newsletter authors and content teams", "I need a strong starting structure, flexible content blocks, and a reliable way to review the finished message."],
  flownode: ["Operations teams managing AI workflows", "I need to understand what an automated flow will do, approve it safely, and monitor what happens after launch."],
  iretv: ["Viewers discovering and returning to content", "I need to find something worth watching, understand why it fits, and continue without losing my place."],
  pulse: ["Mobile banking customers", "I need to check my money, complete a payment, and recover confidently when something needs attention."],
  arca: ["People managing personal finances on mobile", "I need important balances and activity to be readable at a glance, even when I am moving quickly."],
  interoly: ["Inventory and order operators", "I need to locate an item, inspect its status, and move from a record to the next operational action."],
  urbandrive: ["Travelers booking a rental vehicle", "I need to compare vehicles and protection choices clearly before I commit to a reservation."],
  solshine: ["Homeowners and commercial solar buyers", "I need to understand the opportunity, trust the proof, and know how to request the right next conversation."],
  simplelist: ["Knowledge workers and creators seeking calm execution", "I want to capture thoughts instantly without breaking flow, organize tasks into clean visual buckets, and feel genuine momentum crossing items off."],
}

const projectScreens: Record<string, string[]> = {
  "dev-mode": [
    `${assetBase}dev-mode/explorer.png`,
    `${assetBase}dev-mode/error-recovery.png`,
    `${assetBase}dev-mode/webhooks.png`,
    `${assetBase}dev-mode/readiness.png`,
  ],
  "citi-homepage": [
    `${assetBase}citi-homepage-wireframes.png`,
    `${assetBase}citi-homepage-production.png`,
    `${assetBase}citi-homepage-mobile.png`,
  ],
  enta: [
    `${assetBase}enta/send.png`,
    `${assetBase}enta/buy.png`,
    `${assetBase}enta/wallet.png`,
  ],
  sendory: [
    `${assetBase}sendory/templates.png`,
    `${assetBase}sendory/layout-controls.png`,
    `${assetBase}sendory/preview-mobile.png`,
    `${assetBase}sendory/preview-desktop.png`,
  ],
  flownode: [
    `${assetBase}flownode/ai-plan.png`,
    `${assetBase}flownode/builder.png`,
    `${assetBase}flownode/executions.png`,
    `${assetBase}flownode/operations.png`,
  ],
  iretv: [
    `${assetBase}iretv/catalog-iteration.png`,
    `${assetBase}iretv/film-detail.png`,
    `${assetBase}iretv/library-iteration.png`,
    `${assetBase}iretv/detail-iteration.png`,
  ],
  pulse: [
    `${assetBase}pulse/transactions.png`,
    `${assetBase}pulse/exception.png`,
    `${assetBase}pulse/webhooks.png`,
  ],
  arca: [
    `${assetBase}arca/welcome.png`,
    `${assetBase}arca/cards.png`,
    `${assetBase}arca/activity.png`,
  ],
  interoly: [
    `${assetBase}interoly/items.png`,
    `${assetBase}interoly/orders.png`,
  ],
  urbandrive: [
    `${assetBase}urbandrive/fleet.png`,
    `${assetBase}urbandrive/booking.png`,
  ],
  pennwise: [
    `${assetBase}finwise-dashboard.png`,
    `${assetBase}finwise-web/statistics.png`,
    `${assetBase}finwise-web/wallet.png`,
    `${assetBase}finwise-transfer.png`,
  ],
  solshine: [
    `${assetBase}solshine/services.png`,
    `${assetBase}solshine/contact.png`,
    `${assetBase}solshine/about.png`,
  ],
}

const catalogHeadlines: Record<string, [string, string, string]> = {
  "dev-mode": [
    "From first API request to ",
    "operational readiness.",
    "Guide developers from API evaluation to production with side-by-side docs, recovery paths, and webhook logs.",
  ],
  "citi-homepage": [
    "Customer-first journeys for ",
    "high-traffic banking.",
    "Replace internal product silos with intent-led navigation, scannable offer comparisons, and responsive clarity.",
  ],
  enta: [
    "Cross-border money made ",
    "transparent on every screen.",
    "Unify multi-currency wallets, transparent FX previews, payment links, and beneficiaries in one calm workspace.",
  ],
  sendory: [
    "Purpose-built newsletter ",
    "authoring & live preview.",
    "Give editorial teams intent-driven starter templates, block-level layout controls, and instant mobile verification.",
  ],
  flownode: [
    "AI workflow automation with ",
    "explicit human control.",
    "Turn plain-language automation prompts into inspectable node graphs with approval gates and live ops telemetry.",
  ],
  iretv: [
    "Curated cinema built for ",
    "family trust & clarity.",
    "Pair independent film discovery with a Faith & Family suitability guide, clear rental windows, and library continuity.",
  ],
  pulse: [
    "Quote-to-settlement ops ",
    "made fully traceable.",
    "Separate expected, received, and settled amounts while surfacing root-cause exception recovery for ops teams.",
  ],
  arca: [
    "Calm mobile money & ",
    "instant card security.",
    "Answer what you have, what changed, and what comes next on load while keeping card freeze and limit controls in sight.",
  ],
  interoly: [
    "Floor-ready inventory & ",
    "fulfillment operations.",
    "Surface low-stock exceptions first and give warehouse operators one-tap thumb navigation across items and orders.",
  ],
  urbandrive: [
    "Transparent fleet comparison ",
    "& zero-surprise booking.",
    "Let travelers filter by real trip capacity and see live protection and pricing updates before reservation lock.",
  ],
  pennwise: [
    "Scenario-driven planning ",
    "for real-life trade-offs.",
    "Turn static account balances into an interactive financial compass that models income, debt, and return scenarios.",
  ],
  solshine: [
    "Modular clean-energy web ",
    "system built to convert.",
    "Connect solar service education, installation proof, and low-friction consultation booking in a reusable Framer system.",
  ],
}

const generatedProjects: CaseStudyProject[] = rawCatalog.map((item) => {
  const screens = projectScreens[item.id] ?? [item.image]
  const customHead = catalogHeadlines[item.id]
  return {
  id: item.id,
  index: item.index,
  name: item.name,
  category: item.category,
  portfolioCategory: item.portfolioCategory,
  summary: item.summary,
  headlineStart: customHead?.[0] ?? "Designed for ",
  headlineAccent: customHead?.[1] ?? "operational clarity.",
  lede: `As ${item.role.toLowerCase()}, I led discovery, UX architecture, interaction design, and design-to-engineering alignment for ${item.name}—turning complex requirements into a clear, testable experience.`,
  role: item.role,
  team: item.team ?? "UX researchers · Product · Engineering",
  scope: item.scope,
  platform: item.platform,
  heroImage: item.image,
  audienceTitle:
    item.audienceTitle ?? generatedAudiences[item.id]?.[0] ??
    ({
      "Developer tools": "Developers and platform teams",
      Mobile: "People managing work or daily tasks on the move",
      "Design systems": "Product teams building consistently",
      "Product & UX": "Operators making high-context decisions",
      "Content & web": "People looking for a clear next step",
    } satisfies Record<CaseStudyProject["portfolioCategory"], string>)[item.portfolioCategory],
  audienceGoal:
    item.audienceGoal ?? generatedAudiences[item.id]?.[1] ??
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
  mandateTitle: customHead?.[2] ?? item.decisions[0]?.[0] ?? item.summary,
  mandateBody: generatedMandates[item.portfolioCategory],
  secondaryImage: item.secondaryImage ?? screens[3],
  panoramaTitle: item.panoramaTitle ?? `${item.name} — Multi-Screen Interface System`,
  panoramaLabel: item.panoramaLabel ?? `${item.scope}`,
  frictionTitle: item.frictionTitle ?? `Fragmented workflows in ${item.category.split("·")[1]?.trim() || item.name}`,
  resolutionTitle: item.resolutionTitle ?? item.decisions[0]?.[0] ?? `Clear, progressive architecture for ${item.name}`,
  resolutionBody: item.resolutionBody ?? item.decisions[0]?.[1] ?? generatedMandates[item.portfolioCategory],
  problemStatement: item.problemStatement ?? `Users navigating ${item.name} needed to connect high-level overview signals directly to detailed actions without losing task context across screens.`,
  ownershipPillars: [
    [
      "Information Architecture",
      item.decisions[0]?.[1] ?? `Structured ${item.name} around clear user intents and predictable navigation destinations.`,
    ],
    [
      "Interaction & State Design",
      item.decisions[1]?.[1] ?? "Defined loading, empty, active, exception, and confirmation states before visual polish.",
    ],
    [
      "System & Delivery",
      item.decisions[2]?.[1] ?? "Partnered with engineering on tokenized specs, responsive rules, and an interactive prototype.",
    ],
  ],
  discoverySummary: `Working alongside our UX researchers, we audited the end-to-end workflow for ${item.name} and mapped where users lost context across ${item.scope.toLowerCase()}.`,
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
      tag: "Primary Priority",
      text: `“${item.decisions[0]?.[0] ?? `Users in ${item.name} need to see what matters first.`}”`,
    },
    {
      tone: "emerald",
      tag: "Workflow Rule",
      text: item.decisions[1]?.[1] ?? "Keep summary signals connected to the detailed records that explain them.",
    },
    {
      tone: "sky",
      tag: "State Continuity",
      text: item.decisions[2]?.[1] ?? "Preserve filter, selection, and task context across every screen transition.",
    },
    {
      tone: "rose",
      tag: "Engineering Sync",
      text: `Aligned ${item.platform} component props and status tokens 1:1 with frontend state.`,
    },
  ],
  synthesis: [
    {
      theme: "Orientation",
      evidence: "People needed a clear read on status before choosing a path.",
      response: "Lead with scope, status, and one obvious starting action.",
    },
    {
      theme: "Context continuity",
      evidence: "Switching views could make the current filter or selection disappear.",
      response: "Keep task context persistent across lists, details, and states.",
    },
    {
      theme: "Confidence",
      evidence: "The next decision depended on supporting detail, not a summary alone.",
      response: "Pair every high-level signal with the evidence needed to act.",
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
  journeySummary: `I mapped the 5-stage user and system journey for ${item.name} in FigJam so design, research, and engineering worked from one shared blueprint.`,
  journeyFlow: (catalogJourneys[item.id] ?? [
    [
      `Enter ${item.name}`,
      "Understand current status and available starting paths on load",
      "Competing modules and equal-weight links previously obscured the primary task.",
      "Focused overview hierarchy with clear status framing and primary CTA.",
      ["Overview Header", "Primary Action", "Status Strip"],
      "Initial route state + semantic summary payload",
    ],
    [
      "Filter & Compare",
      "Narrow scope and compare relevant options or records",
      "Filtering or switching views previously forced users to rebuild context.",
      "Persistent filter bar and synchronized list/detail inspection.",
      ["Scoped Filters", "Comparison Cards", "Record Table"],
      "URL/store-synced filter query + deterministic list rendering",
    ],
    [
      "Inspect & Verify",
      "Inspect full details and verify consequences before committing",
      "Key terms, costs, or dependencies were hidden until after submission.",
      "Contextual review surface showing live impact beside the active selection.",
      ["Contextual Inspector", "Impact Summary", "Validation Check"],
      "Validation schema + real-time state preview",
    ],
    [
      "Commit & Recover",
      "Complete the action or recover cleanly from exceptions",
      "Generic error states left users unsure how to fix an issue.",
      "Explicit confirmation states and guided inline recovery for exceptions.",
      ["Action Confirmation", "Exception Handler", "Audit Status"],
      "Idempotent action handler + structured error recovery state",
    ],
    [
      "Monitor & Reuse",
      "Track ongoing status and reuse saved patterns across sessions",
      "One-time actions were not reflected in a durable history or saved workspace.",
      "Persistent activity timeline and reusable component patterns.",
      ["Saved State", "Activity History", "Component System"],
      "Persisted workspace state + documented UI component library",
    ],
  ]).map(([stage, userGoal, frictionEliminated, uxResolution, touchpoints, engineeringContract], idx) => ({
    step: String(idx + 1).padStart(2, "0"),
    stage,
    actor:
      idx === 0 || idx === 1
        ? (item.audienceTitle ?? generatedAudiences[item.id]?.[0] ?? "Primary User").split(" and ")[0]
        : idx === 2
          ? "User + System"
          : idx === 3
            ? "System + User"
            : "Returning User",
    userGoal,
    frictionEliminated,
    uxResolution,
    engineeringContract,
    touchpoints,
  })),
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
  engineeringSummary: `I partnered with engineers to translate the design direction for ${item.name} into clear component contracts, responsive layout rules, and accessible state semantics.`,
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
    badge: `0${idx + 1} · Core Capability`,
    image: screens[idx],
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
  }
})

const withPersonaContent = (project: CaseStudyProject): CaseStudyProject => {
  if (!project) return project
  const audience = generatedAudiences[project.id]
  return {
    ...project,
    audienceTitle: project.audienceTitle ?? audience?.[0] ?? project.role,
    audienceGoal:
      project.audienceGoal ??
      audience?.[1] ??
      "I need a clear starting point, useful feedback, and a confident next action.",
    personaQuotes:
      project.personaQuotes ??
      personaNames.map(([name, designation], index) => ({
        quote:
          index === 0
            ? `I need ${project.name} to show me where I am, what matters now, and where to begin.`
            : index === 1
              ? "I need the important detail in context so I can make the right decision without rebuilding the workflow."
              : "I need a clear next action and enough feedback to know the work is moving forward.",
        name,
        designation,
      })),
  }
}

export const allCaseStudies: CaseStudyProject[] = [
  ...portfolioProjects,
  ...generatedProjects,
]
  .filter(Boolean)
  .map(withPersonaContent)
  .map((project, idx) => ({
    ...project,
    index: String(idx + 1).padStart(2, "0"),
  }))
