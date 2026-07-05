import { Container } from "@/components/ui/Container";
import { RevealImage } from "@/components/ui/RevealImage";
import { RevealText } from "@/components/ui/RevealText";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import type { PlaceholderImageSpec } from "@/lib/types";
import type { ServiceCategory } from "@/lib/types";

interface ServiceCategoryBlockProps {
  category: ServiceCategory;
  image: PlaceholderImageSpec;
  imageAlt: string;
  reversed?: boolean;
  index: number;
}

export function ServiceCategoryBlock({
  category,
  image,
  imageAlt,
  reversed,
  index,
}: ServiceCategoryBlockProps) {
  return (
    <section className={index % 2 === 0 ? "bg-warm-ivory" : "bg-soft-white"}>
      <Container className="grid gap-12 py-20 lg:grid-cols-2 lg:items-center lg:gap-20 lg:py-28">
        <RevealImage className={reversed ? "lg:order-2" : ""}>
          <PlaceholderImage spec={image} alt={imageAlt} className="w-full" />
        </RevealImage>

        <div className={reversed ? "lg:order-1" : ""}>
          <p className="font-serif-en text-sm tracking-[0.15em] text-forest/70 italic">
            {category.nameEn}
          </p>
          <RevealText>
            <h2 className="mt-2 font-serif-jp text-3xl text-ink sm:text-4xl">{category.nameJa}</h2>
          </RevealText>
          <p className="mt-6 max-w-md text-base leading-loose text-forest/80">{category.summary}</p>
        </div>
      </Container>
    </section>
  );
}
