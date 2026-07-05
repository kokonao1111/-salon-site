import Image, { type StaticImageData } from "next/image";
import type { PlaceholderImageSpec } from "@/lib/types";

const aspectClass: Record<PlaceholderImageSpec["aspect"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

interface PlaceholderImageProps {
  spec: PlaceholderImageSpec;
  src?: string | StaticImageData;
  alt?: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
  /** true の場合、内部の aspect-ratio を持たず親要素いっぱいに広がる（フルビューポートのヒーロー等で使用） */
  fill?: boolean;
}

/**
 * 本番写真が届くまでの仮画像スロット。
 * src を渡すだけで next/image による本番写真に差し替わる構造にしてある。
 * 公開画面には「画像を入れてください」等の制作メモは表示せず、
 * 開業準備中である旨のみを上品に示す。
 */
export function PlaceholderImage({
  spec,
  src,
  alt = "",
  priority,
  sizes = "100vw",
  className = "",
  fill = false,
}: PlaceholderImageProps) {
  return (
    <div
      data-shot-id={spec.shotId}
      className={`relative ${fill ? "h-full w-full" : aspectClass[spec.aspect]} ${className}`}
    >
      {src ? (
        <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
      ) : (
        <div
          role="img"
          aria-label={`${spec.description}（準備中）`}
          className="absolute inset-0 flex items-end justify-end overflow-hidden bg-gradient-to-br from-pearl/40 via-warm-ivory to-pearl/60 p-4"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, var(--color-ink) 0px, var(--color-ink) 1px, transparent 1px, transparent 14px)",
            }}
          />
          <span className="relative font-serif-en text-xs tracking-[0.3em] text-ink/45 uppercase">
            Preparing
          </span>
        </div>
      )}
    </div>
  );
}
