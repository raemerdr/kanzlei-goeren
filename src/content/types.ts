export type Lang = "de" | "tr" | "en";

/** German is the primary language and is served from the root. */
export const LANGS: Lang[] = ["de", "tr", "en"];

export type AreaSlug =
  | "zivilrecht"
  | "arbeitsrecht"
  | "auslaenderrecht"
  | "familienrecht"
  | "verkehrsrecht";

/** A practice area. Used both as a landing-page card and as a full sub-page. */
export interface Area {
  slug: AreaSlug;
  /** Display number on the landing card: "01", "02", "03". */
  num: string;
  title: string;
  /** Short teaser on the landing card. */
  text: string;
  /** Lead paragraph in the sub-page header. */
  lead: string;
  topics: string[];
  how: string;
}

export interface Post {
  slug: string;
  category: string;
  /** Machine-readable date for <time datetime>. */
  iso: string;
  /** Localised display date. */
  date: string;
  title: string;
  excerpt: string;
  body: string[];
  /** Path under /public. */
  image: string;
}

export interface LegalSection {
  heading: string;
  paragraphs: string[];
}

export interface LegalPage {
  eyebrow: string;
  title: string;
  lead: string;
  sections: LegalSection[];
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    /** og:locale */
    locale: string;
  };
  cta: string;
  menuLabel: string;
  /** aria-label for the main navigation landmark. */
  navLabel: string;
  /** aria-label for the language switch group. */
  languageLabel: string;
  nav: {
    home: string;
    about: string;
    areas: string;
    blog: string;
    contact: string;
  };
  hero: {
    label: string;
    /** Split so the closing phrase can be emphasised against the rest. */
    title: { lead: string; accent: string };
    text: string;
    whatsapp: string;
  };
  areas: {
    label: string;
    title: string;
    text: string;
    more: string;
    /** Screen-reader prefix: "Mehr erfahren zu <Titel>". */
    moreTo: string;
    items: Area[];
  };
  about: {
    label: string;
    title: string;
    p1: string;
    p2: string;
    /** Training and focus areas — her own account. */
    background: string;
    cta: string;
  };
  why: {
    /** Eyebrow above the heading, as in every other section. */
    label: string;
    title: string;
    items: { title: string; text: string }[];
  };
  blog: {
    label: string;
    title: string;
    all: string;
    more: string;
    moreTo: string;
    posts: Post[];
  };
  contact: {
    label: string;
    title: string;
    text: string;
    name: string;
    email: string;
    phone: string;
    area: string;
    areaPlaceholder: string;
    message: string;
    consentA: string;
    consentLink: string;
    consentB: string;
    submit: string;
    sending: string;
    error: string;
    addressLabel: string;
    country: string;
    phoneLabel: string;
    whatsapp: string;
    hoursLabel: string;
    hours: string;
    hoursNote: string;
  };
  footer: {
    blurb: string;
    navTitle: string;
    areasTitle: string;
    contactTitle: string;
    imprint: string;
    privacy: string;
    copyright: string;
    callLink: string;
    waLink: string;
    formLink: string;
    route: string;
  };
  /** Cooperation partner for Turkish law. Facts are his own published ones. */
  partner: {
    label: string;
    title: string;
    text: string;
    firm: string;
    person: string;
    bio: string;
    locationsLabel: string;
    locations: string;
    languagesLabel: string;
    languages: string;
    areasLabel: string;
    areas: string[];
    cta: string;
  };
  cookie: {
    title: string;
    text: string;
    acceptAll: string;
    necessaryOnly: string;
    customize: string;
    save: string;
    necessary: string;
    necessaryText: string;
    stats: string;
    statsText: string;
  };
  /** Copy that only appears on sub-pages. */
  page: {
    home: string;
    more: string;
    allPosts: string;
    backHome: string;
    areaEyebrow: string;
    areaTopics: string;
    areaHow: string;
    areaAside: string;
    otherAreas: string;
    /** Shown under every article — general information, not advice. */
    postDisclaimer: string;
    legalNote: string;
    blog: { eyebrow: string; title: string; lead: string };
    danke: {
      eyebrow: string;
      title: string;
      lead: string;
      body: string;
      urgent: string;
    };
    impressum: LegalPage;
    datenschutz: LegalPage;
  };
}
