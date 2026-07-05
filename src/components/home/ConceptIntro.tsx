import { RevealImage } from "@/components/ui/RevealImage";
import { RevealText } from "@/components/ui/RevealText";
import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { LinkButton } from "@/components/ui/Button";
import { placeholderImages } from "@/lib/placeholderImages";
import { CONCEPT_COPY } from "@/lib/copy";

export function ConceptIntro() {
  return (
    <section className="bg-warm-ivory py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <RevealImage className="order-2 lg:order-1">
          <PlaceholderImage
            spec={placeholderImages.surroundings}
            alt="志摩の周辺環境（準備中）"
            className="w-full"
          />
        </RevealImage>

        <div className="order-1 lg:order-2">
          <p className="font-serif-en text-sm tracking-[0.28em] text-gold uppercase">Concept</p>
          <RevealText className="mt-6">
            <p className="max-w-lg text-balance font-serif-jp text-2xl leading-relaxed text-ink sm:text-3xl">
              {CONCEPT_COPY[1][0]}
            </p>
          </RevealText>
          <p className="mt-8 max-w-md text-sm leading-loose text-forest/80">
            肌診断に基づくオーダーメイドの施術方針について、コンセプトページで詳しくご紹介しています。
          </p>
          <LinkButton href="/concept" variant="ghost" className="mt-8">
            コンセプトを読む
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
