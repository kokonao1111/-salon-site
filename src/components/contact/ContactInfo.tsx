import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ReserveActions } from "@/components/ui/ReserveActions";
import { PendingNotice } from "@/components/ui/PendingNotice";
import { siteConfig } from "@/lib/siteConfig";
import { isConfirmed } from "@/lib/types";

/**
 * ご予約ページ。LINE・電話とも未確定の間は、仮の予約フォームやダミーボタンを置かず、
 * 「予約方法は現在準備中です。公開までお待ちください」と正直に案内する。
 */
export function ContactInfo() {
  const reservationReady =
    isConfirmed(siteConfig.contact.lineUrl) || isConfirmed(siteConfig.contact.phone);

  return (
    <>
      <section className="bg-warm-ivory py-16 text-center sm:py-20">
        <Container>
          <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">Reserve</p>
          <div className="mx-auto mt-3 h-px w-12 bg-gold" />
          <h2 className="mt-6 font-serif-jp text-2xl text-ink sm:text-3xl">ご予約</h2>

          {reservationReady ? (
            <p className="mx-auto mt-6 max-w-md text-sm leading-loose text-forest/80">
              ご予約はLINEを優先的にご案内しております。お電話でも承ります。
            </p>
          ) : (
            <p className="mx-auto mt-6 max-w-md text-sm leading-loose text-forest/80">
              予約方法は現在準備中です。公開までお待ちください。
            </p>
          )}

          <div className="mt-10 flex justify-center">
            <ReserveActions className={reservationReady ? "" : "mx-auto max-w-md"} />
          </div>
        </Container>
      </section>

      <section className="bg-soft-white py-20 sm:py-28">
        <Container className="max-w-2xl">
          <dl className="space-y-8">
            <div className="border-t border-gold/30 pt-6">
              <dt className="font-serif-en text-xs tracking-[0.1em] text-forest/60 uppercase">
                Business Hours
              </dt>
              <dd className="mt-2 text-base text-ink">
                {isConfirmed(siteConfig.businessHours) ? siteConfig.businessHours.value : "準備中"}
              </dd>
            </div>
            <div className="border-t border-gold/30 pt-6">
              <dt className="font-serif-en text-xs tracking-[0.1em] text-forest/60 uppercase">
                Closed Days
              </dt>
              <dd className="mt-2 text-base text-ink">
                {isConfirmed(siteConfig.closedDays) ? siteConfig.closedDays.value : "準備中"}
              </dd>
            </div>
          </dl>

          <div className="mt-12">
            <PendingNotice>
              ご予約フォーム・キャンセルポリシー等の詳しいご案内は、オープン準備に合わせて順次公開いたします。
              ご予約に伴い個人情報をお預かりする際は、
              <Link href="/privacy" className="underline underline-offset-4 hover:opacity-70">
                プライバシーポリシー
              </Link>
              に基づき適切に管理いたします。
            </PendingNotice>
          </div>
        </Container>
      </section>
    </>
  );
}
