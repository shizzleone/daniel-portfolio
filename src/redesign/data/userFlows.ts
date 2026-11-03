export type FlowNodeType = "start" | "end" | "step" | "system" | "decision"

export interface FlowNode {
  id: string
  type: FlowNodeType
  label: string
  col: number
  row: number
  note?: string
}

export interface FlowEdge {
  from: string
  to: string
  label?: string
}

export interface FlowPath {
  id: string
  label: string
  nodes: string[]
}

export interface UserFlow {
  title: string
  summary: string
  lanes: string[]
  cols: number
  nodes: FlowNode[]
  edges: FlowEdge[]
  paths: FlowPath[]
}

export const userFlows: Record<string, UserFlow> = {
  shiftsnap: {
    title: "Shift swap: from conflict to confirmed roster.",
    summary:
      "Three people and one system touch every swap. Mapping the flow across lanes showed exactly where agreement ended and approval began, and that distinction drove the whole design.",
    lanes: ["Team member", "Teammate", "Manager", "System"],
    cols: 8,
    nodes: [
      { id: "start", type: "start", label: "Shift conflict", col: 0, row: 0 },
      { id: "open", type: "step", label: "Open today's shift", col: 1, row: 0 },
      {
        id: "req",
        type: "step",
        label: "Tap Request swap",
        col: 2,
        row: 0,
        note: "Shift, role and store carry into the request automatically, so the worker types nothing.",
      },
      {
        id: "find",
        type: "system",
        label: "Match eligible teammates",
        col: 3,
        row: 3,
        note: "Filters by certification and weekly hours before anyone is notified.",
      },
      { id: "accept", type: "decision", label: "Accepts?", col: 4, row: 1 },
      {
        id: "expire",
        type: "end",
        label: "Expires · shift kept",
        col: 4,
        row: 0,
      },
      {
        id: "cover",
        type: "decision",
        label: "Coverage OK?",
        col: 5,
        row: 2,
        note: "The manager sees the coverage heatmap and overtime risk at the moment of decision.",
      },
      {
        id: "decline",
        type: "end",
        label: "Declined · both notified",
        col: 6,
        row: 0,
      },
      { id: "approve", type: "step", label: "Approve swap", col: 6, row: 2 },
      {
        id: "done",
        type: "end",
        label: "Calendars updated",
        col: 7,
        row: 3,
        note: 'An atomic roster update, logged in the "You gave up / You received" ledger.',
      },
    ],
    edges: [
      { from: "start", to: "open" },
      { from: "open", to: "req" },
      { from: "req", to: "find" },
      { from: "find", to: "accept" },
      { from: "accept", to: "expire", label: "No" },
      { from: "accept", to: "cover", label: "Yes" },
      { from: "cover", to: "decline", label: "No" },
      { from: "cover", to: "approve", label: "Yes" },
      { from: "approve", to: "done" },
    ],
    paths: [
      {
        id: "approved",
        label: "Approved",
        nodes: [
          "start",
          "open",
          "req",
          "find",
          "accept",
          "cover",
          "approve",
          "done",
        ],
      },
      {
        id: "declined",
        label: "Declined by manager",
        nodes: ["start", "open", "req", "find", "accept", "cover", "decline"],
      },
      {
        id: "expired",
        label: "No teammate accepts",
        nodes: ["start", "open", "req", "find", "accept", "expire"],
      },
    ],
  },
  meridian: {
    title: "First integration: request, recover, verify.",
    summary:
      "The critical moments are failures: a missing scope, an unacknowledged webhook. The flow makes every recovery path explicit, so a developer never leaves the workspace to debug.",
    lanes: ["Developer", "Portal", "Payments API"],
    cols: 8,
    nodes: [
      { id: "start", type: "start", label: "Open quickstart", col: 0, row: 0 },
      {
        id: "scope",
        type: "step",
        label: "Choose sandbox scopes",
        col: 1,
        row: 0,
      },
      {
        id: "run",
        type: "step",
        label: "Run POST /payments",
        col: 2,
        row: 1,
        note: "Reference docs and the runnable request share one split view.",
      },
      { id: "ok", type: "decision", label: "2xx response?", col: 3, row: 2 },
      {
        id: "diag",
        type: "system",
        label: "Explain cause + missing scope",
        col: 3,
        row: 1,
        note: "A 403 names the exact missing scope instead of returning a bare status code.",
      },
      { id: "fix", type: "step", label: "Apply fix & retry", col: 4, row: 0 },
      {
        id: "ledger",
        type: "system",
        label: "Payment created",
        col: 4,
        row: 2,
      },
      { id: "hook", type: "decision", label: "Webhook acked?", col: 5, row: 2 },
      {
        id: "replay",
        type: "step",
        label: "Replay same event ID",
        col: 6,
        row: 2,
        note: "Stable event IDs make retries safe, with no risk of duplicate payments.",
      },
      {
        id: "ready",
        type: "end",
        label: "Go-live checklist done",
        col: 7,
        row: 0,
      },
    ],
    edges: [
      { from: "start", to: "scope" },
      { from: "scope", to: "run" },
      { from: "run", to: "ok" },
      { from: "ok", to: "diag", label: "No" },
      { from: "ok", to: "ledger", label: "Yes" },
      { from: "diag", to: "fix" },
      { from: "fix", to: "ledger", label: "Retry" },
      { from: "ledger", to: "hook" },
      { from: "hook", to: "replay", label: "No" },
      { from: "hook", to: "ready", label: "Yes" },
      { from: "replay", to: "ready" },
    ],
    paths: [
      {
        id: "happy",
        label: "First call succeeds",
        nodes: ["start", "scope", "run", "ok", "ledger", "hook", "ready"],
      },
      {
        id: "recover",
        label: "Permission error",
        nodes: [
          "start",
          "scope",
          "run",
          "ok",
          "diag",
          "fix",
          "ledger",
          "hook",
          "ready",
        ],
      },
      {
        id: "webhook",
        label: "Webhook retry",
        nodes: [
          "start",
          "scope",
          "run",
          "ok",
          "ledger",
          "hook",
          "replay",
          "ready",
        ],
      },
    ],
  },
  "navflow-ai": {
    title: "NAV processing with a human approval gate.",
    summary:
      "Automation handles the routine path. Anything below confidence or outside tolerance routes to a controller with the source evidence attached, and nothing ships without sign-off.",
    lanes: ["AI agents", "Controller", "Platform"],
    cols: 7,
    nodes: [
      {
        id: "start",
        type: "start",
        label: "NAV report arrives",
        col: 0,
        row: 0,
      },
      {
        id: "extract",
        type: "step",
        label: "Classify & extract fields",
        col: 1,
        row: 0,
        note: "Every value keeps its PDF page and bounding box for traceability.",
      },
      {
        id: "conf",
        type: "decision",
        label: "All fields ≥ 98%?",
        col: 2,
        row: 2,
      },
      {
        id: "tol",
        type: "decision",
        label: "Within tolerance?",
        col: 3,
        row: 2,
      },
      {
        id: "review",
        type: "step",
        label: "Review flagged fields vs. source",
        col: 3,
        row: 1,
        note: "A split view highlights the exact source line behind each flagged value.",
      },
      {
        id: "approve",
        type: "decision",
        label: "Approve?",
        col: 4,
        row: 1,
        note: "Overrides require a written rationale and are written to an immutable audit log.",
      },
      {
        id: "returned",
        type: "end",
        label: "Returned with note",
        col: 4,
        row: 0,
      },
      {
        id: "deliver",
        type: "system",
        label: "Dispatch NAV package",
        col: 5,
        row: 2,
      },
      { id: "done", type: "end", label: "Receipt logged", col: 6, row: 2 },
    ],
    edges: [
      { from: "start", to: "extract" },
      { from: "extract", to: "conf" },
      { from: "conf", to: "tol", label: "Yes" },
      { from: "conf", to: "review", label: "No" },
      { from: "tol", to: "review", label: "No" },
      { from: "tol", to: "deliver", label: "Yes" },
      { from: "review", to: "approve" },
      { from: "approve", to: "returned", label: "No" },
      { from: "approve", to: "deliver", label: "Yes" },
      { from: "deliver", to: "done" },
    ],
    paths: [
      {
        id: "auto",
        label: "Straight-through",
        nodes: ["start", "extract", "conf", "tol", "deliver", "done"],
      },
      {
        id: "review",
        label: "Exception approved",
        nodes: [
          "start",
          "extract",
          "conf",
          "review",
          "approve",
          "deliver",
          "done",
        ],
      },
      {
        id: "returned",
        label: "Exception returned",
        nodes: ["start", "extract", "conf", "review", "approve", "returned"],
      },
    ],
  },
  rapidbi: {
    title: "From a KPI change to a shared, saved view.",
    summary:
      "Analysts branch at two points: whether to reconfigure a widget, and whether to accept an assistant suggestion. Both branches return to the same canvas, so context is never lost.",
    lanes: ["Analyst", "Workbench", "AI assistant"],
    cols: 8,
    nodes: [
      { id: "start", type: "start", label: "Open saved view", col: 0, row: 0 },
      { id: "spot", type: "step", label: "Spot KPI change", col: 1, row: 0 },
      {
        id: "drill",
        type: "system",
        label: "Drill chart → grid",
        col: 2,
        row: 1,
        note: "Filters and selection carry from the chart into the 1,440-row grid.",
      },
      { id: "recfg", type: "decision", label: "Reconfigure?", col: 3, row: 1 },
      {
        id: "drawer",
        type: "step",
        label: "Edit in side drawer",
        col: 4,
        row: 0,
        note: "groupBy, pivotBy and delta update the live widget in place.",
      },
      { id: "note", type: "step", label: "Comment on view", col: 5, row: 1 },
      {
        id: "assist",
        type: "decision",
        label: "Accept suggestion?",
        col: 6,
        row: 2,
        note: "The assistant previews the exact change before anything touches the canvas.",
      },
      { id: "apply", type: "system", label: "Apply to canvas", col: 7, row: 2 },
      { id: "save", type: "end", label: "Save & share view", col: 7, row: 0 },
    ],
    edges: [
      { from: "start", to: "spot" },
      { from: "spot", to: "drill" },
      { from: "drill", to: "recfg" },
      { from: "recfg", to: "drawer", label: "Yes" },
      { from: "recfg", to: "note", label: "No" },
      { from: "drawer", to: "note" },
      { from: "note", to: "assist" },
      { from: "assist", to: "apply", label: "Yes" },
      { from: "assist", to: "save", label: "No" },
      { from: "apply", to: "save" },
    ],
    paths: [
      {
        id: "quick",
        label: "Quick insight",
        nodes: ["start", "spot", "drill", "recfg", "note", "assist", "save"],
      },
      {
        id: "deep",
        label: "Configured + assisted",
        nodes: [
          "start",
          "spot",
          "drill",
          "recfg",
          "drawer",
          "note",
          "assist",
          "apply",
          "save",
        ],
      },
    ],
  },
  flownode: {
    title: "Plain-language idea to a supervised run.",
    summary:
      "The plan review is a deliberate pause before anything is built, and human approval during a run is treated as a distinct state rather than a failure.",
    lanes: ["Author", "AI planner", "Runtime"],
    cols: 9,
    nodes: [
      {
        id: "start",
        type: "start",
        label: "Describe automation",
        col: 0,
        row: 0,
      },
      {
        id: "plan",
        type: "step",
        label: "Draft plan + cost",
        col: 1,
        row: 1,
        note: "Proposed steps, approval gates and a credit estimate appear before anything is built.",
      },
      {
        id: "match",
        type: "decision",
        label: "Matches intent?",
        col: 2,
        row: 0,
      },
      { id: "refine", type: "step", label: "Edit steps", col: 3, row: 1 },
      {
        id: "canvas",
        type: "step",
        label: "Insert into canvas",
        col: 4,
        row: 0,
      },
      { id: "run", type: "system", label: "Execute run", col: 5, row: 2 },
      { id: "gate", type: "decision", label: "Approval step?", col: 6, row: 2 },
      {
        id: "approve",
        type: "step",
        label: "Approve in queue",
        col: 7,
        row: 0,
        note: "Waiting on a person is visually distinct from an execution error.",
      },
      { id: "done", type: "end", label: "Run complete", col: 8, row: 2 },
    ],
    edges: [
      { from: "start", to: "plan" },
      { from: "plan", to: "match" },
      { from: "match", to: "canvas", label: "Yes" },
      { from: "match", to: "refine", label: "No" },
      { from: "refine", to: "canvas" },
      { from: "canvas", to: "run" },
      { from: "run", to: "gate" },
      { from: "gate", to: "approve", label: "Yes" },
      { from: "gate", to: "done", label: "No" },
      { from: "approve", to: "done" },
    ],
    paths: [
      {
        id: "auto",
        label: "Plan accepted",
        nodes: ["start", "plan", "match", "canvas", "run", "gate", "done"],
      },
      {
        id: "human",
        label: "Refined + approval",
        nodes: [
          "start",
          "plan",
          "match",
          "refine",
          "canvas",
          "run",
          "gate",
          "approve",
          "done",
        ],
      },
    ],
  },
  iretv: {
    title: "Discovery to playback, with no surprises.",
    summary:
      "Two decisions shape the viewer's journey: whether a title suits the household, and whether to rent now. Both have a graceful exit that keeps the viewer engaged.",
    lanes: ["Viewer", "Platform"],
    cols: 8,
    nodes: [
      {
        id: "start",
        type: "start",
        label: "Browse curated rows",
        col: 0,
        row: 0,
      },
      { id: "title", type: "step", label: "Open title", col: 1, row: 0 },
      {
        id: "guide",
        type: "decision",
        label: "Right for household?",
        col: 2,
        row: 0,
        note: "The Faith & Family Guide sits beside the synopsis and trailer.",
      },
      { id: "keep", type: "end", label: "Keep browsing", col: 2, row: 1 },
      {
        id: "terms",
        type: "step",
        label: "See price + 14-day window",
        col: 3,
        row: 0,
        note: "Access terms sit beside the primary action, so checkout holds no surprises.",
      },
      { id: "rent", type: "decision", label: "Rent now?", col: 4, row: 0 },
      { id: "watch", type: "end", label: "Saved to watchlist", col: 4, row: 1 },
      { id: "pay", type: "step", label: "Confirm payment", col: 5, row: 0 },
      {
        id: "grant",
        type: "system",
        label: "Grant 14-day access",
        col: 6,
        row: 1,
      },
      {
        id: "play",
        type: "end",
        label: "Play · progress saved",
        col: 7,
        row: 0,
      },
    ],
    edges: [
      { from: "start", to: "title" },
      { from: "title", to: "guide" },
      { from: "guide", to: "keep", label: "No" },
      { from: "guide", to: "terms", label: "Yes" },
      { from: "terms", to: "rent" },
      { from: "rent", to: "watch", label: "Later" },
      { from: "rent", to: "pay", label: "Yes" },
      { from: "pay", to: "grant" },
      { from: "grant", to: "play" },
    ],
    paths: [
      {
        id: "rent",
        label: "Rent & watch",
        nodes: [
          "start",
          "title",
          "guide",
          "terms",
          "rent",
          "pay",
          "grant",
          "play",
        ],
      },
      {
        id: "later",
        label: "Save for later",
        nodes: ["start", "title", "guide", "terms", "rent", "watch"],
      },
    ],
  },
}
