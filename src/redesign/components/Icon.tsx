type IconName = "arrow-right" | "arrow-left" | "arrow-up-right" | "arrow-down" | "sun" | "moon" | "search" | "menu" | "close" | "mail" | "lock" | "download" | "check" | "expand" | "copy" | "play" | "sliders" | "figma"

const paths: Record<IconName, string> = {
  "arrow-right": "M5 12h14M13 6l6 6-6 6",
  "arrow-left": "M19 12H5M11 6l-6 6 6 6",
  "arrow-up-right": "M7 17 17 7M8 7h9v9",
  sun: "M12 4V2m0 20v-2m8-8h2M2 12h2m13.66-5.66 1.41-1.41M4.93 19.07l1.41-1.41m0-11.32L4.93 4.93m14.14 14.14-1.41-1.41M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z",
  moon: "M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z",
  "arrow-down": "M12 5v14M6 13l6 6 6-6",
  mail: "M4 6h16v12H4zM4 7l8 6 8-6",
  menu: "M4 8h16M4 16h16",
  close: "M6 6l12 12M18 6 6 18",
  search: "m20 20-4.5-4.5M17 10.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z",
  lock: "M17 11V8A5 5 0 0 0 7 8v3M5 11h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1Zm7 3v3",
  download: "M12 5v14M5 12l7 7 7-7",
  check: "M5 12l5 5L20 7",
  expand: "M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7",
  copy: "M9 9h10v10H9zM5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1",
  play: "M7 5v14l12-7-12-7Z",
  sliders: "M4 8h9m4 0h3M13 6v4M4 16h3m4 0h9M10 14v4",
  figma: "M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",
}

interface IconProps {
  name: IconName
  size?: number
}

export function Icon({ name, size = 16 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="shrink-0"
    >
      <path d={paths[name]} />
    </svg>
  )
}
