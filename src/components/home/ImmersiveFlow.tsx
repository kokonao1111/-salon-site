import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { PhotoBackground } from "@/components/ui/PhotoBackground";
import { backgroundPhotos } from "@/lib/backgroundPhotos";
import { firstVisitFlow } from "@/lib/firstVisitFlow";

/**
 * 来店の流れ。背景を明るい写真エリアに切り替える（未撮影の間は単色）。
 * 予約方法は未確定のため、断定せず「準備中」と案内する。
 */
export function ImmersiveFlow() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28">
      <PhotoBackground slot={backgroundPhotos.treatment} alt="施術室イメージ（準備中）" overlay="soft" />

      <Container className="relative">
        <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">Flow</p>
        <div className="mt-3 h-px w-12 bg-gold" />
        <h2 className="mt-6 font-serif-jp text-2xl text-ink sm:text-3xl">来店の流れ</h2>

        <ol className="mt-10 divide-y divide-gold/25 border-t border-b border-gold/25">
          {firstVisitFlow.map((step) => (
            <li key={step.step} className="flex flex-col gap-2 py-7 sm:flex-row sm:gap-10">
              <RevealText className="sm:w-28 sm:shrink-0">
                <p className="font-serif-en text-2xl text-gold">
                  {String(step.step).padStart(2, "0")}
                </p>
              </RevealText>
              <div>
                <h3 className="font-serif-jp text-xl text-ink">{step.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-loose text-forest/85">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-8 text-sm leading-loose text-forest/70">
          ご予約はLINE・お電話での受付を準備中です。
        </p>
      </Container>
    </section>
  );
}
