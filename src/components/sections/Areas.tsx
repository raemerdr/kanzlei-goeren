import Link from "next/link";
import styles from "./Areas.module.css";
import { AreaIcon } from "../AreaIcon";
import type { Dictionary, Lang } from "@/content/types";
import { routes } from "@/lib/routes";

export function Areas({ lang, t }: { lang: Lang; t: Dictionary }) {
  return (
    <section
      id="rechtsgebiete"
      aria-labelledby="areas-title"
      className="anchor section section--paper"
    >
      <div className="container">
        <div className={`sectionHead reveal`}>
          <p className="eyebrow">{t.areas.label}</p>
          <h2 id="areas-title" className="h2">
            {t.areas.title}
          </h2>
          <p className="lead muted">{t.areas.text}</p>
        </div>

        <div className={`${styles.grid} reveal`}>
          {t.areas.items.map((area) => (
            <article key={area.slug} className={styles.card}>
              <span aria-hidden="true" className={styles.badge}>
                <AreaIcon slug={area.slug} className={styles.icon} />
              </span>
              <h3 className={`h3 ${styles.cardTitle}`}>{area.title}</h3>
              <p className={`body ${styles.cardText}`}>{area.text}</p>
              <Link
                href={routes.area(lang, area.slug)}
                aria-label={`${t.areas.moreTo} ${area.title}`}
                className={`linkArrow ${styles.more}`}
              >
                {t.areas.more}
                <span aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
