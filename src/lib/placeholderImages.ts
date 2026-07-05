import type { PlaceholderImageSpec } from "./types";

/**
 * 撮影後に差し替える写真の一覧。
 * shotId は README の撮影リストと対応させ、Placeholder コンポーネントの
 * data-shot-id 属性にも出力する（開発者が差し替え箇所を一目で把握できるようにするため）。
 */
export const placeholderImages = {
  exterior: {
    shotId: "01-exterior",
    description: "外観（建物全景）",
    aspect: "wide",
    cropPc: "横長・建物全体が入る引きの構図",
    cropMobile: "縦長でもファサードが収まるようにトリミング",
  },
  entrance: {
    shotId: "02-entrance",
    description: "玄関・アプローチ",
    aspect: "portrait",
    cropPc: "縦位置、奥行きが伝わるアングル",
    cropMobile: "同一素材を縦長のまま使用",
  },
  treatmentRoomWide: {
    shotId: "03-treatment-room-wide",
    description: "メイン施術室のワイドカット",
    aspect: "wide",
    cropPc: "横長フル幅、部屋全体の余白が伝わる構図",
    cropMobile: "中央部分をクロップし、ベッド周りを中心に",
  },
  materialDetail: {
    shotId: "04-material-detail",
    description: "ベッド・照明・壁・素材のディテール",
    aspect: "square",
    cropPc: "正方形、素材の質感がわかる寄りの構図",
    cropMobile: "同一素材のまま正方形で使用",
  },
  counseling: {
    shotId: "05-counseling",
    description: "カウンセリング風景",
    aspect: "landscape",
    cropPc: "横長、スタッフと機材が写る中距離カット",
    cropMobile: "横長のまま、被写体を中央にクロップ",
  },
  skinAnalysisDevice: {
    shotId: "06-skin-analysis-device",
    description: "肌診断器",
    aspect: "landscape",
    cropPc: "横長、機器のディテールが分かる寄りの構図",
    cropMobile: "機器本体を中心に正方形寄りでクロップ",
  },
  facialHands: {
    shotId: "07-facial-hands",
    description: "フェイシャル施術の手元",
    aspect: "portrait",
    cropPc: "縦位置、手元のクローズアップ",
    cropMobile: "同一素材のまま縦位置で使用",
  },
  bodyHands: {
    shotId: "08-body-hands",
    description: "ボディ施術の手元",
    aspect: "portrait",
    cropPc: "縦位置、手元のクローズアップ",
    cropMobile: "同一素材のまま縦位置で使用",
  },
  products: {
    shotId: "09-products",
    description: "使用商品",
    aspect: "square",
    cropPc: "正方形、商品ディテールが分かる構図",
    cropMobile: "同一素材のまま正方形で使用",
  },
  staffPortrait: {
    shotId: "10-staff-portrait",
    description: "スタッフの自然なポートレート",
    aspect: "portrait",
    cropPc: "縦位置、自然光でのポートレート",
    cropMobile: "同一素材のまま縦位置で使用",
  },
  surroundings: {
    shotId: "11-surroundings",
    description: "志摩の周辺環境",
    aspect: "wide",
    cropPc: "横長、自然・別荘地の雰囲気が伝わる構図",
    cropMobile: "横長のまま、上下トリミングで縦長化",
  },
  accessSupport: {
    shotId: "12-access-support",
    description: "LINE予約・アクセスページ用の補助写真",
    aspect: "landscape",
    cropPc: "横長、案内として使いやすい落ち着いた構図",
    cropMobile: "横長のまま使用、文字とのバランスを確認",
  },
} as const satisfies Record<string, PlaceholderImageSpec>;

export type PlaceholderImageKey = keyof typeof placeholderImages;
