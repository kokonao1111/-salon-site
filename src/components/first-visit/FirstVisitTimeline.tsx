import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { SectionIntro } from "@/components/ui/SectionIntro";
import { firstVisitFlow } from "@/lib/firstVisitFlow";

/**
 * ご来店からアフターカウンセリングまでの流れ。実際の運用が確定するまでの間、
 * 各ステップの説明文は「予定」「準備中」を自然に用い、断定しすぎない。
 */
export function FirstVisitTimeline() {
  return (
    <section className="bg-soft-white py-20 sm:py-28">
      <Container>
        <SectionIntro eyebrow="Flow" title="来店の流れ" />

        <ol className="mt-12 divide-y divide-gold/20 border-t border-b border-gold/20">
          {firstVisitFlow.map((step) => (
            <li key={step.step} className="flex flex-col gap-2 py-8 sm:flex-row sm:gap-10">
              <RevealText className="sm:w-28 sm:shrink-0">
                <p className="font-serif-en text-2xl text-gold">
                  {String(step.step).padStart(2, "0")}
                </p>
              </RevealText>
              <div>
                <h3 className="font-serif-jp text-xl text-ink">{step.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-loose text-forest/80">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
