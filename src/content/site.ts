/** Kanzlei master data. Single source of truth for address, phone and links. */
export const SITE = {
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://kanzlei-goeren.de",
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
