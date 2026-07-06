import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { PendingNotice } from "@/components/ui/PendingNotice";
import { pageReadiness } from "@/lib/pageReadiness";
import { guardPageReadiness } from "@/lib/guardPageReadiness";

/**
 * 採用条件が確定するまで本番ナビゲーションに表示せず、
 * prelaunch / live では直接アクセスも404にする。
 * ルートとデータ構造のみ準備済み。
 */
export const metadata: Metadata = buildMetadata({
  title: "採用情報",
  description: "志摩の完全プライベートサロンの採用情報。",
  path: "/recruit",
  noIndex: true,
});

export default function RecruitPage() {
  guardPageReadiness(pageReadiness.recruit);

  return (
    <>
      <PageIntro eyebrow="Recruit" title="採用情報" titleEn="Recruit" />
      <Container className="pb-24 sm:pb-32">
        <PendingNotice>
          採用情報は現在準備中です。募集条件が確定次第、このページでご案内いたします。
        </PendingNotice>
      </Container>
    </>
  );
}
