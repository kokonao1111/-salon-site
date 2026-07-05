import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { conceptSupplement } from "@/lib/conceptSupplement";

export function ConceptSupplement() {
  return (
    <section className="bg-soft-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16">
          {conceptSupplement.map((item) => (
            <RevealText key={item.id}>
              <div className="border-t border-ink/15 pt-8">
                <div className="flex items-baseline gap-3">
                  <span className="font-serif-en text-xl text-gold">{item.eyebrowNumber}</span>
                  <span className="font-serif-en text-sm tracking-[0.15em] text-forest/60 italic">
                    {item.titleEn}
                  </span>
                </div>
                <h3 className="mt-3 font-serif-jp text-2xl text-ink">{item.titleJa}</h3>
                <p className="mt-4 max-w-md text-sm leading-loose text-forest/80">{item.body}</p>
              </div>
            </RevealText>
          ))}
        </div>
      </Container>
    </section>
  );
}
