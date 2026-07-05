import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";

/**
 * Private / Analysis / Bespoke を3枚のカードとして並べず、
 * 1つの連続した文章として読ませる。罫線・数字・等間隔グリッドの反復を避ける。
 */
export function ValueTriad() {
  return (
    <section className="bg-soft-white py-16 sm:py-24">
      <Container className="max-w-3xl">
        <RevealText>
          <p className="text-balance font-serif-jp text-2xl leading-[1.9] text-ink sm:text-[2rem]">
            他のお客様と空間を共にすることのない、
            <span className="text-forest">完全プライベート</span>
            の個室で。
            <br />
            感覚だけに頼らず、
            <span className="text-forest">肌診断</span>
            の結果からお肌の現在と未来を読み解き、
            <br />
            お一人おひとりに合わせた
            <span className="text-forest">オーダーメイド</span>
            のプログラムへと仕立てていきます。
          </p>
        </RevealText>
      </Container>
    </section>
  );
}
