import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { serviceCategories } from "@/lib/siteConfig";

/**
 * サービス内容は pending のため、確定情報であるかのような写真カードは置かない。
 * 変更禁止原稿からわかる範囲（フェイシャル＆ボディのプログラムを行うこと）と、
 * カテゴリ名だけを、静かなリストとして示す。
 */
export function ServicesPreview() {
  return (
    <section className="bg-warm-ivory py-20 sm:py-24">
      <Container>
        <SectionHeading
          eyebrow="Service"
          title="フェイシャル＆ボディのプログラム"
          description="お一人おひとりの肌診断の結果に基づき、ボディ＆フェイシャルのプログラムを組み立てます。内容の詳細は、店舗の完成に合わせて公開してまいります。"
        />

        <ul className="mt-10 flex flex-wrap gap-x-10 gap-y-3">
          {serviceCategories.map((category) => (
            <li key={category.id} className="font-serif-jp text-lg text-ink/80">
              {category.nameJa}
            </li>
          ))}
        </ul>

        <LinkButton href="/service" variant="ghost" className="mt-10">
          サービスについて
        </LinkButton>
      </Container>
    </section>
  );
}
