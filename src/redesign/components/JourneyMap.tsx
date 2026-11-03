import { useState, type ReactNode } from "react"
import type { JourneyNode } from "../data/portfolioData"

const clean = (s: string) => s.replace(/`/g, "")

type Row = [string, (s: JourneyNode) => ReactNode]

export function JourneyMap({ stages }: { stages: JourneyNode[] }) {
  const [active, setActive] = useState(0)
  const rows: Row[] = [
    ["Actor", (s) => s.actor],
    ["Goal", (s) => s.userGoal],
    ["Friction removed", (s) => s.frictionEliminated],
    ["Design response", (s) => s.uxResolution],
    [
      "Touchpoints",
      (s) => (
        <ul className="jm-tags">
          {s.touchpoints.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      ),
    ],
    [
      "Engineering contract",
      (s) => <code>{clean(s.engineeringContract)}</code>,
    ],
  ]
  const current = stages[active]

  return (
    <div className="jm">
      <div className="jm-stages" role="group" aria-label="Journey stages">
        {stages.map((s, i) => (
          <button
            key={s.step}
            type="button"
            className="jm-stage"
            aria-pressed={i === active}
            onClick={() => setActive(i)}
          >
            <small>{s.step}</small>
            <b>{s.stage}</b>
            <span className="jm-bar" aria-hidden="true" />
          </button>
        ))}
      </div>
      <dl className="jm-detail" aria-live="polite">
        {rows.map(([label, render]) => (
          <div key={label}>
            <dt>{label}</dt>
            <dd>{render(current)}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
