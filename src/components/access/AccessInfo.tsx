import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { RevealImage } from "@/components/ui/RevealImage";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { PendingNotice } from "@/components/ui/PendingNotice";
import { LinkButton } from "@/components/ui/Button";
import { placeholderImages } from "@/lib/placeholderImages";
import { siteConfig } from "@/lib/siteConfig";

export function AccessInfo() {
  return (
    <section className="bg-warm-ivory pb-24 sm:pb-32">
      <Container className="grid gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <p className="font-serif-en text-sm tracking-[0.15em] text-forest/70 italic">Address</p>
          <address className="mt-3 not-italic font-serif-jp text-2xl leading-relaxed text-ink">
            {siteConfig.address.full}
          </address>

          <LinkButton
            href={siteConfig.googleMapsUrl}
            external
            variant="outline"
            className="mt-8"
            data-gtm-event="map_click_access"
          >
            <span className="flex items-center gap-2">
              <MapPin aria-hidden className="h-4 w-4" />
              Googleマップで経路を見る
            </span>
          </LinkButton>

          <div className="mt-10">
            <PendingNotice>
              現在、Googleマップへの店舗登録手続き中です。登録が完了次第、埋め込み地図を掲載いたします。駐車場・最寄り駅・送迎の有無については、確定次第あらためてご案内いたします。
            </PendingNotice>
          </div>
        </div>

        <RevealImage>
          <PlaceholderImage
            spec={placeholderImages.accessSupport}
            alt="アクセス案内用の補助写真（準備中）"
            className="w-full"
          />
        </RevealImage>
      </Container>
    </section>
  );
}
