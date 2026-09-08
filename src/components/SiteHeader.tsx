"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import styles from "./SiteHeader.module.css";
import { LangSwitch } from "./LangSwitch";
import { Logo } from "./Logo";
import type { Lang } from "@/content/types";
import type { NavItem } from "@/lib/nav";

type SiteHeaderProps = {
  lang: Lang;
  nav: NavItem[];
  cta: string;
  menuLabel: string;
  navLabel: string;
  languageLabel: string;
  homeHref: string;
};

/** Landing-page header: full navigation, language switch and CTA. */
export function SiteHeader({
  lang,
  nav,
  cta,
  menuLabel,
  navLabel,
  languageLabel,
  homeHref,
}: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [atTop, setAtTop] = useState(true);
  const sentinelRef = useRef<HTMLDivElement>(null);

  // The bar is clear while the page sits at the top, over the hero photograph,
  // and fills in once that scrolls away. A probe element is cheaper and
  // smoother than a scroll listener — the browser reports the crossing itself.
  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;
    const observer = new IntersectionObserver(([entry]) =>
      setAtTop(entry.isIntersecting),
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  // The menu only exists below 1024px; close it if the viewport grows past that
  // while it is open, so it can never be left hanging under a desktop header.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const onChange = () => mq.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <div ref={sentinelRef} aria-hidden="true" className={styles.sentinel} />
      <header
        className={styles.header}
        // Solid while the mobile menu is open, so the panel reads as attached.
        data-at-top={atTop && !menuOpen}
      >
        <div className={styles.inner}>
          <Logo href={homeHref} />

          <nav aria-label={navLabel} className={styles.nav}>
            {nav.map((item) => (
              <Link key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <LangSwitch current={lang} label={languageLabel} />
            <Link href="#kontakt" className={`btn ${styles.cta}`}>
              {cta}
            </Link>
          </div>

          <div className={styles.mobileActions}>
            <LangSwitch current={lang} label={languageLabel} />
            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuLabel}
              className={styles.burger}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>

        {menuOpen && (
          <nav
            id="mobile-menu"
            aria-label={navLabel}
            className={styles.menu}
          >
            <div className={styles.menuInner}>
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={styles.menuLink}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#kontakt"
                onClick={closeMenu}
                className={`btn ${styles.menuCta}`}
              >
                {cta}
              </Link>
            </div>
          </nav>
        )}
      </header>
    </>
  );
}
