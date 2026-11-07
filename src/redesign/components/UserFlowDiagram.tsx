import { useEffect, useMemo, useRef, useState } from "react"
import type { FlowNode, UserFlow } from "../data/userFlows"

const ROW_H = 112
const MIN_COL = 112

const typeLabel: Record<FlowNode["type"], string> = {
  start: "Start",
  end: "Outcome",
  step: "User action",
  system: "System",
  decision: "Decision",
}

interface FlowProps {
  flow: UserFlow
  id: string
}

export function UserFlowDiagram({ flow, id }: FlowProps) {
  const wrapRef = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(0)
  const [pathId, setPathId] = useState<string | null>(null)
  const [selected, setSelected] = useState<string | null>(null)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) =>
      setWidth(entry.contentRect.width),
    )
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const nodeMap = useMemo(
    () => new Map(flow.nodes.map((n) => [n.id, n])),
    [flow],
  )
  const laneW = width >= 1080 ? 120 : 92
  const colW = width ? (width - laneW) / flow.cols : 0
  const mode = width === 0 ? "none" : colW >= MIN_COL ? "diagram" : "steps"

  const activePath = flow.paths.find((p) => p.id === pathId)
  const activeNodes = activePath ? new Set(activePath.nodes) : null
  const activeEdges = activePath
    ? new Set(
        activePath.nodes.slice(1).map((n, i) => `${activePath.nodes[i]}>${n}`),
      )
    : null

  const half = (type: FlowNode["type"]) => {
    if (type === "decision") return { w: 44, h: 44 }
    const w = Math.min(76, (colW - 18) / 2)
    return type === "start" || type === "end" ? { w, h: 23 } : { w, h: 29 }
  }
  const cx = (n: FlowNode) => laneW + n.col * colW + colW / 2
  const cy = (n: FlowNode) => n.row * ROW_H + ROW_H / 2
  const height = flow.lanes.length * ROW_H

  const edges =
    mode === "diagram"
      ? flow.edges.map((e) => {
          const a = nodeMap.get(e.from)!
          const b = nodeMap.get(e.to)!
          const [ax, ay, bx, by] = [cx(a), cy(a), cx(b), cy(b)]
          const sa = half(a.type)
          const sb = half(b.type)
          let d: string
          let lx: number
          let ly: number
          let anchor: "start" | "end" = "start"
          if (a.row === b.row) {
            const dir = bx > ax ? 1 : -1
            const x1 = ax + dir * sa.w
            const x2 = bx - dir * sb.w
            d = `M${x1} ${ay} H${x2}`
            lx = x1 + dir * 8
            ly = ay - 8
            anchor = dir > 0 ? "start" : "end"
          } else if (a.col === b.col) {
            const dir = by > ay ? 1 : -1
            const y1 = ay + dir * sa.h
            const y2 = by - dir * sb.h
            d = `M${ax} ${y1} V${y2}`
            lx = ax + 8
            ly = (y1 + y2) / 2 + 4
          } else {
            const vdir = by > ay ? 1 : -1
            const hdir = bx > ax ? 1 : -1
            const y1 = ay + vdir * sa.h
            d = `M${ax} ${y1} V${by} H${bx - hdir * sb.w}`
            lx = ax + 8
            ly = y1 + vdir * 18 + (vdir > 0 ? 0 : 8)
          }
          const on = activeEdges ? activeEdges.has(`${e.from}>${e.to}`) : true
          return { ...e, d, lx, ly, anchor, on }
        })
      : []

  const ordered = useMemo(
    () => [...flow.nodes].sort((a, b) => a.col - b.col || a.row - b.row),
    [flow],
  )
  const selectedNode = selected ? nodeMap.get(selected) : null
  const markerId = `arrow-${id}`

  return (
    <figure className="flow fj-flow-window">
      <div className="fj-window-bar">
        <div className="fj-window-left">
          <div className="ui-frame-dots" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div className="fj-journey-title">
            <i className="fj-badge-icon" aria-hidden="true" />
            <span>FigJam · End-to-End User &amp; System Flow Architecture</span>
          </div>
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
          <span className="fj-stage-count">
            {flow.nodes.length} nodes · {flow.lanes.length} lanes
          </span>
        </div>
      </div>

      <div className="flow-toolbar">
        <div className="flow-chips" role="group" aria-label="Highlight a path">
          <button
            type="button"
            className="chip"
            aria-pressed={pathId === null}
            onClick={() => setPathId(null)}
          >
            All paths
          </button>
          {flow.paths.map((p) => (
            <button
              key={p.id}
              type="button"
              className="chip"
              aria-pressed={pathId === p.id}
              onClick={() => setPathId(p.id)}
            >
              {p.label}
            </button>
          ))}
        </div>
        <ul className="flow-legend" aria-label="Legend">
          <li>
            <i className="lg-pill" />
            Start / outcome
          </li>
          <li>
            <i className="lg-step" />
            Action
          </li>
          <li>
            <i className="lg-system" />
            System
          </li>
          <li>
            <i className="lg-decision" />
            Decision
          </li>
        </ul>
      </div>

      <div ref={wrapRef} className="flow-stage">
        {mode === "diagram" && (
          <div className="flow-canvas" style={{ height }}>
            {flow.lanes.map((lane, i) => (
              <div
                key={lane}
                className="flow-lane"
                style={{ top: i * ROW_H, height: ROW_H }}
                aria-hidden="true"
              >
                <span className="flow-lane-label" style={{ width: laneW }}>
                  {lane}
                </span>
              </div>
            ))}

            <svg
              className="flow-edges"
              width={width}
              height={height}
              aria-hidden="true"
            >
              <defs>
                <marker
                  id={markerId}
                  viewBox="0 0 10 10"
                  refX="9"
                  refY="5"
                  markerWidth="7"
                  markerHeight="7"
                  orient="auto-start-reverse"
                >
                  <path d="M0 0 L10 5 L0 10 z" className="flow-arrow" />
                </marker>
              </defs>
              {edges.map((e) => (
                <g
                  key={`${e.from}-${e.to}`}
                  className={`flow-edge ${e.on ? "" : "is-dim"} ${
                    activeEdges && e.on ? "is-hot" : ""
                  }`}
                >
                  <path d={e.d} markerEnd={`url(#${markerId})`} />
                  {e.label && (
                    <text x={e.lx} y={e.ly} textAnchor={e.anchor}>
                      {e.label}
                    </text>
                  )}
                </g>
              ))}
            </svg>

            {flow.nodes.map((n) => {
              const s = half(n.type)
              const dim = activeNodes ? !activeNodes.has(n.id) : false
              return (
                <button
                  key={n.id}
                  type="button"
                  className={`fnode fnode-${n.type} ${dim ? "is-dim" : ""}`}
                  style={{
                    left: cx(n) - s.w,
                    top: cy(n) - s.h,
                    width: s.w * 2,
                    height: s.h * 2,
                  }}
                  aria-pressed={selected === n.id}
                  aria-label={`${typeLabel[n.type]}: ${n.label}, ${flow.lanes[n.row]}`}
                  onClick={() => setSelected(selected === n.id ? null : n.id)}
                >
                  <span>{n.label}</span>
                  {n.note && <i className="fnode-dot" aria-hidden="true" />}
                </button>
              )
            })}
          </div>
        )}

        {mode === "steps" && (
          <ol className="fsteps">
            {ordered.map((n) => {
              const out = flow.edges.filter((e) => e.from === n.id)
              const dim = activeNodes ? !activeNodes.has(n.id) : false
              return (
                <li
                  key={n.id}
                  className={`fstep fstep-${n.type} ${dim ? "is-dim" : ""}`}
                >
                  <span className="fstep-marker" aria-hidden="true" />
                  <div className="fstep-body">
                    <span className="fstep-meta">
                      {typeLabel[n.type]} · {flow.lanes[n.row]}
                    </span>
                    <strong>{n.label}</strong>
                    {n.note && <p>{n.note}</p>}
                    {(out.length > 1 || out.some((e) => e.label)) && (
                      <ul className="fstep-branches">
                        {out.map((e) => (
                          <li key={e.to}>
                            <span>{e.label ?? "Then"}</span>
                            {nodeMap.get(e.to)!.label}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </li>
              )
            })}
          </ol>
        )}
      </div>

      {mode === "diagram" && (
        <>
          <figcaption className="flow-detail" aria-live="polite">
            {selectedNode ? (
              <>
                <span className="flow-detail-type">
                  {typeLabel[selectedNode.type]} ·{" "}
                  {flow.lanes[selectedNode.row]}
                </span>
                <strong>{selectedNode.label}</strong>
                <span>
                  {selectedNode.note ??
                    "A connecting step in the flow. Steps marked with a dot carry design notes."}
                </span>
              </>
            ) : (
              <span className="muted">
                Select any step to read the design rationale. Steps marked with
                a dot carry notes.
              </span>
            )}
          </figcaption>
          <details className="flow-text">
            <summary>Read this flow as text</summary>
            <ol>
              {flow.edges.map((e) => (
                <li key={`${e.from}-${e.to}`}>
                  {nodeMap.get(e.from)!.label} → {nodeMap.get(e.to)!.label}
                  {e.label ? ` (${e.label})` : ""}
                </li>
              ))}
            </ol>
          </details>
        </>
      )}
    </figure>
  )
}
