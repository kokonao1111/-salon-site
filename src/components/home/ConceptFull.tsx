import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { CONCEPT_COPY } from "@/lib/copy";

// 【変更禁止原稿】を1文字も変えず、全文をそのまま使用する。
const [titleBlock, soloBlock, closingBlock] = CONCEPT_COPY;
const [title, ...titleRest] = titleBlock;

/**
 * Homeのコンセプトセクションは、支給原稿（変更禁止）を要約・抜粋せず全文掲載する。
 * 独自の見出し・説明文は追加しない。
 */
export function ConceptFull() {
  return (
    <section className="bg-warm-ivory py-20 sm:py-28">
      <Container className="max-w-2xl">
        <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">Concept</p>
        <div className="mt-3 h-px w-12 bg-gold" />

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
      </Container>
    </section>
  );
}
