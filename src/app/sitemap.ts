import type { MetadataRoute } from "next";
import { getDictionary, SITE } from "@/content";
import { LANGS } from "@/content/types";
import { localePath } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const de = getDictionary("de");

  const paths = [
    "/",
    "/blog",
    "/impressum",
    "/datenschutz",
    ...de.areas.items.map((area) => `/rechtsgebiete/${area.slug}`),
    ...de.blog.posts.map((post) => `/blog/${post.slug}`),
  ];

  return paths.flatMap((path) =>
    LANGS.map((lang) => ({
      url: `${SITE.url}${localePath(lang, path)}`,
      lastModified: new Date(),
      changeFrequency: path === "/" ? ("weekly" as const) : ("monthly" as const),
      priority: path === "/" ? 1 : 0.7,
      alternates: {
        languages: Object.fromEntries(
          LANGS.map((alt) => [alt, `${SITE.url}${localePath(alt, path)}`]),
        ),
      },
    })),
  );
}
