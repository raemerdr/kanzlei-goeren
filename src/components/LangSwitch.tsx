"use client";

import { useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./LangSwitch.module.css";
import { Flag } from "./Flags";
import { PUBLIC_LANGS, type Lang } from "@/content/types";
import { swapLocale } from "@/lib/routes";

/** Endonyms, so each option is legible to the reader who wants it. */
const LANGUAGE_NAMES: Record<Lang, string> = {
  de: "Deutsch",
  tr: "Türkçe",
  en: "English",
};

type LangSwitchProps = {
  current: Lang;
  /** Localised label for the group, e.g. "Sprache". */
  label: string;
};

/**
 * DE/TR/EN switch. Each language is a real URL, so the choice survives sharing,
 * bookmarking and crawling — the prototype kept it in localStorage only.
 *
 * The flags are decorative; every link carries its language name as visually
 * hidden text, which is what a screen reader announces.
 */
export function LangSwitch({ current, label }: LangSwitchProps) {
  const pathname = usePathname() ?? "/";
  const uid = useId();

  return (
    <div role="group" aria-label={label} className={styles.group}>
      {PUBLIC_LANGS.map((lang) => (
        <Link
          key={lang}
          href={swapLocale(pathname, lang)}
          hrefLang={lang}
          title={LANGUAGE_NAMES[lang]}
          aria-current={lang === current ? "true" : undefined}
          className={styles.link}
        >
          <Flag lang={lang} className={styles.flag} clipId={`${uid}-${lang}`} />
          <span className={styles.underline} aria-hidden="true" />
          <span className="srOnly">{LANGUAGE_NAMES[lang]}</span>
        </Link>
      ))}
    </div>
  );
}
