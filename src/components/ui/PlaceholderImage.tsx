import Image, { type StaticImageData } from "next/image";
import type { PlaceholderImageSpec, PlaceholderMood } from "@/lib/types";

const aspectClass: Record<PlaceholderImageSpec["aspect"], string> = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  square: "aspect-square",
  wide: "aspect-[16/9]",
};

/**
 * 仮画像のアートディレクション。実写真ではなく、権利処理不要な抽象表現として
 * 「光」「水面」「素材」「機器の精密さ」「体温・手のぬくもり」を、構図ごとに描き分ける。
 * 単調な同一グラデーションの使い回しを避けるための表現の幅。
 * Hero等、写真の代役を演じさせたくない場所では quiet モードを使うこと。
 */
const moodBackgrounds: Record<PlaceholderMood, string> = {
  light:
    "radial-gradient(ellipse at 82% 12%, rgba(255,255,255,0.85), transparent 55%), linear-gradient(160deg, var(--color-pearl) 0%, var(--color-warm-ivory) 55%, var(--color-soft-white) 100%)",
  water:
    "repeating-linear-gradient(100deg, rgba(36,51,44,0.05) 0px, rgba(36,51,44,0.05) 1px, transparent 1px, transparent 34px), linear-gradient(180deg, var(--color-soft-white), var(--color-pearl))",
  material:
    "radial-gradient(circle at 22% 28%, rgba(164,138,98,0.14), transparent 45%), radial-gradient(circle at 78% 72%, rgba(36,51,44,0.08), transparent 50%), radial-gradient(rgba(23,25,23,0.07) 1px, transparent 1px), var(--color-warm-ivory)",
  structure:
    "repeating-linear-gradient(0deg, rgba(23,25,23,0.05) 0, rgba(23,25,23,0.05) 1px, transparent 1px, transparent 26px), repeating-linear-gradient(90deg, rgba(23,25,23,0.05) 0, rgba(23,25,23,0.05) 1px, transparent 1px, transparent 26px), linear-gradient(135deg, var(--color-pearl), var(--color-warm-ivory))",
  warmth:
    "radial-gradient(circle at 50% 42%, rgba(164,138,98,0.2), transparent 60%), linear-gradient(160deg, var(--color-warm-ivory), var(--color-pearl))",
};

const moodBackgroundSize: Partial<Record<PlaceholderMood, string>> = {
  material: "auto, auto, 6px 6px, auto",
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
  /**
   * true の場合、mood別の抽象グラデーションを「写真の代役」として使わず、
   * 単色＋繊細な質感のみの控えめな表現にする（Hero等、装飾の主張を抑えたい場所用）。
   */
  quiet?: boolean;
}

/**
 * 本番写真が届くまでの仮画像スロット。
 * src を渡すだけで next/image による本番写真に差し替わる構造にしてある。
 * PC・スマホでそれぞれ異なる object-position（spec.objectPositionPc / objectPositionMobile）を
 * 指定できるよう、本番写真投入時は2枚のImageを出し分ける。
 * 仮表示であることは data-shot-id / aria-label というコード・アクセシビリティ情報としてのみ持たせ、
 * 「Preparing」等の文字は画面上に表示しない。
 */
export function PlaceholderImage({
  spec,
  src,
  alt = "",
  priority,
  sizes = "100vw",
  className = "",
  fill = false,
  quiet = false,
}: PlaceholderImageProps) {
  return (
    <div
      data-shot-id={spec.shotId}
      data-placeholder={src ? undefined : "true"}
      className={`relative ${fill ? "h-full w-full" : aspectClass[spec.aspect]} ${className}`}
    >
      {src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="object-cover sm:hidden"
            style={{ objectPosition: spec.objectPositionMobile ?? "center" }}
          />
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            sizes={sizes}
            className="hidden object-cover sm:block"
            style={{ objectPosition: spec.objectPositionPc ?? "center" }}
          />
        </>
      ) : quiet ? (
        <div
          aria-hidden
          className="absolute inset-0 bg-warm-ivory"
          style={{
            backgroundImage:
              "repeating-linear-gradient(90deg, rgba(164,138,98,0.12) 0, rgba(164,138,98,0.12) 1px, transparent 1px, transparent 64px)",
          }}
        />
      ) : (
        <div
          role="img"
          aria-label={`${spec.description}（準備中）`}
          className="absolute inset-0 overflow-hidden"
          style={{
            backgroundImage: moodBackgrounds[spec.mood],
            backgroundSize: moodBackgroundSize[spec.mood],
          }}
        />
      )}
    </div>
  );
}
