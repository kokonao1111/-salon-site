import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/siteConfig";
import { isReservationReady } from "@/lib/reservation";

// 支給スケジュール（確定情報）のうち、「ホームページ完成」は制作進行上の内部工程のため
// 来訪者向けバナーには含めない。それ以外は確定している内容だけをそのまま使う。
const SCHEDULE_BANNERS = siteConfig.schedule
  .filter((item) => item.label !== "ホームページ完成")
  .map((item) => `${item.period}　${item.label}予定`);

/**
 * ファーストビュー直下の横並びバナー。確定しているスケジュールと予約受付状況のみで構成し、
 * 未確定情報は一切捏造しない。
 */
export function BannerStrip() {
  const reservationReady = isReservationReady();
  const items = [...SCHEDULE_BANNERS, reservationReady ? "ご予約はこちらから" : "予約方法は準備中"];

  return (
    <section className="border-y border-gold/30 bg-warm-ivory">
      <Container>
        <ul className="grid grid-cols-1 gap-px bg-gold/20 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((text) => (
            <li
              key={text}
              className="bg-warm-ivory px-4 py-4 text-center font-serif-jp text-[13px] tracking-[0.02em] text-forest sm:py-5 sm:text-sm"
            >
              {text}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
