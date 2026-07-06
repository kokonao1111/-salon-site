import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { placeholderImages } from "@/lib/placeholderImages";

interface HeroVisualProps {
  /** 権利確認済みの志摩の実景（周辺風景）。未設定の間は単色＋繊細な質感のみ表示する。 */
  src?: string;
}

/**
 * Hero専用のビジュアル領域。
 *
 * 店舗写真が届くまでは、複数のradial-gradientや虹色の光、波紋線のような
 * 「写真の代役を演じる装飾」を置かない。単色＋繊細な質感だけの控えめな表現に留める
 * （quiet モード）。これを最終デザインとして扱わない前提。
 *
 * 本番写真が用意でき次第 `src` を渡すだけで差し替わる。店舗の外観写真ではなく
 * 志摩の周辺風景を想定しており、店舗写真であるかのような見せ方はしない。
 */
export function HeroVisual({ src }: HeroVisualProps) {
  return (
    <PlaceholderImage
      spec={placeholderImages.surroundings}
      src={src}
      alt="志摩の周辺風景"
      fill
      priority
      quiet
    />
  );
}
