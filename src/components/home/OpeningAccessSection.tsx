import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { ReserveActions } from "@/components/ui/ReserveActions";
import { siteConfig } from "@/lib/siteConfig";

/**
 * 「開業のご案内」「アクセス」「ご予約」をHomeの最後の1つの濃色セクションに統合する。
 * 工事工程の長い一覧ではなく「オープン予定日」を主役にし、
 * 詳しいスケジュールは /opening、詳しいアクセスは /access に譲る。
 * ダーク基調のセクションを複数連続させないための統合でもある。
 */
export function OpeningAccessSection() {
  return (
    <section className="bg-ink py-20 text-soft-white sm:py-28">
      <Container>
        <p className="font-serif-en text-xs tracking-[0.1em] text-pearl/70 uppercase">
          Opening Information
        </p>
        <p className="mt-4 font-serif-jp text-3xl leading-snug sm:text-4xl">
          {siteConfig.openingApprox}
        </p>

        <div className="mt-14 grid gap-10 border-t border-soft-white/15 pt-10 sm:grid-cols-2">
          <div>
            <p className="text-[15px] leading-loose text-pearl">
              開業に向けた準備の進捗は、開業のご案内ページでご確認いただけます。
            </p>
            <LinkButton href="/opening" variant="outline-light" className="mt-6">
              開業のご案内を見る
            </LinkButton>
          </div>

          <div>
            <address className="text-[15px] leading-loose text-pearl not-italic">
              {siteConfig.address.full}
            </address>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-3">
              <Link
                href="/access"
                className="text-sm text-soft-white underline underline-offset-4 hover:text-pearl"
              >
                アクセス詳細
              </Link>
              <a
                href={siteConfig.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-gtm-event="map_click_home"
                className="inline-flex items-center gap-2 text-sm text-soft-white underline underline-offset-4 hover:text-pearl"
              >
                <MapPin aria-hidden className="h-4 w-4" />
                Googleマップで経路を見る
              </a>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-soft-white/15 pt-10">
          <p className="font-serif-en text-xs tracking-[0.1em] text-pearl/70 uppercase">Reserve</p>
          <p className="mt-3 font-serif-jp text-xl sm:text-2xl">ご予約</p>
          <div className="mt-6">
            <ReserveActions tone="light" />
          </div>
        </div>
      </Container>
    </section>
  );
}
