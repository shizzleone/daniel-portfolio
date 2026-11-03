import { useEffect, useState, type ReactNode } from "react"

export function Sparkle({ size = 18 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="sparkle"
    >
      <path d="M12 0c.6 6.5 5.5 11.4 12 12-6.5.6-11.4 5.5-12 12-.6-6.5-5.5-11.4-12-12C6.5 11.4 11.4 6.5 12 0Z" />
    </svg>
  )
}

interface LabelProps {
  children: ReactNode
  dark?: boolean
}

export function SparkLabel({ children, dark }: LabelProps) {
  return (
    <p className={`spark-label ${dark ? "is-dark" : ""}`}>
      <Sparkle />
      {children}
    </p>
  )
}

export function Squiggle({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="132"
      height="64"
      viewBox="0 0 132 64"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4 40c6-26 40-30 48-10 6 15-12 24-16 12-5-15 24-32 52-22 16 6 26 18 32 30"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M110 38l10 13 6-17"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

/** Types and deletes each word in turn; renders the first word statically for reduced motion. */
export function Typed({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [length, setLength] = useState(words[0].length)
  const [deleting, setDeleting] = useState(false)
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
    setReduced(mq.matches)
    const on = () => setReduced(mq.matches)
    mq.addEventListener("change", on)
    return () => mq.removeEventListener("change", on)
  }, [])

  useEffect(() => {
    if (reduced) return
    const word = words[index]
    let delay = deleting ? 45 : 85
    if (!deleting && length === word.length) delay = 1800
    if (deleting && length === 0) delay = 300
    const t = window.setTimeout(() => {
      if (!deleting && length === word.length) setDeleting(true)
      else if (deleting && length === 0) {
        setDeleting(false)
        setIndex((index + 1) % words.length)
      } else setLength(length + (deleting ? -1 : 1))
    }, delay)
    return () => window.clearTimeout(t)
  }, [deleting, index, length, reduced, words])

  const text = reduced ? words[0] : words[index].slice(0, length)
  return (
    <span className="typed" aria-hidden="true">
      {text}
      <i className="typed-caret" />
    </span>
  )
}
