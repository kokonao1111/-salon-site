import { MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { PhotoBackground } from "@/components/ui/PhotoBackground";
import { backgroundPhotos } from "@/lib/backgroundPhotos";
import { siteConfig } from "@/lib/siteConfig";
import { isConfirmed } from "@/lib/types";

/**
 * 住所・電話番号の状態・Googleマップ導線で構成する事実ベースのセクション。
 * 背景に外観・アクセス用の写真エリアを置き（未撮影の間は単色）、写真から
 * 現実の店舗情報へ自然につなげる。埋め込み地図は、Googleマップの店舗登録が
 * 完了するまで表示しない（`siteConfig.googleMapsListing`）。営業時間・定休日は
 * 未確定のため作らない。
 */
export function AccessSection() {
  const { phone } = siteConfig.contact;

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <PhotoBackground
        slot={backgroundPhotos.accessExterior}
        alt="外観・アクセスイメージ（準備中）"
        overlay="ivory"
      />

      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-stretch lg:gap-10">
          <div>
            <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">Access</p>
            <div className="mt-3 h-px w-12 bg-gold" />
            <h2 className="mt-6 font-serif-jp text-2xl leading-relaxed text-ink sm:text-3xl">
              アクセス
            </h2>
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

            <p className="mt-5 text-xs leading-relaxed text-forest/58">
              Googleマップ店舗登録が完了次第、埋め込み地図を掲載します。
            </p>
          </div>

          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm-event="map_click_home_preview"
            className="group flex min-h-[260px] flex-col items-center justify-center gap-3 bg-soft-white/75 px-6 py-10 text-center backdrop-blur-sm transition-colors hover:bg-soft-white/90"
          >
            <MapPin aria-hidden className="h-6 w-6 text-gold" />
            <p className="font-serif-jp text-base text-ink">志摩市阿児町神明</p>
            <p className="text-xs tracking-[0.05em] text-forest/60 underline underline-offset-4 group-hover:text-forest">
              Googleマップで開く
            </p>
          </a>
        </div>
      </Container>
    </section>
  );
}
