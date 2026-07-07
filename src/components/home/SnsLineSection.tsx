import { Container } from "@/components/ui/Container";

/**
 * LINE・SNSともに未確定のため、QRコードや仮リンクは一切出さない。
 * Instagram等のSNSも未確定のため作らない。
 */
export function SnsLineSection() {
  return (
    <section className="bg-soft-white py-16 sm:py-24">
      <Container className="max-w-2xl text-center">
        <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">Line / SNS</p>
        <div className="mx-auto mt-3 h-px w-12 bg-gold" />
        <h2 className="mt-6 font-serif-jp text-2xl text-ink sm:text-3xl">LINE予約・SNS</h2>
        <p className="mt-5 text-[15px] leading-loose text-forest/80">LINE予約は準備中です。</p>
        <p className="mt-2 text-[15px] leading-loose text-forest/80">公式アカウント公開後に掲載予定です。</p>
      </Container>
    </section>
  );
}
