import { Container } from "@/components/ui/Container";

/**
 * 参考サイトの「初めての方へおすすめトライアル」に相当する位置に置く、
 * 初回プラン詳細が未確定であることを上品に伝えるセクション。料金は仮で入れない。
 */
export function FirstVisitCallout() {
  return (
    <section className="bg-warm-ivory py-16 sm:py-24">
      <Container className="max-w-2xl text-center">
        <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">First Visit</p>
        <div className="mx-auto mt-3 h-px w-12 bg-gold" />
        <h2 className="mt-6 font-serif-jp text-2xl text-ink sm:text-3xl">初めての方へ</h2>
        <p className="mt-5 text-[15px] leading-loose text-forest/80">
          肌診断をもとに、一人ひとりに合わせたフェイシャル＆ボディプログラムを準備中です。
        </p>
        <p className="mt-2 text-[15px] leading-loose text-forest/80">詳細はオープン前に公開予定です。</p>
      </Container>
    </section>
  );
}
