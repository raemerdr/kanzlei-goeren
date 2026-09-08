import Link from "next/link";
import styles from "./Logo.module.css";
import { SITE } from "@/content";

type LogoProps = {
  href: string;
  /** "lg" pins the wordmark at 29px (footer); default scales with the viewport. */
  size?: "md" | "lg";
  label?: string;
};

/** Takes its colour from whatever it sits in — see Logo.module.css. */
export function Logo({ href, size = "md", label = SITE.shortName }: LogoProps) {
  return (
    <Link href={href} aria-label={label} className={styles.logo} data-size={size}>
      <span className={styles.mark}>
        M
        <span className={styles.divider} aria-hidden="true" />
        GÖREN
      </span>
      <span className={styles.descriptor} aria-hidden="true">
        RECHT
      </span>
    </Link>
  );
}
