import styles from "./Why.module.css";
import type { Dictionary } from "@/content/types";

export function Why({ t }: { t: Dictionary }) {
  return (
    <section aria-labelledby="why-title" className="section section--accent onDark">
      <div className="container">
        <div className="sectionHead reveal">
          <p className="eyebrow">{t.why.label}</p>
          <h2 id="why-title" className="h2">
            {t.why.title}
          </h2>
        </div>

        <div className={`${styles.grid} reveal`}>
          {t.why.items.map((item, index) => (
            <article key={item.title} className={styles.item}>
              <span className={styles.num}>{`0${index + 1}`}</span>
              <h3 className={`h4 ${styles.itemTitle}`}>{item.title}</h3>
              <p className={`body ${styles.itemText}`}>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
