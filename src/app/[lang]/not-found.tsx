import Link from "next/link";
import { PageShell } from "@/components/PageShell";
import { getDictionary } from "@/content";
import { routes } from "@/lib/routes";

/**
 * 404. `not-found.tsx` cannot read route params, so it renders in German —
 * the site's primary language.
 */
export default function NotFound() {
  const lang = "de" as const;
  const t = getDictionary(lang);

  return (
    <PageShell
      lang={lang}
      t={t}
      eyebrow="404"
      title="Seite nicht gefunden"
      lead="Die aufgerufene Seite existiert nicht oder wurde verschoben."
    >
      <Link href={routes.home(lang)} className="btn btn--secondary">
        {t.page.backHome}
      </Link>
    </PageShell>
  );
}
