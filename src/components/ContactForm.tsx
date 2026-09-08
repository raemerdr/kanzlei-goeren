"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./ContactForm.module.css";
import type { Dictionary, Lang } from "@/content/types";
import { routes } from "@/lib/routes";

type ContactFormProps = {
  lang: Lang;
  t: Dictionary;
};

export function ContactForm({ lang, t }: ContactFormProps) {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);
  const c = t.contact;

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    const payload = Object.fromEntries(new FormData(form).entries());
    setSending(true);
    setFailed(false);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      router.push(routes.thanks(lang));
    } catch (error) {
      console.error("[lead] submit failed", error);
      setSending(false);
      setFailed(true);
    }
  }

  return (
    <form onSubmit={onSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="f-name" className={styles.label}>
          {c.name}
        </label>
        <input
          id="f-name"
          name="name"
          type="text"
          required
          autoComplete="name"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="f-email" className={styles.label}>
          {c.email}
        </label>
        <input
          id="f-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="f-phone" className={styles.label}>
          {c.phone}
        </label>
        <input
          id="f-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="f-area" className={styles.label}>
          {c.area}
        </label>
        <select id="f-area" name="area" required defaultValue="" className={styles.select}>
          <option value="" disabled>
            {c.areaPlaceholder}
          </option>
          {t.areas.items.map((area) => (
            <option key={area.slug} value={area.slug}>
              {area.title}
            </option>
          ))}
        </select>
      </div>

      <div className={`${styles.field} ${styles.wide}`}>
        <label htmlFor="f-msg" className={styles.label}>
          {c.message}
        </label>
        <textarea id="f-msg" name="message" required rows={5} className={styles.textarea} />
      </div>

      <label className={styles.consent}>
        <input name="consent" type="checkbox" required />
        <span>
          {c.consentA} <Link href={routes.privacy(lang)}>{c.consentLink}</Link> {c.consentB}
        </span>
      </label>

      <input type="hidden" name="lang" value={lang} />
      <input type="hidden" name="source" value="landing-page" />

      <div className={styles.actions}>
        <button type="submit" disabled={sending} className="btn btn--primary">
          {sending ? c.sending : c.submit}
        </button>
        {failed && (
          <p role="alert" className={styles.error}>
            {c.error}
          </p>
        )}
      </div>
    </form>
  );
}
