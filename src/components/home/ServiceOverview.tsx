import { Container } from "@/components/ui/Container";
import { serviceCategories } from "@/lib/siteConfig";
import type { ServiceCategoryId } from "@/lib/types";

const CATEGORY_IDS: ServiceCategoryId[] = ["facial", "body", "skin-analysis"];

/**
 * サービス概要。詳細な写真カード（肌診断・フェイシャル・ボディの紹介）とは別に、
 * サロン全体としてどのようなアプローチを取っているかを短い文章で先に伝える。
 * 支給原稿（変更禁止）の概念（感覚だけに頼らない肌診断・オーダーメイド）の範囲内で構成する。
 */
export function ServiceOverview() {
  const categories = serviceCategories.filter((category) => CATEGORY_IDS.includes(category.id));

  return (
    <section className="bg-warm-ivory py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">
              Service
            </p>
            <div className="mt-3 h-px w-12 bg-gold" />
            <h2 className="mt-6 font-serif-jp text-2xl leading-relaxed text-ink sm:text-3xl">
              サービス概要
            </h2>
          </div>
          <p className="text-[15px] leading-loose text-forest/85">
            「感覚」だけに頼らない高精度な肌診断をもとに、お一人おひとりの肌と身体に合わせた
            フェイシャル＆ボディのオーダーメイドケアをご提供いたします。
          </p>
        </div>

        <ul className="mt-10 grid gap-px bg-gold/20 sm:grid-cols-3">
          {categories.map((category, index) => (
            <li key={category.id} className="bg-warm-ivory px-5 py-6">
              <p className="font-serif-en text-[11px] tracking-[0.18em] text-gold uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <h3 className="mt-3 font-serif-jp text-lg text-ink">{category.nameJa}</h3>
              <p className="mt-3 text-sm leading-loose text-forest/75">{category.summary}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
