import { LANGS, PUBLIC_LANGS, type Lang } from "@/content/types";

/**
 * German is the primary language and lives at the root; every other language is
 * prefixed with its code (/tr, /en). `proxy.ts` rewrites unprefixed requests
 * onto the /de segment, so every page file lives under src/app/[lang].
 */
export function localePath(lang: Lang, path = "/"): string {
  const clean = path === "/" ? "" : path;
  return lang === "de" ? clean || "/" : `/${lang}${clean}`;
}

/** Locale root without a trailing slash: "" for DE, "/tr" or "/en" otherwise. */
function base(lang: Lang): string {
  return lang === "de" ? "" : `/${lang}`;
}

export const routes = {
  home: (lang: Lang) => localePath(lang),
  contact: (lang: Lang) => `${base(lang) || "/"}#kontakt`,
  areasAnchor: (lang: Lang) => `${base(lang) || "/"}#rechtsgebiete`,
  blog: (lang: Lang) => localePath(lang, "/blog"),
  post: (lang: Lang, slug: string) => localePath(lang, `/blog/${slug}`),
  area: (lang: Lang, slug: string) => localePath(lang, `/rechtsgebiete/${slug}`),
  imprint: (lang: Lang) => localePath(lang, "/impressum"),
  privacy: (lang: Lang) => localePath(lang, "/datenschutz"),
  thanks: (lang: Lang) => localePath(lang, "/danke"),
};

/**
 * Drop a leading locale segment. Accepts both the public form ("/blog") and the
 * internal, rewritten form ("/de/blog"), so it is safe to call on either side of
 * the proxy rewrite.
 */
export function stripLocale(pathname: string): string {
  const match = pathname.match(new RegExp(`^/(${LANGS.join("|")})(?=/|$)`));
  const rest = match ? pathname.slice(match[0].length) : pathname;
  return rest || "/";
}

/** Swap the locale prefix on the current pathname, for the DE/TR switch. */
export function swapLocale(pathname: string, target: Lang): string {
  return localePath(target, stripLocale(pathname));
}

/** hreflang map for a locale-independent path such as "/blog". */
export function altLanguages(path = "/") {
  return {
    ...Object.fromEntries(PUBLIC_LANGS.map((lang) => [lang, localePath(lang, path)])),
    "x-default": localePath("de", path),
  };
}
