import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { isLiveStage } from "@/lib/siteStage";
import { pageReadiness } from "@/lib/pageReadiness";

const alwaysPublicPaths = ["", "/concept", "/access", "/opening", "/contact", "/privacy"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.siteUrl;

  // live以外、または本番URL未設定の間は、仮ドメインでのsitemap出力を行わない。
  if (!isLiveStage || !baseUrl) return [];

  const paths = [
    ...alwaysPublicPaths,
    ...(pageReadiness.service ? ["/service"] : []),
    ...(pageReadiness.menu ? ["/menu"] : []),
    ...(pageReadiness.firstVisit ? ["/first-visit"] : []),
    ...(pageReadiness.news ? ["/news"] : []),
  ];

  return paths.map((path) => ({
    url: new URL(path, baseUrl).toString(),
    lastModified: new Date(),
  }));
}
