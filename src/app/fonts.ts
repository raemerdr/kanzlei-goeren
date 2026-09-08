import { Inter_Tight } from "next/font/google";

/**
 * One grotesque for the whole site, in the manner of the Pitblado reference.
 *
 * That site is set in Suisse Int'l, which is a licensed Swiss Typefaces family
 * and cannot be redistributed here. Inter Tight is the closest freely
 * licensable match — the same neo-grotesque skeleton at Suisse's compact
 * widths — and it ships `latin-ext`, so German umlauts and the Turkish
 * ğ ş İ Ğ Ş all come from the webfont on every device.
 *
 * If the Kanzlei licenses Suisse Int'l, swap this for a `next/font/local`
 * declaration exposing the same `--font-sans` variable; nothing else changes.
 */
export const interTight = Inter_Tight({
  subsets: ["latin", "latin-ext"],
  variable: "--font-sans-raw",
  display: "swap",
});

export const fontVariables = interTight.variable;
