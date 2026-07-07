import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { firstVisitFlow } from "@/lib/firstVisitFlow";

/**
 * 来店の流れ（Home用の簡潔な番号インデックス）。各ステップの詳しい説明は
 * /first-visit に譲り、Homeでは全体像だけを見せる。
 */
export function HomeFlowPreview() {
  return (
    <section className="bg-soft-white py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <div>
            <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">Flow</p>
            <div className="mt-3 h-px w-12 bg-gold" />
            <h2 className="mt-6 font-serif-jp text-2xl leading-relaxed text-ink sm:text-3xl">
              来店の流れ
            </h2>
            <p className="mt-4 text-sm leading-loose text-forest/76">
              初回は、予約からカウンセリング・肌診断を経て、状態に合わせた提案へ進みます。
            </p>
            <LinkButton href="/first-visit" variant="ghost" className="mt-8">
              初めての方へ（詳しく見る）
            </LinkButton>
          </div>

          <ol className="grid grid-cols-2 gap-px bg-gold/20 sm:grid-cols-3">
            {firstVisitFlow.map((step) => (
              <li key={step.step} className="bg-soft-white px-4 py-5">
                <p className="font-serif-en text-lg text-gold">
                  {String(step.step).padStart(2, "0")}
                </p>
                <p className="mt-2 font-serif-jp text-sm leading-relaxed text-ink">{step.title}</p>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
