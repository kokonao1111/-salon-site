import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { placeholderImages } from "@/lib/placeholderImages";

const POINTS = [
  {
    label: "Counseling",
    title: "肌と身体の状態を、はじめに丁寧に伺います",
    body: "気になる部位、生活リズム、肌のゆらぎなどを確認し、無理なく受けられるケアの方向性を整えます。",
  },
  {
    label: "Skin analysis",
    title: "高精度な肌診断器で現在の状態を確認します",
    body: "感覚だけで決めず、診断結果とコンディションをもとにフェイシャル・ボディの提案につなげます。",
  },
  {
    label: "Program",
    title: "メニュー詳細は確定後に公開します",
    body: "料金・所要時間・予約方法は準備中です。確定前の仮メニューや仮価格は掲載していません。",
  },
] as const;

/**
 * 初回カウンセリングと肌診断の説明。効果保証ではなく、来店前の理解を助けるための
 * 進行説明に留める。
 */
export function FirstVisitCounseling() {
  return (
    <section className="bg-soft-white py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="relative overflow-hidden border border-gold/25 bg-warm-ivory">
            <PlaceholderImage
              spec={placeholderImages.counseling}
              alt="カウンセリング・肌診断（準備中）"
              fill
              className="min-h-[320px] sm:min-h-[440px]"
            />
          </div>

          <div>
            <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">
              Counseling / Skin analysis
            </p>
            <div className="mt-3 h-px w-12 bg-gold" />
            <h2 className="mt-6 font-serif-jp text-2xl leading-relaxed text-ink sm:text-3xl">
              初回は、カウンセリングと肌診断から。
            </h2>

            <div className="mt-8 divide-y divide-gold/20 border-y border-gold/20">
              {POINTS.map((point) => (
                <article key={point.label} className="py-6">
                  <p className="font-serif-en text-[11px] tracking-[0.18em] text-gold uppercase">
                    {point.label}
                  </p>
                  <h3 className="mt-2 font-serif-jp text-lg leading-relaxed text-ink">
                    {point.title}
                  </h3>
                  <p className="mt-2 text-sm leading-loose text-forest/78">{point.body}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
