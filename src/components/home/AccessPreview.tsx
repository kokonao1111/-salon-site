import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { RevealImage } from "@/components/ui/RevealImage";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { LinkButton } from "@/components/ui/Button";
import { placeholderImages } from "@/lib/placeholderImages";
import { siteConfig } from "@/lib/siteConfig";

export function AccessPreview() {
  return (
    <section className="bg-warm-ivory py-24 sm:py-32">
      <Container className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <SectionHeading eyebrowNumber="05" eyebrow="Access" title="志摩という場所" titleEn="Shima, Mie" />
          <address className="mt-8 not-italic text-base leading-loose text-forest/85">
            {siteConfig.address.full}
          </address>
          <p className="mt-6 max-w-md text-sm leading-loose text-forest/75">
            店舗までの経路や周辺の様子は、アクセスページで詳しくご案内しています。
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <LinkButton href="/access" variant="outline">
              アクセス詳細を見る
            </LinkButton>
            <a
              href={siteConfig.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-gtm-event="map_click_home"
              className="inline-flex items-center gap-2 text-sm text-ink underline underline-offset-4 hover:opacity-70"
            >
              <MapPin aria-hidden className="h-4 w-4" />
              Googleマップで経路を見る
            </a>
          </div>
        </div>

        <RevealImage>
          <PlaceholderImage
            spec={placeholderImages.surroundings}
            alt="志摩の周辺環境（準備中）"
            className="w-full"
          />
        </RevealImage>
      </Container>
    </section>
  );
}
