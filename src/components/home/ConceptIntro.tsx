import { RevealImage } from "@/components/ui/RevealImage";
import { RevealText } from "@/components/ui/RevealText";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { LinkButton } from "@/components/ui/Button";
import { placeholderImages } from "@/lib/placeholderImages";

/**
 * 変更禁止原稿はここでは引用しない（Hero・/concept と重複させないため）。
 * 単純な左右二分割を避け、写真を左端に大きく寄せ、文章は右側に控えめに置く
 * 非対称の構成にする。
 */
export function ConceptIntro() {
  return (
    <section className="bg-warm-ivory">
      <div className="grid lg:grid-cols-[1.3fr_1fr]">
        <RevealImage className="h-[52vw] max-h-[520px] min-h-[320px] lg:h-[600px] lg:max-h-none">
          <PlaceholderImage
            spec={placeholderImages.surroundings}
            alt="志摩の周辺環境（準備中）"
            fill
          />
        </RevealImage>

        <div className="flex flex-col justify-center px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
          <RevealText>
            <h2 className="text-balance font-serif-jp text-2xl leading-relaxed text-ink sm:text-3xl">
              静けさの中で、
              <br />
              肌と向き合う時間。
            </h2>
          </RevealText>
          <p className="mt-6 max-w-sm text-[15px] leading-loose text-forest/80">
            志摩の別荘地に佇む、完全プライベートのサロン。感覚だけに頼らない肌診断と、その先にあるオーダーメイドの施術について、コンセプトページで詳しくお伝えしています。
          </p>
          <LinkButton href="/concept" variant="ghost" className="mt-8 self-start">
            コンセプトを読む
          </LinkButton>
        </div>
      </div>
    </section>
  );
}
