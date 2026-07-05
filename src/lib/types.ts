/**
 * クライアント確認前の情報を「未確定」のまま安全に保持するための型。
 * pending の場合、value は存在せず、UI 側は必ず分岐して代替表示を行う。
 */
export type Confirmable<T> =
  | { status: "confirmed"; value: T }
  | { status: "pending"; note?: string };

export function isConfirmed<T>(
  field: Confirmable<T>
): field is { status: "confirmed"; value: T } {
  return field.status === "confirmed";
}

export type ImageAspect = "portrait" | "landscape" | "square" | "wide";

/**
 * 仮画像の抽象的なアートディレクション。単調な同一グラデーションを避け、
 * 撮影内容の性質に合わせて構図ごとに異なる表現を与えるためのカテゴリ。
 * 実写真ではなく、権利処理不要なCSS生成の抽象表現であることが前提。
 */
export type PlaceholderMood = "light" | "water" | "material" | "structure" | "warmth";

/**
 * 本番写真が納品されるまでの仮画像スロット。
 * 撮影リストの項目 ID と紐づけ、差し替え時に迷わない設計にする。
 */
export interface PlaceholderImageSpec {
  /** 撮影リスト（README）内の項目ID */
  shotId: string;
  /** 開発者・クライアント向けの撮影内容メモ */
  description: string;
  aspect: ImageAspect;
  /** 仮表示の抽象アートディレクション */
  mood: PlaceholderMood;
  /** PC表示での想定トリミング */
  cropPc?: string;
  /** モバイル表示での想定トリミング */
  cropMobile?: string;
}

export type ServiceCategoryId =
  | "facial"
  | "body"
  | "skin-analysis"
  | "counseling";

export interface ServiceCategory {
  id: ServiceCategoryId;
  nameEn: string;
  nameJa: string;
  summary: string;
  status: "pending" | "confirmed";
}

export interface MenuItem {
  id: string;
  category: ServiceCategoryId;
  name: Confirmable<string>;
  durationMinutes: Confirmable<number>;
  priceRegular: Confirmable<number>;
  priceFirstVisit: Confirmable<number>;
  description: Confirmable<string>;
  recommendedFor: Confirmable<string>;
  notes: Confirmable<string>;
}

export interface StaffMember {
  id: string;
  name: Confirmable<string>;
  role: Confirmable<string>;
  bio: Confirmable<string>;
  photo: Confirmable<PlaceholderImageSpec>;
}

export type NewsCategory = "preparation" | "announcement" | "media";

export interface NewsItem {
  id: string;
  category: NewsCategory;
  /** ISO 8601 (YYYY-MM-DD)。承認済みニュースのみ掲載する。 */
  publishedAt: string;
  title: string;
  body: string;
}
