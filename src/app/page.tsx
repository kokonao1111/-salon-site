import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { BannerStrip } from "@/components/home/BannerStrip";
import { ConceptFull } from "@/components/home/ConceptFull";
import { MenuCards } from "@/components/home/MenuCards";
import { FirstVisitCallout } from "@/components/home/FirstVisitCallout";
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
 * メニューカード→初めての方向け案内→LINE/SNS準備中→アクセス→フッター）に寄せた
 * 構成にする。未確定の情報は、隠す・404にするのではなく、各セクション内で
 * 正直に「準備中」と案内する。
 */
export default function Home() {
  return (
    <>
      <Hero />
      <BannerStrip />
      <ConceptFull />
      <MenuCards />
      <FirstVisitCallout />
      <SnsLineSection />
      <AccessSection />
      <NewsPreview />
    </>
  );
}
