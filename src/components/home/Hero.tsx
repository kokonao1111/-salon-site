import { HeroVisual } from "./HeroVisual";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { RevealText } from "@/components/ui/RevealText";
import { siteConfig } from "@/lib/siteConfig";
import { isReservationReady } from "@/lib/reservation";
import { CONCEPT_TITLE } from "@/lib/copy";

// 見出しの折り返し位置だけを句点「、」の前後で制御する（文字は一切変更しない）。
const [TITLE_LEAD, TITLE_TAIL] = CONCEPT_TITLE.split("、");

/**
 * ファーストビュー。参考サイトのように横幅いっぱいの大きなビジュアルを配置する。
 * 店舗写真が届くまでは `HeroVisual` が明るいトーンの仮ビジュアルを表示する。
 * 見出し・スケジュール・予約導線と写真枠を分け、情報量は保ちながら古いバナー型の
 * 見え方を避ける。
 */
export function Hero() {
  const reservationReady = isReservationReady();

  return (
    <section className="overflow-hidden border-b border-gold/20 bg-soft-white">
      <Container className="grid gap-0 px-0 lg:min-h-[680px] lg:grid-cols-[0.82fr_1.18fr] lg:px-16">
        <div className="relative order-2 px-6 py-8 sm:px-10 sm:py-14 lg:order-1 lg:flex lg:items-center lg:px-0 lg:pr-12">
          <div className="max-w-[42rem]">
            <p className="inline-flex items-center gap-3 font-serif-en text-[11px] tracking-[0.22em] text-forest/58 uppercase">
              <span className="h-px w-10 bg-gold" />
              Private beauty salon in Shima
            </p>

            <RevealText className="mt-5">
              <h1 className="text-balance font-serif-jp text-[1.86rem] leading-[1.42] tracking-[0.01em] text-ink [word-break:keep-all] sm:text-5xl lg:text-[3rem]">
                <span className="block whitespace-nowrap">{TITLE_LEAD}、</span>
                <span className="block whitespace-nowrap">{TITLE_TAIL}</span>
              </h1>
            </RevealText>

            <p className="mt-5 max-w-[34rem] text-[15px] leading-[1.95] text-forest/82 sm:text-base">
              リゾート地の静けさに包まれた完全個室で、肌診断を起点にフェイシャルとボディを整える準備を進めています。
            </p>

            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-[12px] tracking-[0.08em] text-forest/62">
              <span>完全個室</span>
              <span className="text-gold">/</span>
              <span>肌診断</span>
              <span className="text-gold">/</span>
              <span>フェイシャル＆ボディ</span>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <LinkButton href="/first-visit" variant="primary">
                初めての方へ
              </LinkButton>
              <LinkButton href="/contact" variant="outline">
                {reservationReady ? "予約する" : "予約準備状況を見る"}
              </LinkButton>
            </div>

            <div className="mt-8 border-t border-gold/25 pt-5 sm:inline-flex sm:items-baseline sm:gap-4">
              <span className="font-serif-jp text-lg text-ink sm:text-xl">
                {siteConfig.openingApprox}
              </span>
              <span className="mt-1 block font-serif-en text-[11px] tracking-[0.18em] text-gold uppercase sm:mt-0">
                Opening schedule
              </span>
            </div>
          </div>
        </div>

        <div className="relative order-1 min-h-[300px] overflow-hidden border-b border-gold/20 sm:min-h-[500px] lg:order-2 lg:min-h-[680px] lg:border-b-0 lg:border-l">
          <HeroVisual src={siteConfig.heroImageSrc ?? undefined} />
        </div>
      </Container>
    </section>
  );
}
