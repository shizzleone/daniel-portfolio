import { useEffect, useState } from "react";

type IconName =
  | "overview"
  | "docs"
  | "key"
  | "webhook"
  | "logs"
  | "usage"
  | "live"
  | "search"
  | "chevron"
  | "check"
  | "copy"
  | "arrow"
  | "moon"
  | "sun"
  | "play"
  | "terminal"
  | "shield"
  | "spark"
  | "case";

const navItems: { label: string; icon: IconName }[] = [
  { label: "Overview", icon: "overview" },
  { label: "Docs", icon: "docs" },
  { label: "API Keys", icon: "key" },
  { label: "Webhooks", icon: "webhook" },
  { label: "Logs", icon: "logs" },
  { label: "Usage", icon: "usage" },
  { label: "Go Live", icon: "live" },
];

const snippets = {
  cURL: `curl https://api.meridian.dev/v1/payments \\
  -H "Authorization: Bearer sk_test_••••" \\
  -H "Content-Type: application/json" \\
  -d '{
    "amount": 2500,
    "currency": "usd"
  }'`,
  Node: `const payment = await meridian.payments.create({
  amount: 2500,
  currency: "usd",
  description: "Order #1842"
});

console.log(payment.id);`,
  Python: `payment = meridian.Payment.create(
    amount=2500,
    currency="usd",
    description="Order #1842"
)

print(payment.id)`,
};

function Icon({ name, size = 18 }: { name: IconName; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  const paths: Record<IconName, React.ReactNode> = {
    overview: (
      <>
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
      </>
    ),
    docs: (
      <>
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
        <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z" />
      </>
    ),
    key: (
      <>
        <circle cx="8" cy="15" r="4" />
        <path d="m11 12 8-8m-2 2 2 2m-5 1 2 2" />
      </>
    ),
    webhook: (
      <>
        <circle cx="18" cy="16" r="3" />
        <circle cx="6" cy="16" r="3" />
        <circle cx="12" cy="5" r="3" />
        <path d="m8 14 3-6m2 0 3 6M9 16h6" />
      </>
    ),
    logs: (
      <>
        <path d="M5 4h14M5 10h14M5 16h8" />
        <circle cx="18" cy="17" r="3" />
      </>
    ),
    usage: (
      <>
        <path d="M4 20V10m6 10V4m6 16v-7m5 7V7" />
      </>
    ),
    live: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    chevron: <path d="m9 18 6-6-6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    copy: (
      <>
        <rect x="8" y="8" width="12" height="12" rx="2" />
        <path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" />
      </>
    ),
    arrow: <path d="M5 12h14m-5-5 5 5-5 5" />,
    moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" />
      </>
    ),
    play: <path d="m8 5 11 7-11 7V5Z" />,
    terminal: (
      <>
        <path d="m6 8 4 4-4 4m6 0h6" />
        <rect x="2.5" y="4" width="19" height="16" rx="2" />
      </>
    ),
    shield: (
      <>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    spark: (
      <>
        <path d="m12 3 1.2 4.1L17 9l-3.8 1.9L12 15l-1.2-4.1L7 9l3.8-1.9L12 3Z" />
        <path d="m19 15 .6 2.1L22 18l-2.4.9L19 21l-.6-2.1L16 18l2.4-.9L19 15Z" />
      </>
    ),
    case: (
      <>
        <rect x="3" y="5" width="18" height="15" rx="2" />
        <path d="M8 5V3h8v2M3 11h18M10 11v2h4v-2" />
      </>
    ),
  };
  return <svg {...common}>{paths[name]}</svg>;
}

function CodePanel({
  language,
  onLanguage,
}: {
  language: keyof typeof snippets;
  onLanguage: (language: keyof typeof snippets) => void;
}) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard?.writeText(snippets[language]);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="code-card">
      <div className="code-toolbar">
        <div className="traffic-lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
        <div className="language-tabs" aria-label="Code language">
          {(Object.keys(snippets) as (keyof typeof snippets)[]).map((item) => (
            <button
              className={language === item ? "language active" : "language"}
              key={item}
              onClick={() => onLanguage(item)}
            >
              {item}
            </button>
          ))}
        </div>
        <button className="icon-button code-copy" onClick={copy} aria-label="Copy code">
          <Icon name={copied ? "check" : "copy"} size={16} />
          <span>{copied ? "Copied" : "Copy"}</span>
        </button>
      </div>
      <pre>
        <code>{snippets[language]}</code>
      </pre>
      <div className="response-preview">
        <div className="response-status">
          <span className="success-dot" />
          <strong>201 Created</strong>
          <span>386 ms</span>
        </div>
        <code>
          <span className="muted">{"{"}</span> <span className="purple">"id"</span>
          <span className="muted">: </span>
          <span className="green">"pay_01HQ8K4V7F"</span>
          <span className="muted">, </span>
          <span className="purple">"status"</span>
          <span className="muted">: </span>
          <span className="green">"succeeded"</span> <span className="muted">{"}"}</span>
        </code>
      </div>
    </div>
  );
}

function PlaceholderPage({ title }: { title: string }) {
  const copy: Record<string, [string, string]> = {
    Docs: ["API reference", "Explore endpoints, SDKs, and implementation guides."],
    "API Keys": ["API keys", "Create and manage credentials for your applications."],
    Webhooks: ["Webhooks", "Listen for events and inspect delivery attempts."],
    Logs: ["Request logs", "Inspect every API request from your integration."],
    Usage: ["Usage", "Monitor request volume, errors, and latency."],
    "Go Live": ["Prepare for production", "Complete your readiness checks and request access."],
  };
  const [heading, description] = copy[title];
  return (
    <section className="placeholder-page">
      <div className="eyebrow">{title === "Go Live" ? "Production readiness" : "Meridian workspace"}</div>
      <h1>{heading}</h1>
      <p>{description}</p>
      <div className="placeholder-card">
        <div className="placeholder-icon">
          <Icon name={title === "Go Live" ? "shield" : "terminal"} size={22} />
        </div>
        <h2>{title === "API Keys" ? "Create your first sandbox key" : `${title} workspace`}</h2>
        <p>
          {title === "API Keys"
            ? "Sandbox keys let you test every endpoint with simulated data. No real money moves."
            : "This area is ready for the next stage of your integration."}
        </p>
        <button className="primary-button">
          {title === "API Keys" ? "Create sandbox app" : "Open guide"}
          <Icon name="arrow" size={16} />
        </button>
      </div>
    </section>
  );
}

const endpoints = [
  { group: "Payments", items: ["Create a payment", "Retrieve a payment", "List payments"] },
  { group: "Customers", items: ["Create a customer", "Retrieve a customer"] },
  { group: "Ledger", items: ["Create an account", "List transactions"] },
  { group: "Webhooks", items: ["Create an endpoint", "List event types"] },
];

const endpointDetails: Record<string, { method: "GET" | "POST"; path: string; description: string }> = {
  "Create a payment": {
    method: "POST",
    path: "/v1/payments",
    description:
      "Creates a payment in your Meridian account. Payments move an amount from a source to a destination and return synchronously with their current status.",
  },
  "Retrieve a payment": {
    method: "GET",
    path: "/v1/payments/:id",
    description:
      "Retrieves the latest state of an existing payment, including its status, amount, and associated customer.",
  },
  "List payments": {
    method: "GET",
    path: "/v1/payments",
    description:
      "Returns a cursor-paginated list of payments, ordered by creation date with the most recent first.",
  },
  "Create a customer": {
    method: "POST",
    path: "/v1/customers",
    description:
      "Creates a customer record that can be associated with payments, balances, and ledger accounts.",
  },
  "Retrieve a customer": {
    method: "GET",
    path: "/v1/customers/:id",
    description: "Retrieves a customer and their current account relationships by ID.",
  },
  "Create an account": {
    method: "POST",
    path: "/v1/ledger/accounts",
    description:
      "Creates an account in your double-entry ledger with the selected currency and normal balance.",
  },
  "List transactions": {
    method: "GET",
    path: "/v1/ledger/transactions",
    description: "Lists balanced ledger transactions with optional account and date filters.",
  },
  "Create an endpoint": {
    method: "POST",
    path: "/v1/webhook_endpoints",
    description: "Registers an HTTPS endpoint to receive signed events from your Meridian account.",
  },
  "List event types": {
    method: "GET",
    path: "/v1/event_types",
    description: "Lists the event types available for webhook endpoint subscriptions.",
  },
};

const referenceSnippets = {
  cURL: `curl https://api.meridian.dev/v1/payments \\
  -X POST \\
  -H "Authorization: Bearer $MERIDIAN_API_KEY" \\
  -H "Content-Type: application/json" \\
  -H "Idempotency-Key: order_1842" \\
  -d '{
    "amount": 2500,
    "currency": "usd",
    "description": "Order #1842"
  }'`,
  Node: `const payment = await meridian.payments.create({
  amount: 2500,
  currency: "usd",
  description: "Order #1842",
}, {
  idempotencyKey: "order_1842"
});`,
  Python: `payment = meridian.payments.create(
    amount=2500,
    currency="usd",
    description="Order #1842",
    idempotency_key="order_1842"
)`,
};

function DocsPage({
  language,
  onLanguage,
}: {
  language: keyof typeof snippets;
  onLanguage: (language: keyof typeof snippets) => void;
}) {
  const [selected, setSelected] = useState("Create a payment");
  const [copied, setCopied] = useState(false);
  const [requestState, setRequestState] = useState<"idle" | "loading" | "success">("idle");
  const detail = endpointDetails[selected];

  const runRequest = () => {
    setRequestState("loading");
    window.setTimeout(() => setRequestState("success"), 850);
  };

  const copyCode = async () => {
    await navigator.clipboard?.writeText(referenceSnippets[language]);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="docs-page">
      <aside className="reference-nav">
        <div className="reference-title">
          <span>API reference</span>
          <strong>2025-03-01</strong>
        </div>
        <div className="reference-filter">
          <Icon name="search" size={14} />
          <span>Filter endpoints</span>
        </div>
        {endpoints.map((group) => (
          <div className="endpoint-group" key={group.group}>
            <div>{group.group}</div>
            {group.items.map((item, index) => (
              <button
                className={selected === item ? "selected" : ""}
                key={item}
                onClick={() => setSelected(item)}
              >
                <span className={index === 0 ? "method-label post" : "method-label get"}>
                  {index === 0 ? "POST" : "GET"}
                </span>
                {item}
              </button>
            ))}
          </div>
        ))}
      </aside>

      <article className="reference-content">
        <div className="reference-breadcrumbs">API reference / Endpoints / {selected}</div>
        <div className="endpoint-heading">
          <span className={detail.method === "POST" ? "endpoint-method" : "endpoint-method get"}>
            {detail.method}
          </span>
          <code>{detail.path}</code>
        </div>
        <h1>{selected}</h1>
        <p className="endpoint-intro">{detail.description}</p>
        <div className="docs-note">
          <Icon name="shield" size={18} />
          <div>
            <strong>Safe to test in sandbox</strong>
            <span>This request uses simulated funds and will not move real money.</span>
          </div>
        </div>

        <section className="docs-section">
          <h2>Request body</h2>
          <p>Send a JSON object with the following parameters.</p>
          <div className="parameter-list">
            <div className="parameter-row">
              <div>
                <code>amount</code>
                <span className="required">required</span>
              </div>
              <div>
                <span className="parameter-type">integer</span>
                <p>
                  Amount to charge in the currency's smallest unit. For example, <code>2500</code>{" "}
                  charges $25.00.
                </p>
              </div>
            </div>
            <div className="parameter-row">
              <div>
                <code>currency</code>
                <span className="required">required</span>
              </div>
              <div>
                <span className="parameter-type">string</span>
                <p>
                  Three-letter ISO currency code. Currently supports <code>usd</code>,{" "}
                  <code>eur</code>, and <code>gbp</code>.
                </p>
              </div>
            </div>
            <div className="parameter-row">
              <div>
                <code>description</code>
                <span className="optional">optional</span>
              </div>
              <div>
                <span className="parameter-type">string</span>
                <p>A human-readable description shown in your dashboard and request logs.</p>
              </div>
            </div>
            <div className="parameter-row">
              <div>
                <code>customer</code>
                <span className="optional">optional</span>
              </div>
              <div>
                <span className="parameter-type">string</span>
                <p>The ID of an existing customer to associate with this payment.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="docs-section">
          <h2>Returns</h2>
          <p>
            Returns a Payment object when the request succeeds. The status indicates whether the
            payment has completed or needs further action.
          </p>
          <div className="return-row">
            <span className="status-code">201</span>
            <div>
              <strong>Payment created</strong>
              <small>The payment was accepted and created successfully.</small>
            </div>
          </div>
          <div className="return-row">
            <span className="status-code error">422</span>
            <div>
              <strong>Invalid request</strong>
              <small>One or more request parameters failed validation.</small>
            </div>
          </div>
        </section>
      </article>

      <aside className="request-console">
        <div className="console-header">
          <div className="language-tabs">
            {(Object.keys(referenceSnippets) as (keyof typeof snippets)[]).map((item) => (
              <button
                className={language === item ? "language active" : "language"}
                key={item}
                onClick={() => onLanguage(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <button className="icon-button code-copy" onClick={copyCode}>
            <Icon name={copied ? "check" : "copy"} size={15} />
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
        <pre className="console-code">
          <code>{referenceSnippets[language]}</code>
        </pre>
        <div className="console-actions">
          <div>
            <span className="env-dot" />
            Sandbox
          </div>
          <button className="run-button" onClick={runRequest} disabled={requestState === "loading"}>
            {requestState === "loading" ? (
              <span className="loading-spinner" />
            ) : (
              <Icon name="play" size={13} />
            )}
            {requestState === "loading" ? "Sending..." : "Try it"}
          </button>
        </div>
        <div className="console-response">
          <div className="console-response-heading">
            <span>Response</span>
            {requestState === "success" && (
              <strong>
                <i /> 201 Created <small>386 ms</small>
              </strong>
            )}
          </div>
          {requestState === "success" ? (
            <pre>
              <code>{`{
  "id": "pay_01HQ8K4V7F",
  "object": "payment",
  "amount": 2500,
  "currency": "usd",
  "status": "succeeded",
  "description": "Order #1842",
  "created_at": "2025-03-08T14:32:06Z"
}`}</code>
            </pre>
          ) : (
            <div className="response-empty">
              <Icon name="terminal" size={21} />
              <span>Run the request to see a live sandbox response.</span>
            </div>
          )}
        </div>
      </aside>
    </div>
  );
}

function CaseStudyPage({ onViewProduct }: { onViewProduct: () => void }) {
  const journey = [
    {
      number: "01",
      title: "Evaluate",
      emotion: "Skeptical",
      risk: "Unclear capabilities",
      solution: "Code-first product overview",
    },
    {
      number: "02",
      title: "Get access",
      emotion: "Cautious",
      risk: "Security anxiety",
      solution: "Sandbox-first scoped keys",
    },
    {
      number: "03",
      title: "First call",
      emotion: "Curious",
      risk: "Setup friction",
      solution: "Guided runnable request",
    },
    {
      number: "04",
      title: "Debug",
      emotion: "Frustrated",
      risk: "Opaque errors",
      solution: "Explain, fix, and retry",
    },
    {
      number: "05",
      title: "Integrate",
      emotion: "Focused",
      risk: "Webhook failures",
      solution: "Inspectable deliveries",
    },
    {
      number: "06",
      title: "Go live",
      emotion: "Uncertain",
      risk: "Production risk",
      solution: "Evidence-based checklist",
    },
  ];

  return (
    <article className="case-study-page">
      <section className="case-hero">
        <div className="case-hero-copy">
          <div className="case-meta">
            <span>Product design</span>
            <span>Developer experience</span>
            <span>2025</span>
          </div>
          <h1>Designing an API experience that gets developers to success in minutes.</h1>
          <p>
            Meridian is a payments and ledger platform for fintech teams. I redesigned the
            developer experience around one question: how might we help a skeptical engineer make
            a successful call—and understand what happened—without leaving the flow?
          </p>
          <button className="primary-button" onClick={onViewProduct}>
            Explore the product <Icon name="arrow" size={16} />
          </button>
        </div>
        <div className="case-hero-visual" aria-label="Meridian project summary">
          <div className="case-window">
            <div className="case-window-bar">
              <span />
              <span />
              <span />
              <small>api.meridian.dev</small>
            </div>
            <div className="case-window-body">
              <div className="case-mini-sidebar">
                <span className="selected" />
                <span />
                <span />
                <span />
              </div>
              <div className="case-mini-content">
                <small>QUICKSTART</small>
                <strong>Make your first call</strong>
                <span />
                <span />
                <button type="button">Run request</button>
              </div>
              <div className="case-mini-code">
                <span>POST /v1/payments</span>
                <code>
                  {"{"}
                  <br />
                  &nbsp; "amount": 2500,
                  <br />
                  &nbsp; "status": "succeeded"
                  <br />
                  {"}"}
                </code>
                <small>
                  <i /> 201 Created
                </small>
              </div>
            </div>
          </div>
          <div className="case-success-card">
            <span>
              <Icon name="check" size={15} />
            </span>
            <div>
              <strong>First call complete</strong>
              <small>Completed in under 5 minutes</small>
            </div>
          </div>
        </div>
      </section>

      <section className="case-facts">
        <div>
          <span>My role</span>
          <strong>Lead product designer</strong>
        </div>
        <div>
          <span>Scope</span>
          <strong>End-to-end developer journey</strong>
        </div>
        <div>
          <span>Audience</span>
          <strong>Backend engineers at fintech teams</strong>
        </div>
        <div>
          <span>Timeline</span>
          <strong>12 weeks, end to end</strong>
        </div>
        <div>
          <span>North-star metric</span>
          <strong>Time to first successful call</strong>
        </div>
      </section>

      <section className="case-section case-intro">
        <div className="case-section-label">01 / Context</div>
        <div className="case-section-content">
          <h2>A powerful API still fails if developers cannot trust the experience.</h2>
          <div className="case-two-column">
            <p>
              API evaluation is rarely linear. Engineers jump between documentation, credentials,
              code, logs, and troubleshooting while deciding whether a platform is credible enough
              to adopt. Every context switch adds friction and every vague error erodes trust.
            </p>
            <p>
              I focused on Priya, a time-poor backend engineer evaluating Meridian for a mid-size
              fintech. She does not need more marketing claims—she needs to see realistic code,
              understand the safety model, and prove the API works quickly.
            </p>
          </div>
          <blockquote>
            <span>The design challenge</span>
            How might we turn the first ten minutes of API evaluation into a clear sequence of
            small, confidence-building wins?
          </blockquote>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-label">02 / Principles</div>
        <div className="case-section-content">
          <h2>Four principles shaped every interaction.</h2>
          <div className="principles-grid">
            <div>
              <span>01</span>
              <Icon name="terminal" size={20} />
              <h3>Show, don't tell</h3>
              <p>Pair each API capability with runnable code and a realistic response.</p>
            </div>
            <div>
              <span>02</span>
              <Icon name="spark" size={20} />
              <h3>Teach through errors</h3>
              <p>Explain what happened, why it happened, and the exact next action.</p>
            </div>
            <div>
              <span>03</span>
              <Icon name="overview" size={20} />
              <h3>Reveal complexity slowly</h3>
              <p>Start with safe defaults and expose advanced controls in context.</p>
            </div>
            <div>
              <span>04</span>
              <Icon name="shield" size={20} />
              <h3>Make safety visible</h3>
              <p>Keep users in sandbox and clearly gate every production action.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section journey-section">
        <div className="case-section-label">03 / Journey</div>
        <div className="case-section-content">
          <h2>One connected path from evaluation to production.</h2>
          <p className="case-lede">
            I mapped the journey around developer emotion and likely drop-off points, then designed
            a specific confidence-building response for each stage.
          </p>
          <div className="journey-map">
            {journey.map((item) => (
              <div className="journey-step" key={item.number}>
                <div className="journey-topline">
                  <span>{item.number}</span>
                  <i />
                </div>
                <h3>{item.title}</h3>
                <dl>
                  <div>
                    <dt>Emotion</dt>
                    <dd>{item.emotion}</dd>
                  </div>
                  <div>
                    <dt>Drop-off risk</dt>
                    <dd>{item.risk}</dd>
                  </div>
                  <div>
                    <dt>Design response</dt>
                    <dd>{item.solution}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="case-section">
        <div className="case-section-label">04 / Key decisions</div>
        <div className="case-section-content">
          <h2>Trust is built through useful details, not decoration.</h2>
          <div className="decision-list">
            <div className="decision">
              <span className="decision-number">A</span>
              <div>
                <h3>Code and response live side by side</h3>
                <p>
                  Developers can change language, copy a request, and understand the response
                  without switching tools. The interface privileges working evidence over product
                  claims.
                </p>
              </div>
              <div className="decision-tag">Reduces context switching</div>
            </div>
            <div className="decision">
              <span className="decision-number">B</span>
              <div>
                <h3>Sandbox is a persistent system state</h3>
                <p>
                  Environment context stays visible in the global header. Production is an
                  intentional transition, not a setting that can be changed accidentally.
                </p>
              </div>
              <div className="decision-tag">Makes safety tangible</div>
            </div>
            <div className="decision">
              <span className="decision-number">C</span>
              <div>
                <h3>Progress connects the full journey</h3>
                <p>
                  A compact checklist turns a complex integration into achievable steps and keeps
                  the next best action visible throughout the portal.
                </p>
              </div>
              <div className="decision-tag">Supports forward momentum</div>
            </div>
          </div>
        </div>
      </section>

      <section className="case-section metrics-section">
        <div className="case-section-label">05 / Measurement</div>
        <div className="case-section-content">
          <h2>Success was defined before pixels were pushed.</h2>
          <p className="case-lede">
            The team aligned on three launch criteria and instrumented each critical step in the
            onboarding funnel. This kept design decisions tied to developer progress instead of
            page views or feature adoption.
          </p>
          <div className="metrics-grid">
            <div>
              <strong>&lt; 5 min</strong>
              <span>Launch target: median time to first successful API call</span>
            </div>
            <div>
              <strong>&gt; 80%</strong>
              <span>Launch target: unassisted quickstart completion</span>
            </div>
            <div>
              <strong>&lt; 2 min</strong>
              <span>Launch target: recovery time from a common integration error</span>
            </div>
          </div>
          <div className="case-next">
            <div>
              <span>Ongoing validation</span>
              <h3>Measure comprehension, not just task completion.</h3>
              <p>
                In addition to funnel data, moderated sessions evaluate whether engineers can
                explain environment safety, credential scope, and error recovery after completing
                the flow—signals that the experience builds durable confidence.
              </p>
            </div>
            <button className="primary-button" onClick={onViewProduct}>
              Explore Meridian <Icon name="arrow" size={16} />
            </button>
          </div>
        </div>
      </section>
    </article>
  );
}

export default function App() {
  const [active, setActive] = useState("Overview");
  const [language, setLanguage] = useState<keyof typeof snippets>("cURL");
  const [dark, setDark] = useState(false);
  const [production, setProduction] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (active === "Case Study") {
    return (
      <div className={dark ? "app dark portfolio-landing" : "app portfolio-landing"}>
        <header className="portfolio-header">
          <button className="brand" aria-label="Meridian case study">
            <span className="brand-mark">
              <span />
              <span />
              <span />
            </span>
            <span>meridian</span>
          </button>
          <div className="portfolio-label">
            <span>Case study</span>
            <i />
            <span>Developer experience</span>
          </div>
          <div className="portfolio-actions">
            <button
              className="icon-button theme-toggle"
              onClick={() => setDark(!dark)}
              aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
            >
              <Icon name={dark ? "sun" : "moon"} size={17} />
            </button>
            <button className="primary-button" onClick={() => setActive("Overview")}>
              View product <Icon name="arrow" size={15} />
            </button>
          </div>
        </header>
        <CaseStudyPage onViewProduct={() => setActive("Overview")} />
      </div>
    );
  }

  return (
    <div className={dark ? "app dark" : "app"}>
      <header className="topbar">
        <button className="brand" onClick={() => setActive("Overview")} aria-label="Meridian home">
          <span className="brand-mark">
            <span />
            <span />
            <span />
          </span>
          <span>meridian</span>
        </button>
        <button className="search-trigger" onClick={() => setSearchOpen(true)}>
          <Icon name="search" size={16} />
          <span>Search docs, endpoints, guides...</span>
          <kbd>⌘ K</kbd>
        </button>
        <div className="topbar-actions">
          <button
            className={production ? "environment production" : "environment"}
            onClick={() => setProduction(!production)}
          >
            <span className="env-dot" />
            {production ? "Production" : "Sandbox"}
            <Icon name="chevron" size={13} />
          </button>
          <button className="docs-link" onClick={() => setActive("Docs")}>
            Docs
          </button>
          <button
            className="icon-button theme-toggle"
            onClick={() => setDark(!dark)}
            aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
          >
            <Icon name={dark ? "sun" : "moon"} size={17} />
          </button>
          <button className="avatar" aria-label="Open profile menu">
            PN
          </button>
        </div>
      </header>

      <div className="shell">
        <aside className="sidebar">
          <nav aria-label="Main navigation">
            <div className="nav-label">Workspace</div>
            {navItems.map((item) => (
              <button
                key={item.label}
                className={active === item.label ? "nav-item active" : "nav-item"}
                onClick={() => setActive(item.label)}
              >
                <Icon name={item.icon} size={17} />
                <span>{item.label}</span>
                {item.label === "Go Live" && <span className="nav-count">3</span>}
              </button>
            ))}
          </nav>

          <div className="getting-started">
            <div className="tracker-top">
              <span>Getting started</span>
              <strong>1 of 6</strong>
            </div>
            <div className="progress-track">
              <span />
            </div>
            <button className="tracker-step complete">
              <span className="step-status">
                <Icon name="check" size={12} />
              </span>
              Explore Meridian
            </button>
            <button className="tracker-step" onClick={() => setActive("API Keys")}>
              <span className="step-status">2</span>
              Create an API key
            </button>
            <button className="tracker-step">
              <span className="step-status">3</span>
              Make your first call
            </button>
            <button className="tracker-more">3 more steps</button>
          </div>

          <div className="sidebar-footer">
            <span className="status-dot" />
            All systems operational
          </div>
        </aside>

        <main>
          {active === "Overview" ? (
            <div className="overview-page">
              <div className="welcome-row">
                <div>
                  <div className="eyebrow">Sandbox workspace</div>
                  <h1>Build financial products, faster.</h1>
                  <p>
                    One API for payments and ledgers—designed to get you from first request to
                    production with confidence.
                  </p>
                </div>
                <div className="welcome-meta">
                  <span>API version</span>
                  <button>
                    2025-03-01 <Icon name="chevron" size={13} />
                  </button>
                </div>
              </div>

              <section className="hero">
                <div className="hero-content">
                  <span className="hero-badge">
                    <Icon name="spark" size={14} /> Quickstart
                  </span>
                  <h2>Make your first API call in 5 minutes.</h2>
                  <p>
                    Create a sandbox payment with a guided request. No setup, no real money, no
                    surprises.
                  </p>
                  <div className="hero-actions">
                    <button className="primary-button">
                      <Icon name="play" size={15} />
                      Start quickstart
                    </button>
                    <button className="secondary-button" onClick={() => setActive("Docs")}>
                      Explore the API <Icon name="arrow" size={15} />
                    </button>
                  </div>
                  <div className="trust-line">
                    <span>
                      <Icon name="check" size={13} /> Free sandbox
                    </span>
                    <span>
                      <Icon name="check" size={13} /> No card required
                    </span>
                  </div>
                </div>
                <CodePanel language={language} onLanguage={setLanguage} />
              </section>

              <section className="section-block">
                <div className="section-heading">
                  <div>
                    <span className="section-kicker">Choose your path</span>
                    <h2>What are you building?</h2>
                  </div>
                  <button className="text-button">
                    View all guides <Icon name="arrow" size={15} />
                  </button>
                </div>
                <div className="path-grid">
                  <button className="path-card">
                    <span className="path-icon payments">
                      <Icon name="usage" size={20} />
                    </span>
                    <span className="path-copy">
                      <strong>Accept payments</strong>
                      <small>Move money with a single API call.</small>
                    </span>
                    <Icon name="chevron" size={17} />
                  </button>
                  <button className="path-card">
                    <span className="path-icon marketplace">
                      <Icon name="overview" size={20} />
                    </span>
                    <span className="path-copy">
                      <strong>Build a marketplace</strong>
                      <small>Split and route funds to sellers.</small>
                    </span>
                    <Icon name="chevron" size={17} />
                  </button>
                  <button className="path-card">
                    <span className="path-icon ledger">
                      <Icon name="logs" size={20} />
                    </span>
                    <span className="path-copy">
                      <strong>Launch a wallet</strong>
                      <small>Track balances with a double-entry ledger.</small>
                    </span>
                    <Icon name="chevron" size={17} />
                  </button>
                </div>
              </section>

              <section className="bottom-grid">
                <div className="resource-panel">
                  <div className="section-heading compact">
                    <div>
                      <span className="section-kicker">Resources</span>
                      <h2>Built for your stack</h2>
                    </div>
                  </div>
                  <div className="resource-list">
                    <button>
                      <span className="resource-icon">&lt;/&gt;</span>
                      <span>
                        <strong>SDKs & libraries</strong>
                        <small>Node, Python, Go, Ruby, and more</small>
                      </span>
                      <Icon name="chevron" size={16} />
                    </button>
                    <button>
                      <span className="resource-icon">
                        <Icon name="terminal" size={18} />
                      </span>
                      <span>
                        <strong>API reference</strong>
                        <small>Endpoints, schemas, and examples</small>
                      </span>
                      <Icon name="chevron" size={16} />
                    </button>
                  </div>
                </div>
                <div className="security-panel">
                  <div className="security-icon">
                    <Icon name="shield" size={23} />
                  </div>
                  <div>
                    <span className="section-kicker">Safe by default</span>
                    <h2>Nothing here moves real money.</h2>
                    <p>
                      Your workspace is in sandbox mode. Test every flow with realistic data before
                      requesting production access.
                    </p>
                    <button className="text-button">How environments work</button>
                  </div>
                </div>
              </section>
            </div>
          ) : active === "Docs" ? (
            <DocsPage language={language} onLanguage={setLanguage} />
          ) : (
            <PlaceholderPage title={active} />
          )}
        </main>
      </div>

      {searchOpen && (
        <div className="modal-backdrop" onMouseDown={() => setSearchOpen(false)}>
          <div className="search-modal" onMouseDown={(event) => event.stopPropagation()}>
            <div className="search-input">
              <Icon name="search" size={19} />
              <input autoFocus placeholder="Search endpoints, guides, and resources..." />
              <kbd>ESC</kbd>
            </div>
            <div className="search-body">
              <span className="search-label">Suggested</span>
              {["Create a payment", "Authentication", "Handle webhook events"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => {
                    setSearchOpen(false);
                    setActive("Docs");
                  }}
                >
                  <span className={index === 0 ? "method post" : "search-result-icon"}>
                    {index === 0 ? "POST" : <Icon name={index === 1 ? "key" : "webhook"} size={16} />}
                  </span>
                  <span>
                    <strong>{item}</strong>
                    <small>{index === 0 ? "/v1/payments" : index === 1 ? "Guide" : "Guide"}</small>
                  </span>
                  <Icon name="arrow" size={15} />
                </button>
              ))}
            </div>
            <div className="search-footer">
              <span>
                <kbd>↑</kbd> <kbd>↓</kbd> to navigate
              </span>
              <span>
                <kbd>↵</kbd> to open
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
