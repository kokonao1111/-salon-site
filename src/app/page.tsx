import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { ConceptExcerpt } from "@/components/home/ConceptExcerpt";
import { ServiceOverviewSection } from "@/components/home/ServiceOverviewSection";
import { FirstVisitPreviewSection } from "@/components/home/FirstVisitPreviewSection";
import { StaffPreviewSection } from "@/components/home/StaffPreviewSection";
import { AccessSection } from "@/components/home/AccessSection";
import { OpeningSection } from "@/components/home/OpeningSection";
import { NewsPreview } from "@/components/home/NewsPreview";
import { siteConfig } from "@/lib/siteConfig";
import { isLiveStage } from "@/lib/siteStage";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.seoDefaults.defaultTitle,
  description: siteConfig.seoDefaults.description,
  path: "/",
});

/**
 * Homeの構成はSITE_STAGEに応じて変える。
 *
 * - preview / prelaunch: 確定している事実（コンセプト原稿の抜粋・住所・オープン予定日）だけを
 *   伝える簡潔な構成にする。未確定のサービス・メニュー・スタッフ・予約導線へは誘導しない。
 *   情報が少ないことを、大きな余白や抽象的な装飾で埋めない。
 * - live: 上記に加えて、サービス・初めての方・スタッフの各セクションが個別に表示される。
 *   ただし各セクションは pageReadiness / isApproved で実データが確定した場合にのみ描画され、
 *   未確定データのまま完成版の体裁を表示することはない
 *   （現時点ではすべて pending のため、live でもこの簡潔な構成のまま表示される）。
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ConceptExcerpt />
      {isLiveStage && (
        <>
          <ServiceOverviewSection />
          <FirstVisitPreviewSection />
          <StaffPreviewSection />
        </>
      )}
      <AccessSection />
      <OpeningSection />
      <NewsPreview />
    </>
  );
}
