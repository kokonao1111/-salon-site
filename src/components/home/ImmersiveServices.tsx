import Link from "next/link";
import { ArrowRight, Droplets, MessageCircle, ScanFace, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { serviceCategories } from "@/lib/siteConfig";
import type { ServiceCategoryId } from "@/lib/types";

// 確定しているサービス区分を4つとも表示する（架空の区分は追加しない）。
const CARD_CATEGORY_IDS: ServiceCategoryId[] = ["facial", "body", "skin-analysis", "counseling"];

// 店舗写真の撮影が済むまでの代役として、区分ごとに意味の通ったアイコンを添える
// （実際の施術・店内を写した架空の写真は使わない）。
const CATEGORY_ICONS: Record<ServiceCategoryId, typeof Sparkles> = {
  facial: Sparkles,
  body: Droplets,
  "skin-analysis": ScanFace,
  counseling: MessageCircle,
};

/**
 * 参考サイトの「初めての方へおすすめトライアルプラン」のカード構成
 * （ゴールドのラベル帯＋写真エリア＋料金2段＋コーナーの矢印アクセント）を、
 * このサイトの世界観で再構築する。料金・メニュー名・写真はまだ確定していないため、
 * 各項目は正直に「準備中」と案内し、架空の数字や写真は一切使わない。
 */
export function ImmersiveServices() {
  const cards = serviceCategories.filter((category) => CARD_CATEGORY_IDS.includes(category.id));

  return (
    <section className="bg-soft-white py-20 sm:py-28">
      <Container>
        <SectionIntro
          eyebrow="New Trial Plan"
          title="初めての方へおすすめトライアル（お試し）プラン"
          description="肌診断をもとに、お一人おひとりの肌と身体に合わせたフェイシャル・ボディメニューをご用意しています。初めてのお客様向けのトライアル価格は、内容確定後にこちらでご案内いたします。"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((category) => {
            const Icon = CATEGORY_ICONS[category.id];
            return (
              <Link
                key={category.id}
                href="/menu"
                className="group relative block overflow-hidden bg-warm-ivory shadow-[0_1px_3px_rgba(23,25,23,0.08)] transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(23,25,23,0.12)]"
              >
                <div className="bg-gold px-5 py-3 text-center">
                  <span className="font-serif-jp text-sm tracking-[0.05em] text-soft-white">{category.nameJa}</span>
                </div>

                <div className="relative aspect-[4/3] overflow-hidden bg-pearl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Icon aria-hidden className="h-9 w-9 text-forest/30" strokeWidth={1.25} />
                  </div>
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/5"
                  />
                </div>

                <div className="px-5 py-5">
                  <p className="text-pretty text-xs leading-relaxed text-forest/70">{category.summary}</p>

                  <div className="mt-4 space-y-1.5 border-t border-gold/25 pt-3">
                    <p className="flex items-baseline justify-between text-xs text-forest/55">
                      <span>通常料金</span>
                      <span>準備中</span>
                    </p>
                    <p className="flex items-baseline justify-between text-sm">
                      <span className="text-forest/80">初回トライアル</span>
                      <span className="font-medium text-gold">準備中</span>
                    </p>
                  </div>
                </div>

                <div
                  aria-hidden
                  className="absolute right-0 bottom-0 h-11 w-11 bg-gold"
                  style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                />
                <ArrowRight
                  aria-hidden
                  className="absolute right-1.5 bottom-1.5 h-4 w-4 text-soft-white transition-transform duration-300 group-hover:translate-x-0.5"
                />
              </Link>
            );
          })}
        </div>

        <p className="mt-10 text-center text-xs leading-relaxed text-forest/55">
          メニュー・料金は現在準備中です。詳細は確定次第、メニューページにてご案内いたします。
        </p>
      </Container>
    </section>
  );
}
