import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";

/**
 * 予約方法が未確定のため、強い予約ボタンは置かない。
 * 現在の準備状況を正直に伝え、詳しい状況は /contact へ静かに橋渡しする。
 */
export function FirstVisitCta() {
  return (
    <section className="bg-soft-white py-16 text-center sm:py-24">
      <Container className="max-w-md">
        <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">Reserve</p>
        <div className="mx-auto mt-3 h-px w-12 bg-gold" />
        <p className="mt-6 text-[15px] leading-loose text-forest/85">
          ご予約方法は公開準備中です。
        </p>
        <p className="mt-2 text-[15px] leading-loose text-forest/85">
          LINE・電話での受付開始後、こちらに掲載いたします。
        </p>
        <LinkButton href="/contact" variant="ghost" className="mt-8 justify-center">
          ご予約について
        </LinkButton>
      </Container>
    </section>
  );
}
