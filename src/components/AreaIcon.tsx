import type { AreaSlug } from "@/content/types";

/**
 * One line icon per practice area. Stroked in currentColor at 1.5px on a 24px
 * grid, so they sit at the same weight as the rest of the interface.
 */
const PATHS: Record<AreaSlug, React.ReactNode> = {
  // Contract — general civil law.
  zivilrecht: (
    <>
      <path d="M14 3H7.5A2.5 2.5 0 0 0 5 5.5v13A2.5 2.5 0 0 0 7.5 21h9a2.5 2.5 0 0 0 2.5-2.5V8z" />
      <path d="M14 3v5h5" />
      <path d="M8.5 13h7M8.5 16.5h4.5" />
    </>
  ),
  // Briefcase — employment law.
  arbeitsrecht: (
    <>
      <rect x="3" y="7.5" width="18" height="12.5" rx="2.5" />
      <path d="M9 7.5v-1A2.5 2.5 0 0 1 11.5 4h1A2.5 2.5 0 0 1 15 6.5v1" />
      <path d="M3 12.5h18" />
    </>
  ),
  // Globe — immigration law.
  auslaenderrecht: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M3.5 12h17" />
      <ellipse cx="12" cy="12" rx="3.8" ry="8.5" />
    </>
  ),
  // Two figures — family law.
  familienrecht: (
    <>
      <circle cx="9" cy="8" r="3.2" />
      <path d="M3 20a6 6 0 0 1 12 0" />
      <circle cx="17.3" cy="9.8" r="2.4" />
      <path d="M15.6 14.2A4.9 4.9 0 0 1 21 19" />
    </>
  ),
  // Car — road traffic law.
  verkehrsrecht: (
    <>
      <path d="M4.5 12.5 6 8.6A2 2 0 0 1 7.9 7.3h8.2a2 2 0 0 1 1.9 1.3l1.5 3.9" />
      <rect x="3" y="12.5" width="18" height="5.5" rx="1.8" />
      <circle cx="7.6" cy="18" r="1.4" />
      <circle cx="16.4" cy="18" r="1.4" />
    </>
  ),
};

export function AreaIcon({ slug, className }: { slug: AreaSlug; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {PATHS[slug]}
    </svg>
  );
}
