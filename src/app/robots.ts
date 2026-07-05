import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/siteConfig";
import { isLiveStage } from "@/lib/siteStage";
import { pageReadiness } from "@/lib/pageReadiness";

export default function robots(): MetadataRoute.Robots {
  // live 以外（preview / prelaunch）はサイト全体をクロール禁止にする。
  if (!isLiveStage) {
    return {
      rules: { userAgent: "*", disallow: "/" },
    };
  }

  const notReadyPaths = ["/staff", "/recruit"];
  if (!pageReadiness.service) notReadyPaths.push("/service");
  if (!pageReadiness.menu) notReadyPaths.push("/menu");
  if (!pageReadiness.firstVisit) notReadyPaths.push("/first-visit");
  if (!pageReadiness.news) notReadyPaths.push("/news");

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: notReadyPaths,
    },
    ...(siteConfig.siteUrl
      ? { sitemap: new URL("/sitemap.xml", siteConfig.siteUrl).toString() }
      : {}),
  };
}
