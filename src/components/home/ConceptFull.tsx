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
 * コンセプト導入部。左右二色分割の背景に大きな英字見出し「CONCEPT」を置き、
 * 支給原稿（変更禁止）の書き出しを大きく見せた後、写真とゴールドのボタンで
 * 次のセクションへ視線を導く。写真は商用利用可能な自然写真（人物・建物なし）。
 * 原稿本文は要約・言い換えせず全文をそのまま掲載する。
 */
export function ConceptFull() {
  return (
    <section className="relative overflow-hidden bg-soft-white">
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
          <div className="relative aspect-[16/10] w-full overflow-hidden sm:w-[72%]">
            <Image
              src="/images/backgrounds/hero-shima-coast.jpg"
              alt="志摩の海岸風景（イメージ、店舗写真は準備中）"
              fill
              sizes="(min-width: 640px) 72vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-8 left-8 hidden flex-col items-center gap-3 sm:flex">
            <span
              className="font-serif-en text-[10px] tracking-[0.3em] text-soft-white"
              style={{ writingMode: "vertical-rl" }}
            >
              SCROLL
            </span>
            <span className="h-10 w-px bg-soft-white/70" aria-hidden />
          </div>

          <div className="absolute right-6 -bottom-6 sm:right-12">
            <LinkButton href="/first-visit" variant="gold">
              初めての方へ
            </LinkButton>
          </div>
        </div>
      </Container>

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
    </section>
  );
}
