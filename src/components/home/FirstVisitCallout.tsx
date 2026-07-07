import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

const ITEMS = ["完全個室での過ごし方", "カウンセリング・肌診断", "予約からお帰りまでの流れ"];

/**
 * 参考サイトの「初めての方へおすすめトライアル」に相当する位置に置く、
 * 初回プラン詳細が未確定であることを上品に伝えるセクション。料金は仮で入れない。
 */
export function FirstVisitCallout() {
  return (
    <section className="bg-warm-ivory py-16 sm:py-24">
      <Container>
        <div className="grid gap-8 border-y border-gold/25 py-10 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">
              First Visit
            </p>
            <div className="mt-3 h-px w-12 bg-gold" />
            <h2 className="mt-6 font-serif-jp text-2xl leading-relaxed text-ink sm:text-3xl">
              初めての方へ
            </h2>
            <p className="mt-5 text-[15px] leading-loose text-forest/80">
              肌診断をもとに、一人ひとりに合わせたフェイシャル＆ボディプログラムを準備中です。
            </p>
            <p className="mt-2 text-[15px] leading-loose text-forest/80">
              詳細はオープン前に公開予定です。
            </p>
          </div>

          <div>
            <ul className="grid gap-px bg-gold/20 sm:grid-cols-3 lg:grid-cols-1">
              {ITEMS.map((item) => (
                <li
                  key={item}
                  className="bg-warm-ivory px-5 py-4 font-serif-jp text-sm text-forest"
                >
                  {item}
                </li>
              ))}
            </ul>
            <LinkButton href="/first-visit" variant="outline" className="mt-8">
              初めての方ページへ
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
