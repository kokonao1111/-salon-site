import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { placeholderImages } from "@/lib/placeholderImages";
import { serviceCategories } from "@/lib/siteConfig";
import type { ServiceCategoryId } from "@/lib/types";

// 今回は3分類のみ表示する（カウンセリングは含めない）。
const CARD_CATEGORY_IDS: ServiceCategoryId[] = ["facial", "body", "skin-analysis"];

const CARD_IMAGES = {
  facial: placeholderImages.facialHands,
  body: placeholderImages.bodyHands,
  "skin-analysis": placeholderImages.skinAnalysisDevice,
} as const;

/**
 * 肌診断・フェイシャル・ボディの紹介。参考サイトのような写真つきカード配置にするが、
 * 料金・正式メニュー名は未確定のため作らない。「詳細準備中」「メニュー料金設定中」は
 * 罫線付きの控えめなラベルとして扱い、安っぽいComing soon表記にはしない。
 * カテゴリ名は写真下部のグラデーション上に重ね、単色のリボン帯にはしない
 * （固い印象を避け、写真そのものを主役にするため）。カード全体を /menu へのリンクにする。
 */
export function MenuCards() {
  const cards = serviceCategories.filter((category) =>
    CARD_CATEGORY_IDS.includes(category.id)
  );

  return (
    <section className="bg-soft-white py-20 sm:py-28">
      <Container>
        <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">Skin &amp; Body</p>
        <div className="mt-3 h-px w-12 bg-gold" />
        <h2 className="mt-6 font-serif-jp text-2xl text-ink sm:text-3xl">
          肌診断・フェイシャル・ボディ
        </h2>

        <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {cards.map((category) => (
            <Link key={category.id} href="/menu" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden">
                <PlaceholderImage
                  spec={CARD_IMAGES[category.id as keyof typeof CARD_IMAGES]}
                  alt={category.nameJa}
                  fill
                  className="transition-transform duration-500 group-hover:scale-[1.04]"
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-2/3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(23,25,23,0.55) 0%, rgba(23,25,23,0.15) 55%, transparent 100%)",
                  }}
                />
                <h3 className="absolute inset-x-0 bottom-0 p-5 font-serif-jp text-lg text-soft-white">
                  {category.nameJa}
                </h3>
              </div>

              <div className="mt-4 border-t border-gold/30 pt-4">
                <p className="text-sm leading-loose text-forest/80">{category.summary}</p>
                <p className="mt-3 inline-block border-b border-gold/60 pb-0.5 text-xs tracking-[0.05em] text-forest/60">
                  詳細準備中・メニュー料金設定中
                </p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
