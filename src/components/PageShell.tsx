import Link from "next/link";
import styles from "./PageShell.module.css";
import { PageFooter } from "./PageFooter";
import { PageHeader } from "./PageHeader";
import type { Dictionary, Lang } from "@/content/types";
import { routes } from "@/lib/routes";

type PageShellProps = {
  lang: Lang;
  t: Dictionary;
  /** Breadcrumb tail, e.g. "Blog" or "Rechtsgebiete". */
  eyebrow: string;
  title: string;
  lead: string;
  children: React.ReactNode;
};

/** Shared frame for every sub-page: header, beige page head, content, footer. */
export function PageShell({ lang, t, eyebrow, title, lead, children }: PageShellProps) {
  return (
    <div className={styles.page}>
      <PageHeader
        lang={lang}
        cta={t.cta}
        homeLabel={t.page.home}
        languageLabel={t.languageLabel}
      />

      <main className={styles.main}>
        <div className={styles.head}>
          <div className="container">
            <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
              <Link href={routes.home(lang)}>{t.page.home}</Link>
              <span aria-hidden="true">/</span>
              <span>{eyebrow}</span>
            </nav>
            <h1 className={`display ${styles.title}`}>{title}</h1>
            <p className={`lead ${styles.lead}`}>{lead}</p>
          </div>
        </div>

        <div className={styles.content}>{children}</div>
      </main>

      <PageFooter lang={lang} t={t} />
    </div>
  );
}
