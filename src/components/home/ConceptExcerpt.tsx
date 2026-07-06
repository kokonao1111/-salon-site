import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { LinkButton } from "@/components/ui/Button";
import { CONCEPT_COPY } from "@/lib/copy";

// 支給原稿（変更禁止）の第2・第3段落をそのまま使用する。第1段落の見出し行は
// Hero の H1 で既に使用しているため、ここでの重複を避ける。
const [, soloBlock, closingBlock] = CONCEPT_COPY;

/**
 * Homeのコンセプト紹介は、支給原稿（変更禁止）からの抜粋のみで構成する。
 * 独自の見出し・説明文は書かない（過去に「静けさの中で、肌と向き合う時間。」等の
 * 未承認コピーを表示していた反省を踏まえた措置）。
 * 2つの段落を同じ体裁で並べず、文字幅と余白を変えて編集的なリズムをつける。
 * 全文は載せず、続きは /concept へつなぐ。
 */
export function ConceptExcerpt() {
  return (
    <section className="bg-warm-ivory py-20 sm:py-28">
      <Container className="max-w-2xl">
        <p className="font-serif-en text-xs tracking-[0.1em] text-forest/55 uppercase">Concept</p>

        <RevealText className="mt-6">
          <p className="max-w-md text-pretty font-serif-jp text-2xl leading-[1.9] text-ink sm:text-[1.75rem]">
            {soloBlock[0]}
          </p>
        </RevealText>

        <div className="mt-10 space-y-1.5 border-t border-ink/10 pt-10">
          {closingBlock.map((line) => (
            <RevealText key={line}>
              <p className="max-w-xl text-pretty text-base leading-[1.8] text-forest/80">{line}</p>
            </RevealText>
          ))}
        </div>

        <LinkButton href="/concept" variant="ghost" className="mt-10">
          コンセプトを読む
        </LinkButton>
      </Container>
    </section>
  );
}
