import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "./page.module.css";
import { PageShell } from "@/components/PageShell";
import { getDictionary, isLang } from "@/content";
import type { Lang } from "@/content/types";
import { altLanguages, localePath, routes } from "@/lib/routes";

type Props = { params: Promise<{ lang: string; slug: string }> };

function findPost(lang: Lang, slug: string) {
  return getDictionary(lang).blog.posts.find((post) => post.slug === slug);
}

// Slugs are shared across languages; `lang` comes from the parent layout.
export function generateStaticParams() {
  return getDictionary("de").blog.posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLang(lang)) return {};
  const post = findPost(lang, slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: localePath(lang, `/blog/${slug}`),
      languages: altLanguages(`/blog/${slug}`),
    },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.iso,
      images: [post.image],
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);
  const post = findPost(lang, slug);
  if (!post) notFound();

  return (
    <PageShell
      lang={lang}
      t={t}
      eyebrow={t.page.blog.eyebrow}
      title={post.title}
      lead={post.excerpt}
    >
      <article className={styles.article}>
        <p className={styles.meta}>
          {post.category} · <time dateTime={post.iso}>{post.date}</time>
        </p>
        {post.body.map((paragraph) => (
          <p key={paragraph} className={`lead ${styles.paragraph}`}>
            {paragraph}
          </p>
        ))}
        <p className="note">{t.page.postDisclaimer}</p>
        <Link href={routes.blog(lang)} className={`btn btn--secondary ${styles.back}`}>
          {t.page.allPosts}
        </Link>
      </article>
    </PageShell>
  );
}
