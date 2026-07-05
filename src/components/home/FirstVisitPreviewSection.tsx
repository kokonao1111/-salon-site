import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { firstVisitFlow } from "@/lib/firstVisitFlow";
import { pageReadiness } from "@/lib/pageReadiness";

/** live専用：来店フローが承認された後にのみ表示する。 */
export function FirstVisitPreviewSection() {
  if (!pageReadiness.firstVisit) return null;

  const approvedSteps = firstVisitFlow.filter((step) => step.isApproved);

  return (
    <section className="bg-soft-white py-16 sm:py-24">
      <Container className="max-w-2xl">
        <p className="font-serif-en text-xs tracking-[0.1em] text-forest/55 uppercase">
          First Visit
        </p>
        <ol className="mt-6 space-y-2">
          {approvedSteps.map((step) => (
            <li key={step.step} className="text-[15px] leading-loose text-forest/80">
              {String(step.step).padStart(2, "0")}　{step.title}
            </li>
          ))}
        </ol>
        <LinkButton href="/first-visit" variant="ghost" className="mt-8">
          初めての方へ
        </LinkButton>
      </Container>
    </section>
  );
}
