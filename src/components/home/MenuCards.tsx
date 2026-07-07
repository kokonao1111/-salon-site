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
 * メニュー・サービス紹介。参考サイトのような写真つきカード配置にするが、
 * 料金・正式メニュー名は未確定のため作らない。「詳細準備中」「メニュー料金設定中」は
 * 罫線付きの控えめなラベルとして扱い、安っぽいComing soon表記にはしない。
 */
export function MenuCards() {
  const cards = serviceCategories.filter((category) =>
    CARD_CATEGORY_IDS.includes(category.id)
  );

  return (
    <section className="bg-soft-white py-20 sm:py-28">
      <Container>
        <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">Menu</p>
        <div className="mt-3 h-px w-12 bg-gold" />
        <h2 className="mt-6 font-serif-jp text-2xl text-ink sm:text-3xl">メニュー・サービス</h2>

        <div className="mt-10 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {cards.map((category) => (
            <article key={category.id}>
              <div className="relative aspect-[4/5] overflow-hidden">
                <PlaceholderImage
                  spec={CARD_IMAGES[category.id as keyof typeof CARD_IMAGES]}
                  alt={category.nameJa}
                  fill
                />
              </div>
              <h3 className="mt-5 font-serif-jp text-lg text-ink">{category.nameJa}</h3>
              <p className="mt-2 text-sm leading-loose text-forest/80">{category.summary}</p>
              <p className="mt-4 inline-block border-b border-gold/60 pb-0.5 text-xs tracking-[0.05em] text-forest/60">
                詳細準備中・メニュー料金設定中
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
