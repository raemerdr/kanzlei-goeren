import { SITE } from "@/content";
import type { Dictionary } from "@/content/types";

/** LegalService / LocalBusiness structured data, as specified in the design. */
export function JsonLd({ t }: { t: Dictionary }) {
  const data = {
    "@context": "https://schema.org",
    "@type": ["LegalService", "LocalBusiness"],
    name: SITE.name,
    alternateName: SITE.shortName,
    url: SITE.url,
    telephone: SITE.phoneE164,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.street,
      postalCode: SITE.postalCode,
      addressLocality: SITE.city,
      addressCountry: SITE.countryCode,
    },
    areaServed: SITE.city,
    knowsLanguage: ["de", "tr"],
    founder: { "@type": "Person", name: SITE.person, jobTitle: "Rechtsanwältin" },
    makesOffer: t.areas.items.map((area) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: area.title },
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: SITE.phoneE164,
      contactType: "customer service",
      availableLanguage: ["German", "Turkish"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
