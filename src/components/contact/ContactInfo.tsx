import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { ReserveActions } from "@/components/ui/ReserveActions";
import { PendingNotice } from "@/components/ui/PendingNotice";
import { siteConfig } from "@/lib/siteConfig";
import { isConfirmed } from "@/lib/types";

export function ContactInfo() {
  return (
    <>
      <section className="bg-ink py-20 text-center text-soft-white sm:py-24">
        <Container>
          <p className="font-serif-en text-sm tracking-[0.15em] text-pearl italic">Reserve</p>
          <h2 className="mt-2 font-serif-jp text-2xl sm:text-3xl">ご予約</h2>
          <p className="mx-auto mt-6 max-w-md text-sm leading-loose text-pearl">
            ご予約はLINEを優先的にご案内しております。お電話でも承ります。
          </p>
          <div className="mt-10 flex justify-center">
            <ReserveActions tone="light" />
          </div>
        </Container>
      </section>

      <section className="bg-warm-ivory py-20 sm:py-28">
        <Container className="max-w-2xl">
          <dl className="space-y-8">
            <div className="border-t border-ink/15 pt-6">
              <dt className="font-serif-en text-xs tracking-[0.2em] text-forest/60 uppercase">
                Business Hours
              </dt>
              <dd className="mt-2 text-base text-ink">
                {isConfirmed(siteConfig.businessHours) ? siteConfig.businessHours.value : "準備中"}
              </dd>
            </div>
            <div className="border-t border-ink/15 pt-6">
              <dt className="font-serif-en text-xs tracking-[0.2em] text-forest/60 uppercase">
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
