import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { FirstVisitHero } from "@/components/first-visit/FirstVisitHero";
import { FirstVisitIntro } from "@/components/first-visit/FirstVisitIntro";
import { FirstVisitReassurance } from "@/components/first-visit/FirstVisitReassurance";
import { AccentShowcase } from "@/components/ui/AccentShowcase";
import { FirstVisitCounseling } from "@/components/first-visit/FirstVisitCounseling";
import { FirstVisitTimeline } from "@/components/first-visit/FirstVisitTimeline";
import { FirstVisitFaq } from "@/components/first-visit/FirstVisitFaq";
import { FirstVisitStaffNotice } from "@/components/first-visit/FirstVisitStaffNotice";
import { FirstVisitRelatedLinks } from "@/components/first-visit/FirstVisitRelatedLinks";
import { FirstVisitCta } from "@/components/first-visit/FirstVisitCta";
import { pageReadiness } from "@/lib/pageReadiness";

export const metadata: Metadata = buildMetadata({
  title: "初めての方へ",
  description:
    "初めてご来店される方向けに、完全プライベート空間での過ごし方、来店の流れ、よくある不安についてご案内します。",
  path: "/first-visit",
  noIndex: !pageReadiness.firstVisit,
});

/**
 * 初めて来店する方の不安を解消するページ。
 * ヒーロー → 導入文 → 安心材料 → カウンセリング/肌診断 → 来店の流れ →
 * よくある不安 → スタッフ体制 → 関連ページ → 予約準備中の案内、の順で構成する。
 */
export default function FirstVisitPage() {
  return (
    <>
      <FirstVisitHero />
      <FirstVisitIntro />
      <FirstVisitReassurance />
      <AccentShowcase
        src="/images/backgrounds/concept-pine-bay.jpg"
        alt="志摩の海と松のイメージ"
        accent="For Your First Time"
        title="はじめての方も、安心して。"
        description="完全プライベートの個室で、肌診断から丁寧にご案内いたします。"
        href="/concept"
        linkLabel="コンセプトを見る"
        reverse
      />
      <FirstVisitCounseling />
      <FirstVisitTimeline />
      <FirstVisitFaq />
      <FirstVisitStaffNotice />
      <FirstVisitRelatedLinks />
      <FirstVisitCta />
    </>
  );
}
