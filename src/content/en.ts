import type { Dictionary } from "./types";

/**
 * English is a reading translation. Consultations are held in German and
 * Turkish, and the German versions of the Impressum and the privacy notice
 * remain the legally binding ones — both facts are stated in the copy below.
 */
export const en: Dictionary = {
  meta: {
    title: "Meral Gören, Attorney at Law – Mannheim | German & Turkish",
    description:
      "Law office of Meral Gören, Mannheim: general civil law, employment law, immigration law, family law and road traffic law. Advice in German and Turkish.",
    locale: "en_GB",
  },
  cta: "Request a consultation",
  menuLabel: "Menu",
  navLabel: "Main navigation",
  languageLabel: "Language",
  nav: {
    home: "Home",
    about: "About me",
    areas: "Practice areas",
    blog: "Blog",
    contact: "Contact",
  },
  hero: {
    label: "Meral Gören, Attorney at Law · Mannheim",
    title: {
      lead: "Trusted advice for",
      accent: "your next decision.",
    },
    text: "In German and Turkish, across civil, employment, immigration, family and road traffic law. You learn where you stand – and what to do next.",
    whatsapp: "Message on WhatsApp",
  },
  areas: {
    label: "Practice areas",
    title: "Five focus areas. One person to talk to.",
    text: "I represent you in five areas of law – personally, in plain language, and in both languages.",
    more: "Learn more",
    moreTo: "Learn more about",
    items: [
      {
        slug: "zivilrecht",
        num: "01",
        title: "General Civil Law",
        text: "Contracts, claims, sales law, tenancy law, damages.",
        lead: "Contracts, claims and disputes between private individuals or with companies.",
        topics: [
          "Reviewing and drafting contracts",
          "Claims and payment orders",
          "Sales law and warranty",
          "Tenancy law",
          "Damages",
          "Out-of-court settlement",
        ],
        how: "I review your documents, weigh up the prospects and the costs, and represent you out of court or before the courts.",
      },
      {
        slug: "arbeitsrecht",
        num: "02",
        title: "Employment Law",
        text: "Dismissal, formal warnings, contracts, pay and holiday entitlements.",
        lead: "From unfair dismissal to the final payslip – employment matters usually run on short deadlines.",
        topics: [
          "Unfair dismissal claims",
          "Formal warnings",
          "Employment and termination agreements",
          "Pay and holiday entitlements",
          "Employment references",
          "Redundancy",
        ],
        how: "For a dismissal the deadline to file is three weeks from receipt. We check the deadline first, then the merits – and establish whether reinstatement or a settlement is what you are after.",
      },
      {
        slug: "auslaenderrecht",
        num: "03",
        title: "Immigration Law",
        text: "Residence permits, naturalisation, family reunification, settlement permits.",
        lead: "Residence, citizenship and family reunification – procedures that live on deadlines and complete paperwork.",
        topics: [
          "Residence permits and extensions",
          "Naturalisation",
          "Family reunification",
          "Visas and permanent settlement permits",
          "Expulsion and removal",
          "Formal undertakings of support",
        ],
        how: "We establish your status and the competent authorities first, assemble the paperwork in full, and deal with the immigration office alongside you – in German and in Turkish.",
      },
      {
        slug: "familienrecht",
        num: "04",
        title: "Family Law",
        text: "Divorce, maintenance, custody and contact rights, prenuptial agreements.",
        lead: "Separation, divorce, maintenance and children – with an eye on both German and Turkish law where both apply.",
        topics: [
          "Divorce",
          "Separation and child maintenance",
          "Custody and contact rights",
          "Equalisation of accrued gains and division of assets",
          "Prenuptial agreements",
          "Recognition of foreign judgments",
        ],
        how: "Family proceedings need calm and clear steps. First we establish which law applies, then how to proceed.",
      },
      {
        slug: "verkehrsrecht",
        num: "05",
        title: "Road Traffic Law",
        text: "Fines, driving bans, accident claims and damages.",
        lead: "After an accident or a fixed-penalty notice, how quickly you respond often decides the outcome.",
        topics: [
          "Fixed-penalty notices and licence points",
          "Driving bans and licence withdrawal",
          "Accident claims",
          "Damages and compensation for pain and suffering",
          "Disputes with the motor insurer",
          "Traffic criminal law",
        ],
        how: "You have only two weeks to appeal a fixed-penalty notice. After an accident I review liability, the expert report and the insurer's offer before you sign anything.",
      },
    ],
  },
  about: {
    label: "About me",
    title: "Two languages. Two legal cultures.",
    p1: "I am Meral Gören, a lawyer in Mannheim. I advise in German and Turkish, and I know the questions that arise when lives run between Germany and Turkey.",
    p2: "You speak with me – not with an administrator. Every case is handled by me personally, from the first assessment through to the conclusion.",
    background:
      "After many years of legal study and the traineeship at the Regional Court – with stations at the court, the public prosecutor's office, public authorities and several law firms – I advise on all legal questions. My focus areas are general civil law, employment law, immigration law, family law and road traffic law.",
    cta: "Get in touch",
  },
  why: {
    label: "What to expect",
    title: "Why trust us",
    items: [
      {
        title: "German and Turkish",
        text: "Advice and correspondence in both languages – without an interpreter.",
      },
      {
        title: "Handled personally",
        text: "Your case stays with me – from the first consultation to the conclusion.",
      },
      {
        title: "Office in Mannheim",
        text: "R1 2,3, in the middle of the Quadrate. Appointments in person or by phone.",
      },
      {
        title: "Clear communication",
        text: "An assessment you can follow, transparent costs, no jargon without an explanation.",
      },
    ],
  },
  blog: {
    label: "Blog",
    title: "Latest articles",
    all: "All articles",
    more: "Read more",
    moreTo: "Read more:",
    posts: [
      {
        slug: "mietminderung-maengel",
        category: "Civil Law",
        iso: "2026-09-02",
        date: "2 September 2026",
        title: "Rent reduction: when you may withhold part of the rent",
        excerpt:
          "Mould, a broken boiler, building noise – when a defect entitles you to reduce the rent, and what you have to do first.",
        body: [
          "Where a flat is defective, the rent is reduced by operation of law (§ 536 BGB). That is an important difference from many other rights: you do not have to declare the reduction, it takes effect automatically. What is required is a defect that impairs the flat's fitness for its contractual use to more than an insignificant degree.",
          "Typical cases are mould, a heating failure during the heating season, leaking windows, water damage or prolonged building noise. Circumstances outside the flat can also amount to a defect if they noticeably impair living there.",
          "Notifying the defect is mandatory. Under § 536c BGB you must report it without undue delay. Fail to do so and you lose claims, and may even become liable in damages. So report the defect in writing, describe it specifically, and set a reasonable deadline for putting it right.",
          "Secure the evidence at the same time: dated photographs, a log with the times and duration of the disturbance – a noise diary where noise is the issue – witnesses, and the full correspondence. In a dispute it usually comes down to who can prove the defect and its extent.",
          "How much the rent is reduced by depends on the actual impairment. The reduction tables in circulation offer rough orientation at best; courts decide case by case. This is where the real risk lies: reduce by too much and you fall into arrears – and once arrears reach two months' rent the landlord may terminate without notice (§ 543(2) no. 3 BGB).",
          "The safe route is therefore to keep paying the rent in full, expressly subject to reclaim, and to recover the reduced amount afterwards. You preserve your claims that way without risking termination.",
          "There is no right of reduction if you knew of the defect when the contract was concluded (§ 536b BGB) or caused it yourself. That is another reason to record the condition of the flat carefully at handover.",
        ],
        image: "/images/post-tenancy.jpg",
      },
      {
        slug: "einbuergerung-2026",
        category: "Immigration Law",
        iso: "2026-08-12",
        date: "12 August 2026",
        title: "Naturalisation in 2026: the requirements that now apply",
        excerpt:
          "Length of residence, proof of language, means of support – an overview of the current requirements.",
        body: [
          "Since the reform of German citizenship law on 27 June 2024, naturalisation is generally possible after five years of lawful habitual residence rather than eight. Just as importantly, you no longer have to give up your existing citizenship as a rule. For many people who put the application off for years, that changes the calculation.",
          "The requirements in outline: a valid residence permit or a permanent right of residence, five years of lawful habitual residence in Germany, a secure livelihood, German at level B1, a passed naturalisation test, no relevant criminal convictions, and a commitment to the free democratic basic order.",
          "In practice, the livelihood requirement is where most applications stumble. As a rule you must be able to support yourself and your dependants without benefits under SGB II or SGB XII. There are narrowly drawn exceptions – for members of the former guest-worker generation, for example, or for people in full-time employment. Before you put the application aside, have it checked whether one of them applies to you.",
          "For the language requirement, a certificate at level B1 or a German school qualification is normally enough. The law provides for relief in cases of age, illness or disability.",
          "The reform also introduced an express commitment to the protection of human dignity and to Germany's particular historical responsibility. Offences motivated by antisemitism, racism or other contempt for human dignity rule out naturalisation.",
          "The rules on accelerated naturalisation for particular integration achievements have been the subject of repeated legislative change since 2024. Before you build your plans around that route, have the current position checked for your case.",
          "What to assemble now: unbroken evidence of your periods of residence and permits, income records for recent months, your pension record, your language certificate, the naturalisation test certificate and your identity documents. Gaps in the residence history are the most common cause of delay – and they can almost always be closed if you start early.",
        ],
        image: "/images/post-1.jpg",
      },
      {
        slug: "kuendigung-drei-wochen",
        category: "Employment Law",
        iso: "2026-07-28",
        date: "28 July 2026",
        title: "Dismissed – the first three weeks decide it",
        excerpt:
          "Why the deadline for an unfair dismissal claim matters so much, and what to do straight away.",
        body: [
          "When you receive a notice of dismissal, a three-week deadline runs from the moment it reaches you. Within that period the unfair dismissal claim must have arrived at the labour court (§ 4 KSchG). Miss it and the dismissal is deemed effective from the outset under § 7 KSchG – however open to challenge it might have been on the merits.",
          "What counts is when the notice reached you, not the date printed on it. Where it is put through the letterbox, the relevant day is the one on which the box would normally be emptied. So note immediately when and by what route you received it, and keep the envelope.",
          "The deadline applies even where the dismissal looks obviously void – because it is not signed by hand, comes from someone without authority to represent the employer, or overrides special protection based on pregnancy, parental leave or severe disability. Those objections must be raised within the three weeks too.",
          "Only exceptionally does § 5 KSchG allow a claim to be admitted late, where you were prevented from filing in time despite all reasonable care. Nobody should build their plans on that.",
          "Separately from the claim: register as seeking work with the employment agency within three days of learning of the dismissal (§ 38 SGB III), or you risk a reduction in your unemployment benefit. And do not sign anything in haste – a termination or settlement agreement can trigger a benefit suspension and gives away your negotiating position at the same time.",
          "Whether the outcome is reinstatement, a severance payment or an improved reference is usually decided at the conciliation hearing, which often takes place only a few weeks after the claim is filed. The three weeks are the way into that hearing. That is why the early phone call matters more than the perfectly prepared file.",
        ],
        image: "/images/post-2.jpg",
      },
      {
        slug: "scheidung-tuerkei",
        category: "Family Law",
        iso: "2026-07-09",
        date: "9 July 2026",
        title: "Divorce with a Turkish connection: which law applies?",
        excerpt: "German or Turkish family law – what the answer depends on.",
        body: [
          "Where spouses have connections to both Germany and Turkey, two questions have to be kept apart: which court has jurisdiction – and which law will that court apply? The answers do not necessarily coincide. A German court can apply Turkish law, and the reverse is equally possible.",
          "The international jurisdiction of German courts follows the Brussels IIb Regulation, which looks primarily to habitual residence: if both spouses live in Germany, the German courts have jurisdiction, even where both hold only Turkish nationality.",
          "Which law applies is determined by the Rome III Regulation. It applies even in relation to states that are not themselves party to it, and Turkey is one of those. The primary connecting factor is the spouses' habitual residence when the court is seised. If both live in Germany, German divorce law will normally be applied.",
          "The option of choosing the applicable law matters here: the spouses may agree, in notarised form, which law is to govern the divorce – Turkish law, for instance. That can make sense, but it does not extend to every ancillary matter. Maintenance, pension rights adjustment and matrimonial property each follow their own conflict-of-law rules.",
          "A divorce granted in Turkey is not automatically recognised in Germany. As a rule a recognition procedure before the competent state justice authority is required (§ 107 FamFG). Without that recognition you remain married in the eyes of German law – with all that follows for remarriage, inheritance and civil registration.",
          "The reverse applies too: a German divorce has to be registered in Turkey before it takes effect in the civil status register there. Both need to be planned for from the start. Anyone who pursues only one of the two procedures ends up with a civil status that is wrong in one of the two countries.",
          "For the consultation this means: first we establish jurisdiction and applicable law, then the ancillary matters, then recognition on the other side. Taken in that order, most later surprises can be avoided.",
        ],
        image: "/images/post-3.jpg",
      },
    ],
  },
  contact: {
    label: "Contact",
    title: "Request a consultation",
    text: "Describe your matter briefly. I will get back to you promptly.",
    name: "Name",
    email: "Email",
    phone: "Phone (optional)",
    area: "Area of law",
    areaPlaceholder: "Please choose",
    message: "Message",
    consentA: "I have read the",
    consentLink: "privacy notice",
    consentB: "and consent to my data being processed in order to handle my enquiry.",
    submit: "Send enquiry",
    sending: "Sending…",
    error: "Sending failed. Please try again or give me a call.",
    addressLabel: "Address",
    country: "Germany",
    phoneLabel: "Phone",
    whatsapp: "Open WhatsApp",
    hoursLabel: "Opening hours",
    hours: "Mon–Fri: [Placeholder: hours]",
    hoursNote: "Appointments by arrangement.",
  },
  footer: {
    blurb: "Legal advice in German and Turkish, in Mannheim.",
    navTitle: "Navigation",
    areasTitle: "Practice areas",
    contactTitle: "Contact",
    imprint: "Legal notice (Impressum)",
    privacy: "Privacy",
    copyright: "© 2026 Law Office of Meral Gören",
    callLink: "Call",
    waLink: "WhatsApp",
    formLink: "Contact form",
    route: "Directions",
  },
  partner: {
    label: "Cooperation",
    title: "Turkish law, handled from Mannheim.",
    text: "Divorces, estates and judgments often touch two legal systems at once. For everything that falls under Turkish law I work together with Doğru Kanzlei. Your matter stays in one pair of hands, and you do not have to travel to Turkey for it.",
    firm: "Doğru Kanzlei",
    person: "Avukat Hasan Doğru",
    bio: "Admitted to the Ankara Bar and, under § 207 BRAO, to the Karlsruhe Bar. Listed at Mannheim Local Court as an expert on Turkish law.",
    locationsLabel: "Offices",
    locations: "Mannheim · Ankara",
    languagesLabel: "Languages",
    languages: "Türkçe · Deutsch · English",
    areasLabel: "Where he supports you",
    areas: [
      "Recognition of German judgments in Turkey",
      "Divorce and family matters",
      "Inheritance and estates in Turkey",
      "Criminal proceedings in Turkey",
      "Powers of attorney and apostilles",
    ],
    cta: "Visit Doğru Kanzlei",
  },
  cookie: {
    title: "Cookies & privacy",
    text: "This website uses technically necessary cookies. Optional statistics cookies are only set with your consent (§ 25 TDDDG, Art. 6 GDPR).",
    acceptAll: "Accept all",
    necessaryOnly: "Necessary only",
    customize: "Customise",
    save: "Save selection",
    necessary: "Necessary",
    necessaryText: "Required for the site to work.",
    stats: "Statistics",
    statsText: "Anonymous usage statistics, to improve the site.",
  },
  page: {
    home: "Home",
    more: "Read more",
    allPosts: "All articles",
    backHome: "Back to the home page",
    areaEyebrow: "Practice areas",
    areaTopics: "Typical matters",
    areaHow: "How I work",
    areaAside: "Describe your matter briefly – in German or Turkish.",
    otherAreas: "Other practice areas",
    postDisclaimer:
      "This article is a general overview and does not replace advice on an individual case. What applies is the law in force at the time your matter arises.",
    legalNote:
      "Everything marked in square brackets is a placeholder and must be completed and legally reviewed by the client before publication.",
    blog: {
      eyebrow: "Blog",
      title: "Articles",
      lead: "Short and readable: current questions from civil, employment, immigration, family and road traffic law.",
    },
    danke: {
      eyebrow: "Contact",
      title: "Thank you for your enquiry",
      lead: "Your message has arrived.",
      body: "I will get back to you promptly – by email or by phone, depending on what you provided.",
      urgent: "In urgent cases you can reach me on",
    },
    impressum: {
      eyebrow: "Legal",
      title: "Legal notice (Impressum)",
      lead: "Information pursuant to § 5 DDG. The binding version is the German one.",
      sections: [
        {
          heading: "Provider",
          paragraphs: [
            "Rechtsanwaltskanzlei Meral Gören\nMeral Gören, Rechtsanwältin\nR1 2,3\n68161 Mannheim\nGermany",
          ],
        },
        {
          heading: "Contact",
          paragraphs: ["Phone: +49 176 31186560\nEmail: [Placeholder: email address]"],
        },
        {
          heading: "Professional title and bar association",
          paragraphs: [
            "Professional title: Rechtsanwältin (conferred in the Federal Republic of Germany)\nCompetent bar association: [Placeholder: Rechtsanwaltskammer]",
          ],
        },
        {
          heading: "Professional regulations",
          paragraphs: [
            "Federal Lawyers' Act (BRAO), Code of Conduct for Lawyers (BORA), Specialist Lawyers' Regulations (FAO), Lawyers' Remuneration Act (RVG), Code of Conduct for European Lawyers (CCBE). Available at www.brak.de.",
          ],
        },
        {
          heading: "Professional indemnity insurance",
          paragraphs: ["[Placeholder: insurer, address, territorial scope]"],
        },
        {
          heading: "VAT identification number",
          paragraphs: ["[Placeholder: VAT ID pursuant to § 27a UStG]"],
        },
        {
          heading: "Dispute resolution",
          paragraphs: [
            "The European Commission provides a platform for online dispute resolution: https://ec.europa.eu/consumers/odr. Regarding participation in dispute resolution proceedings before a consumer arbitration board: [Placeholder: willing / not willing].",
          ],
        },
      ],
    },
    datenschutz: {
      eyebrow: "Legal",
      title: "Privacy notice",
      lead: "Information on the processing of personal data pursuant to Art. 13 GDPR. The binding version is the German one.",
      sections: [
        {
          heading: "1. Controller",
          paragraphs: [
            "Meral Gören, Rechtsanwältin, R1 2,3, 68161 Mannheim, phone +49 176 31186560, email [Placeholder].",
          ],
        },
        {
          heading: "2. Hosting and server log files",
          paragraphs: [
            "When you access the website, the host [Placeholder: host] automatically processes your IP address, the time of access, the page requested and your browser. Legal basis: Art. 6(1)(f) GDPR (secure operation).",
          ],
        },
        {
          heading: "3. Contact form and email",
          paragraphs: [
            "The details from the contact form (name, email, phone, area of law, message) are processed in order to handle your enquiry and are sent to the office by email. Legal basis: Art. 6(1)(b) GDPR together with your consent (Art. 6(1)(a)). Deleted once the enquiry is concluded, provided no engagement follows and no retention obligations apply.",
          ],
        },
        {
          heading: "4. WhatsApp",
          paragraphs: [
            "If you get in touch via WhatsApp, WhatsApp Ireland Ltd. processes your data under its own terms. Please do not send confidential case material over WhatsApp.",
          ],
        },
        {
          heading: "5. Cookies",
          paragraphs: [
            "Technically necessary cookies are set on the basis of § 25(2) TDDDG. Optional statistics cookies are set only with your consent (§ 25(1) TDDDG, Art. 6(1)(a) GDPR). You can change your choice at any time via the cookie banner. [Placeholder: services used]",
          ],
        },
        {
          heading: "6. Your rights",
          paragraphs: [
            "You have the right of access, rectification, erasure, restriction of processing, data portability and objection (Art. 15–21 GDPR), as well as the right to lodge a complaint with a supervisory authority, for example the State Commissioner for Data Protection of Baden-Württemberg.",
          ],
        },
      ],
    },
  },
};
