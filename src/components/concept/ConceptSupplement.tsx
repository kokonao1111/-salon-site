import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { conceptSupplement } from "@/lib/conceptSupplement";

/** 承認済みの補足項目のみ表示する。1件も承認されていなければセクション自体を出さない。 */
export function ConceptSupplement() {
  const approvedItems = conceptSupplement.filter((item) => item.isApproved);
  if (approvedItems.length === 0) return null;

  return (
    <section className="bg-soft-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 sm:grid-cols-2 sm:gap-x-12 sm:gap-y-16">
          {approvedItems.map((item) => (
            <RevealText key={item.id}>
              <div className="border-t border-ink/15 pt-8">
                <span className="font-serif-en text-sm tracking-[0.06em] text-forest/55 italic">
                  {item.titleEn}
                </span>
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
