import type { Metadata } from "next";
import "./globals.css";
import { cormorantGaramond } from "@/lib/fonts";
import { siteConfig, INTERNAL_BASE_URL } from "@/lib/siteConfig";
import { isLiveStage, assertLiveReadiness } from "@/lib/siteStage";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { MobileFixedReserve } from "@/components/layout/MobileFixedReserve";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { StructuredData } from "@/components/seo/StructuredData";
import { isReservationReady } from "@/lib/reservation";
import {
  GoogleTagManagerHead,
  GoogleTagManagerBody,
} from "@/components/seo/GoogleTagManager";

// live 段階なのに正式店舗名・本番URLが未設定ならビルド自体を止める（モジュール読み込み時に実行）。
assertLiveReadiness();

export const metadata: Metadata = {
  // OGP画像等の絶対URL解決にのみ使用する内部基点。canonical/og:urlには使わない。
  metadataBase: new URL(siteConfig.siteUrl ?? INTERNAL_BASE_URL),
  title: {
    default: siteConfig.seoDefaults.defaultTitle,
    template: siteConfig.seoDefaults.titleTemplate,
  },
  description: siteConfig.seoDefaults.description,
  openGraph: {
    title: siteConfig.seoDefaults.defaultTitle,
    description: siteConfig.seoDefaults.description,
    ...(siteConfig.siteUrl ? { url: siteConfig.siteUrl } : {}),
    siteName: siteConfig.brand.workingTitleJa,
    locale: "ja_JP",
    type: "website",
  },
  robots: isLiveStage
    ? { index: true, follow: true }
    : { index: false, follow: false },
  ...(siteConfig.searchConsole.googleSiteVerification
    ? { verification: { google: siteConfig.searchConsole.googleSiteVerification } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${cormorantGaramond.variable} h-full antialiased`}
    >
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className="flex min-h-full flex-col bg-warm-ivory text-ink">
        <GoogleTagManagerBody />
        <StructuredData />
        <ScrollProgress />
        <Header />
        <main className={`flex-1 ${isReservationReady() ? "pb-[52px] lg:pb-0" : ""}`}>
          {children}
        </main>
        <Footer />
        <MobileFixedReserve />
      </body>
    </html>
  );
}
