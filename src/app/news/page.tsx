import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui/PageIntro";
import { NewsList } from "@/components/news/NewsList";

export const metadata: Metadata = buildMetadata({
  title: "お知らせ",
  description: "志摩の完全プライベートサロンの開業準備状況、最新のお知らせをご案内します。",
  path: "/news",
});

export default function NewsPage() {
  return (
    <>
      <PageIntro eyebrowNumber="—" eyebrow="News" title="お知らせ" titleEn="News" />
      <NewsList />
    </>
  );
}
