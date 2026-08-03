import Link from "next/link";
import { ArrowRight, Droplets, ScanFace, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { serviceCategories } from "@/lib/siteConfig";
import type { ServiceCategoryId } from "@/lib/types";

// 「おすすめプラン」として、確定している区分のうち施術系の3つを厳選して見せる
// （カウンセリングは相談窓口の性質が強いため、上段のトライアル案内に譲る）。
const CARD_CATEGORY_IDS: ServiceCategoryId[] = ["facial", "body", "skin-analysis"];

const CATEGORY_ICONS: Record<string, typeof Sparkles> = {
  facial: Sparkles,
  body: Droplets,
  "skin-analysis": ScanFace,
};

/**
 * 参考サイトの「おすすめプラン」（写真＋下段に下線付きのメニュー名＋料金＋
 * コーナーの矢印アクセント）を、このサイトの世界観で再構築する。上段の
 * トライアル案内カードとは写真エリアの帯を外し、タイトルを下線付きで写真の
 * 下に置くことで見た目のリズムを変える。料金・具体的なメニュー名はまだ
 * 確定していないため、正直に「準備中」と案内し、架空の数字は使わない。
 */
export function RecommendedPlans() {
  const cards = serviceCategories.filter((category) => CARD_CATEGORY_IDS.includes(category.id));

  return (
    <section className="bg-warm-ivory py-20 sm:py-28">
      <Container>
        <SectionIntro
          eyebrow="Recommendation"
          title="おすすめプラン"
          description="肌診断をもとに、フェイシャル・ボディなど幅広いメニューをご用意する予定です。どのプランを選べばよいかお悩みの際は、スタッフまでお気軽にご相談ください。"
        />

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {cards.map((category) => {
            const Icon = CATEGORY_ICONS[category.id];
            return (
              <Link
                key={category.id}
                href="/menu"
                className="group relative block overflow-hidden bg-soft-white shadow-[0_1px_3px_rgba(23,25,23,0.08)] transition-shadow duration-300 hover:shadow-[0_10px_28px_rgba(23,25,23,0.12)]"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-pearl">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full border border-gold/40">
                      <Icon aria-hidden className="h-7 w-7 text-gold" strokeWidth={1.25} />
                    </div>
                  </div>
                  <div
                    aria-hidden
                    className="absolute inset-0 bg-ink/0 transition-colors duration-300 group-hover:bg-ink/5"
                  />
                </div>

                <div className="px-6 py-6">
                  <p className="inline-block border-b-2 border-gold pb-1 font-serif-jp text-base text-ink">
                    {category.nameJa}
                  </p>
                  <p className="mt-3 text-pretty text-xs leading-relaxed text-forest/70">{category.summary}</p>
                  <p className="mt-4 text-xs tracking-[0.02em] text-forest/50 italic">時間・料金は準備中です</p>
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
      </Container>
    </section>
  );
}
