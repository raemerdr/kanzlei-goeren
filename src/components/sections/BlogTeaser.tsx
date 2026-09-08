import Image from "next/image";
import Link from "next/link";
import styles from "./BlogTeaser.module.css";
import type { Dictionary, Lang } from "@/content/types";
import { routes } from "@/lib/routes";

export function BlogTeaser({ lang, t }: { lang: Lang; t: Dictionary }) {
  const [featured, ...rest] = t.blog.posts;

  return (
    <section
      id="blog"
      aria-labelledby="blog-title"
      className="anchor section section--paper"
    >
      <div className="container">
        <div className="sectionHead reveal">
          <p className="eyebrow">{t.blog.label}</p>
          <h2 id="blog-title" className="h2">
            {t.blog.title}
          </h2>
        </div>

        <div className={`${styles.layout} reveal`}>
          {[featured, ...rest].map((post, index) => (
            <article
              key={post.slug}
              className={`${styles.card} ${index === 0 ? styles["card--featured"] : ""}`}
            >
              <div className={styles.frame}>
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes={index === 0 ? "(max-width: 900px) 100vw, 60vw" : "(max-width: 900px) 100vw, 30vw"}
                />
              </div>
              <div className={styles.body}>
                <p className={styles.meta}>
                  {post.category}
                  <span aria-hidden="true"> · </span>
                  <time dateTime={post.iso}>{post.date}</time>
                </p>
                <h3 className={`h3 ${styles.title}`}>{post.title}</h3>
                <p className={`body ${styles.excerpt}`}>{post.excerpt}</p>
                <Link
                  href={routes.post(lang, post.slug)}
                  aria-label={`${t.blog.moreTo} ${post.title}`}
                  className={`linkArrow ${styles.more}`}
                >
                  {t.blog.more}
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className={styles.all}>
          <Link href={routes.blog(lang)} className="btn btn--secondary">
            {t.blog.all}
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
