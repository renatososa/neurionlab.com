export default function Icon({ name, className = "" }) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.9,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true",
  };

  const icons = {
    activity: (
      <>
        <path d="M3 12h4l2-7 4 14 2-7h6" />
      </>
    ),
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="M13 6l6 6-6 6" />
      </>
    ),
    brain: (
      <>
        <path d="M9 4a4 4 0 0 0-4 4v1a4 4 0 0 0 0 8v1a3 3 0 0 0 5 2.2" />
        <path d="M15 4a4 4 0 0 1 4 4v1a4 4 0 0 1 0 8v1a3 3 0 0 1-5 2.2" />
        <path d="M9 4c1.8 1.2 2.5 3 2 5" />
        <path d="M15 4c-1.8 1.2-2.5 3-2 5" />
        <path d="M8 14c2 0 3 1 4 3 1-2 2-3 4-3" />
      </>
    ),
    cable: (
      <>
        <path d="M7 7l10 10" />
        <path d="M4 4l4 4" />
        <path d="M16 16l4 4" />
        <path d="M7 3l4 4" />
        <path d="M3 7l4 4" />
        <path d="M17 13l4 4" />
        <path d="M13 17l4 4" />
      </>
    ),
    check: (
      <>
        <path d="M5 12.5 9.5 17 19 7.5" />
      </>
    ),
    cpu: (
      <>
        <rect x="6" y="6" width="12" height="12" rx="2" />
        <rect x="9" y="9" width="6" height="6" rx="1" />
        <path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" />
      </>
    ),
    graduation: (
      <>
        <path d="M3 8l9-4 9 4-9 4-9-4Z" />
        <path d="M7 10v5c0 1.7 2.2 3 5 3s5-1.3 5-3v-5" />
        <path d="M21 8v6" />
      </>
    ),
    gear: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2.5v2.2M12 19.3v2.2M4.7 4.7l1.6 1.6M17.7 17.7l1.6 1.6M2.5 12h2.2M19.3 12h2.2M4.7 19.3l1.6-1.6M17.7 6.3l1.6-1.6" />
        <path d="M9.4 4.3 8.7 6M15.3 18l-.7 1.7M4.3 9.4 6 8.7M18 15.3l1.7-.7M4.3 14.6 6 15.3M18 8.7l1.7.7M9.4 19.7 8.7 18M15.3 6l-.7-1.7" />
      </>
    ),
    handheart: (
      <>
        <path d="M4 14v5" />
        <path d="M4 17h4l4 3 7-7a2 2 0 0 0-3-3l-4 4" />
        <path d="M8 17l3-3" />
        <path d="M12 8c-2-2.5-5 .3-3 2.6L12 14l3-3.4c2-2.3-1-5.1-3-2.6Z" />
      </>
    ),
    heart: (
      <>
        <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 1 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
        <path d="M3 12h4l2-4 3 8 2-4h7" />
      </>
    ),
    layers: (
      <>
        <path d="m12 3 8 4.5-8 4.5L4 7.5 12 3Z" />
        <path d="m4 12.5 8 4.5 8-4.5" />
        <path d="m4 17.5 8 4.5 8-4.5" />
      </>
    ),
    menu: (
      <>
        <path d="M4 7h16M4 12h16M4 17h16" />
      </>
    ),
    microscope: (
      <>
        <path d="M6 18h12" />
        <path d="M8 22h8" />
        <path d="M10 18a6 6 0 0 0 6-6" />
        <path d="M9 3l6 6" />
        <path d="M7 5l6 6" />
        <path d="M12 2l3 3" />
        <path d="M5 8l3 3" />
      </>
    ),
    radio: (
      <>
        <path d="M4 11a8 8 0 0 1 16 0" />
        <path d="M8 11a4 4 0 0 1 8 0" />
        <path d="M12 11v8" />
        <path d="M8 19h8" />
      </>
    ),
    signal: (
      <>
        <path d="M2 20h20" />
        <path d="M5 16l3-3 3 2 4-7 4 5" />
        <path d="M19 8v5h-5" />
      </>
    ),
    sliders: (
      <>
        <path d="M4 6h8" />
        <path d="M16 6h4" />
        <path d="M10 6v0" />
        <circle cx="12" cy="6" r="2" />
        <path d="M4 12h2" />
        <path d="M12 12h8" />
        <circle cx="8" cy="12" r="2" />
        <path d="M4 18h10" />
        <path d="M18 18h2" />
        <circle cx="16" cy="18" r="2" />
      </>
    ),
    sparkles: (
      <>
        <path d="M12 3l1.5 4.5L18 9l-4.5 1.5L12 15l-1.5-4.5L6 9l4.5-1.5L12 3Z" />
        <path d="M5 15l.8 2.2L8 18l-2.2.8L5 21l-.8-2.2L2 18l2.2-.8L5 15Z" />
        <path d="M19 14l.7 1.8 1.8.7-1.8.7L19 19l-.7-1.8-1.8-.7 1.8-.7L19 14Z" />
      </>
    ),
    x: (
      <>
        <path d="M6 6l12 12M18 6 6 18" />
      </>
    ),
    zap: (
      <>
        <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
      </>
    ),
  };

  return <svg {...common}>{icons[name] || icons.signal}</svg>;
}
