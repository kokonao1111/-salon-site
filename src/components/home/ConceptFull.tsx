import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { PhotoBackground } from "@/components/ui/PhotoBackground";
import { backgroundPhotos } from "@/lib/backgroundPhotos";
import { CONCEPT_COPY } from "@/lib/copy";

// 【変更禁止原稿】を1文字も変えず、全文をそのまま使用する。
const [titleBlock, soloBlock, closingBlock] = CONCEPT_COPY;
const [title, ...titleRest] = titleBlock;

/**
 * 導入セクション。背景に志摩の周辺環境の写真（準備中は単色）を残しながら、
 * 生成り半透明のパネルの中に支給原稿（変更禁止）を1文字も変えず全文掲載する。
 */
export function ConceptFull() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <PhotoBackground
        slot={backgroundPhotos.conceptBackground}
        alt="志摩の周辺環境（イメージ、店舗写真は準備中）"
        overlay="none"
      />

      <Container className="relative max-w-2xl">
        <div className="bg-warm-ivory/90 px-6 py-10 backdrop-blur-sm sm:px-14 sm:py-16">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-gold sm:w-16" aria-hidden />
            <span className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">
              Concept
            </span>
            <span className="h-px w-10 bg-gold sm:w-16" aria-hidden />
          </div>

          <RevealText className="mt-8">
            <h2 className="text-pretty font-serif-jp text-2xl leading-[1.7] text-ink sm:text-3xl">
              {title}
            </h2>
          </RevealText>

          <div className="mt-6 space-y-1.5">
            {titleRest.map((line) => (
              <RevealText key={line}>
                <p className="text-pretty text-[15px] leading-[1.9] text-forest/85">{line}</p>
              </RevealText>
            ))}
          </div>

          <div className="mt-10 border-t border-gold/30 pt-10">
            <RevealText>
              <p className="text-pretty font-serif-jp text-xl leading-[1.9] text-ink sm:text-2xl">
                {soloBlock[0]}
              </p>
            </RevealText>
          </div>

          <div className="mt-10 space-y-1.5 border-t border-gold/30 pt-10">
            {closingBlock.map((line) => (
              <RevealText key={line}>
                <p className="text-pretty text-[15px] leading-[1.9] text-forest/85">{line}</p>
              </RevealText>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
