import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealImage } from "@/components/ui/RevealImage";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { placeholderImages } from "@/lib/placeholderImages";

/**
 * 店舗撮影が完了するまでは、同じ抽象表現を並べたギャラリーにせず、
 * 1〜2枚の大きなムードビジュアルに限定する。
 * 撮影後は、ワイド（空間全体）／ディテール（素材・光）／施術風景　に役割を分けて増やす。
 */
export function SpaceSection() {
  return (
    <section className="bg-soft-white pt-16 pb-20 sm:pt-20 sm:pb-24">
      <Container>
        <SectionHeading eyebrow="Space" title="贅沢な個室空間" />
      </Container>

      <RevealImage className="mt-8 h-[70vw] max-h-[520px] min-h-[320px] sm:h-[46vw] sm:max-h-[560px]">
        <PlaceholderImage
          spec={placeholderImages.treatmentRoomWide}
          alt="メイン施術室（準備中）"
          fill
        />
      </RevealImage>

      <Container className="mt-6">
        <p className="max-w-md text-[15px] leading-loose text-forest/70">
          店舗の完成後、施術室の様子や素材のディテールを順次公開してまいります。
        </p>
      </Container>
    </section>
  );
}
