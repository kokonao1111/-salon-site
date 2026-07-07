import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { PhotoBackground } from "@/components/ui/PhotoBackground";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { backgroundPhotos } from "@/lib/backgroundPhotos";

// 「効果を保証する」「必ず改善する」等の表現は使わない。
const REASSURANCES = [
  {
    title: "完全プライベート空間",
    description: "贅沢な個室空間で、落ち着いてお過ごしいただけます。",
  },
  {
    title: "高精度な肌診断器による分析",
    description: "「感覚」だけに頼らず、高精度な肌診断器でお肌の状態を確認いたします。",
  },
  {
    title: "お一人おひとりに合わせた提案",
    description: "診断結果と現在のコンディションをもとに、プログラムをご提案いたします。",
  },
] as const;

/**
 * 「初めての方へ」を参考サイトのように独立した強い導線として見せるセクション。
 * 背景にはサロン空間・カウンセリングを想起させる写真エリアを置く（未撮影の間は単色）。
 */
export function ImmersiveFirstVisit() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <PhotoBackground
        slot={backgroundPhotos.firstVisit}
        alt="サロン空間・受付イメージ（準備中）"
        overlay="veil"
      />

      <Container className="relative max-w-2xl text-center">
        <SectionIntro
          eyebrow="First Visit"
          title="初めての方へ"
          description="初めてご来店いただく方にも安心してお過ごしいただけるよう、当サロンの考え方をご紹介します。"
        />

        <div className="mt-10 grid gap-8 text-left sm:grid-cols-3">
          {REASSURANCES.map((item) => (
            <div key={item.title} className="border-t border-gold/40 pt-4">
              <h3 className="font-serif-jp text-base text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-loose text-forest/80">{item.description}</p>
            </div>
          ))}
        </div>

        <LinkButton href="/first-visit" variant="primary" className="mt-10 justify-center">
          初めての方へ（詳しく見る）
        </LinkButton>
      </Container>
    </section>
  );
}
