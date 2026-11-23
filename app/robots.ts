import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Crawlers can read the noindex directives on public demo URLs.
  return { rules: { userAgent: "*", allow: "/" } };
}
