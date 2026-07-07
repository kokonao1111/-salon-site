"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import type { BackgroundPhotoSlot } from "@/lib/backgroundPhotos";

type Overlay = "none" | "ivory" | "soft" | "brown";

const OVERLAY_CLASS: Record<Overlay, string> = {
  none: "",
  ivory: "bg-warm-ivory/55",
  soft: "bg-soft-white/60",
  brown: "bg-forest/40",
};

interface PhotoBackgroundProps {
  slot: BackgroundPhotoSlot;
  alt: string;
  overlay?: Overlay;
  priority?: boolean;
  /** true の場合、パララックス・ズームを行わない（カード等、小さな領域向け） */
  isStatic?: boolean;
}

/**
 * セクション全面の写真背景。
 *
 * スクロールに合わせてごくわずかに視差移動し（背景写真がセクションをつなぐ
 * 没入感のため）、実写真（slot.src）が設定されている間はさらに十数秒かけた
 * ゆっくりとしたKen Burns風の拡大が加わる。`prefers-reduced-motion` の間、
 * および `isStatic` 指定時は静止する。
 * 撮影が済むまでは、抽象模様やグラデーションで写真の代役を演じさせず、
 * 単一の落ち着いた色面（pearl）のみを表示する。可読性のため、内容に応じて
 * 白・生成り・ブラウンの半透明レイヤーを重ねる。
 */
export function PhotoBackground({
  slot,
  alt,
  overlay = "ivory",
  priority,
  isStatic = false,
}: PhotoBackgroundProps) {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const enableParallax = !reduced && !isStatic;
  const enableZoom = !reduced && !isStatic;

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      {slot.src ? (
        <motion.div
          className="absolute inset-x-0"
          style={{ top: "-15%", height: "130%", ...(enableParallax ? { y: parallaxY } : {}) }}
          initial={{ scale: 1 }}
          whileInView={enableZoom ? { scale: 1.08 } : undefined}
          viewport={{ once: true }}
          transition={{ duration: 16, ease: "easeOut" }}
        >
          <Image src={slot.src} alt={alt} fill priority={priority} sizes="100vw" className="object-cover" />
        </motion.div>
      ) : (
        <motion.div
          aria-hidden
          data-shot-id={slot.id}
          className="absolute inset-x-0 bg-pearl"
          style={{ top: "-15%", height: "130%", ...(enableParallax ? { y: parallaxY } : {}) }}
        />
      )}
      {overlay !== "none" && <div aria-hidden className={`absolute inset-0 ${OVERLAY_CLASS[overlay]}`} />}
    </div>
  );
}
