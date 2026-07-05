import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealImage } from "@/components/ui/RevealImage";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { placeholderImages } from "@/lib/placeholderImages";
import { serviceCategories } from "@/lib/siteConfig";

const preview = [
  {
    category: serviceCategories.find((c) => c.id === "facial")!,
    image: placeholderImages.facialHands,
    alt: "フェイシャル施術の手元（準備中）",
  },
  {
    category: serviceCategories.find((c) => c.id === "body")!,
    image: placeholderImages.bodyHands,
    alt: "ボディ施術の手元（準備中）",
  },
];

export function ServicesPreview() {
  return (
    <section className="bg-warm-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrowNumber="02"
          eyebrow="Service"
          title="フェイシャル ＆ ボディ"
          titleEn="Facial & Body"
        />

        <div className="mt-14 grid gap-10 sm:grid-cols-2 sm:gap-8">
          {preview.map(({ category, image, alt }) => (
            <Link key={category.id} href="/service" className="group block">
              <RevealImage>
                <PlaceholderImage spec={image} alt={alt} className="w-full" />
              </RevealImage>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="font-serif-en text-sm tracking-[0.15em] text-forest/70 italic">
                    {category.nameEn}
                  </p>
                  <h3 className="mt-1 font-serif-jp text-xl text-ink">{category.nameJa}</h3>
                </div>
                <ArrowRight
                  aria-hidden
                  className="mt-1 h-5 w-5 shrink-0 text-ink transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
