import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";

const publicPaths = [
  "",
  "/concept",
  "/service",
  "/menu",
  "/first-visit",
  "/access",
  "/contact",
  "/news",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return publicPaths.map((path) => ({
    url: new URL(path, siteConfig.siteUrl).toString(),
    lastModified: new Date(),
  }));
}
