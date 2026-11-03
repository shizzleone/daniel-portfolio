import { useEffect, useMemo, useState, type FormEvent, type ReactNode } from "react"
import {
  allCaseStudies,
  experienceTimeline,
  leadershipPillars,
  toolStack,
  type CaseStudyProject,
} from "./data/portfolioData"
import { userFlows } from "./data/userFlows"
import { Icon } from "./components/Icon"
import { JourneyMap } from "./components/JourneyMap"
import { UserFlowDiagram } from "./components/UserFlowDiagram"
import { Wireframe } from "./components/Wireframe"
import { Sparkle, SparkLabel, Squiggle, Typed } from "./components/Decor"

const RESUME = "https://danieljohnson.bio/assets/daniel-johnson-resume.pdf"
const EMAIL = "folaseyi@gmail.com"
const PORTFOLIO_PASSWORD = "Daniel2026"
const LINKEDIN = "https://www.linkedin.com/in/dannyshizzle"
const PORTRAIT = "/daniel-johnson-cutout.webp"
const ABOUT_PORTRAIT = "/daniel-johnson-about.webp"
const clean = (s: string) => s.replace(/`/g, "")
const pad = (n: number) => String(n).padStart(2, "0")

const tintById: Record<string, string> = {
  rapidbi: "blue",
  shiftsnap: "green",
  "navflow-ai": "lilac",
  meridian: "sand",
}
const tintByCategory: Record<CaseStudyProject["portfolioCategory"], string> = {
  "Developer tools": "blue",
  Mobile: "green",
  "Design systems": "lilac",
  "Product & UX": "sand",
  "Content & web": "rose",
}
const tint = (p: CaseStudyProject) =>
  `tint-${tintById[p.id] ?? tintByCategory[p.portfolioCategory]}`

type Route = { name: "home" } | { name: "about" } | {
  name: "project"
  id: string
}

function parseHash(): Route {
  const h = window.location.hash.replace(/^#\/?/, "")
  if (h === "about") return { name: "about" }
  const m = h.match(/^work\/([\w-]+)/)
  if (m && allCaseStudies.some((p) => p.id === m[1]))
    return { name: "project", id: m[1] }
  return { name: "home" }
}

function readTheme(): "light" | "dark" {
  try {
    return localStorage.getItem("dj-theme") === "dark" ? "dark" : "light"
  } catch {
    return "light"
  }
}

const scrollToId = (id: string) =>
  document
    .getElementById(id)
    ?.scrollIntoView({ behavior: "smooth", block: "start" })

function hasPortfolioAccess() {
  try {
    return sessionStorage.getItem("daniel-projects-unlocked") === "true"
  } catch {
    return false
  }
}

function PortfolioGate({ onUnlock }: { onUnlock: () => void }) {
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (password === PORTFOLIO_PASSWORD) {
      try {
        sessionStorage.setItem("daniel-projects-unlocked", "true")
      } catch {
        /* access can still continue for this session */
      }
      onUnlock()
      return
    }
    setError("That password doesn’t match. Please try again.")
    setPassword("")
  }
  return (
    <section className="portfolio-gate shell" aria-labelledby="gate-title">
      <Icon name="lock" size={28} />
      <span className="eyebrow">Private work</span>
      <h2 id="gate-title">The work is available by request.</h2>
      <p>Enter the portfolio password to view case studies and prototypes.</p>
      <form onSubmit={submit}>
        <label htmlFor="portfolio-password">Portfolio password</label>
        <div className="gate-row">
          <input
            id="portfolio-password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            aria-invalid={Boolean(error)}
          />
          <button className="btn btn-mint" type="submit">
            Unlock work <Icon name="arrow-up-right" size={15} />
          </button>
        </div>
        {error && <p className="gate-error" role="alert">{error}</p>}
      </form>
      <a className="text-link" href={`mailto:${EMAIL}?subject=Portfolio%20access`}>
        Request access <Icon name="mail" size={15} />
      </a>
    </section>
  )
}

export default function App() {
  const [route, setRoute] = useState<Route>(parseHash)
  const [theme, setTheme] = useState<"light" | "dark">(readTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const [portfolioAccess, setPortfolioAccess] = useState(hasPortfolioAccess)
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null)

  useEffect(() => {
    const onHash = () => setRoute(parseHash())
    window.addEventListener("hashchange", onHash)
    return () => window.removeEventListener("hashchange", onHash)
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem("dj-theme", theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false)
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [menuOpen])

  const routeKey = route.name === "project" ? route.id : route.name
  useEffect(() => {
    setMenuOpen(false)
    if (pendingAnchor) {
      requestAnimationFrame(() => {
        scrollToId(pendingAnchor)
        setPendingAnchor(null)
      })
      return
    }
    window.scrollTo(0, 0)
    document.getElementById("page-title")?.focus({ preventScroll: true })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeKey])

  const goHomeSection = (id: string) => {
    setMenuOpen(false)
    if (route.name === "home") scrollToId(id)
    else {
      setPendingAnchor(id)
      window.location.hash = "/"
    }
  }

  const project =
    route.name === "project"
      ? allCaseStudies.find((p) => p.id === route.id)
      : undefined

  const navItems = (
    <>
      <button type="button" onClick={() => goHomeSection("work")}>
        Work
      </button>
      <a
        href="#/about"
        aria-current={route.name === "about" ? "page" : undefined}
      >
        About
      </a>
      <a href={RESUME} target="_blank" rel="noreferrer">
        Résumé
      </a>
    </>
  )

  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className="topbar">
        <div className="topbar-inner">
          <a href="#/" className="brand" aria-label="Daniel Johnson, home">
            <span className="brand-mark">DJ</span>
            <span className="brand-name">Daniel Johnson</span>
          </a>
          <nav aria-label="Main" className="topnav">
            {navItems}
          </nav>
          <div className="topbar-end">
            <button
              type="button"
              className="icon-btn"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label={`Switch to ${
                theme === "light" ? "dark" : "light"
              } theme`}
            >
              <Icon name={theme === "light" ? "moon" : "sun"} />
            </button>
            <button
              type="button"
              className="btn btn-sm btn-solid talk"
              onClick={() => scrollToId("contact")}
            >
              Hire me
              <Icon name="arrow-up-right" size={15} />
            </button>
            <button
              type="button"
              className="icon-btn menu-btn"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Icon name={menuOpen ? "close" : "menu"} />
            </button>
          </div>
        </div>
        {menuOpen && (
          <nav id="mobile-menu" aria-label="Mobile" className="mobile-menu">
            {navItems}
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false)
                scrollToId("contact")
              }}
            >
              Contact
            </button>
          </nav>
        )}
      </header>

      <main id="main">
        {project ? (
          portfolioAccess ? <ProjectPage key={project.id} project={project} /> : <PortfolioGate onUnlock={() => setPortfolioAccess(true)} />
        ) : route.name === "about" ? (
          <About />
        ) : (
          <Home portfolioAccess={portfolioAccess} onUnlock={() => setPortfolioAccess(true)} />
        )}
      </main>

      <section
        id="contact"
        className="shell contact-wrap"
        aria-labelledby="contact-h"
      >
        <div className="contact">
          <div>
            <SparkLabel dark>Available for design leadership roles</SparkLabel>
            <h2 id="contact-h">
              Have a complex product that needs to feel simple?
            </h2>
            <p className="contact-sub">
              I partner with product and engineering leaders on AI workflows,
              developer platforms and design systems, from first framing to
              production.
            </p>
          </div>
          <div className="contact-actions">
            <a className="contact-email" href={`mailto:${EMAIL}`}>
              <span>Email</span>
              {EMAIL}
              <Icon name="arrow-up-right" size={22} />
            </a>
            <div className="contact-links">
              <a
                className="btn btn-mint"
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
                <Icon name="arrow-up-right" size={14} />
              </a>
              <a
                className="btn btn-glass"
                href={RESUME}
                target="_blank"
                rel="noreferrer"
              >
                Résumé PDF
                <Icon name="arrow-up-right" size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="shell footer">
        <span>© {new Date().getFullYear()} Daniel Johnson</span>
        <span>Designed and built in Dallas–Fort Worth</span>
      </footer>
    </>
  )
}

/* ---------------- Home ---------------- */

const categories = [
  "All",
  "Developer tools",
  "Mobile",
  "Design systems",
  "Product & UX",
  "Content & web",
] as const

const ticker = [
  "Design Leadership",
  "AI Workflows",
  "Developer Platforms",
  "Design Systems",
  "Mobile Products",
  "Enterprise UX",
]

const roles = [
  "Lead Designer",
  "Product Strategist",
  "UX Operations Lead",
  "Systems Thinker",
]

function SectionTitle({
  label,
  children,
  dark,
  center,
  id,
}: {
  label: string
  children: ReactNode
  dark?: boolean
  center?: boolean
  id: string
}) {
  return (
    <div className={`sec-title ${center ? "is-center" : ""}`}>
      <SparkLabel dark={dark}>{label}</SparkLabel>
      <h2 id={id}>{children}</h2>
    </div>
  )
}

function Home({ portfolioAccess, onUnlock }: { portfolioAccess: boolean; onUnlock: () => void }) {
  const featured = allCaseStudies.filter((p) => p.featured)
  const [filter, setFilter] = useState<typeof categories[number]>("All")
  const list = useMemo(
    () =>
      allCaseStudies.filter(
        (p) => filter === "All" || p.portfolioCategory === filter,
      ),
    [filter],
  )

  return (
    <>
      <section className="hx" aria-labelledby="page-title">
        <span className="blob blob-a" aria-hidden="true" />
        <span className="blob blob-b" aria-hidden="true" />
        <span className="blob blob-c" aria-hidden="true" />
        <div className="shell hx-grid">
          <div className="hx-visual">
            <span className="hx-shape hx-shape-a" aria-hidden="true" />
            <span className="hx-shape hx-shape-b" aria-hidden="true" />
            <span className="hx-ring" aria-hidden="true" />
            <img
              src={PORTRAIT}
              alt="Daniel Johnson"
              width={1000}
              height={1143}
            />
            <div className="hx-card hx-card-a">
              <strong>15+</strong>
              <span>Years designing products</span>
            </div>
            <div className="hx-card hx-card-b">
              <small>Currently</small>
              <strong>VP, UX Operations &amp; Innovation</strong>
              <span>JPMorgan Chase</span>
            </div>
          </div>
          <div className="hx-copy">
            <Squiggle className="hx-squiggle" />
            <span className="hx-star" aria-hidden="true">
              <Sparkle size={44} />
              <Sparkle size={24} />
            </span>
            <SparkLabel>Hey there!</SparkLabel>
            <h1 id="page-title" tabIndex={-1}>
              I&apos;m Daniel Johnson
              <span className="sr-only">, {roles[0]}</span>
              <strong>
                <Typed words={roles} />
              </strong>
            </h1>
            <p className="hx-lede">
              I design complex products so they feel effortless: AI workflows,
              developer platforms and enterprise data tools, built hand in hand
              with researchers and engineers.
            </p>
            <div className="hx-actions">
              <button
                type="button"
                className="btn btn-mint"
                onClick={() => scrollToId("featured")}
              >
                View my work
                <Icon name="arrow-up-right" />
              </button>
              <a
                className="ring-link"
                href={RESUME}
                target="_blank"
                rel="noreferrer"
              >
                <span className="ring-icon">
                  <Icon name="arrow-down" />
                </span>
                Download résumé
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="ticker" aria-label="Focus areas">
        <div className="ticker-track">
          {[...ticker, ...ticker, ...ticker].map((t, i) => (
            <span key={i} aria-hidden={i >= ticker.length}>
              <Sparkle size={30} />
              {t}
            </span>
          ))}
        </div>
      </div>

      <section className="shell intro" aria-labelledby="intro-h">
        <div className="intro-copy">
          <SectionTitle label="About me" id="intro-h">
            Solving complex problems with <em>intuitive design</em>
          </SectionTitle>
          <p className="intro-text">
            I lead design for products where the stakes are high and the data is
            dense. I map states before screens, work alongside UX researchers to
            ground decisions in real behaviour, and hand engineering contracts
            rather than pictures.
          </p>
          <div className="intro-actions">
            <a className="btn btn-mint" href="#/about">
              More about me
              <Icon name="arrow-up-right" />
            </a>
            <a className="contact-chip" href={`mailto:${EMAIL}`}>
              <span className="ring-icon">
                <Icon name="mail" />
              </span>
              <span>
                <small>Email</small>
                {EMAIL}
              </span>
            </a>
          </div>
        </div>
        <div className="intro-visual">
          <span className="intro-shape" aria-hidden="true" />
          <Sparkle size={56} />
          <figure className="intro-photo">
            <img src={ABOUT_PORTRAIT} alt="Daniel Johnson in a navy suit" />
          </figure>
          <div className="intro-card intro-card-b">
            <span className="intro-dots" aria-hidden="true">
              <i>UX</i>
              <i>ENG</i>
              <i>PM</i>
            </span>
            <span>Built with researchers, product &amp; engineering</span>
          </div>
        </div>
      </section>

      <section className="dark-band" aria-labelledby="services-h">
        <div className="shell">
          <SectionTitle label="What I do" id="services-h" dark center>
            How I <em>lead</em> design
          </SectionTitle>
          <ol className="services">
            {leadershipPillars.map((p) => (
              <li key={p.number}>
                <span className="services-no">{p.number}</span>
                <h3>{p.title}</h3>
                <p>{p.summary}</p>
                <ul>
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {!portfolioAccess ? (
        <PortfolioGate onUnlock={onUnlock} />
      ) : (
      <section
        id="featured"
        className="shell block"
        aria-labelledby="featured-h"
      >
        <div className="block-row">
          <SectionTitle label="Projects" id="featured-h">
            My featured <em>portfolio</em>
          </SectionTitle>
          <button
            type="button"
            className="btn btn-mint"
            onClick={() => scrollToId("work")}
          >
            All projects
            <Icon name="arrow-up-right" />
          </button>
        </div>
        <ul className="fp-grid">
          {featured.map((p, i) => (
            <li key={p.id}>
              <a href={`#/work/${p.id}`} className="fp">
                <div className={`fp-media ${tint(p)}`}>
                  <img
                    src={p.heroImage}
                    alt=""
                    loading={i > 1 ? "lazy" : undefined}
                  />
                </div>
                <div className="fp-meta">
                  <div>
                    <span className="fp-cat">{p.category}</span>
                    <h3>{p.name}</h3>
                    <p>{p.summary}</p>
                  </div>
                  <span className="circle-arrow" aria-hidden="true">
                    <Icon name="arrow-up-right" size={18} />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>
      )}

      {portfolioAccess && <section id="work" className="shell block" aria-labelledby="work-h">
        <div className="block-row">
          <SectionTitle label="Archive" id="work-h">
            Every <em>project</em>, one place
          </SectionTitle>
          <div className="filters" role="group" aria-label="Filter projects">
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                className="chip"
                aria-pressed={filter === c}
                onClick={() => setFilter(c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
        <ul className="cards">
          {list.map((p) => (
            <li key={p.id}>
              <a href={`#/work/${p.id}`} className="card">
                <div className={`card-media ${tint(p)}`}>
                  <img src={p.heroImage} alt="" loading="lazy" />
                </div>
                <div className="card-body">
                  <div>
                    <h3>{p.name}</h3>
                    <p>{p.category}</p>
                  </div>
                  <span className="circle-arrow is-sm" aria-hidden="true">
                    <Icon name="arrow-up-right" size={15} />
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </section>}

      {portfolioAccess && <section className="dark-band" aria-labelledby="exp-h">
        <div className="shell">
          <SectionTitle label="My experience" id="exp-h" dark center>
            My work <em>experience</em>
          </SectionTitle>
          <ol className="exp-rows">
            {experienceTimeline.map((e) => (
              <li key={e.period + e.company}>
                <span className="exp-period">{e.period}</span>
                <strong>{e.role}</strong>
                <span className="exp-co">{e.company}</span>
              </li>
            ))}
          </ol>
          <ul className="tool-grid" aria-label="Tools">
            {toolStack.map((t) => (
              <li key={t.name}>
                <strong>{t.name}</strong>
                <span>{t.category}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>}
    </>
  )
}

/* ---------------- Project ---------------- */

function Section({
  id,
  n,
  label,
  title,
  intro,
  children,
}: {
  id: string
  n: number
  label: string
  title: string
  intro?: string
  children?: ReactNode
}) {
  return (
    <section id={id} className="cs-section" aria-labelledby={`${id}-h`}>
      <div className="cs-sec-head">
        <div>
          <p className="eyebrow">
            {pad(n)} · {label}
          </p>
          <h2 id={`${id}-h`}>{title}</h2>
        </div>
        {intro && <p className="prose">{intro}</p>}
      </div>
      {children}
    </section>
  )
}

function ProjectPage({ project }: { project: CaseStudyProject }) {
  const flow = userFlows[project.id]
  const sections: [string, string][] = [
    ["overview", "Overview"],
    ["problem", "Problem"],
    ["persona", "Persona"],
    ["discovery", "Discovery"],
    ...(flow ? [["flow", "User flow"]] as [string, string][] : []),
    ["journey", "Journey"],
    ["wireframes", "Wireframes"],
    ["engineering", "Engineering"],
    ["decisions", "Decisions"],
    ["outcomes", "Outcomes"],
  ]
  const num = (id: string) => sections.findIndex(([s]) => s === id) + 1
  const [active, setActive] = useState("overview")

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" },
    )
    sections.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.id])

  useEffect(() => {
    document
      .getElementById(`tab-${active}`)
      ?.scrollIntoView({ block: "nearest", inline: "center" })
  }, [active])

  const idx = allCaseStudies.findIndex((p) => p.id === project.id)
  const next = allCaseStudies[(idx + 1) % allCaseStudies.length]
  const noteColors = {
    amber: "n-amber",
    emerald: "n-green",
    sky: "n-blue",
    rose: "n-rose",
    violet: "n-violet",
    orange: "n-orange",
  }

  return (
    <article>
      <header className="shell cs-hero-wrap">
        <div className={`cs-hero ${tint(project)}`}>
          <div className="cs-hero-top">
            <a href="#/" className="back">
              <Icon name="arrow-left" size={15} />
              All work
            </a>
            <span className="cs-index">
              {project.index} / {pad(allCaseStudies.length)}
            </span>
          </div>
          <div className="cs-hero-copy">
            <p className="eyebrow">{project.category}</p>
            <h1 id="page-title" tabIndex={-1}>
              {project.name}
            </h1>
            <p className="cs-summary">{project.summary}</p>
          </div>
          <dl className="cs-meta">
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Team</dt>
              <dd>{project.team}</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>{project.scope}</dd>
            </div>
            <div>
              <dt>Platform</dt>
              <dd>{project.platform}</dd>
            </div>
            <div>
              <dt>Prototype</dt>
              <dd>
                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="link"
                  >
                    Open prototype
                    <Icon name="arrow-up-right" size={13} />
                  </a>
                ) : (
                  "Available on request"
                )}
              </dd>
            </div>
          </dl>
          <figure className="cs-hero-media">
            <img
              src={project.heroImage}
              alt={`${project.name} product interface`}
            />
          </figure>
        </div>
      </header>

      <nav className="cs-tabs" aria-label="Case study sections">
        <ol>
          {sections.map(([id, label]) => (
            <li key={id}>
              <button
                id={`tab-${id}`}
                type="button"
                aria-current={active === id ? "true" : undefined}
                onClick={() => scrollToId(id)}
              >
                {label}
              </button>
            </li>
          ))}
        </ol>
      </nav>

      <div className="shell cs-body">
        <Section
          id="overview"
          n={num("overview")}
          label="Overview"
          title={project.mandateTitle}
          intro={project.mandateBody}
        >
          <div className="tiles tiles-3">
            {project.ownershipPillars.map(([t, d], i) => (
              <div key={t} className="tile">
                <span className="tile-no">{pad(i + 1)}</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="problem"
          n={num("problem")}
          label="Problem"
          title="The user and business friction."
        >
          <div className="painpoint-grid">
            {project.journeyFlow.slice(0, 3).map((node) => (
              <article key={node.step} className="painpoint-card">
                <span className="tile-no">{node.step}</span>
                <h3>{node.stage}</h3>
                <p>{node.frictionEliminated}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="persona"
          n={num("persona")}
          label="Persona"
          title="Who the experience is designed to support."
        >
          <div className="persona-card">
            <div>
              <span className="eyebrow">Designed for</span>
              <h3>{(project.journeyFlow[0]?.actor ?? project.role).replace(/^#+\s*/, '')}</h3>
            </div>
            <p>{project.journeyFlow[0]?.userGoal ?? project.discoverySummary}</p>
          </div>
        </Section>

        <Section
          id="discovery"
          n={num("discovery")}
          label="Discovery"
          title="Understanding the work before shaping it."
          intro={project.discoverySummary}
        >
          <div className="tiles tiles-3">
            {project.discoveryMethods.map(([t, d]) => (
              <div key={t} className="tile tile-plain">
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
          <div className="board">
            <div className="board-bar">
              <span>
                <i aria-hidden="true" />
                FigJam · Research synthesis
              </span>
              <span>{project.figmaNotes.length} notes</span>
            </div>
            <ul className="notes">
              {project.figmaNotes.map((n, i) => (
                <li key={i} className={`note ${noteColors[n.tone]}`}>
                  <small>{n.tag}</small>
                  <p>{n.text}</p>
                  <span className="note-foot">
                    <i aria-hidden="true">{i % 2 ? "UR" : "DJ"}</i>
                    {i % 2 ? "UX Research" : "Daniel Johnson"}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <ol className="principles">
            {project.principles.map(([t, d], i) => (
              <li key={t}>
                <span>Principle {pad(i + 1)}</span>
                <strong>{t}</strong>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </Section>

        {flow && (
          <Section
            id="flow"
            n={num("flow")}
            label="User flow"
            title={flow.title}
            intro={flow.summary}
          >
            <UserFlowDiagram flow={flow} id={project.id} />
          </Section>
        )}

        <Section
          id="journey"
          n={num("journey")}
          label="Journey map"
          title="From first signal to shared outcome."
          intro={project.journeySummary}
        >
          <JourneyMap stages={project.journeyFlow} />
        </Section>

        <Section
          id="wireframes"
          n={num("wireframes")}
          label="Wireframes"
          title="Structure agreed before styling."
          intro={project.architecturalPivot.summary}
        >
          <div className="wf-grid">
            {project.wireframes.map((w, i) => (
              <Wireframe key={w.id} spec={w} n={i + 1} />
            ))}
          </div>
          <div className="pivot">
            <div>
              <small>Before</small>
              <p>{project.architecturalPivot.before}</p>
            </div>
            <span className="pivot-arrow" aria-hidden="true">
              <Icon name="arrow-right" />
            </span>
            <div className="pivot-after">
              <small>After</small>
              <p>{project.architecturalPivot.after}</p>
            </div>
          </div>
        </Section>

        <Section
          id="engineering"
          n={num("engineering")}
          label="Engineering"
          title="Designed alongside engineering."
          intro={project.engineeringSummary}
        >
          <ol className="tiles tiles-3">
            {project.collabTracks.map((t) => (
              <li key={t.phase} className="tile">
                <span className="tile-no">{t.phase}</span>
                <h3>{t.title}</h3>
                <p>{clean(t.detail)}</p>
                <span className="tile-foot">{t.deliverable}</span>
              </li>
            ))}
          </ol>
          <div className="bridge">
            <div>
              <p className="eyebrow">Figma</p>
              <h3>{project.contractBridge.figmaTitle}</h3>
              <dl>
                {project.contractBridge.figmaSpecs.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>{clean(v)}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bridge-code">
              <p className="eyebrow">Code</p>
              <h3>{project.contractBridge.codeTitle}</h3>
              <dl>
                {project.contractBridge.codeSpecs.map(([k, v]) => (
                  <div key={k}>
                    <dt>{k}</dt>
                    <dd>
                      <code>{clean(v)}</code>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Section>

        <Section
          id="decisions"
          n={num("decisions")}
          label="Decisions"
          title="The decisions that mattered."
        >
          <ol className="decisions">
            {project.decisions.map((d, i) => (
              <li key={d.title}>
                <div className="decision-copy">
                  <span className="tile-no">
                    {pad(i + 1)} · {d.badge}
                  </span>
                  <h3>{d.title}</h3>
                  <p>{d.body}</p>
                </div>
                {d.image && d.image !== project.heroImage && (
                  <figure className="decision-figure">
                    <img src={d.image} alt={d.title} loading="lazy" />
                  </figure>
                )}
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="outcomes"
          n={num("outcomes")}
          label="Outcomes"
          title="What shipped."
        >
          <div className="outcomes">
            {project.outcomes.map(([k, v, d]) => (
              <div key={k} className="outcome">
                <span className="tile-no">{k}</span>
                <strong>{d}</strong>
                <p>{v}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      <div className="shell">
        <a href={`#/work/${next.id}`} className={`next ${tint(next)}`}>
          <div>
            <p className="eyebrow">Next project</p>
            <span className="next-title">{next.name}</span>
            <span className="next-sum">{next.summary}</span>
          </div>
          <span className="next-media">
            <img src={next.heroImage} alt="" loading="lazy" />
          </span>
        </a>
      </div>
    </article>
  )
}

/* ---------------- About ---------------- */

function About() {
  return (
    <>
      <section className="shell hero-wrap">
        <div className="stage stage-about">
          <div className="stage-copy">
            <p className="eyebrow eyebrow-dark">
              <i aria-hidden="true" />
              About
            </p>
            <h1 id="page-title" tabIndex={-1}>
              Daniel Johnson, <em>design lead.</em>
            </h1>
            <p className="stage-lede">
              I make dense, high-stakes software understandable. At JPMorgan
              Chase I lead UX operations and AI-enabled design workflows.
              Independently, I partner with founders on developer tools, SaaS
              platforms and design systems.
            </p>
            <p className="stage-lede stage-lede-muted">
              I work closest to the seam between design and engineering: mapping
              states before screens, prototyping in React when a static frame
              can&apos;t answer the question, and handing off contracts rather
              than pictures.
            </p>
            <div className="stage-actions">
              <a
                className="btn btn-light"
                href={RESUME}
                target="_blank"
                rel="noreferrer"
              >
                Download résumé
                <Icon name="arrow-up-right" />
              </a>
              <a
                className="btn btn-glass"
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>
          </div>
          <figure className="about-photo">
            <img src={ABOUT_PORTRAIT} alt="Portrait of Daniel Johnson" />
          </figure>
        </div>
      </section>

      <section className="shell block" aria-labelledby="exp-h">
        <div className="block-head">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 id="exp-h">
              Fifteen years across banking, SaaS and platforms.
            </h2>
          </div>
        </div>
        <ol className="timeline">
          {experienceTimeline.map((e) => (
            <li key={e.period + e.company}>
              <span className="timeline-period">{e.period}</span>
              <div>
                <strong>{e.role}</strong>
                <span className="timeline-co">{e.company}</span>
              </div>
              <p>{e.focus}</p>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}
