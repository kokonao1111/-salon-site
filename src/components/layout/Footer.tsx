import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ReserveActions } from "@/components/ui/ReserveActions";
import { primaryNav, footerLegalNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-forest text-soft-white">
      <Container className="grid gap-12 py-16 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-8 lg:py-20">
        <div>
          <p className="font-serif-en text-sm tracking-[0.03em] text-pearl/80 italic">
            {siteConfig.brand.workingTitleEn}
          </p>
          <p className="mt-4 max-w-xs text-sm leading-loose text-pearl">
            三重県志摩市の別荘地に誕生する、完全プライベート・トータルビューティーサロン。
          </p>
          <p className="mt-6 font-serif-en text-xs tracking-[0.1em] text-pearl/80 uppercase">
            {siteConfig.openingApprox}
          </p>
        </div>

        <nav aria-label="フッターナビゲーション">
          <p className="font-serif-en text-xs tracking-[0.1em] text-pearl/70 uppercase">Menu</p>
          <ul className="mt-5 space-y-3">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-soft-white/90 hover:text-soft-white">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="text-sm text-soft-white/90 hover:text-soft-white">
                ご予約
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <p className="font-serif-en text-xs tracking-[0.1em] text-pearl/70 uppercase">Access</p>
          <address className="mt-5 not-italic text-sm leading-loose text-soft-white/90">
            {siteConfig.address.full}
          </address>
          <a
            href={siteConfig.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-gtm-event="map_click_footer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-soft-white/90 underline underline-offset-4 hover:text-soft-white"
          >
            <MapPin aria-hidden className="h-4 w-4" />
            Googleマップで経路を見る
          </a>

          <div className="mt-8">
            <ReserveActions tone="light" />
          </div>
        </div>
      </Container>

      <div className="border-t border-soft-white/15">
        <Container className="flex flex-col gap-3 py-6 text-sm text-pearl/70 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} {siteConfig.brand.workingTitleEn}</p>
          <ul className="flex gap-6">
            {footerLegalNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-soft-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </div>
    </footer>
  );
}
