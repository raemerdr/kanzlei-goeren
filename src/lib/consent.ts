import { SITE } from "@/content";

export type Consent = "all" | "necessary";

/**
 * The cookie decision lives in localStorage, which the server cannot read. This
 * is a tiny external store so components can subscribe to it with
 * `useSyncExternalStore` — React then renders the server snapshot during
 * hydration and swaps in the real value afterwards, with no mismatch and no
 * flash of the banner for visitors who already decided.
 */
const listeners = new Set<() => void>();

let cache: Consent | null | undefined;

/** Sentinel used while rendering on the server: "decision not known here". */
export const CONSENT_UNKNOWN = "ssr" as const;

export function getConsent(): Consent | null {
  if (cache === undefined) {
    try {
      const stored = localStorage.getItem(SITE.consentKey);
      cache = stored === "all" || stored === "necessary" ? stored : null;
    } catch {
      // Storage blocked (private mode, strict settings) — treat as undecided.
      cache = null;
    }
  }
  return cache;
}

export function getServerConsent(): typeof CONSENT_UNKNOWN {
  return CONSENT_UNKNOWN;
}

export function setConsent(value: Consent): void {
  try {
    localStorage.setItem(SITE.consentKey, value);
  } catch {
    // Nothing to persist; the banner still closes for this session.
  }
  cache = value;
  for (const listener of listeners) listener();
}

export function subscribeConsent(listener: () => void): () => void {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}
