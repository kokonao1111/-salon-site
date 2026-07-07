import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { LinkButton } from "@/components/ui/Button";
import { CONCEPT_COPY } from "@/lib/copy";

// 【変更禁止原稿】を1文字も変えず、全文をそのまま使用する。
const [titleBlock, soloBlock, closingBlock] = CONCEPT_COPY;
const [title, ...titleRest] = titleBlock;
// 見出しの折り返し位置だけを句点「、」の前後で制御する（文字は一切変更しない）。
const [TITLE_LEAD, TITLE_TAIL] = title.split("、");

/**
 * コンセプト導入部。上段（巨大見出し＋写真）と下段（原稿の続き）で、あえて
 * 異なる背景表現にする。上段は角度のついた二色分割、下段は単色の静かな背景にし、
 * 「同じ模様がずっと続く」単調さを避ける。写真は商用利用可能な自然写真
 * （人物・建物なし）。原稿本文は要約・言い換えせず全文をそのまま掲載する。
 */
export function ConceptFull() {
  return (
    <section className="bg-soft-white">
      <div className="relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 w-full sm:w-[58%]"
          style={{
            background: "linear-gradient(160deg, var(--color-pearl) 0%, var(--color-warm-ivory) 100%)",
          }}
        />

        <Container className="relative pt-20 pb-12 sm:pt-28 sm:pb-16">
          <div className="grid gap-10 sm:grid-cols-2 sm:gap-16">
            <div>
              <p className="font-serif-en text-5xl leading-none tracking-tight text-ink sm:text-7xl lg:text-8xl">
                Concept
              </p>
              <p className="mt-4 font-serif-jp text-sm tracking-[0.2em] text-forest/70">コンセプト</p>
            </div>

            <div className="sm:pt-3">
              <RevealText>
                <h2 className="text-balance font-serif-jp text-2xl leading-snug text-ink sm:text-3xl">
                  <span className="block whitespace-nowrap">{TITLE_LEAD}、</span>
                  <span className="block whitespace-nowrap">{TITLE_TAIL}</span>
                </h2>
              </RevealText>
              <div className="mt-6 space-y-1.5">
                {titleRest.map((line) => (
                  <RevealText key={line}>
                    <p className="text-pretty text-[15px] leading-[1.9] text-forest/85">{line}</p>
                  </RevealText>
                ))}
              </div>
            </div>
          </div>

          <div className="relative mt-14 sm:mt-20">
            <div className="mx-auto max-w-3xl sm:max-w-5xl">
              <div className="flex items-end gap-3 sm:gap-4">
                <div className="relative w-[42%] sm:w-[34%]">
                  <div className="relative aspect-[5/4] w-full overflow-hidden">
                    <Image
                      src="/images/backgrounds/hero-shima-coast.jpg"
                      alt="志摩の海岸風景（イメージ、店舗写真は準備中）"
                      fill
                      sizes="(min-width: 640px) 16vw, 30vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="absolute -right-3 -bottom-3 aspect-square w-[46%] overflow-hidden border-4 border-soft-white shadow-xl sm:-right-4 sm:-bottom-4">
                    <Image
                      src="/images/backgrounds/concept-pine-bay.jpg"
                      alt="志摩の松林と海のイメージ（準備中）"
                      fill
                      sizes="(min-width: 640px) 8vw, 14vw"
                      className="object-cover"
                    />
                  </div>
                </div>

                <div className="relative aspect-[5/4] w-[50%] overflow-hidden sm:w-[56%]">
                  <Image
                    src="/images/backgrounds/concept-bamboo-grove.jpg"
                    alt="志摩の自然・竹林のイメージ（店舗写真は準備中）"
                    fill
                    sizes="(min-width: 640px) 27vw, 36vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-end gap-4 pt-4 sm:mt-16 sm:justify-between sm:pt-0">
              <div className="hidden flex-col items-center gap-3 sm:flex">
                <span
                  className="font-serif-en text-[10px] tracking-[0.3em] text-forest/60"
                  style={{ writingMode: "vertical-rl" }}
                >
                  SCROLL
                </span>
                <span className="h-10 w-px bg-forest/30" aria-hidden />
              </div>

              <LinkButton href="/menu" variant="gold">
                メニューを見る
              </LinkButton>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative bg-warm-ivory">
        <Container className="relative pt-24 pb-24 sm:pt-32 sm:pb-32">
          <div className="mx-auto max-w-2xl">
            <RevealText>
              <p className="text-pretty font-serif-jp text-xl leading-[1.9] text-ink sm:text-2xl">
                {soloBlock[0]}
              </p>
            </RevealText>

            <div className="mt-10 space-y-1.5 border-t border-gold/30 pt-10">
              {closingBlock.map((line) => (
                <RevealText key={line}>
                  <p className="text-pretty text-[15px] leading-[1.9] text-forest/85">{line}</p>
                </RevealText>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
}
