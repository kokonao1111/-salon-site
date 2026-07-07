"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { isReservationReady } from "@/lib/reservation";

/**
 * 参考サイトのような右下固定のPAGE TOPボタン。一定量スクロールした後にのみ表示する。
 * モバイルで予約バー（MobileFixedReserve）が表示されている間は、それに重ならない位置に上げる。
 */
export function PageTopButton() {
  const [visible, setVisible] = useState(false);
  const reservationBarVisible = isReservationReady();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="ページトップへ戻る"
      className={`fixed right-5 z-30 flex h-12 w-12 items-center justify-center border border-gold bg-soft-white text-forest shadow-md transition-colors hover:bg-forest hover:text-soft-white sm:right-8 sm:bottom-8 ${
        reservationBarVisible ? "bottom-[76px] lg:bottom-8" : "bottom-6"
      }`}
    >
      <ArrowUp aria-hidden className="h-5 w-5" />
    </button>
  );
}
