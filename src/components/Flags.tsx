import type { Lang } from "@/content/types";

/**
 * Flat SVG flags rather than emoji: Windows ships no flag glyphs, so 🇩🇪 would
 * degrade to a "DE" letter box for a large share of a German firm's visitors.
 * Decorative — the accessible name comes from the link that wraps them.
 */
type FlagProps = { className?: string };

function De({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 5 3" className={className} aria-hidden="true" focusable="false">
      <rect width="5" height="3" fill="#ffce00" />
      <rect width="5" height="2" fill="#dd0000" />
      <rect width="5" height="1" fill="#000" />
    </svg>
  );
}

function Tr({ className }: FlagProps) {
  return (
    <svg viewBox="0 0 1200 800" className={className} aria-hidden="true" focusable="false">
      <rect width="1200" height="800" fill="#e30a17" />
      <circle cx="425" cy="400" r="200" fill="#fff" />
      <circle cx="475" cy="400" r="160" fill="#e30a17" />
      <polygon
        fill="#fff"
        points="760,300 782.5,369.1 855.1,369.1 796.3,411.8 818.8,480.9 760,438.2 701.2,480.9 723.7,411.8 664.9,369.1 737.5,369.1"
      />
    </svg>
  );
}

function Gb({ className, clipId }: FlagProps & { clipId: string }) {
  return (
    <svg viewBox="0 0 60 30" className={className} aria-hidden="true" focusable="false">
      <clipPath id={clipId}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <rect width="60" height="30" fill="#012169" />
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
      <path
        d="M0,0 L60,30 M60,0 L0,30"
        clipPath={`url(#${clipId})`}
        stroke="#c8102e"
        strokeWidth="4"
      />
      <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
      <path d="M30,0 v30 M0,15 h60" stroke="#c8102e" strokeWidth="6" />
    </svg>
  );
}

export function Flag({
  lang,
  className,
  clipId,
}: {
  lang: Lang;
  className?: string;
  /** Unique per rendered instance — the Union Jack needs a clip path. */
  clipId: string;
}) {
  if (lang === "de") return <De className={className} />;
  if (lang === "tr") return <Tr className={className} />;
  return <Gb className={className} clipId={clipId} />;
}
