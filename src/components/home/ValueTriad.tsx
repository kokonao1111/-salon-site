import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";

const values = [
  {
    number: "01",
    en: "Private",
    ja: "完全プライベート",
    description: "完全プライベートな個室空間で、あなただけの時間をお過ごしいただけます。",
  },
  {
    number: "02",
    en: "Analysis",
    ja: "肌診断",
    description: "高精度な肌診断器で、感覚だけに頼らないお肌の現状と未来を読み解きます。",
  },
  {
    number: "03",
    en: "Bespoke",
    ja: "オーダーメイド",
    description: "診断結果をもとに、お一人おひとりに合わせたプログラムをご提案します。",
  },
];

export function ValueTriad() {
  return (
    <section className="bg-soft-white py-24 sm:py-32">
      <Container>
        <div className="grid gap-12 sm:grid-cols-3 sm:gap-8">
          {values.map((value) => (
            <RevealText key={value.number}>
              <div className="border-t border-ink/15 pt-8">
                <p className="font-serif-en text-2xl text-gold">{value.number}</p>
                <p className="mt-4 font-serif-en text-lg tracking-[0.1em] text-ink/70 italic">
                  {value.en}
                </p>
                <h3 className="mt-2 font-serif-jp text-2xl text-ink">{value.ja}</h3>
                <p className="mt-4 text-sm leading-loose text-forest/80">{value.description}</p>
              </div>
            </RevealText>
          ))}
        </div>
      </Container>
    </section>
  );
}
