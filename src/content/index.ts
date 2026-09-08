import { de } from "./de";
import { en } from "./en";
import { tr } from "./tr";
import { PUBLIC_LANGS, type Dictionary, type Lang } from "./types";

const DICTIONARIES: Record<Lang, Dictionary> = { de, tr, en };

export function getDictionary(lang: Lang): Dictionary {
  return DICTIONARIES[lang];
}

/** True only for a locale this build serves — pages notFound() otherwise. */
export function isLang(value: string): value is Lang {
  return PUBLIC_LANGS.includes(value as Lang);
}

export * from "./types";
export { SITE } from "./site";
