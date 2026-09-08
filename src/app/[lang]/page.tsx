import { notFound } from "next/navigation";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd } from "@/components/JsonLd";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import { About } from "@/components/sections/About";
import { Areas } from "@/components/sections/Areas";
import { BlogTeaser } from "@/components/sections/BlogTeaser";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Partner } from "@/components/sections/Partner";
import { Why } from "@/components/sections/Why";
import { getDictionary, isLang } from "@/content";
import { buildNav } from "@/lib/nav";

export default async function LandingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);

  return (
    <>
      <SiteHeader
        lang={lang}
        nav={buildNav(lang, t)}
        cta={t.cta}
        menuLabel={t.menuLabel}
        navLabel={t.navLabel}
        languageLabel={t.languageLabel}
        homeHref="#start"
      />

      <main id="start" className="anchor">
        <Hero t={t} />
        <Areas lang={lang} t={t} />
        <About t={t} />
        <Why t={t} />
        <Partner t={t} />
        <BlogTeaser lang={lang} t={t} />
        <Contact lang={lang} t={t} />
      </main>

      <SiteFooter lang={lang} t={t} />
      <CookieBanner lang={lang} t={t} />
      <JsonLd t={t} />
    </>
  );
}
