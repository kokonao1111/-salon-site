import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealImage } from "@/components/ui/RevealImage";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { placeholderImages } from "@/lib/placeholderImages";

export function GallerySection() {
  return (
    <section className="bg-soft-white py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrowNumber="04"
          eyebrow="Space"
          title="贅沢な個室空間"
          titleEn="A Private Sanctuary"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-6">
          <RevealImage className="sm:col-span-4">
            <PlaceholderImage
              spec={placeholderImages.treatmentRoomWide}
              alt="メイン施術室（準備中）"
              className="w-full"
            />
          </RevealImage>
          <RevealImage className="sm:col-span-2">
            <PlaceholderImage
              spec={placeholderImages.materialDetail}
              alt="室内素材のディテール（準備中）"
              className="w-full"
            />
          </RevealImage>
          <RevealImage className="sm:col-span-2">
            <PlaceholderImage
              spec={placeholderImages.entrance}
              alt="玄関・アプローチ（準備中）"
              className="w-full"
            />
          </RevealImage>
          <RevealImage className="sm:col-span-4">
            <PlaceholderImage
              spec={placeholderImages.counseling}
              alt="カウンセリング風景（準備中）"
              className="w-full"
            />
          </RevealImage>
        </div>
      </Container>
    </section>
  );
}
