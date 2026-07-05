import { siteConfig } from "@/lib/siteConfig";
import { isReservationReady } from "@/lib/reservation";
import { isConfirmed } from "@/lib/types";

/**
 * モバイル専用の固定予約バー。LINE・電話のいずれかが確定するまでは何も描画しない
 * （未確定のCTAを常時貼り付けたままにしないため）。
 */
export function MobileFixedReserve() {
  if (!isReservationReady()) return null;

  const { phone, lineUrl } = siteConfig.contact;

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-30 flex border-t border-ink/10 bg-soft-white/95 backdrop-blur-sm lg:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {isConfirmed(lineUrl) && (
        <a
          href={lineUrl.value}
          target="_blank"
          rel="noopener noreferrer"
          data-gtm-event="reserve_line_click"
          className="flex min-h-[52px] flex-1 items-center justify-center bg-ink text-sm tracking-[0.04em] text-soft-white"
        >
          LINEで予約する
        </a>
      )}
      {isConfirmed(phone) && (
        <a
          href={`tel:${phone.value}`}
          data-gtm-event="reserve_tel_click"
          className="flex min-h-[52px] flex-1 items-center justify-center border-l border-soft-white/15 text-sm tracking-[0.04em] text-ink"
        >
          電話で予約する
        </a>
      )}
    </div>
  );
}
