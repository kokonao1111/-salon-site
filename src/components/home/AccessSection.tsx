import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";
import { isConfirmed } from "@/lib/types";

/**
 * 住所・電話番号の状態・Googleマップ導線で構成する事実ベースのセクション。
 * 埋め込み地図は、Googleマップの店舗登録が完了するまで表示しない
 * （`siteConfig.googleMapsListing`）。営業時間・定休日は未確定のため作らない。
 */
export function AccessSection() {
  const { phone } = siteConfig.contact;

  return (
    <section className="bg-warm-ivory py-16 sm:py-24">
      <Container className="max-w-2xl">
        <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">Access</p>
        <div className="mt-3 h-px w-12 bg-gold" />

        <address className="mt-6 font-serif-jp text-xl leading-relaxed text-ink not-italic sm:text-2xl">
          {siteConfig.address.full}
        </address>

        <p className="mt-4 flex items-center gap-2 text-sm text-forest/80">
          <Phone aria-hidden className="h-4 w-4" />
          {isConfirmed(phone) ? phone.value : "電話番号：取得予定"}
        </p>

        <LinkButton
          href={siteConfig.googleMapsUrl}
          external
          variant="outline"
          className="mt-8"
          data-gtm-event="map_click_home"
        >
          <span className="flex items-center gap-2">
            <MapPin aria-hidden className="h-4 w-4" />
            Googleマップで経路を見る
          </span>
        </LinkButton>
      </Container>
    </section>
  );
}
