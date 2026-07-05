import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui/PageIntro";
import { PendingNotice } from "@/components/ui/PendingNotice";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { ServiceCategoryBlock } from "@/components/service/ServiceCategoryBlock";
import { serviceCategories } from "@/lib/siteConfig";
import { placeholderImages } from "@/lib/placeholderImages";

export const metadata: Metadata = buildMetadata({
  title: "サービス",
  description:
    "フェイシャルトリートメント、ボディトリートメント、肌診断、カウンセリング。志摩の完全プライベートサロンがご提供するサービスをご紹介します。",
  path: "/service",
});

const categoryImages = {
  facial: { spec: placeholderImages.facialHands, alt: "フェイシャル施術の手元（準備中）" },
  body: { spec: placeholderImages.bodyHands, alt: "ボディ施術の手元（準備中）" },
  "skin-analysis": { spec: placeholderImages.skinAnalysisDevice, alt: "肌診断器（準備中）" },
  counseling: { spec: placeholderImages.counseling, alt: "カウンセリング風景（準備中）" },
} as const;

export default function ServicePage() {
  return (
    <>
      <PageIntro
        eyebrowNumber="—"
        eyebrow="Service"
        title="サービス"
        titleEn="Our Services"
        description="肌診断の結果をもとに、お一人おひとりに合わせたフェイシャル・ボディトリートメントをご提供いたします。"
      />

      {serviceCategories.map((category, index) => (
        <ServiceCategoryBlock
          key={category.id}
          category={category}
          image={categoryImages[category.id].spec}
          imageAlt={categoryImages[category.id].alt}
          reversed={index % 2 === 1}
          index={index}
        />
      ))}

      <div className="bg-warm-ivory py-16">
        <Container>
          <PendingNotice>
            具体的な施術内容・所要時間・料金については、現在準備を進めております。確定次第、本ページおよびメニューページでご案内いたします。
          </PendingNotice>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href="/menu" variant="outline">
              メニューページを見る
            </LinkButton>
            <LinkButton href="/contact" variant="ghost">
              ご予約について
            </LinkButton>
          </div>
        </Container>
      </div>
    </>
  );
}
