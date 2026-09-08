import { notFound } from "next/navigation";

/**
 * Without this, a mistyped URL never matches a route and Next renders its own
 * bare 404 — no header, no branding, no way back. Matching everything left over
 * and calling notFound() hands the request to [lang]/not-found.tsx instead.
 * More specific routes still win, so this only ever catches genuine misses.
 */
export default function CatchAll(): never {
  notFound();
}
