import styles from "./LegalBody.module.css";
import type { LegalSection } from "@/content/types";

export function LegalBody({
  sections,
  note,
}: {
  sections: LegalSection[];
  note: string;
}) {
  return (
    <div className={styles.wrap}>
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className={`h4 ${styles.heading}`}>{section.heading}</h2>
          {section.paragraphs.map((paragraph, index) => (
            <p key={index} className={`body ${styles.paragraph}`}>
              {paragraph}
            </p>
          ))}
        </section>
      ))}
      <p className="note">{note}</p>
    </div>
  );
}
