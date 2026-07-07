import { Container } from "@/components/ui/Container";
import { firstVisitFaq } from "@/lib/firstVisitFaq";

/**
 * 初めての人が気にする内容を先回りして表示するFAQ。未確定の電話番号・LINE・
 * 料金・営業時間は書かず、「準備中」「予定」の範囲でのみ回答する。
 */
export function ImmersiveFaq() {
  return (
    <section className="bg-warm-ivory py-20 sm:py-28">
      <Container className="max-w-2xl">
        <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">FAQ</p>
        <div className="mt-3 h-px w-12 bg-gold" />
        <h2 className="mt-6 font-serif-jp text-2xl text-ink sm:text-3xl">よくある質問</h2>

        <dl className="mt-10 space-y-8">
          {firstVisitFaq.map((item) => (
            <div key={item.question} className="border-t border-gold/30 pt-6">
              <dt className="flex gap-3 font-serif-jp text-base text-ink">
                <span className="font-serif-en text-gold">Q</span>
                {item.question}
              </dt>
              <dd className="mt-3 flex gap-3 text-sm leading-loose text-forest/80">
                <span className="font-serif-en text-forest/40">A</span>
                <span>{item.answer}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
