import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { firstVisitFaq } from "@/lib/firstVisitFaq";

const HOME_FAQ = firstVisitFaq.slice(0, 3);

/**
 * トップページ用FAQ。LOUISE REVERの「よくある質問」導線の役割を残しつつ、
 * Homeでは初回検討者に必要な3件だけを抜粋する。
 */
export function HomeFaqPreview() {
  return (
    <section className="bg-warm-ivory py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <div>
            <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">FAQ</p>
            <div className="mt-3 h-px w-12 bg-gold" />
            <h2 className="mt-6 font-serif-jp text-2xl leading-relaxed text-ink sm:text-3xl">
              ご来店前に、気になること。
            </h2>
            <p className="mt-4 text-sm leading-loose text-forest/76">
              予約方法や料金など、未確定の情報は準備中として明記しています。
            </p>
            <LinkButton href="/first-visit" variant="ghost" className="mt-8">
              よくある不安を詳しく見る
            </LinkButton>
          </div>

          <dl className="divide-y divide-gold/20 border-y border-gold/20">
            {HOME_FAQ.map((item) => (
              <div key={item.question} className="py-6">
                <dt className="font-serif-jp text-base leading-relaxed text-ink">
                  {item.question}
                </dt>
                <dd className="mt-3 text-sm leading-loose text-forest/78">{item.answer}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </section>
  );
}
