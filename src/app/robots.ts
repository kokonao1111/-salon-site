import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/staff", "/recruit"],
    },
    sitemap: new URL("/sitemap.xml", siteConfig.siteUrl).toString(),
  };
}
