import type { MetadataRoute } from "next";
import { SITE } from "@/content";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/api/", "/danke", "/tr/danke", "/en/danke"] },
    sitemap: `${SITE.url}/sitemap.xml`,
  };
}
