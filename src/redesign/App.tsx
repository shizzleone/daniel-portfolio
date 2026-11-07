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
import { Wireframe, WireframeFrame } from "./components/Wireframe"
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
  motive: "sand",
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

function PortfolioGate({ onUnlock, onClose }: { onUnlock: () => void; onClose?: () => void }) {
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
      {onClose && <button className="gate-close icon-btn" type="button" onClick={onClose} aria-label="Close password dialog"><Icon name="close" /></button>}
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

function CommandPalette({
  open,
  onClose,
  portfolioAccess,
  onRequestUnlock,
  theme,
  onToggleTheme,
}: {
  open: boolean
  onClose: () => void
  portfolioAccess: boolean
  onRequestUnlock: () => void
  theme: "light" | "dark"
  onToggleTheme: () => void
}) {
  const [query, setQuery] = useState("")
  const [copiedEmail, setCopiedEmail] = useState(false)

  useEffect(() => {
    if (open) {
      setQuery("")
      setCopiedEmail(false)
    }
  }, [open])

  if (!open) return null

  const q = query.trim().toLowerCase()
  const matchedProjects = allCaseStudies.filter(
    (p) =>
      !q ||
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.summary.toLowerCase().includes(q) ||
      p.platform.toLowerCase().includes(q),
  )
  const livePrototypes = matchedProjects.filter((p) => Boolean(p.liveUrl))

  const goProject = (id: string) => {
    onClose()
    if (!portfolioAccess) {
      onRequestUnlock()
      return
    }
    window.location.hash = `/work/${id}`
  }

  const copyEmail = () => {
    navigator.clipboard?.writeText(EMAIL)
    setCopiedEmail(true)
    setTimeout(() => setCopiedEmail(false), 1800)
  }

  return (
    <div
      className="cmd-backdrop"
      role="dialog"
      aria-modal="true"
      aria-label="Command palette"
      onClick={onClose}
    >
      <div className="cmd-modal" onClick={(e) => e.stopPropagation()}>
        <div className="cmd-input-row">
          <Icon name="search" size={17} />
          <input
            type="search"
            autoFocus
            placeholder="Jump to case study, live prototype, design system, or action…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" className="cmd-esc" onClick={onClose}>
            ESC
          </button>
        </div>

        <div className="cmd-body">
          {!q && (
            <div className="cmd-group">
              <span className="cmd-group-label">Quick Actions</span>
              <div className="cmd-actions-grid">
                <button type="button" className="cmd-action-btn" onClick={copyEmail}>
                  <Icon name={copiedEmail ? "check" : "copy"} size={14} />
                  <span>{copiedEmail ? "Copied folaseyi@gmail.com!" : "Copy Email Address"}</span>
                </button>
                <a
                  href={RESUME}
                  target="_blank"
                  rel="noreferrer"
                  className="cmd-action-btn"
                  onClick={onClose}
                >
                  <Icon name="download" size={14} />
                  <span>Download Résumé PDF</span>
                </a>
                <button
                  type="button"
                  className="cmd-action-btn"
                  onClick={() => {
                    onToggleTheme()
                    onClose()
                  }}
                >
                  <Icon name={theme === "light" ? "moon" : "sun"} size={14} />
                  <span>Switch to {theme === "light" ? "Dark" : "Light"} Mode</span>
                </button>
              </div>
            </div>
          )}

          {livePrototypes.length > 0 && (
            <div className="cmd-group">
              <span className="cmd-group-label">
                Interactive Live Prototypes ({livePrototypes.length})
              </span>
              <ul className="cmd-list">
                {livePrototypes.slice(0, 5).map((p) => (
                  <li key={`proto-${p.id}`}>
                    <button
                      type="button"
                      className="cmd-item"
                      onClick={() => goProject(p.id)}
                    >
                      <div className="cmd-item-main">
                        <span className="cmd-live-dot" aria-hidden="true" />
                        <strong>{p.name}</strong>
                        <span className="cmd-item-cat">{p.platform}</span>
                      </div>
                      <span className="cmd-item-tag">Interactive Sandbox ↗</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="cmd-group">
            <span className="cmd-group-label">
              Case Studies ({matchedProjects.length})
            </span>
            <ul className="cmd-list">
              {matchedProjects.map((p) => (
                <li key={p.id}>
                  <button
                    type="button"
                    className="cmd-item"
                    onClick={() => goProject(p.id)}
                  >
                    <div className="cmd-item-main">
                      <span className="cmd-item-idx">{p.index}</span>
                      <strong>{p.name}</strong>
                      <span className="cmd-item-cat">{p.category}</span>
                    </div>
                    <span className="cmd-item-metric">
                      {p.outcomes?.[0]?.[2] ?? "View case study →"}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="cmd-foot">
          <span>
            <kbd>⌘K</kbd> or <kbd>/</kbd> to open
          </span>
          <span>
            <kbd>←</kbd> <kbd>→</kbd> inside case studies to switch projects
          </span>
        </div>
      </div>
    </div>
  )
}

export default function App() {
  const [route, setRoute] = useState<Route>(parseHash)
  const [theme, setTheme] = useState<"light" | "dark">(readTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const [cmdOpen, setCmdOpen] = useState(false)
  const [portfolioAccess, setPortfolioAccess] = useState(hasPortfolioAccess)
  const [gateOpen, setGateOpen] = useState(false)
  const [pendingAnchor, setPendingAnchor] = useState<string | null>(null)

  useEffect(() => {
    const syncRoute = () => setRoute(parseHash())
    syncRoute()
    const onDocClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement | null)?.closest?.("a")
      const href = anchor?.getAttribute("href")
      if (!href || !href.startsWith("#/")) return
      const m = href.replace(/^#\/?/, "").match(/^work\/([\w-]+)/)
      if (m && allCaseStudies.some((p) => p.id === m[1])) {
        if (window.location.hash === href) {
          e.preventDefault()
        }
        setRoute({ name: "project", id: m[1] })
      } else if (href === "#/about") {
        setRoute({ name: "about" })
      } else if (href === "#/") {
        setRoute({ name: "home" })
      }
    }
    window.addEventListener("hashchange", syncRoute)
    window.addEventListener("popstate", syncRoute)
    document.addEventListener("click", onDocClick)
    return () => {
      window.removeEventListener("hashchange", syncRoute)
      window.removeEventListener("popstate", syncRoute)
      document.removeEventListener("click", onDocClick)
    }
  }, [allCaseStudies.length])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null
      const inInput =
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.isContentEditable)
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault()
        setCmdOpen((v) => !v)
        return
      }
      if (!inInput && e.key === "/" && !cmdOpen) {
        e.preventDefault()
        setCmdOpen(true)
        return
      }
      if (e.key === "Escape" && cmdOpen) {
        setCmdOpen(false)
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [cmdOpen])

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
      <button type="button" onClick={() => portfolioAccess ? goHomeSection("work") : setGateOpen(true)}>
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
              className="cmd-trigger"
              onClick={() => setCmdOpen(true)}
              aria-label="Open command palette (Command+K)"
            >
              <Icon name="search" size={14} />
              <span>Jump to…</span>
              <kbd>⌘K</kbd>
            </button>
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

      {gateOpen && !portfolioAccess && (
        <div className="gate-modal" role="presentation" onMouseDown={(event) => event.target === event.currentTarget && setGateOpen(false)}>
          <div className="gate-dialog" role="dialog" aria-modal="true" aria-labelledby="gate-title">
            <PortfolioGate onUnlock={() => { setPortfolioAccess(true); setGateOpen(false) }} onClose={() => setGateOpen(false)} />
          </div>
        </div>
      )}

      <CommandPalette
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        portfolioAccess={portfolioAccess}
        onRequestUnlock={() => setGateOpen(true)}
        theme={theme}
        onToggleTheme={() => setTheme(theme === "light" ? "dark" : "light")}
      />

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
        (p) => !p.featured && (filter === "All" || p.portfolioCategory === filter),
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
                  <div className="card-hover-pills" aria-hidden="true">
                    <span className="card-pill-platform">{p.platform}</span>
                    {p.liveUrl && (
                      <span className="card-pill-live">
                        <i /> Live Prototype
                      </span>
                    )}
                  </div>
                  <img
                    src={p.heroImage}
                    alt=""
                    loading={i > 1 ? "lazy" : undefined}
                  />
                  <span className="card-hover-cta" aria-hidden="true">
                    Explore Case Study
                    <Icon name="arrow-up-right" size={14} />
                  </span>
                </div>
                <div className="fp-meta">
                  <div>
                    <span className="fp-cat">{p.category}</span>
                    <h3>{p.name}</h3>
                    <p>{p.summary}</p>
                    {p.outcomes && p.outcomes.length > 0 && (
                      <div className="card-metrics-row">
                        {p.outcomes.slice(0, 2).map(([k, , val]) => (
                          <span key={k} className="card-metric-chip">
                            <strong>{val}</strong> · {k}
                          </span>
                        ))}
                      </div>
                    )}
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
                  <div className="card-hover-pills is-sm" aria-hidden="true">
                    <span className="card-pill-platform">{p.role}</span>
                    {p.liveUrl && (
                      <span className="card-pill-live">
                        <i /> Live
                      </span>
                    )}
                  </div>
                  <img src={p.heroImage} alt="" loading="lazy" />
                  <span className="card-hover-cta is-sm" aria-hidden="true">
                    Read Case Study <Icon name="arrow-up-right" size={13} />
                  </span>
                </div>
                <div className="card-body">
                  <div>
                    <span className="card-cat">{p.category}</span>
                    <h3>{p.name}</h3>
                    <p>{p.summary}</p>
                    {p.outcomes?.[0] && (
                      <div className="card-metrics-row">
                        <span className="card-metric-chip">
                          <strong>{p.outcomes[0][2]}</strong> · {p.outcomes[0][0]}
                        </span>
                      </div>
                    )}
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
    <section
      id={id}
      className="cs-section"
      aria-labelledby={`${id}-h`}
      data-reveal=""
    >
      <div className={`cs-sec-head ${intro ? "has-intro" : "no-intro"}`}>
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

function isEmbeddablePrototype(url?: string): boolean {
  if (!url) return false
  if (url.includes("figma.com")) return false
  return (
    url.startsWith("./") ||
    url.startsWith("/") ||
    url.includes("vercel.app") ||
    url.includes("netlify.app") ||
    url.includes("framer.ai")
  )
}

const tokenSwatches = ["#2be38c", "#3b82f6", "#8b5cf6", "#f59e0b", "#10b981", "#ec4899"]

function ProjectPage({ project }: { project: CaseStudyProject }) {
  const flow = userFlows[project.id]
  const sections: [string, string][] = [
    ["overview", "Overview"],
    ["problem", "Problem & Challenge"],
    ["discovery", "Research & Discovery"],
    ["process", "Design Process"],
    ["final-design", "Final Design"],
    ["results", "Results & Closing"],
  ]
  const num = (id: string) => sections.findIndex(([s]) => s === id) + 1
  const [active, setActive] = useState("overview")
  const [readMode, setReadMode] = useState<"deep" | "quick">("deep")
  const [heroView, setHeroView] = useState<"screen" | "sandbox">("screen")
  const [comparePos, setComparePos] = useState(54)
  const [copiedToken, setCopiedToken] = useState<string | null>(null)
  const [personaQuote, setPersonaQuote] = useState(0)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [lightbox, setLightbox] = useState<{
    src: string
    caption: string
    badge?: string
  } | null>(null)
  const quotes = project.personaQuotes ?? []
  const canEmbed = isEmbeddablePrototype(project.liveUrl)

  const idx = allCaseStudies.findIndex((p) => p.id === project.id)
  const prev =
    allCaseStudies[(idx - 1 + allCaseStudies.length) % allCaseStudies.length]
  const next = allCaseStudies[(idx + 1) % allCaseStudies.length]

  useEffect(() => {
    setActive("overview")
    setPersonaQuote(0)
    setLightbox(null)
    setHeroView("screen")
    setComparePos(54)

    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" },
    )
    sections.forEach(([id]) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })

    const revealEls = document.querySelectorAll("[data-reveal]")
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (
            entry.isIntersecting ||
            entry.boundingClientRect.top < window.innerHeight
          ) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.04, rootMargin: "0px 0px -10px 0px" },
    )
    revealEls.forEach((el) => revealObs.observe(el))

    const onScroll = () => {
      const doc = document.documentElement
      const total = doc.scrollHeight - doc.clientHeight
      if (total > 0) {
        setScrollProgress(Math.min(100, Math.max(0, (window.scrollY / total) * 100)))
      }
      revealEls.forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 0.92) {
          el.classList.add("is-visible")
        }
      })
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    onScroll()

    return () => {
      obs.disconnect()
      revealObs.disconnect()
      window.removeEventListener("scroll", onScroll)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project.id, readMode])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox) {
        if (e.key === "Escape") setLightbox(null)
        return
      }
      const target = e.target as HTMLElement | null
      if (
        target &&
        (target.tagName === "INPUT" ||
          target.tagName === "TEXTAREA" ||
          target.tagName === "SELECT" ||
          target.isContentEditable)
      ) {
        return
      }
      if (e.key === "ArrowLeft" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        window.location.hash = `/work/${prev.id}`
      } else if (e.key === "ArrowRight" && !e.metaKey && !e.ctrlKey && !e.altKey) {
        window.location.hash = `/work/${next.id}`
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox, prev.id, next.id])

  useEffect(() => {
    const tab = document.getElementById(`tab-${active}`)
    const container = tab?.closest("ol")
    if (tab && container) {
      const targetLeft =
        tab.offsetLeft - container.clientWidth / 2 + tab.clientWidth / 2
      container.scrollTo({ left: Math.max(0, targetLeft), behavior: "smooth" })
    }
  }, [active])

  const copyToken = (key: string, val: string) => {
    navigator.clipboard?.writeText(val)
    setCopiedToken(key)
    setTimeout(() => setCopiedToken((curr) => (curr === key ? null : curr)), 1600)
  }

  const noteColors = {
    amber: "n-amber",
    emerald: "n-green",
    sky: "n-blue",
    rose: "n-rose",
    violet: "n-violet",
    orange: "n-orange",
  }

  return (
    <article
      key={project.id}
      className={`cs-article page-enter ${readMode === "quick" ? "is-quick-mode" : ""}`}
    >
      <div className="cs-progress-track" aria-hidden="true">
        <div
          className="cs-progress-fill"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header className="shell cs-hero-wrap">
        <div className={`cs-hero ${tint(project)}`}>
          <div className="cs-hero-top">
            <a href="#/" className="back">
              <Icon name="arrow-left" size={15} />
              All work
            </a>
            <div className="cs-hero-top-right">
              {canEmbed && (
                <button
                  type="button"
                  className={`cs-sandbox-toggle ${heroView === "sandbox" ? "is-active" : ""}`}
                  onClick={() =>
                    setHeroView((v) => (v === "screen" ? "sandbox" : "screen"))
                  }
                >
                  <Icon name="play" size={11} />
                  {heroView === "sandbox"
                    ? "Exit Interactive Sandbox"
                    : "Try Interactive Sandbox"}
                </button>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cs-live-pill"
                >
                  <i aria-hidden="true" />
                  Live Prototype
                  <Icon name="arrow-up-right" size={12} />
                </a>
              )}
              <span className="cs-index">
                {project.index} / {pad(allCaseStudies.length)}
              </span>
            </div>
          </div>
          <div className="cs-hero-copy">
            <div className="cs-hero-badges">
              <span className="eyebrow">{project.category}</span>
              {project.codename && (
                <span className="cs-codename">{project.codename}</span>
              )}
            </div>
            <h1 id="page-title" tabIndex={-1}>
              <span className="cs-h1-name">{project.name}</span>
              {project.headlineStart && project.headlineAccent && (
                <span className="cs-h1-tagline">
                  {project.headlineStart.replace(new RegExp(`^${project.name}:\\s*`, "i"), "")}
                  <em>{project.headlineAccent}</em>
                </span>
              )}
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

          {heroView === "sandbox" && canEmbed && project.liveUrl ? (
            <div className="cs-hero-media cs-hero-sandbox">
              <div className="ui-frame-bar">
                <div className="ui-frame-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="ui-frame-title">
                  Interactive Prototype Sandbox · {project.name}
                </span>
                <div className="ui-frame-actions">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="ui-frame-zoom"
                  >
                    Open in new tab <Icon name="arrow-up-right" size={11} />
                  </a>
                  <button
                    type="button"
                    className="ui-frame-zoom"
                    onClick={() => setHeroView("screen")}
                  >
                    Back to cover
                  </button>
                </div>
              </div>
              <iframe
                src={project.liveUrl}
                title={`${project.name} live interactive prototype`}
                className="cs-sandbox-iframe"
              />
            </div>
          ) : (
            <figure
              className="cs-hero-media is-zoomable"
              onClick={() =>
                setLightbox({
                  src: project.heroImage,
                  caption: `${project.name} — Hero Interface`,
                  badge: project.platform,
                })
              }
            >
              <div className="ui-frame-bar" aria-hidden="true">
                <div className="ui-frame-dots">
                  <span />
                  <span />
                  <span />
                </div>
                <span className="ui-frame-title">
                  {project.name} · {project.platform}
                </span>
                <div className="ui-frame-actions">
                  {canEmbed && (
                    <button
                      type="button"
                      className="ui-frame-zoom is-interactive-btn"
                      onClick={(e) => {
                        e.stopPropagation()
                        setHeroView("sandbox")
                      }}
                    >
                      <Icon name="play" size={10} /> Interactive Sandbox
                    </button>
                  )}
                  <span className="ui-frame-zoom">
                    <Icon name="expand" size={12} /> Inspect screen
                  </span>
                </div>
              </div>
              <img
                src={project.heroImage}
                alt={`${project.name} product interface`}
              />
            </figure>
          )}
        </div>
      </header>

      <nav className="cs-tabs" aria-label="Case study sections">
        <div className="cs-tabs-bar">
          <div className="cs-mode-switch" role="group" aria-label="Reading depth">
            <button
              type="button"
              className={readMode === "quick" ? "is-active" : ""}
              aria-pressed={readMode === "quick"}
              onClick={() => setReadMode("quick")}
            >
              ⚡ 60s Summary
            </button>
            <button
              type="button"
              className={readMode === "deep" ? "is-active" : ""}
              aria-pressed={readMode === "deep"}
              onClick={() => setReadMode("deep")}
            >
              Full Case Study
            </button>
          </div>
          <ol>
            {sections.map(([id, label], i) => (
              <li key={id}>
                <button
                  id={`tab-${id}`}
                  type="button"
                  aria-current={active === id ? "true" : undefined}
                  onClick={() => scrollToId(id)}
                >
                  <span className="cs-tab-num">{pad(i + 1)}</span>
                  {label}
                </button>
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <div className="shell cs-body">
        {readMode === "quick" && (
          <div className="cs-tldr-banner" role="status">
            <div>
              <strong>⚡ 60-Second Executive Summary Active</strong>
              <span>
                Showing core business problem, high-fidelity screens, and measurable outcomes.
              </span>
            </div>
            <button
              type="button"
              className="btn btn-sm btn-solid"
              onClick={() => setReadMode("deep")}
            >
              Expand Full Research &amp; Process
            </button>
          </div>
        )}

        <Section
          id="overview"
          n={num("overview")}
          label="Project Overview"
          title={project.mandateTitle}
          intro={project.mandateBody}
        >
          {project.outcomes && project.outcomes.length > 0 && (
            <div className="cs-impact-strip" aria-label="Key Outcomes & Impact">
              {project.outcomes.map(([k, v, d]) => (
                <div key={k} className="cs-impact-card">
                  <span className="cs-impact-tag">{k}</span>
                  <strong className="cs-impact-val">{d}</strong>
                  <p className="cs-impact-desc">{v}</p>
                </div>
              ))}
            </div>
          )}

          <div className="tiles tiles-3 cs-overview-pillars">
            {project.ownershipPillars.map(([t, d], i) => (
              <div key={t} className="tile">
                <span className="tile-no">{pad(i + 1)} · Ownership</span>
                <h3>{t}</h3>
                <p>{d}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section
          id="problem"
          n={num("problem")}
          label="Problem Statement & Business Challenge"
          title="What problem we solved and why it mattered."
        >
          <div className="cs-contrast-grid">
            <div className="cs-contrast-card friction">
              <span className="cs-contrast-tag">
                <i aria-hidden="true" /> The Business &amp; User Friction
              </span>
              <h3>{project.frictionTitle ?? "Fragmented workflows and unclear next steps"}</h3>
              <p>{project.problemStatement ?? project.mandateBody}</p>
            </div>
            <div className="cs-contrast-card resolution">
              <span className="cs-contrast-tag">
                <i aria-hidden="true" /> The Strategic Design Response
              </span>
              <h3>{project.resolutionTitle ?? project.ownershipPillars[0]?.[0] ?? "A clearer, unified experience"}</h3>
              <p>{project.resolutionBody ?? project.mandateBody}</p>
            </div>
          </div>
        </Section>

        <Section
          id="discovery"
          n={num("discovery")}
          label="Research & Discovery"
          title="User needs, field synthesis, and end-to-end journey mapping."
          intro={project.discoverySummary}
        >
          {quotes.length > 0 ? (
            <div className="persona-card persona-carousel">
              <div>
                <span className="eyebrow">User Persona &amp; Needs</span>
                <h3>{project.audienceTitle ?? (project.journeyFlow[0]?.actor ?? project.role).replace(/^#+\s*/, '')}</h3>
                {project.audienceGoal && <p className="persona-goal">{project.audienceGoal}</p>}
              </div>
              <div className="persona-quote-wrap">
                <blockquote>“{quotes[personaQuote].quote}”</blockquote>
                <p className="persona-byline"><strong>{quotes[personaQuote].name}</strong><span>{quotes[personaQuote].designation}</span></p>
                <div className="persona-controls">
                  <button type="button" className="icon-btn" aria-label="Previous user statement" onClick={() => setPersonaQuote((personaQuote - 1 + quotes.length) % quotes.length)}><Icon name="arrow-left" size={16} /></button>
                  <span>{String(personaQuote + 1).padStart(2, "0")} / {String(quotes.length).padStart(2, "0")}</span>
                  <button type="button" className="icon-btn" aria-label="Next user statement" onClick={() => setPersonaQuote((personaQuote + 1) % quotes.length)}><Icon name="arrow-right" size={16} /></button>
                </div>
              </div>
            </div>
          ) : (
            <div className="persona-card">
              <div>
                <span className="eyebrow">User Persona &amp; Needs</span>
                <h3>{project.audienceTitle ?? (project.journeyFlow[0]?.actor ?? project.role).replace(/^#+\s*/, '')}</h3>
              </div>
              <p>{project.audienceGoal ?? project.journeyFlow[0]?.userGoal ?? project.discoverySummary}</p>
            </div>
          )}

          {readMode === "deep" && (
            <>
              <div className="board">
                <div className="board-bar">
                  <span>
                    <i aria-hidden="true" />
                    FigJam · Qualitative &amp; quantitative research synthesis
                  </span>
                  <span>{project.figmaNotes.length} insights</span>
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

              <div className="cs-subblock">
                <div className="cs-subblock-head">
                  <span className="eyebrow">Customer Journey Map</span>
                  <h3>{project.journeySummary}</h3>
                </div>
                <JourneyMap stages={project.journeyFlow} />
              </div>
            </>
          )}
        </Section>

        <Section
          id="process"
          n={num("process")}
          label="Design Process & Architecture"
          title="Task flows, structural wireframes, and guiding principles."
          intro={project.architecturalPivot.summary}
        >
          {readMode === "deep" && flow && (
            <div className="cs-flow-wrap">
              <UserFlowDiagram flow={flow} id={project.id} />
            </div>
          )}

          <div className="pivot">
            <div>
              <small>Before · Legacy Approach</small>
              <p>{project.architecturalPivot.before}</p>
            </div>
            <span className="pivot-arrow" aria-hidden="true">
              <Icon name="arrow-right" />
            </span>
            <div className="pivot-after">
              <small>After · Architectural Pivot</small>
              <p>{project.architecturalPivot.after}</p>
            </div>
          </div>

          <div className="ba-slider-card" aria-label="Before and after architecture comparison">
            <div className="ba-slider-head">
              <div>
                <span className="eyebrow">
                  <Icon name="sliders" size={12} /> Interactive Evolution Slider
                </span>
                <h3>Drag to compare structural wireframe vs. shipped production UI</h3>
              </div>
              <div className="ba-slider-presets">
                <button
                  type="button"
                  className={comparePos < 20 ? "is-active" : ""}
                  onClick={() => setComparePos(8)}
                >
                  Wireframe
                </button>
                <button
                  type="button"
                  className={comparePos >= 20 && comparePos <= 80 ? "is-active" : ""}
                  onClick={() => setComparePos(50)}
                >
                  50 / 50 Split
                </button>
                <button
                  type="button"
                  className={comparePos > 80 ? "is-active" : ""}
                  onClick={() => setComparePos(92)}
                >
                  Production UI
                </button>
              </div>
            </div>

            <div className="ba-stage">
              <div className="ba-layer ba-after">
                <img
                  src={project.decisions[0]?.image ?? project.heroImage}
                  alt={`${project.name} shipped production interface`}
                />
                <span className="ba-tag ba-tag-right">
                  After · Shipped High-Fidelity UI
                </span>
              </div>

              <div
                className="ba-layer ba-before"
                style={{ clipPath: `inset(0 ${100 - comparePos}% 0 0)` }}
              >
                <div className="ba-wf-canvas">
                  <div className="ba-wf-inner">
                    <WireframeFrame
                      layout={project.wireframes[0]?.layout ?? "dashboard"}
                    />
                  </div>
                </div>
                <span className="ba-tag ba-tag-left">
                  Before · Low-Fidelity Architecture ({project.wireframes[0]?.title ?? "System Skeleton"})
                </span>
              </div>

              <div
                className="ba-divider"
                style={{ left: `${comparePos}%` }}
                aria-hidden="true"
              >
                <span className="ba-handle">
                  <Icon name="arrow-left" size={11} />
                  <Icon name="arrow-right" size={11} />
                </span>
              </div>

              <input
                type="range"
                min={2}
                max={98}
                value={comparePos}
                aria-label="Comparison slider percentage"
                className="ba-range-input"
                onChange={(e) => setComparePos(Number(e.target.value))}
              />
            </div>
          </div>

          {readMode === "deep" && (
            <div className="wf-grid">
              {project.wireframes.map((w, i) => (
                <Wireframe key={w.id} spec={w} n={i + 1} />
              ))}
            </div>
          )}

          <ol className="principles">
            {project.principles.map(([t, d], i) => (
              <li key={t}>
                <span>Design Principle {pad(i + 1)}</span>
                <strong>{t}</strong>
                <p>{d}</p>
              </li>
            ))}
          </ol>
        </Section>

        <Section
          id="final-design"
          n={num("final-design")}
          label="Final Design & Key Features"
          title="High-fidelity screens, key functionalities, and system specs."
          intro="Every screen translates research insights and design principles into clear visual hierarchy, predictable state transitions, and production-ready component tokens."
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
                {d.image && (
                  <figure
                    className="decision-figure is-zoomable"
                    onClick={() =>
                      setLightbox({
                        src: d.image!,
                        caption: d.title,
                        badge: `${pad(i + 1)} · ${d.badge}`,
                      })
                    }
                  >
                    <div className="ui-frame-bar is-compact" aria-hidden="true">
                      <div className="ui-frame-dots">
                        <span />
                        <span />
                        <span />
                      </div>
                      <span className="ui-frame-title">{d.badge}</span>
                      <span className="ui-frame-zoom">
                        <Icon name="expand" size={11} /> Zoom
                      </span>
                    </div>
                    <img src={d.image} alt={d.title} loading="lazy" />
                  </figure>
                )}
              </li>
            ))}
          </ol>

          {project.secondaryImage && (
            <figure
              className="cs-panorama-showcase is-zoomable"
              onClick={() =>
                setLightbox({
                  src: project.secondaryImage!,
                  caption:
                    project.panoramaTitle ?? "Production Interface Showcase",
                  badge: project.panoramaLabel ?? project.platform,
                })
              }
            >
              <div className="cs-panorama-header">
                <div>
                  <span className="eyebrow">Complete High-Fidelity System</span>
                  <h3>{project.panoramaTitle ?? "Production Interface Showcase"}</h3>
                </div>
                <div className="cs-panorama-actions">
                  <span className="pill">{project.panoramaLabel ?? `${project.platform}`}</span>
                  <span className="ui-frame-zoom">
                    <Icon name="expand" size={12} /> Fullscreen
                  </span>
                </div>
              </div>
              <div className="cs-panorama-media">
                <img
                  src={project.secondaryImage}
                  alt={`${project.name} complete user experience`}
                  loading="lazy"
                />
              </div>
            </figure>
          )}

          <div className="bridge cs-system-bridge">
            <div>
              <p className="eyebrow">Design System &amp; Style Spec</p>
              <h3>{project.contractBridge.figmaTitle}</h3>
              <dl>
                {project.contractBridge.figmaSpecs.map(([k, v], i) => (
                  <div key={k}>
                    <dt>
                      <span
                        className="spec-swatch"
                        style={{
                          background: tokenSwatches[i % tokenSwatches.length],
                        }}
                        aria-hidden="true"
                      />
                      {k}
                    </dt>
                    <dd>{clean(v)}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="bridge-code">
              <div className="bridge-code-top">
                <p className="eyebrow">Engineering Token &amp; State Contract</p>
                <span className="bridge-copy-hint">Click any token to copy</span>
              </div>
              <h3>{project.contractBridge.codeTitle}</h3>
              <dl>
                {project.contractBridge.codeSpecs.map(([k, v]) => {
                  const raw = clean(v)
                  const isCopied = copiedToken === k
                  return (
                    <div key={k}>
                      <dt>{k}</dt>
                      <dd>
                        <button
                          type="button"
                          className={`token-copy-btn ${isCopied ? "is-copied" : ""}`}
                          onClick={() => copyToken(k, raw)}
                          title="Click to copy token specification"
                        >
                          <code>{raw}</code>
                          <span className="token-copy-badge">
                            <Icon name={isCopied ? "check" : "copy"} size={11} />
                            {isCopied ? "Copied!" : "Copy"}
                          </span>
                        </button>
                      </dd>
                    </div>
                  )
                })}
              </dl>
            </div>
          </div>
        </Section>

        <Section
          id="results"
          n={num("results")}
          label="Testing, Results & Closing"
          title="Validation outcomes, engineering delivery, and leadership reflection."
          intro={project.engineeringSummary}
        >
          <ol className="tiles tiles-3 cs-collab-tiles">
            {project.collabTracks.map((t) => (
              <li key={t.phase} className="tile">
                <span className="tile-no">{t.phase}</span>
                <h3>{t.title}</h3>
                <p>{clean(t.detail)}</p>
                <span className="tile-foot">{t.deliverable}</span>
              </li>
            ))}
          </ol>

          <div className="cs-closing-card">
            <div className="cs-closing-copy">
              <span className="eyebrow">Closing Reflection &amp; Skills Alignment</span>
              <h3>How {project.name} reflects my product design leadership</h3>
              <p>
                {project.lede} By pairing qualitative user synthesis with deterministic state modeling and tokenized design-to-code contracts, the team shipped a resilient {project.platform.toLowerCase()} with zero handoff ambiguity.
              </p>
            </div>
            <div className="cs-closing-meta">
              <div>
                <small>Core Discipline</small>
                <strong>{project.category}</strong>
              </div>
              <div>
                <small>Deliverables Shipped</small>
                <strong>{project.scope}</strong>
              </div>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-mint cs-closing-btn"
                >
                  Explore Live Prototype
                  <Icon name="arrow-up-right" />
                </a>
              )}
            </div>
          </div>
        </Section>
      </div>

      <div className="shell cs-pager-wrap">
        <div className="cs-pager-hint">
          <span>
            Tip: Use <kbd>←</kbd> and <kbd>→</kbd> arrow keys to flip between case studies, or <kbd>⌘K</kbd> to jump anywhere
          </span>
        </div>
        <div className="cs-dual-pager">
          <a href={`#/work/${prev.id}`} className="cs-prev-card">
            <span className="eyebrow">
              <Icon name="arrow-left" size={13} /> Previous · {prev.index}
            </span>
            <strong>{prev.name}</strong>
            <p>{prev.category}</p>
          </a>
          <a href={`#/work/${next.id}`} className={`next ${tint(next)}`}>
            <div>
              <p className="eyebrow">Next project · {next.index}</p>
              <span className="next-title">{next.name}</span>
              <span className="next-sum">{next.summary}</span>
            </div>
            <span className="next-media">
              <img src={next.heroImage} alt="" loading="lazy" />
            </span>
          </a>
        </div>
      </div>

      {lightbox && (
        <div
          className="cs-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={lightbox.caption}
          onClick={() => setLightbox(null)}
        >
          <div
            className="cs-lightbox-inner"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="cs-lightbox-bar">
              <div>
                {lightbox.badge && (
                  <span className="cs-lightbox-badge">{lightbox.badge}</span>
                )}
                <strong>{lightbox.caption}</strong>
              </div>
              <button
                type="button"
                className="cs-lightbox-close"
                aria-label="Close fullscreen preview"
                onClick={() => setLightbox(null)}
              >
                <Icon name="close" size={16} />
                <span>ESC</span>
              </button>
            </div>
            <div className="cs-lightbox-stage">
              <img src={lightbox.src} alt={lightbox.caption} />
            </div>
          </div>
        </div>
      )}
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
