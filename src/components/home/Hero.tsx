import { HeroVisual } from "./HeroVisual";
import { Container } from "@/components/ui/Container";
import { RevealText } from "@/components/ui/RevealText";
import { ReserveActions } from "@/components/ui/ReserveActions";
import { siteConfig } from "@/lib/siteConfig";
import { isReservationReady } from "@/lib/reservation";
import { CONCEPT_TITLE } from "@/lib/copy";

// 見出しの折り返し位置だけを句点「、」の前後で制御する（文字は一切変更しない）。
const [TITLE_LEAD, TITLE_TAIL] = CONCEPT_TITLE.split("、");

/**
 * ファーストビュー。参考サイトのように横幅いっぱいの大きなビジュアルを配置する。
 * 店舗写真が届くまでは `HeroVisual` が明るいトーンの仮ビジュアルを表示する。
 * 見出し・スケジュール・予約導線は、画像の内容に関わらず可読性を保てるよう、
 * 画像下部に重なるソリッドな白いキャプション帯の中に置く（実写真が入った際も
 * 同じ構造のまま最も映えるようにするため）。
 */
export function Hero() {
  const reservationReady = isReservationReady();

  return (
    <section className="relative h-[70svh] min-h-[480px] w-full overflow-hidden sm:h-[78svh] sm:min-h-[560px]">
      <div className="absolute inset-0">
        <HeroVisual src={siteConfig.heroImageSrc ?? undefined} />
      </div>

      <div className="absolute inset-x-0 bottom-0 bg-soft-white/93 backdrop-blur-sm">
        <Container className="py-8 sm:py-10">
          <RevealText>
            <h1 className="text-balance font-serif-jp text-2xl leading-snug text-ink sm:text-4xl lg:text-5xl">
              <span className="whitespace-nowrap">{TITLE_LEAD}、</span>
              <span className="whitespace-nowrap">{TITLE_TAIL}</span>
            </h1>
          </RevealText>

          <div className="mt-5 inline-flex items-baseline gap-3 border-t-2 border-gold pt-3">
            <span className="font-serif-jp text-lg text-ink sm:text-xl">
              {siteConfig.schedule[siteConfig.schedule.length - 1].period}
            </span>
            <span className="font-serif-en text-xs tracking-[0.15em] text-gold uppercase">Open</span>
          </div>

          {reservationReady && (
            <div className="mt-6">
              <ReserveActions />
            </div>
          )}
        </Container>
      </div>
    </section>
  );
}
