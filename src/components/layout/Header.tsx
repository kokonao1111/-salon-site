"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { primaryNav, reserveNav } from "@/lib/navigation";
import { siteConfig } from "@/lib/siteConfig";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!isHome) return;
    const onScroll = () => setScrolled(window.scrollY > 64);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHome]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-40 transition-colors duration-500 ${
          transparent
            ? "bg-transparent"
            : "bg-warm-ivory/95 shadow-[0_1px_0_0_rgba(23,25,23,0.06)] backdrop-blur-sm"
        }`}
      >
        <Container className="flex h-20 items-center justify-between sm:h-24">
          {/*
            正式な店舗名・ロゴが確定するまでは、それをロゴとして表示しない。
            小さな記述的表記（pendingLabel）にとどめる。
          */}
          <Link
            href="/"
            className={`whitespace-nowrap font-serif-en text-[11px] tracking-[0.03em] italic transition-colors sm:text-sm ${
              transparent ? "text-soft-white/80" : "text-ink/60"
            }`}
          >
            {siteConfig.brand.status === "confirmed"
              ? siteConfig.brand.workingTitleEn
              : siteConfig.brand.pendingLabel}
          </Link>

          <nav aria-label="メインナビゲーション" className="hidden items-center gap-8 lg:flex">
            {primaryNav.map((item) => {
              const isCurrent = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`text-sm tracking-[0.03em] transition-colors hover:opacity-70 ${
                    isCurrent ? "underline underline-offset-4" : ""
                  } ${transparent ? "text-soft-white" : "text-ink"}`}
                >
                  {item.label}
                </Link>
              );
            })}
            {reserveNav && (
              <Link
                href={reserveNav.href}
                className={`border px-5 py-2 text-sm tracking-[0.05em] transition-colors ${
                  transparent
                    ? "border-soft-white text-soft-white hover:bg-soft-white hover:text-ink"
                    : "border-ink text-ink hover:bg-ink hover:text-soft-white"
                }`}
              >
                {reserveNav.label}
              </Link>
            )}
          </nav>

          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="メニューを開く"
            aria-expanded={menuOpen}
            className={`-mr-2.5 flex h-11 w-11 items-center justify-center lg:hidden ${
              transparent ? "text-soft-white" : "text-ink"
            }`}
          >
            <Menu aria-hidden className="h-6 w-6" />
          </button>
        </Container>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} currentPath={pathname} />
    </>
  );
}
