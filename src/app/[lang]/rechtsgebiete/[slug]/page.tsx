import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { PageShell } from "@/components/PageShell";
import { getDictionary, isLang, SITE } from "@/content";
import type { Lang } from "@/content/types";
import { altLanguages, localePath, routes } from "@/lib/routes";

type Props = { params: Promise<{ lang: string; slug: string }> };

function findArea(lang: Lang, slug: string) {
  return getDictionary(lang).areas.items.find((area) => area.slug === slug);
}

// Slugs are shared across languages; `lang` comes from the parent layout.
export function generateStaticParams() {
  return getDictionary("de").areas.items.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang)) return {};
  const area = findArea(lang, slug);
  if (!area) return {};
  return {
    title: area.title,
    description: area.lead,
    alternates: {
      canonical: localePath(lang, `/rechtsgebiete/${slug}`),
      languages: altLanguages(`/rechtsgebiete/${slug}`),
    },
  };
}

export default async function AreaPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);
  const area = findArea(lang, slug);
  if (!area) notFound();

  const otherAreas = t.areas.items.filter((item) => item.slug !== area.slug);

  return (
    <PageShell
      lang={lang}
      t={t}
      eyebrow={t.page.areaEyebrow}
      title={area.title}
      lead={area.lead}
    >
      <div className={styles.layout}>
        <div className={styles.main}>
          <div>
            <h2 className={`h4 ${styles.heading}`}>{t.page.areaTopics}</h2>
            <ul className={styles.topics}>
              {area.topics.map((topic) => (
                <li key={topic} className={styles.topic}>
                  {topic}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className={`h4 ${styles.heading}`}>{t.page.areaHow}</h2>
            <p className={`lead ${styles.how}`}>{area.how}</p>
          </div>
        </div>

        <aside className={styles.aside}>
          <h2 className={`h4 ${styles.heading}`}>{t.cta}</h2>
          <p className={`body ${styles.asideText}`}>{t.page.areaAside}</p>
          <Link href={routes.contact(lang)} className="btn btn--primary">
            {t.cta}
          </Link>
          <a
            href={SITE.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn--secondary"
          >
            WhatsApp
          </a>
        </aside>
      </div>

      <nav aria-label={t.page.otherAreas} className={styles.others}>
        {otherAreas.map((other) => (
          <Link key={other.slug} href={routes.area(lang, other.slug)} className="linkArrow">
            {other.title}
            <span aria-hidden="true">→</span>
          </Link>
        ))}
      </nav>
    </PageShell>
  );
}
