import { NextResponse, type NextRequest } from "next/server";
import { PUBLIC_LANGS } from "@/content/types";

/**
 * Locale routing.
 *
 * German is the primary language and is served from the root ("/", "/blog", …);
 * every other language is served under its code ("/tr", "/en"). All of them are
 * rendered by the same page files under app/[lang], so unprefixed requests are
 * rewritten onto the internal /de segment, and any direct hit on /de is
 * redirected away to keep one canonical URL per page.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/de" || pathname.startsWith("/de/")) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice("/de".length) || "/";
    return NextResponse.redirect(url, 308);
  }

  const prefixed = PUBLIC_LANGS.some(
    (lang) => lang !== "de" && (pathname === `/${lang}` || pathname.startsWith(`/${lang}/`)),
  );
  if (prefixed) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = `/de${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  // Everything except API routes, Next internals and files with an extension.
  matcher: ["/((?!api/|_next/|.*\\.).*)"],
};
