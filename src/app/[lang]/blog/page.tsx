import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { PageShell } from "@/components/PageShell";
import { getDictionary, isLang } from "@/content";
import { altLanguages, localePath, routes } from "@/lib/routes";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDictionary(lang);
  return {
    title: t.page.blog.title,
    description: t.page.blog.lead,
    alternates: {
      canonical: localePath(lang, "/blog"),
      languages: altLanguages("/blog"),
    },
  };
}

export default async function BlogIndexPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <PageShell
      lang={lang}
      t={t}
      eyebrow={t.page.blog.eyebrow}
      title={t.page.blog.title}
      lead={t.page.blog.lead}
    >
      <div className={styles.grid}>
        {t.blog.posts.map((post) => (
          <article key={post.slug} className={styles.card}>
            <p className={styles.meta}>
              {post.category} · <time dateTime={post.iso}>{post.date}</time>
            </p>
            <h2 className={`h3 ${styles.title}`}>{post.title}</h2>
            <p className={`body ${styles.excerpt}`}>{post.excerpt}</p>
            <Link
              href={routes.post(lang, post.slug)}
              className={`linkArrow ${styles.link}`}
            >
              {t.page.more}
              <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
