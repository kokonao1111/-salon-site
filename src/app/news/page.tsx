import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui/PageIntro";
import { NewsList } from "@/components/news/NewsList";
import { pageReadiness } from "@/lib/pageReadiness";

export const metadata: Metadata = buildMetadata({
  title: "お知らせ",
  description: "志摩の完全プライベートサロンのお知らせをご案内します。",
  path: "/news",
  noIndex: !pageReadiness.news,
});

export default function NewsPage() {
  return (
    <>
      <PageIntro eyebrow="News" title="お知らせ" titleEn="News" />
      <NewsList />
    </>
  );
}
