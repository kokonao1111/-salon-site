import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { PhotoComingSoon } from "@/components/ui/PhotoComingSoon";
import { placeholderImages } from "@/lib/placeholderImages";

interface HeroVisualProps {
  /** 権利確認済みの志摩の実景、または店内写真。未設定の間は明るいトーンの仮ビジュアルを表示する。 */
  src?: string;
}

/**
 * Hero専用のビジュアル領域。
 * 店舗写真が届くまでは、抽象的な装飾を主役にせず、白・淡いベージュの撮影枠として
 * `PhotoComingSoon` を重ねる。
 * 実写真が届き次第 `src` を渡すだけで差し替わり、演出は自動的に消える。
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
        quiet={!src}
      />
      {!src && <PhotoComingSoon caption="店舗完成後、実際の店内写真に差し替え予定です" />}
    </div>
  );
}
