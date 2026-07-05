import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { RevealImage } from "@/components/ui/RevealImage";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { placeholderImages } from "@/lib/placeholderImages";
import { CONCEPT_COPY } from "@/lib/copy";

/**
 * 【変更禁止原稿】を表示するセクション。
 * CONCEPT_COPY の内容・順序・行区切りは一切変更しない。
 * 段落間に写真を挟むのは編集レイアウトの都合であり、原稿の書き換えではない。
 */
export function ConceptManuscript() {
  const [titleBlock, soloBlock, closingBlock] = CONCEPT_COPY;

  return (
    <section className="bg-warm-ivory">
      <Container className="py-24 sm:py-32">
        <p className="font-serif-en text-sm tracking-[0.28em] text-gold uppercase">Concept</p>

        <div className="mt-8 space-y-2">
          {titleBlock.map((line, index) => (
            <RevealText key={line} delay={index * 0.08}>
              <p
                className={
                  index === 0
                    ? "text-balance font-serif-jp text-3xl leading-snug text-ink sm:text-5xl"
                    : "max-w-3xl text-pretty text-base leading-loose text-forest/85 sm:text-lg"
                }
              >
                {line}
              </p>
            </RevealText>
          ))}
        </div>
      </Container>

      <RevealImage className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <PlaceholderImage
          spec={placeholderImages.entrance}
          alt="玄関・アプローチ（準備中）"
          className="w-full"
        />
      </RevealImage>

      <Container className="py-20 sm:py-28">
        <RevealText>
          <p className="max-w-3xl text-balance font-serif-jp text-2xl leading-relaxed text-ink sm:text-3xl">
            {soloBlock[0]}
          </p>
        </RevealText>
      </Container>

      <RevealImage className="mx-auto max-w-[1440px] px-6 sm:px-10 lg:px-16">
        <PlaceholderImage
          spec={placeholderImages.skinAnalysisDevice}
          alt="肌診断器（準備中）"
          className="w-full"
        />
      </RevealImage>

      <Container className="py-20 sm:py-28">
        <div className="space-y-6">
          {closingBlock.map((line, index) => (
            <RevealText key={line} delay={index * 0.08}>
              <p className="max-w-3xl text-pretty text-base leading-loose text-forest/85 sm:text-lg">
                {line}
              </p>
            </RevealText>
          ))}
        </div>
      </Container>
    </section>
  );
}
