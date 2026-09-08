import Image from "next/image";
import Link from "next/link";
import styles from "./About.module.css";
import type { Dictionary } from "@/content/types";

export function About({ t }: { t: Dictionary }) {
  return (
    <section
      id="ueber-mich"
      aria-labelledby="about-title"
      className={`anchor section section--dark onDark ${styles.section}`}
    >
      <div className={styles.media}>
        <Image
          src="/images/about-meral-desk.jpg"
          alt=""
          fill
          sizes="100vw"
          quality={85}
        />
      </div>
      <div aria-hidden="true" className={styles.scrim} />

      <div className="container">
        <div className={`${styles.inner} reveal`}>
          <div className={styles.copy}>
            <p className="eyebrow">{t.about.label}</p>
            <h2 id="about-title" className={`h2 ${styles.title}`}>
              {t.about.title}
            </h2>
            <p className={`lead ${styles.p1}`}>{t.about.p1}</p>
            <p className={`lead ${styles.p2}`}>{t.about.p2}</p>
            <p className={`lead ${styles.background}`}>{t.about.background}</p>
            <Link href="#kontakt" className={`btn btn--ghost ${styles.cta}`}>
              {t.about.cta}
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
