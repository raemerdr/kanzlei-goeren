import Image from "next/image";

import styles from "./Partner.module.css";
import { SITE } from "@/content";
import type { Dictionary } from "@/content/types";

/**
 * Cooperation partner for Turkish law.
 *
 * One card, split into a light panel that explains the cooperation and a navy
 * rail that carries his details — so the block reads as a single object rather
 * than two floating boxes. The heading comes first in the DOM, and the rail's
 * only focusable element is the outbound link, so visual and focus order agree.
 *
 * Every fact in the rail — bar admissions, the court listing, offices and
 * languages, and the portrait — is taken from the partner's own published
 * site; nothing is inferred. His photograph sits at the head of the rail and
 * dissolves into the navy, so the copy below it always has a clean ground.
 */
export function Partner({ t }: { t: Dictionary }) {
  const p = t.partner;

  return (
    <section aria-labelledby="partner-title" className="section section--paperDeep">
      <div className="container">
        <div className={`${styles.card} reveal`}>
          <div className={styles.panel}>
            <p className="eyebrow">{p.label}</p>
            <h2 id="partner-title" className={`h2 ${styles.title}`}>
              {p.title}
            </h2>
            <p className={`lead ${styles.text}`}>{p.text}</p>

            <p className={styles.areasLabel}>{p.areasLabel}</p>
            <ul className={styles.areas}>
              {p.areas.map((area) => (
                <li key={area} className={styles.area}>
                  {area}
                </li>
              ))}
            </ul>
          </div>

          <aside className={`onDark ${styles.identity}`}>
            <Image
              src="/images/partner-dogru.avif"
              alt={p.person}
              width={621}
              height={528}
              sizes="(max-width: 899px) 100vw, 480px"
              className={styles.photo}
            />

            <h3 className={`h3 ${styles.firm}`}>{p.firm}</h3>
            <p className={styles.person}>{p.person}</p>
            <p className={`body ${styles.bio}`}>{p.bio}</p>

            <dl className={styles.meta}>
              <div className={styles.metaRow}>
                <dt className={styles.metaKey}>{p.locationsLabel}</dt>
                <dd className={styles.metaValue}>{p.locations}</dd>
              </div>
              <div className={styles.metaRow}>
                <dt className={styles.metaKey}>{p.languagesLabel}</dt>
                <dd className={styles.metaValue}>{p.languages}</dd>
              </div>
            </dl>

            <a
              href={SITE.partnerUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn btn--onDark ${styles.cta}`}
            >
              {p.cta}
              <span aria-hidden="true">↗</span>
            </a>
          </aside>
        </div>
      </div>
    </section>
  );
}
