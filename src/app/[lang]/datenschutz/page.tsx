import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LegalBody } from "@/components/LegalBody";
import { PageShell } from "@/components/PageShell";
import { getDictionary, isLang } from "@/content";
import { altLanguages, localePath } from "@/lib/routes";

const PATH = "/datenschutz";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLang(lang)) return {};
  const page = getDictionary(lang).page.datenschutz;
  return {
    title: page.title,
    description: page.lead,
    alternates: { canonical: localePath(lang, PATH), languages: altLanguages(PATH) },
  };
}

export default async function DatenschutzPage({ params }: Props) {
  const { lang } = await params;
  if (!isLang(lang)) notFound();
  const t = getDictionary(lang);
  const page = t.page.datenschutz;

  return (
    <PageShell lang={lang} t={t} eyebrow={page.eyebrow} title={page.title} lead={page.lead}>
      <LegalBody sections={page.sections} note={t.page.legalNote} />
    </PageShell>
  );
}
