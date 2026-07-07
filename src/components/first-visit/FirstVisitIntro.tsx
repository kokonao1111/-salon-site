import { Container } from "@/components/ui/Container";
import { CONCEPT_COPY } from "@/lib/copy";

// 支給原稿（変更禁止）からの引用。新しい確約・断定は追加せず、既に承認済みの表現のみを再利用する。
const PRIVATE_SPACE_LINE = CONCEPT_COPY[1][0];
const [APPROACH_LINE, DIAGNOSIS_LINE] = CONCEPT_COPY[2];

/**
 * 初めての方への導入文。完全プライベート空間・お一人おひとりの時間・肌診断への
 * アプローチ・予約準備中である旨を、支給原稿の表現を引用しながら伝える。
 */
export function FirstVisitIntro() {
  return (
    <section className="bg-soft-white py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
          <div>
            <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">
              Welcome
            </p>
            <div className="mt-3 h-px w-12 bg-gold" />
            <h2 className="mt-6 font-serif-jp text-2xl leading-relaxed text-ink sm:text-3xl">
              初めてでも、静かに過ごせるように。
            </h2>
          </div>

          <div>
            <p className="text-pretty text-[15px] leading-loose text-forest/85">
              初めてご来店いただく方にも安心してお過ごしいただけるよう、当サロンの考え方をご紹介します。
            </p>

            <div className="mt-8 space-y-5 border-t border-gold/30 pt-8">
              <p className="text-pretty font-serif-jp text-lg leading-[1.9] text-ink">
                {PRIVATE_SPACE_LINE}
              </p>
              <p className="text-pretty text-[15px] leading-loose text-forest/85">
                {APPROACH_LINE}
              </p>
              <p className="text-pretty text-[15px] leading-loose text-forest/85">
                {DIAGNOSIS_LINE}
              </p>
            </div>

            <div className="mt-8 grid gap-px bg-gold/20 sm:grid-cols-3">
              {["完全個室", "肌診断から提案", "予約方法は準備中"].map((item) => (
                <p
                  key={item}
                  className="bg-soft-white px-4 py-4 text-center font-serif-jp text-sm text-forest"
                >
                  {item}
                </p>
              ))}
            </div>

            <p className="mt-8 border-t border-gold/30 pt-6 text-sm leading-loose text-forest/70">
              ご予約方法・メニュー料金は現在準備中です。
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
