"use client";

import { useState, useSyncExternalStore } from "react";
import Link from "next/link";
import styles from "./CookieBanner.module.css";
import type { Dictionary, Lang } from "@/content/types";
import {
  type Consent,
  getConsent,
  getServerConsent,
  setConsent,
  subscribeConsent,
} from "@/lib/consent";
import { routes } from "@/lib/routes";

/**
 * TDDDG/GDPR consent gate. Only technically necessary cookies run before a
 * choice is made, so the banner is non-blocking (aria-modal="false") — matching
 * the prototype.
 */
export function CookieBanner({ lang, t }: { lang: Lang; t: Dictionary }) {
  const consent = useSyncExternalStore(subscribeConsent, getConsent, getServerConsent);
  const [customising, setCustomising] = useState(false);
  const [stats, setStats] = useState(false);

  function save(value: Consent) {
    setCustomising(false);
    setConsent(value);
  }

  // `null` means "asked but never answered". The server snapshot is a sentinel,
  // so the banner is absent from the HTML and appears after hydration.
  if (consent !== null) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      className={styles.banner}
    >
      <h2 id="cookie-title" className="h4">
        {t.cookie.title}
      </h2>
      <p className={`body ${styles.text}`}>
        {t.cookie.text} <Link href={routes.privacy(lang)}>{t.footer.privacy}</Link>
      </p>

      {customising && (
        <div className={styles.options}>
          <label className={styles.option}>
            <span>
              <strong className={styles.optionName}>{t.cookie.necessary}</strong>
              <br />
              <span className={styles.optionHint}>{t.cookie.necessaryText}</span>
            </span>
            <input type="checkbox" checked disabled readOnly />
          </label>
          <label className={`${styles.option} ${styles["option--toggle"]}`}>
            <span>
              <strong className={styles.optionName}>{t.cookie.stats}</strong>
              <br />
              <span className={styles.optionHint}>{t.cookie.statsText}</span>
            </span>
            <input
              type="checkbox"
              checked={stats}
              onChange={(event) => setStats(event.target.checked)}
            />
          </label>
        </div>
      )}

      <div className={styles.actions}>
        <button
          type="button"
          onClick={() => save("all")}
          className={`btn btn--primary ${styles.compact}`}
        >
          {t.cookie.acceptAll}
        </button>
        <button
          type="button"
          onClick={() => save("necessary")}
          className={`btn btn--secondary ${styles.compact}`}
        >
          {t.cookie.necessaryOnly}
        </button>
        {customising ? (
          <button
            type="button"
            onClick={() => save(stats ? "all" : "necessary")}
            className={styles.textButton}
          >
            {t.cookie.save}
          </button>
        ) : (
          <button
            type="button"
            onClick={() => setCustomising(true)}
            className={styles.textButton}
          >
            {t.cookie.customize}
          </button>
        )}
      </div>
    </div>
  );
}
