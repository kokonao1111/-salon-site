import type { Metadata } from "next";
import { siteConfig } from "./siteConfig";
import { isLiveStage } from "./siteStage";

interface PageMetaInput {
  title: string;
  description: string;
  path: string;
  /** このページ固有の理由（未承認コンテンツ等）でnoindexにしたい場合はtrue */
  noIndex?: boolean;
}

/**
 * 各ページ共通のメタデータを組み立てるヘルパー。
 * 店舗名確定前は siteConfig.brand の作業用タイトルを用いる。
 *
 * - SITE_STAGE が "live" 以外の間は、ページ個別の指定に関わらず必ず noindex/nofollow にする。
 * - 本番URL（siteConfig.siteUrl）が未設定の間は、canonical / og:url を一切出力しない
 *   （仮ドメインを検索エンジンやSNSに渡さないため）。
 */
export function buildMetadata({ title, description, path, noIndex }: PageMetaInput): Metadata {
  const url = siteConfig.siteUrl ? new URL(path, siteConfig.siteUrl).toString() : undefined;
  const shouldIndex = isLiveStage && !noIndex;

  return {
    title,
    description,
    ...(url ? { alternates: { canonical: url } } : {}),
    openGraph: {
      title,
      description,
      ...(url ? { url } : {}),
      siteName: siteConfig.brand.workingTitleJa,
      locale: "ja_JP",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: shouldIndex
      ? { index: true, follow: true }
      : { index: false, follow: false },
  };
}
