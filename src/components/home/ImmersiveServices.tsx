import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PhotoBackground } from "@/components/ui/PhotoBackground";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { backgroundPhotos } from "@/lib/backgroundPhotos";
import { serviceCategories } from "@/lib/siteConfig";
import type { ServiceCategoryId } from "@/lib/types";

// 今回は3分類のみ表示する（カウンセリングは含めない）。
const CARD_CATEGORY_IDS: ServiceCategoryId[] = ["facial", "body", "skin-analysis"];

const CARD_SLOTS = {
  facial: backgroundPhotos.treatment,
  body: backgroundPhotos.treatment,
  "skin-analysis": backgroundPhotos.counseling,
} as const;

/**
 * フェイシャル・ボディ・高精度肌診断の3つを写真カードで見せる。
 * 料金・正式メニュー名は未確定のため作らず、「詳細準備中」「メニュー料金設定中」と
 * 上品に案内する。細いゴールドの縁取りと角の矢印アイコンで、写真を並べただけに
 * 見えない仕上がりにする。カード全体を /menu へのリンクにする。
 */
export function ImmersiveServices() {
  const cards = serviceCategories.filter((category) => CARD_CATEGORY_IDS.includes(category.id));

  return (
    <section className="bg-soft-white py-20 sm:py-28">
      <Container>
        <SectionIntro eyebrow="Skin & Body" title="肌診断・フェイシャル・ボディ" />

        <div className="mt-14 grid gap-10 sm:grid-cols-3 sm:gap-8">
          {cards.map((category) => (
            <Link key={category.id} href="/menu" className="group block">
              <div className="relative aspect-[4/5] overflow-hidden border border-gold/55">
                <PhotoBackground
                  slot={CARD_SLOTS[category.id as keyof typeof CARD_SLOTS]}
                  alt={category.nameJa}
                  overlay="none"
                  isStatic
                />
                <div
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-2/3 transition-opacity duration-500 group-hover:opacity-90"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(92,64,51,0.6) 0%, rgba(92,64,51,0.15) 55%, transparent 100%)",
                  }}
                />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-serif-jp text-lg text-soft-white">{category.nameJa}</h3>
                  <div className="mt-2 h-px w-8 bg-gold/80" />
                </div>
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center border border-soft-white/50 text-soft-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <ArrowUpRight aria-hidden className="h-4 w-4" />
                </div>
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
