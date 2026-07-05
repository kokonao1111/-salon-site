import { HeroVisual } from "./HeroVisual";
import { RevealText } from "@/components/ui/RevealText";
import { ReserveActions } from "@/components/ui/ReserveActions";
import { siteConfig } from "@/lib/siteConfig";
import { isReservationReady } from "@/lib/reservation";
import { CONCEPT_TITLE } from "@/lib/copy";

// 見出しの折り返し位置だけを句点「、」の前後で制御する（文字は一切変更しない）。
const [TITLE_LEAD, TITLE_TAIL] = CONCEPT_TITLE.split("、");

/**
 * プレオープン期のファーストビュー。
 * 店舗写真が届くまでは短く控えめにし、巨大な装飾で存在感を演出しない。
 * 予約導線が未確定の間は押せないCTAを置かず、「2026年9月中旬 OPEN」を主役にする。
 * 仮称の店舗名はここには出さない（Headerで既に控えめに表示済みのため、重複させない）。
 */
export function Hero() {
  const reservationReady = isReservationReady();

  return (
    <section className="relative flex min-h-[420px] items-end overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0">
        <HeroVisual />
      </div>

      <div className="relative z-10 w-full px-6 sm:px-10 lg:px-16">
        <RevealText className="max-w-full lg:max-w-5xl">
          <h1 className="text-balance font-serif-jp text-3xl leading-snug text-soft-white sm:text-5xl lg:text-6xl">
            <span className="whitespace-nowrap">{TITLE_LEAD}、</span>
            <span className="whitespace-nowrap">{TITLE_TAIL}</span>
          </h1>
        </RevealText>

        <div className="mt-8 inline-flex items-baseline gap-3 border-t border-gold/50 pt-3">
          <span className="font-serif-jp text-xl text-soft-white sm:text-2xl">
            {siteConfig.schedule[siteConfig.schedule.length - 1].period}
          </span>
          <span className="font-serif-en text-xs tracking-[0.15em] text-gold uppercase">Open</span>
        </div>

        {reservationReady && (
          <div className="mt-8">
            <ReserveActions tone="light" />
          </div>
        )}
      </div>
    </section>
  );
}
