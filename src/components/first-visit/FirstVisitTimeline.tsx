import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { PendingNotice } from "@/components/ui/PendingNotice";
import { firstVisitFlow } from "@/lib/firstVisitFlow";

/** 承認済みの流れのみを表示する。1件も承認されていなければ準備中の案内のみ表示する。 */
export function FirstVisitTimeline() {
  const approvedSteps = firstVisitFlow.filter((step) => step.isApproved);

  return (
    <section className="bg-warm-ivory py-20 sm:py-28">
      <Container>
        {approvedSteps.length === 0 ? (
          <PendingNotice>
            ご来店から施術までの流れは、現在準備中です。内容確定後、こちらでご案内いたします。
          </PendingNotice>
        ) : (
          <>
            <p className="max-w-2xl text-sm leading-loose text-forest/75">
              ご来店から施術までのお流れをご案内いたします。
            </p>

            <ol className="mt-12 divide-y divide-ink/10 border-t border-b border-ink/10">
              {approvedSteps.map((step) => (
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
          </>
        )}
      </Container>
    </section>
  );
}
