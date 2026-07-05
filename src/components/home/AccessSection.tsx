import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

/**
 * 住所とGoogleマップ導線のみの、事実だけで構成するセクション。
 * 抽象装飾・補足コピーは置かない（情報が少ないことを装飾で埋めない方針）。
 */
export function AccessSection() {
  return (
    <section className="bg-soft-white py-16 sm:py-24">
      <Container className="max-w-2xl">
        <p className="font-serif-en text-xs tracking-[0.1em] text-forest/55 uppercase">Access</p>
        <address className="mt-4 font-serif-jp text-xl leading-relaxed text-ink not-italic sm:text-2xl">
          {siteConfig.address.full}
        </address>
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
