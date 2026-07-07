/**
 * セクション背景として使う「差し替え前提」の写真スロット。
 * 店舗の撮影が完了するまでは src を null のままにし、各セクションは
 * 落ち着いた単色（抽象模様・グラデーション装飾なし）で待機する。
 * 撮影後は該当スロットの src にパスを設定するだけで、そのセクションの
 * 背景写真として反映される（コンポーネント側の変更は不要）。
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
    description: "メインビジュアル（店舗外観、またはエントランス）",
    src: null,
  },
  conceptBackground: {
    id: "bg-02-concept",
    description: "コンセプト背景（志摩の周辺環境・別荘地の雰囲気）",
    src: null,
  },
  firstVisit: {
    id: "bg-03-first-visit",
    description: "サロン空間・受付エリア",
    src: null,
  },
  counseling: {
    id: "bg-04-counseling",
    description: "カウンセリング風景",
    src: null,
  },
  treatment: {
    id: "bg-05-treatment",
    description: "施術室・トリートメントイメージ",
    src: null,
  },
  accessExterior: {
    id: "bg-06-access-exterior",
    description: "外観・アクセス導線用イメージ",
    src: null,
  },
};
