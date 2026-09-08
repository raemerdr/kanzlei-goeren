import nodemailer from "nodemailer";
import { SITE } from "@/content";
import { LANGS, type Lang } from "@/content/types";

export type Lead = {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
  lang: string;
  source: string;
  submittedAt: string;
};

export type ValidationResult =
  | { ok: true; lead: Lead }
  | { ok: false; errors: string[] };

const MAX = { name: 120, email: 160, phone: 40, area: 60, message: 5000 };

function str(value: unknown, limit: number): string {
  return typeof value === "string" ? value.trim().slice(0, limit) : "";
}

/** Server-side validation — never trust the browser's `required` attributes. */
export function validateLead(input: unknown): ValidationResult {
  const errors: string[] = [];
  const raw = (input ?? {}) as Record<string, unknown>;

  const name = str(raw.name, MAX.name);
  const email = str(raw.email, MAX.email);
  const phone = str(raw.phone, MAX.phone);
  const area = str(raw.area, MAX.area);
  const message = str(raw.message, MAX.message);
  const lang = LANGS.includes(raw.lang as Lang) ? (raw.lang as Lang) : "de";

  if (name.length < 2) errors.push("name");
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) errors.push("email");
  if (!area) errors.push("area");
  if (message.length < 10) errors.push("message");
  // The consent checkbox is a legal requirement (Art. 6(1)(a) GDPR), not a nicety.
  if (raw.consent !== "on" && raw.consent !== true) errors.push("consent");

  if (errors.length > 0) return { ok: false, errors };

  return {
    ok: true,
    lead: {
      name,
      email,
      phone,
      area,
      message,
      lang,
      source: str(raw.source, 60) || "website",
      submittedAt: new Date().toISOString(),
    },
  };
}

function isMailConfigured(): boolean {
  return Boolean(process.env.SMTP_HOST && process.env.LEAD_NOTIFY_TO);
}

function renderMail(lead: Lead): string {
  return [
    `Neue Anfrage über ${SITE.url}`,
    "",
    `Name:        ${lead.name}`,
    `E-Mail:      ${lead.email}`,
    `Telefon:     ${lead.phone || "—"}`,
    `Rechtsgebiet: ${lead.area}`,
    `Sprache:     ${lead.lang}`,
    `Quelle:      ${lead.source}`,
    `Eingegangen: ${lead.submittedAt}`,
    "",
    "Nachricht:",
    lead.message,
  ].join("\n");
}

/**
 * Delivers a lead to the Kanzlei.
 *
 * Returns false when no mail transport is configured. The caller turns that
 * into an error response rather than a confirmation — telling a prospective
 * client "we got your message" when nobody received it is worse than showing
 * the phone number.
 */
export async function deliverLead(lead: Lead): Promise<boolean> {
  if (!isMailConfigured()) {
    console.warn(
      "[lead] no SMTP transport configured — set SMTP_HOST and LEAD_NOTIFY_TO (see .env.example)",
      process.env.NODE_ENV === "production" ? "" : lead,
    );
    return false;
  }

  const transport = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: Number(process.env.SMTP_PORT ?? 587) === 465,
    auth: process.env.SMTP_USER
      ? { user: process.env.SMTP_USER, pass: process.env.SMTP_PASSWORD }
      : undefined,
  });

  await transport.sendMail({
    to: process.env.LEAD_NOTIFY_TO,
    from: process.env.LEAD_NOTIFY_FROM ?? process.env.LEAD_NOTIFY_TO,
    replyTo: lead.email,
    subject: `Anfrage über die Website: ${lead.name} (${lead.area})`,
    text: renderMail(lead),
  });

  return true;
}
