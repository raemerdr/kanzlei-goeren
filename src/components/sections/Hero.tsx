import Image from "next/image";
import Link from "next/link";
import styles from "./Hero.module.css";
import { SITE } from "@/content";
import type { Dictionary } from "@/content/types";

export function Hero({ t }: { t: Dictionary }) {
  return (
    <section aria-labelledby="hero-title" className={`onDark ${styles.hero}`}>
      <div className={styles.media}>
        <Image src="/images/hero-meral-v2.jpg" alt="" fill priority sizes="100vw" quality={85} />
      </div>

      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={`eyebrow ${styles.label}`}>{t.hero.label}</p>
          <h1 id="hero-title" className={`display ${styles.title}`}>
            {t.hero.title.lead}{" "}
            <span className={styles.accent}>{t.hero.title.accent}</span>
          </h1>
          <p className={`lead ${styles.text}`}>{t.hero.text}</p>
          <div className={styles.actions}>
            <Link href="#kontakt" className="btn btn--onDark">
              {t.cta}
              <span aria-hidden="true">→</span>
            </Link>
            <a
              href={SITE.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--ghost"
            >
              {t.hero.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
