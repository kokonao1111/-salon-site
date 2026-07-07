import { Container } from "@/components/ui/Container";
import { SectionIntro } from "@/components/ui/SectionIntro";

// 「効果を保証する」「必ず改善する」といった表現は使わず、確定しているコンセプト・体制の
// 範囲内でのみ安心材料を伝える。
const REASSURANCES = [
  {
    title: "完全プライベート空間",
    description: "贅沢な個室空間で、落ち着いてお過ごしいただけます。",
  },
  {
    title: "高精度な肌診断器による分析",
    description: "「感覚」だけに頼らず、高精度な肌診断器でお肌の状態を確認いたします。",
  },
  {
    title: "お一人おひとりに合わせたプログラム提案",
    description: "診断結果と現在のコンディションをもとに、プログラムをご提案いたします。",
  },
  {
    title: "フェイシャルとボディの両面から整えるケア",
    description: "フェイシャルとボディ、両方の視点からオーダーメイドのケアをご提供します。",
  },
] as const;

/**
 * 参考サイトのような「初めての方への安心材料」枠。効果保証・断定表現は使わない。
 */
export function FirstVisitReassurance() {
  return (
    <section className="bg-warm-ivory py-16 sm:py-24">
      <Container>
        <SectionIntro eyebrow="Peace of Mind" title="初めてでも安心してお過ごしいただくために" />

        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2">
          {REASSURANCES.map((item) => (
            <div key={item.title} className="border-t border-gold/30 pt-5">
              <h3 className="font-serif-jp text-lg text-ink">{item.title}</h3>
              <p className="mt-2 text-sm leading-loose text-forest/80">{item.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
