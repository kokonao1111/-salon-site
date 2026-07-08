"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { primaryNav, reserveNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { isConfirmed } from "@/lib/types";
import { MobileMenu } from "./MobileMenu";

/**
 * 参考サイトの構成（ロゴ・予約ボタン・横並びナビ）に寄せた常時ソリッドなヘッダー。
 * 予約導線は未確定である間、仮のリンクを差し込まず「ご予約開始前」と正直に表示する。
 */
export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const { phone } = siteConfig.contact;
  const reservationReady = isConfirmed(phone) || isConfirmed(siteConfig.contact.lineUrl);
  const brandLabel =
    siteConfig.brand.status === "confirmed"
      ? siteConfig.brand.workingTitleEn
      : siteConfig.brand.pendingLabel;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-ink/10 bg-soft-white/95 backdrop-blur-sm">
        <Container className="flex h-20 items-center justify-between gap-4 sm:h-24">
          {/*
            正式な店舗名・ロゴが確定するまでは、それをロゴとして作り込みすぎない。
            控えめな記述的表記（pendingLabel）にとどめる。
          */}
          <Link href="/" className="min-w-0 shrink">
            <span className="block truncate font-serif-en text-base tracking-[0.03em] text-ink italic sm:text-lg">
              {brandLabel}
            </span>
          </Link>

          <nav aria-label="メインナビゲーション" className="hidden items-center gap-7 lg:flex">
            {primaryNav.map((item) => {
              const isCurrent = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`text-sm tracking-[0.03em] text-ink transition-colors hover:text-forest ${
                    isCurrent ? "border-b border-gold text-forest" : ""
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <div className="hidden flex-col items-end lg:flex">
              <Link
                href={reserveNav.href}
                className="rounded-full border border-forest bg-forest px-6 py-2.5 text-sm tracking-[0.05em] text-soft-white transition-colors hover:bg-forest/85"
              >
                {reserveNav.label}
              </Link>
              {!reservationReady && (
                <span className="mt-1 text-[10px] tracking-[0.04em] text-forest/50">
                  ご予約開始前
                </span>
              )}
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="メニューを開く"
              aria-expanded={menuOpen}
              className="-mr-2.5 flex h-11 w-11 items-center justify-center text-ink lg:hidden"
            >
              <Menu aria-hidden className="h-6 w-6" />
            </button>
          </div>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} currentPath={pathname} />
    </>
  );
}
