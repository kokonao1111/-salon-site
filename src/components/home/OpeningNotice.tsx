import { siteConfig } from "@/lib/siteConfig";
import { isReservationReady } from "@/lib/reservation";

// 支給スケジュール（確定情報）のうち、「ホームページ完成」は制作進行上の内部工程のため
// 来訪者向けの案内には含めない。それ以外は確定している内容だけをそのまま使う。
const SCHEDULE_ITEMS = siteConfig.schedule
  .filter((item) => item.label !== "ホームページ完成")
  .map((item) => `${item.period}　${item.label}予定`);

/**
 * ファーストビュー直下のオープン予定・予約準備中の案内。
 * 古い「バナー広告」の羅列に見せないよう、説明文と罫線ベースの進行カードで
 * 準備状況を落ち着いて見せる。
 * 確定しているスケジュールと予約受付状況のみで構成し、未確定情報は捏造しない。
 */
export function OpeningNotice() {
  const reservationReady = isReservationReady();
  const items = [...SCHEDULE_ITEMS, reservationReady ? "ご予約はこちらから" : "予約方法は準備中"];

  return (
    <section className="border-y border-gold/20 bg-soft-white">
      <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-6 py-10 sm:px-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:px-16 lg:py-12">
        <div>
          <p className="font-serif-en text-[11px] tracking-[0.2em] text-gold uppercase">
            Opening notice
          </p>
          <h2 className="mt-3 font-serif-jp text-xl leading-relaxed text-ink sm:text-2xl">
            オープン予定・予約準備中のご案内
          </h2>
          <p className="mt-3 text-sm leading-loose text-forest/76">
            正式な予約方法、メニュー料金、電話番号は確定後に掲載します。未確定情報は掲載せず、準備状況のみをお知らせします。
          </p>
        </div>

        <ul className="grid gap-px bg-gold/20 sm:grid-cols-2">
          {items.map((text, index) => (
            <li key={text} className="bg-soft-white px-4 py-4">
              <p className="font-serif-en text-[11px] tracking-[0.18em] text-gold uppercase">
                {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 font-serif-jp text-[13px] leading-relaxed tracking-[0.02em] text-forest sm:text-sm">
                {text}
              </p>
            </li>
          ))}
        </ul>

        {!reservationReady && (
          <p className="border-t border-gold/20 pt-4 text-xs leading-relaxed text-forest/58 lg:col-span-2">
            LINE・電話での受付開始を予定しています。確定前の仮リンクや仮番号は表示していません。
          </p>
        )}
      </div>
    </section>
  );
}
