import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { placeholderImages } from "@/lib/placeholderImages";

/**
 * Hero専用のビジュアル領域。
 *
 * 店舗写真が届くまでは、複数のradial-gradientや虹色の光、波紋線のような
 * 「写真の代役を演じる装飾」を置かない。単色＋繊細な質感だけの控えめな表現に留める
 * （quiet モード）。
 *
 * 本番写真が用意でき次第、このコンポーネントの `src` に権利確認済みの
 * 志摩の実景（店舗写真ではなく周辺環境）を指定するだけで差し替わる。
 * その際も、店舗写真ではないことを alt で明示すること。
 */
export function HeroVisual() {
  return (
    <PlaceholderImage
      spec={placeholderImages.surroundings}
      alt="志摩の周辺環境（店舗の写真ではありません）"
      fill
      priority
      quiet
    />
  );
}
