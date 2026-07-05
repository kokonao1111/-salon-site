"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { RevealText } from "@/components/ui/RevealText";
import { ReserveActions } from "@/components/ui/ReserveActions";
import { placeholderImages } from "@/lib/placeholderImages";
import { siteConfig } from "@/lib/siteConfig";
import { CONCEPT_TITLE } from "@/lib/copy";

export function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex h-[92svh] min-h-[560px] items-end overflow-hidden bg-ink">
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={reduced ? undefined : { scale: 1.08 }}
        transition={{ duration: 22, ease: "linear" }}
      >
        <PlaceholderImage
          spec={placeholderImages.exterior}
          fill
          priority
          alt="外観（準備中）"
          className="opacity-90"
        />
      </motion.div>
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/25 to-ink/10"
      />

      <div className="relative z-10 w-full px-6 pb-16 sm:px-10 sm:pb-20 lg:px-16 lg:pb-24">
        <p className="font-serif-en text-xs tracking-[0.4em] text-pearl uppercase sm:text-sm">
          {siteConfig.brand.workingTitleEn}
        </p>
        <RevealText className="mt-6 max-w-3xl">
          <h1 className="text-balance font-serif-jp text-3xl leading-snug text-soft-white sm:text-5xl lg:text-6xl">
            {CONCEPT_TITLE}
          </h1>
        </RevealText>
        <p className="mt-6 font-serif-en text-sm tracking-[0.2em] text-pearl uppercase">
          {siteConfig.openingApprox}
        </p>
        <div className="mt-10">
          <ReserveActions tone="light" />
        </div>
      </div>

      <motion.div
        aria-hidden
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 text-soft-white/80"
        animate={reduced ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
