const FALLBACK_URL = "https://kanzlei-goeren.de";

/**
 * Absolute site origin, no trailing slash.
 *
 * `??` alone is not enough: an env var set to an empty string, or to a bare
 * domain with no scheme, is neither null nor undefined, and it reaches
 * `new URL(SITE.url)` in the root layout's metadataBase — which throws during
 * static generation and fails the whole build. Anything that is not a usable
 * absolute http(s) URL falls back instead.
 */
function siteUrl(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK_URL;
  try {
    const parsed = new URL(raw);
    if (parsed.protocol !== "http:" && parsed.protocol !== "https:") return FALLBACK_URL;
    return parsed.origin;
  } catch {
    return FALLBACK_URL;
  }
}

/** Kanzlei master data. Single source of truth for address, phone and links. */
export const SITE = {
  url: siteUrl(),
  name: "Rechtsanwaltskanzlei Meral Gören",
  shortName: "M | GÖREN",
  person: "Meral Gören",
  street: "R1 2,3",
  postalCode: "68161",
  city: "Mannheim",
  countryCode: "DE",
  phone: "+49 176 31186560",
  phoneHref: "tel:+4917631186560",
  phoneE164: "+4917631186560",
  whatsapp: "https://wa.me/4917631186560",
  maps: "https://www.google.com/maps/search/?api=1&query=R1+2%2C3+68161+Mannheim",
  /** Cooperation partner for Turkish law. */
  partnerUrl: "https://www.hasandogru.de/en",

  /** localStorage key for the cookie-consent decision. */
  consentKey: "mgoeren-consent-v1",
} as const;
