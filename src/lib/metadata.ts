import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
}

/**
 * 各ページ共通のメタデータを組み立てるヘルパー。
 * 店舗名確定前は siteConfig.brand の作業用タイトルを用いる。
 */
export function buildMetadata({ title, description, path, noIndex }: PageMetaInput): Metadata {
  const url = new URL(path, siteConfig.siteUrl).toString();

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: siteConfig.brand.workingTitleJa,
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}
