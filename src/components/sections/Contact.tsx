import styles from "./Contact.module.css";
import { ContactForm } from "../ContactForm";
import { SITE } from "@/content";
import type { Dictionary, Lang } from "@/content/types";

export function Contact({ lang, t }: { lang: Lang; t: Dictionary }) {
  const c = t.contact;

  return (
    <section id="kontakt" aria-labelledby="contact-title" className="anchor section section--paper">
      <div className="container">
        <div className="sectionHead reveal">
          <p className="eyebrow">{c.label}</p>
          <h2 id="contact-title" className="h2">
            {c.title}
          </h2>
          <p className="lead muted">{c.text}</p>
        </div>

        <div className={`${styles.panel} reveal`}>
          <div className={styles.main}>
            <ContactForm lang={lang} t={t} />
          </div>

          <address className={styles.aside}>
            <div className={styles.block}>
              <p className={styles.asideLabel}>{c.addressLabel}</p>
              <p className={styles.asideValue}>
                {SITE.name}
                <br />
                {SITE.street}
                <br />
                {SITE.postalCode} {SITE.city}
                <br />
                {c.country}
              </p>
            </div>

            <div className={styles.block}>
              <p className={styles.asideLabel}>{c.phoneLabel}</p>
              <a href={SITE.phoneHref} className={styles.asideValue}>
                {SITE.phone}
              </a>
              <a
                href={SITE.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {c.whatsapp}
                <span aria-hidden="true">↗</span>
              </a>
            </div>

            <div className={styles.block}>
              <p className={styles.asideLabel}>{c.hoursLabel}</p>
              <p className={styles.asideValue}>{c.hours}</p>
              <p className={styles.hoursNote}>{c.hoursNote}</p>
            </div>
          </address>
        </div>
      </div>
    </section>
  );
}
