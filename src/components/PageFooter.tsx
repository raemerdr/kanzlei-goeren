import Link from "next/link";
import styles from "./PageFooter.module.css";
import type { Dictionary, Lang } from "@/content/types";
import { routes } from "@/lib/routes";

/** Slim sub-page footer. */
export function PageFooter({ lang, t }: { lang: Lang; t: Dictionary }) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.links}>
          <Link href={routes.home(lang)}>{t.page.home}</Link>
          <Link href={routes.imprint(lang)}>{t.footer.imprint}</Link>
          <Link href={routes.privacy(lang)}>{t.footer.privacy}</Link>
        </div>
        <p className={styles.copyright}>{t.footer.copyright}</p>
      </div>
    </footer>
  );
}
