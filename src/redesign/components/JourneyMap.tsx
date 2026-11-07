import { useState } from "react"
import type { JourneyNode } from "../data/portfolioData"

const clean = (s: string) => s.replace(/`/g, "")

export function JourneyMap({ stages }: { stages: JourneyNode[] }) {
  const [active, setActive] = useState<number | null>(null)

  return (
    <div className="fj-journey-board" role="region" aria-label="FigJam Customer Journey Map">
      <div className="fj-journey-bar">
        <div className="fj-journey-title">
          <i className="fj-badge-icon" aria-hidden="true" />
          <span>FigJam · End-to-End Customer &amp; System Journey Workshop</span>
        </div>
        <div className="fj-journey-collaborators" aria-label="Workshop collaborators">
          <span className="fj-cursor-pill is-dj">
            <i>DJ</i> Daniel Johnson
          </span>
          <span className="fj-cursor-pill is-ur">
            <i>UR</i> UX Research
          </span>
          <span className="fj-cursor-pill is-eng">
            <i>ENG</i> Engineering
          </span>
          <span className="fj-stage-count">{stages.length} stages</span>
        </div>
      </div>

      <ol className="fj-journey-cols">
        {stages.map((s, i) => {
          const isFocused = active === i
          return (
            <li
              key={s.step + s.stage}
              className={`fj-col ${isFocused ? "is-focused" : ""}`}
              onClick={() => setActive(isFocused ? null : i)}
            >
              <div className="fj-col-head">
                <div className="fj-col-meta">
                  <span className="fj-step-pill">STAGE {s.step}</span>
                  <span className="fj-actor-pill">{s.actor}</span>
                </div>
                <div className="fj-col-title-row">
                  <h4>{s.stage}</h4>
                  {i < stages.length - 1 && (
                    <span className="fj-col-arrow" aria-hidden="true">
                      →
                    </span>
                  )}
                </div>
              </div>

              <div className="fj-stickies">
                <div className="fj-sticky is-goal">
                  <small>User Goal &amp; Intent</small>
                  <p>{s.userGoal}</p>
                </div>

                <div className="fj-sticky is-friction">
                  <small>⚡ Friction Removed</small>
                  <p>{s.frictionEliminated}</p>
                </div>

                <div className="fj-sticky is-resolution">
                  <small>✓ Design Response</small>
                  <p>{s.uxResolution}</p>
                </div>
              </div>

              <div className="fj-col-foot">
                <ul className="fj-touchpoints" aria-label="Screen touchpoints">
                  {s.touchpoints.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                <div className="fj-contract" title="Engineering State Contract">
                  <span>Contract</span>
                  <code>{clean(s.engineeringContract)}</code>
                </div>
              </div>
            </li>
          )
        })}
      </ol>
    </div>
  )
}
