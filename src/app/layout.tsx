import type { Metadata } from "next";
import "./globals.css";
import { shipporiMincho, notoSansJp, cormorantGaramond } from "@/lib/fonts";
import { siteConfig } from "@/lib/siteConfig";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Loader } from "@/components/ui/Loader";
import { StructuredData } from "@/components/seo/StructuredData";
import {
  GoogleTagManagerHead,
  GoogleTagManagerBody,
} from "@/components/seo/GoogleTagManager";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.seoDefaults.defaultTitle,
    template: siteConfig.seoDefaults.titleTemplate,
  },
  description: siteConfig.seoDefaults.description,
  openGraph: {
    title: siteConfig.seoDefaults.defaultTitle,
    description: siteConfig.seoDefaults.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.brand.workingTitleJa,
    locale: "ja_JP",
    type: "website",
  },
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
      className={`${shipporiMincho.variable} ${notoSansJp.variable} ${cormorantGaramond.variable} h-full antialiased`}
    >
      <head>
        <GoogleTagManagerHead />
      </head>
      <body className="flex min-h-full flex-col bg-warm-ivory text-ink">
        <GoogleTagManagerBody />
        <StructuredData />
        <Loader />
        <ScrollProgress />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
