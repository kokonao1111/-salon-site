import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { ConceptFull } from "@/components/home/ConceptFull";
import { AccentShowcase } from "@/components/ui/AccentShowcase";
import { ImmersiveFirstVisit } from "@/components/home/ImmersiveFirstVisit";
import { ImmersiveServices } from "@/components/home/ImmersiveServices";
import { ImmersiveFlow } from "@/components/home/ImmersiveFlow";
import { ImmersiveFaq } from "@/components/home/ImmersiveFaq";
import { AccessSection } from "@/components/home/AccessSection";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.seoDefaults.defaultTitle,
  description: siteConfig.seoDefaults.description,
  path: "/",
});

/**
 * Homeは7つの区分（ヒーロー→導入→初めての方へ→サービス紹介→来店の流れ→FAQ→
 * アクセス）で構成する。各セクションの背景は写真枠（未撮影の間は単色）で統一し、
 * 白背景だけでブツ切りにしない。未確定の情報は、各セクション内で正直に
 * 「準備中」と案内する。
 */
export default function Home() {
  return (
    <>
      <Hero />
      <ConceptFull />
      <AccentShowcase
        src="/images/backgrounds/hero-shima-coast.jpg"
        alt="志摩の海岸風景（イメージ）"
        accent="A Quiet Retreat"
        title="喧騒から離れた、完全プライベートな時間へ。"
        description="志摩の隠れ家で、肌診断をもとにしたオーダーメイドのケアをご用意しています。"
        href="/first-visit"
        linkLabel="初めての方へ"
      />
      <ImmersiveFirstVisit />
      <ImmersiveServices />
      <ImmersiveFlow />
      <ImmersiveFaq />
      <AccessSection />
    </>
  );
}
