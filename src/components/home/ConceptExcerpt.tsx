import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { LinkButton } from "@/components/ui/Button";
import { CONCEPT_COPY } from "@/lib/copy";

/**
 * Homeのコンセプト紹介は、支給原稿（変更禁止）からの抜粋のみで構成する。
 * 独自の見出し・説明文は書かない（過去に「静けさの中で、肌と向き合う時間。」等の
 * 未承認コピーを表示していた反省を踏まえた措置）。
 */
export function ConceptExcerpt() {
  return (
    <section className="bg-warm-ivory py-16 sm:py-24">
      <Container className="max-w-2xl">
        <p className="font-serif-en text-xs tracking-[0.1em] text-forest/55 uppercase">Concept</p>
        <RevealText className="mt-4">
          <p className="text-pretty font-serif-jp text-xl leading-[1.9] text-ink sm:text-2xl">
            {CONCEPT_COPY[1][0]}
          </p>
        </RevealText>
        <LinkButton href="/concept" variant="ghost" className="mt-8">
          コンセプトを読む
        </LinkButton>
      </Container>
    </section>
  );
}
