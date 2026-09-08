import Link from "next/link";
import styles from "./PageHeader.module.css";
import { LangSwitch } from "./LangSwitch";
import { Logo } from "./Logo";
import { SITE } from "@/content";
import type { Lang } from "@/content/types";
import { routes } from "@/lib/routes";

type PageHeaderProps = {
  lang: Lang;
  cta: string;
  homeLabel: string;
  languageLabel: string;
};

/** Sub-page header: wordmark, language switch and CTA — no navigation. */
export function PageHeader({ lang, cta, homeLabel, languageLabel }: PageHeaderProps) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Logo href={routes.home(lang)} label={`${SITE.shortName} – ${homeLabel}`} />
        <div className={styles.actions}>
          <LangSwitch current={lang} label={languageLabel} />
          <Link href={routes.contact(lang)} className={`btn ${styles.cta}`}>
            {cta}
          </Link>
        </div>
      </div>
    </header>
  );
}
