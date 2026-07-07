import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { OpeningNotice } from "@/components/home/OpeningNotice";
import { ConceptFull } from "@/components/home/ConceptFull";
import { FirstVisitCallout } from "@/components/home/FirstVisitCallout";
import { ServiceOverview } from "@/components/home/ServiceOverview";
import { MenuCards } from "@/components/home/MenuCards";
import { HomeFlowPreview } from "@/components/home/HomeFlowPreview";
import { HomeFaqPreview } from "@/components/home/HomeFaqPreview";
import { SnsLineSection } from "@/components/home/SnsLineSection";
import { AccessSection } from "@/components/home/AccessSection";
import { NewsPreview } from "@/components/home/NewsPreview";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.seoDefaults.defaultTitle,
  description: siteConfig.seoDefaults.description,
  path: "/",
});

/**
 * Homeは参考サイトの情報の流れ（ヘッダー→メインビジュアル→バナー→コンセプト→
 * 初めての方向け案内→サービス概要→肌診断/フェイシャル/ボディ→流れ→FAQ→
 * LINE/SNS準備中→アクセス→フッター）に寄せた
 * 構成にする。未確定の情報は、隠す・404にするのではなく、各セクション内で
 * 正直に「準備中」と案内する。
 */
export default function Home() {
  return (
    <>
      <Hero />
      <OpeningNotice />
      <ConceptFull />
      <FirstVisitCallout />
      <ServiceOverview />
      <MenuCards />
      <HomeFlowPreview />
      <HomeFaqPreview />
      <SnsLineSection />
      <AccessSection />
      <NewsPreview />
    </>
  );
}
