import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealText } from "@/components/ui/RevealText";
import { LinkButton } from "@/components/ui/Button";
import { firstVisitFlow } from "@/lib/firstVisitFlow";

const previewSteps = firstVisitFlow.filter((step) =>
  ["カウンセリング", "肌診断", "プログラム提案", "施術"].includes(step.title)
);

export function AnalysisFlow() {
  return (
    <section className="bg-forest py-24 text-soft-white sm:py-32">
      <Container>
        <SectionHeading
          eyebrowNumber="03"
          eyebrow="Analysis Flow"
          title="肌診断に基づく施術フロー"
          titleEn="From Analysis to Treatment"
          tone="light"
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-4 sm:gap-6">
          {previewSteps.map((step, index) => (
            <RevealText key={step.step} delay={index * 0.08}>
              <div className="border-t border-soft-white/25 pt-6">
                <p className="font-serif-en text-xl text-gold">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif-jp text-lg">{step.title}</h3>
              </div>
            </RevealText>
          ))}
        </div>

        <p className="mt-12 max-w-xl text-sm leading-loose text-pearl">
          ご来店から施術までの流れは、「初めての方へ」のページで詳しくご案内しています。
        </p>
        <LinkButton href="/first-visit" variant="outline-light" className="mt-6">
          初めての方へ
        </LinkButton>
      </Container>
    </section>
  );
}
