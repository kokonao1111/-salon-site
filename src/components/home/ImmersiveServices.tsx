import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PhotoBackground } from "@/components/ui/PhotoBackground";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { backgroundPhotos } from "@/lib/backgroundPhotos";
import { serviceCategories } from "@/lib/siteConfig";
import type { ServiceCategoryId } from "@/lib/types";

// 確定しているサービス区分を4つとも表示する（架空の区分は追加しない）。
const CARD_CATEGORY_IDS: ServiceCategoryId[] = ["facial", "body", "skin-analysis", "counseling"];

const CARD_SLOTS = {
  facial: backgroundPhotos.treatment,
  body: backgroundPhotos.treatment,
  "skin-analysis": backgroundPhotos.counseling,
  counseling: backgroundPhotos.counseling,
} as const;

/**
 * フェイシャル・ボディ・肌診断・カウンセリングを、参考サイトの「選び方」ページのような
 * 円形の写真バッジ＋ゴールドのリボンラベルで見せる。大きな長方形カードだと写真が
 * 主張しすぎるため、円形・小さめのバッジにして上品にまとめる。
 * 料金・正式メニュー名は未確定のため作らず、「詳細準備中」と案内する。
 */
export function ImmersiveServices() {
  const cards = serviceCategories.filter((category) => CARD_CATEGORY_IDS.includes(category.id));

  return (
    <section className="bg-soft-white py-20 sm:py-28">
      <Container>
        <SectionIntro eyebrow="Skin & Body" title="肌診断・フェイシャル・ボディ" />

        <div className="mt-14 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4 sm:gap-x-8">
          {cards.map((category) => (
            <Link
              key={category.id}
              href="/menu"
              className="group flex flex-col items-center text-center"
            >
              <div className="bg-gold px-4 py-1.5">
                <span className="font-serif-jp text-xs tracking-[0.04em] text-soft-white sm:text-sm">
                  {category.nameJa}
                </span>
              </div>
              <div className="relative -mt-px h-28 w-28 overflow-hidden rounded-full border border-gold/45 transition-transform duration-500 group-hover:scale-[1.04] sm:h-36 sm:w-36">
                <PhotoBackground
                  slot={CARD_SLOTS[category.id as keyof typeof CARD_SLOTS]}
                  alt={category.nameJa}
                  overlay="none"
                  isStatic
                />
              </div>
              <p className="mt-4 max-w-[11rem] text-xs leading-relaxed text-forest/75">
                {category.summary}
              </p>
              <p className="mt-3 inline-block border-b border-gold/60 pb-0.5 text-[11px] tracking-[0.04em] text-forest/55">
                詳細準備中
              </p>
            </Link>
          ))}
        </div>

        <p className="mt-10 text-center text-xs leading-relaxed text-forest/55">
          メニュー・料金は現在準備中です。詳細は確定次第、メニューページにてご案内いたします。
        </p>
      </Container>
    </section>
  );
}
