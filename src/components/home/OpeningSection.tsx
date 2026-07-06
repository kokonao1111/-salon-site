import { Container } from "@/components/ui/Container";
import { ReserveActions } from "@/components/ui/ReserveActions";
import { siteConfig } from "@/lib/siteConfig";
import { isReservationReady } from "@/lib/reservation";

/**
 * オープン予定日を主役にした、事実だけの案内セクション。
 * 工事工程の詳細は /opening に譲り、Homeでは日付・「写真は完成後に掲載する」旨・
 * 予約開始の案内のみを伝える。
 */
export function OpeningSection() {
  const reservationReady = isReservationReady();

  return (
    <section className="bg-ink py-16 text-soft-white sm:py-24">
      <Container className="max-w-2xl">
        <p className="font-serif-en text-xs tracking-[0.1em] text-pearl/70 uppercase">Opening</p>
        <p className="mt-4 font-serif-jp text-2xl sm:text-3xl">{siteConfig.openingApprox}</p>
        <p className="mt-6 text-[15px] leading-loose text-pearl">
          店舗の完成後、写真を順次掲載してまいります。
        </p>
        {reservationReady ? (
          <div className="mt-8">
            <ReserveActions tone="light" />
          </div>
        ) : (
          <p className="mt-6 text-[15px] leading-loose text-pearl">
            予約開始は準備が整い次第ご案内します。
          </p>
        )}
      </Container>
    </section>
  );
}
