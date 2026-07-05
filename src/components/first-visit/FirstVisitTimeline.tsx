import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { firstVisitFlow } from "@/lib/firstVisitFlow";

export function FirstVisitTimeline() {
  return (
    <section className="bg-warm-ivory py-20 sm:py-28">
      <Container>
        <p className="max-w-2xl text-sm leading-loose text-forest/75">
          ご来店から施術までの、一般的なお流れをご案内いたします。運用開始に合わせて、正式なご案内に更新いたします。
        </p>

        <ol className="mt-12 divide-y divide-ink/10 border-t border-b border-ink/10">
          {firstVisitFlow.map((step) => (
            <li key={step.step} className="flex flex-col gap-2 py-8 sm:flex-row sm:gap-10">
              <RevealText className="sm:w-24 sm:shrink-0">
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
