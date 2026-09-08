import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { PageShell } from "@/components/PageShell";
import { getDictionary, isLang, SITE } from "@/content";
import { routes } from "@/lib/routes";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const page = getDictionary(lang).page.danke;
  return {
    title: page.title,
    description: page.lead,
    // Confirmation pages should never rank or be crawled.
    robots: { index: false, follow: false },
  };
}

export default async function DankePage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);
  const page = t.page.danke;

  return (
    <PageShell
      lang={lang}
      t={t}
      eyebrow={page.eyebrow}
      title={page.title}
      lead={page.lead}
    >
      <div className={styles.wrap}>
        <p className={`lead ${styles.body}`}>{page.body}</p>
        <p className={`lead ${styles.body}`}>
          {page.urgent}{" "}
          <a href={SITE.phoneHref} className={styles.phone}>
            {SITE.phone}
          </a>
        </p>
        <Link href={routes.home(lang)} className="btn btn--secondary">
          {t.page.backHome}
        </Link>
      </div>
    </PageShell>
  );
}
