import { Camera } from "lucide-react";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { placeholderImages } from "@/lib/placeholderImages";

interface HeroVisualProps {
  /** 権利確認済みの志摩の実景、または店内写真。未設定の間は明るいトーンの仮ビジュアルを表示する。 */
  src?: string;
}

/**
 * Hero専用のビジュアル領域。
 *
 * 店舗写真が届くまでは、暗い色や抽象的な装飾ではなく、白・淡いベージュを基調にした
 * 明るいグラデーション（mood: light）の上に、「写真は準備中」であることを示す
 * 控えめな額縁とキャプションを重ねる。実写真が届き次第 `src` を渡すだけで差し替わり、
 * 額縁・キャプションは自動的に消える。
 */
export function HeroVisual({ src }: HeroVisualProps) {
  return (
    <div className="relative h-full w-full">
      <PlaceholderImage
        spec={placeholderImages.surroundings}
        src={src}
        alt="志摩の周辺風景"
        fill
        priority
      />
      {!src && (
        <div className="absolute inset-5 flex flex-col items-center justify-center gap-3 border border-gold/50 px-6 text-center sm:inset-10">
          <Camera aria-hidden className="h-5 w-5 text-forest/45" />
          <p className="font-serif-en text-[11px] tracking-[0.2em] text-forest/50 uppercase">
            Photo Coming Soon
          </p>
          <p className="max-w-xs text-xs leading-relaxed tracking-[0.02em] text-forest/50">
            店舗完成後、実際の店内写真に差し替え予定です
          </p>
        </div>
      )}
    </div>
  );
}
