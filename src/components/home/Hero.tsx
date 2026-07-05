"use client";

import { motion, useReducedMotion } from "framer-motion";
import { HeroVisual } from "./HeroVisual";
import { RevealText } from "@/components/ui/RevealText";
import { ReserveActions } from "@/components/ui/ReserveActions";
import { siteConfig } from "@/lib/siteConfig";
import { isReservationReady } from "@/lib/reservation";
import { CONCEPT_TITLE } from "@/lib/copy";

// 見出しの折り返し位置だけを句点「、」の前後で制御する（文字は一切変更しない）。
const [TITLE_LEAD, TITLE_TAIL] = CONCEPT_TITLE.split("、");

/**
 * ファーストビュー。
 * 予約導線が未確定の間は押せないCTAを置かず、「2026年9月中旬 OPEN」を主役にする。
 * 仮称の店舗名はここには出さない（Headerで既に控えめに表示済みのため、重複させない）。
 */
export function Hero() {
  const reduced = useReducedMotion();
  const reservationReady = isReservationReady();

  return (
    <section className="relative flex h-[92svh] min-h-[560px] items-end overflow-hidden">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={reduced ? undefined : { scale: 1.06 }}
        transition={{ duration: 24, ease: "linear" }}
      >
        <HeroVisual />
      </motion.div>

      <div className="relative z-10 w-full px-6 pb-14 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
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
