"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { primaryNav, reserveNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { isConfirmed } from "@/lib/types";
import { MobileMenu } from "./MobileMenu";

const SHORT_DESCRIPTION = "三重県志摩市の完全プライベート・トータルビューティーサロン";

/**
 * 参考サイトの構成（ロゴ・店舗説明文・電話番号エリア・予約ボタン・横並びナビ）に寄せた
 * 常時ソリッドなヘッダー。電話番号・予約導線は未確定である間、仮の番号やリンクを
 * 差し込まず、「電話番号準備中」「ご予約開始前」と正直に表示する。
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
      <div className="hidden border-b border-ink/10 bg-warm-ivory sm:block">
        <Container className="flex h-9 items-center justify-between text-xs text-forest/70">
          <p className="truncate tracking-[0.02em]">{SHORT_DESCRIPTION}</p>
          {isConfirmed(phone) ? (
            <a
              href={`tel:${phone.value}`}
              className="flex shrink-0 items-center gap-1.5 hover:text-forest"
            >
              <Phone aria-hidden className="h-3.5 w-3.5" />
              {phone.value}
            </a>
          ) : (
            <span className="flex shrink-0 items-center gap-1.5 text-forest/50">
              <Phone aria-hidden className="h-3.5 w-3.5" />
              電話番号準備中
            </span>
          )}
        </Container>
      </div>

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
