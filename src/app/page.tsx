import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { Hero } from "@/components/home/Hero";
import { ConceptIntro } from "@/components/home/ConceptIntro";
import { ValueTriad } from "@/components/home/ValueTriad";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AnalysisFlow } from "@/components/home/AnalysisFlow";
import { GallerySection } from "@/components/home/GallerySection";
import { AccessPreview } from "@/components/home/AccessPreview";
import { ReserveSection } from "@/components/home/ReserveSection";
import { NewsPreview } from "@/components/home/NewsPreview";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: siteConfig.seoDefaults.defaultTitle,
  description: siteConfig.seoDefaults.description,
  path: "/",
});

export default function Home() {
  return (
    <>
      <Hero />
      <ConceptIntro />
      <ValueTriad />
      <ServicesPreview />
      <AnalysisFlow />
      <GallerySection />
      <AccessPreview />
      <ReserveSection />
      <NewsPreview />
    </>
  );
}
