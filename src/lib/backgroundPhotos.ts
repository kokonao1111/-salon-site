/**
 * セクション背景として使う「差し替え前提」の写真スロット。
 * 店舗の撮影が完了するまでは src を null のままにし、各セクションは
 * 落ち着いた単色（抽象模様・グラデーション装飾なし）で待機する。
 * 撮影後は該当スロットの src にパスを設定するだけで、そのセクションの
 * 背景写真として反映される（コンポーネント側の変更は不要）。
 *
 * hero / conceptBackground の2枠のみ、店舗撮影が完了するまでの「つなぎ」として
 * 商用利用可能なストック写真（人物・建物を含まない自然風景のみ）を暫定的に設定している。
 * 実店舗・スタッフ・店内を写したものではない。出典・ライセンスは
 * `public/images/backgrounds/CREDITS.md` を参照。店舗写真の撮影が完了次第、
 * これらも実写真に差し替えること。
 */
export interface BackgroundPhotoSlot {
  /** READMEの撮影リストと対応させる識別子 */
  id: string;
  /** 開発者・クライアント向けの撮影内容メモ */
  description: string;
  /** 実写真のパス。未撮影の間は null。 */
  src: string | null;
}

export const backgroundPhotos: Record<
  "hero" | "conceptBackground" | "firstVisit" | "counseling" | "treatment" | "accessExterior",
  BackgroundPhotoSlot
> = {
  hero: {
    id: "bg-01-hero",
    description:
      "メインビジュアル（店舗外観、またはエントランス）。現在は店舗撮影前のため、志摩の海岸風景の商用利用可能なストック写真を暫定使用（CREDITS.md参照）。",
    src: "/images/backgrounds/hero-shima-coast.jpg",
  },
  conceptBackground: {
    id: "bg-02-concept",
    description:
      "コンセプト背景（志摩の周辺環境・別荘地の雰囲気）。現在は店舗撮影前のため、松と入江の商用利用可能なストック写真を暫定使用（CREDITS.md参照）。",
    src: "/images/backgrounds/concept-pine-bay.jpg",
  },
  firstVisit: {
    id: "bg-03-first-visit",
    description:
      "サロン空間・受付エリア。現在は店舗撮影前のため、竹林の商用利用可能なストック写真を暫定使用（CREDITS.md参照）。実店舗の空間写真ではない。",
    src: "/images/backgrounds/concept-bamboo-grove.jpg",
  },
  counseling: {
    id: "bg-04-counseling",
    description: "カウンセリング風景（店舗撮影後に差し替え）",
    src: null,
  },
  treatment: {
    id: "bg-05-treatment",
    description: "施術室・トリートメントイメージ（店舗撮影後に差し替え）",
    src: null,
  },
  accessExterior: {
    id: "bg-06-access-exterior",
    description: "外観・アクセス導線用イメージ（店舗撮影後に差し替え）",
    src: null,
  },
};
