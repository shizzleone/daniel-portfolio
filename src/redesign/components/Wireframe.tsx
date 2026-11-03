import type { WireframeSpec } from "../data/portfolioData"

const Bar = ({
  w = "100%",
  h = 6,
  hl = false,
}: {
  w?: string
  h?: number
  hl?: boolean
}) => (
  <span className={`sk ${hl ? "sk-hl" : ""}`} style={{ width: w, height: h }} />
)

function Frame({ layout }: { layout: WireframeSpec["layout"] }) {
  switch (layout) {
    case "dashboard":
      return (
        <div className="wf-frame">
          <div className="wf-row">
            <Bar w="30%" h={8} />
            <Bar w="14%" h={8} hl />
          </div>
          <div className="wf-cols-3">
            {[0, 1, 2].map((i) => (
              <div key={i} className="sk-box wf-pad">
                <Bar w="50%" />
                <Bar w="70%" h={12} />
              </div>
            ))}
          </div>
          <div className="wf-cols-2 wf-grow">
            <div className="sk-box wf-chart">
              {[40, 65, 50, 80, 58, 90, 72].map((h, i) => (
                <span key={i} style={{ height: `${h}%` }} />
              ))}
            </div>
            <div className="sk-box wf-pad">
              {[0, 1, 2, 3].map((i) => (
                <Bar key={i} w={`${90 - i * 12}%`} />
              ))}
            </div>
          </div>
        </div>
      )
    case "drawer":
      return (
        <div className="wf-frame wf-split">
          <div className="sk-box wf-chart wf-grow">
            {[30, 55, 45, 75, 60, 85].map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="sk-box sk-hl wf-pad wf-drawer">
            <Bar w="60%" h={8} />
            {[0, 1, 2].map((i) => (
              <div key={i} className="wf-field">
                <Bar w="40%" h={4} />
                <span className="sk-input" />
              </div>
            ))}
          </div>
        </div>
      )
    case "grid":
      return (
        <div className="wf-frame">
          <div className="wf-row">
            <Bar w="20%" h={8} hl />
            <Bar w="16%" h={8} />
            <Bar w="16%" h={8} />
          </div>
          <div className="sk-box wf-table wf-grow">
            {Array.from({ length: 7 }).map((_, r) => (
              <div
                key={r}
                className={`wf-tr ${r === 0 ? "is-head" : ""} ${
                  r === 3 ? "is-sel" : ""
                }`}
              >
                {[0, 1, 2, 3].map((c) => (
                  <Bar key={c} w="80%" h={4} />
                ))}
              </div>
            ))}
          </div>
        </div>
      )
    case "split":
      return (
        <div className="wf-frame wf-split">
          <div className="sk-box wf-pad wf-grow">
            {[90, 70, 80, 50, 75, 60].map((w, i) => (
              <Bar key={i} w={`${w}%`} hl={i === 3} />
            ))}
          </div>
          <div className="sk-box wf-pad wf-grow wf-code">
            {[60, 80, 45, 70, 55].map((w, i) => (
              <Bar key={i} w={`${w}%`} h={4} />
            ))}
            <span className="sk-btn" />
          </div>
        </div>
      )
    default: {
      const content =
        layout === "mobile-queue" ? (
          [0, 1, 2].map((i) => (
            <div key={i} className={`sk-box wf-pad ${i === 0 ? "sk-hl" : ""}`}>
              <Bar w="70%" h={4} />
              <Bar w="45%" h={4} />
            </div>
          ))
        ) : layout === "mobile-heatmap" ? (
          <div className="wf-heat">
            {Array.from({ length: 28 }).map((_, i) => (
              <span key={i} style={{ opacity: 0.25 + ((i * 7) % 10) / 13 }} />
            ))}
          </div>
        ) : layout === "mobile-ledger" ? (
          [0, 1, 2, 3].map((i) => (
            <div key={i} className="wf-row">
              <Bar w="55%" h={4} />
              <Bar w="20%" h={4} hl={i % 2 === 0} />
            </div>
          ))
        ) : (
          <>
            <div className="sk-box sk-hl wf-pad">
              <Bar w="50%" h={4} />
              <Bar w="80%" h={10} />
            </div>
            <Bar w="40%" h={4} />
            <div className="sk-box wf-pad">
              <Bar w="70%" h={4} />
            </div>
          </>
        )
      return (
        <div className="wf-frame wf-center">
          <div className="wf-phone">
            <Bar w="40%" h={5} />
            {content}
            <span className="sk-btn wf-push" />
          </div>
        </div>
      )
    }
  }
}

interface WireframeProps {
  spec: WireframeSpec
  n: number
}

export function Wireframe({ spec, n }: WireframeProps) {
  return (
    <figure className="wf">
      <Frame layout={spec.layout} />
      <figcaption>
        <span className="mono muted">{String(n).padStart(2, "0")}</span>
        <span>
          <strong>{spec.title}</strong>
          <span className="muted">{spec.caption}</span>
        </span>
      </figcaption>
    </figure>
  )
}
