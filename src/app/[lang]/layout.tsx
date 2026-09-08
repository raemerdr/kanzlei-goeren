import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fontVariables } from "../fonts";
import "../globals.css";
import { getDictionary, isLang, SITE } from "@/content";
import { LANGS, type Lang } from "@/content/types";
import { altLanguages, localePath } from "@/lib/routes";

export function generateStaticParams() {
  return LANGS.map((lang) => ({ lang }));
}

type LayoutProps = {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const t = getDictionary(lang);

  return {
    metadataBase: new URL(SITE.url),
    title: { default: t.meta.title, template: `%s – ${SITE.shortName}` },
    description: t.meta.description,
    alternates: {
      canonical: localePath(lang),
      languages: altLanguages("/"),
    },
    openGraph: {
      type: "website",
      siteName: `${SITE.shortName} – ${SITE.name}`,
      title: t.meta.title,
      description: t.meta.description,
      locale: t.meta.locale,
      alternateLocale: LANGS.filter((other) => other !== lang).map(
        (other) => getDictionary(other as Lang).meta.locale,
      ),
      url: localePath(lang),
    },
    robots: { index: true, follow: true },
  };
}

export default async function LangLayout({ children, params }: LayoutProps) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();

  return (
    <html lang={lang} data-theme="grey" className={fontVariables}>
      <body>{children}</body>
    </html>
  );
}
