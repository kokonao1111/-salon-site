import type { Confirmable, ServiceCategory } from "./types";

/**
 * 店舗に関するあらゆる確定・未確定情報を一元管理するファイル。
 * 未確定項目は Confirmable<T> の status: "pending" として保持し、
 * 本番で架空の情報が表示されないようにする。
 *
 * 値を確認できたら、対象フィールドを
 *   { status: "confirmed", value: "..." }
 * に書き換えるだけで、サイト全体（ヘッダー・フッター・予約導線・構造化データ等）に反映される。
 */

/**
 * 本番URLが未設定の間は null とし、canonical / sitemap / OGP に
 * 仮ドメインを一切出力しない（検索エンジンに誤ったURLを渡さないため）。
 * ドメインの取得・契約はクライアント側の担当範囲であり、ここでは
 * 環境変数が設定されているかどうかだけを見る。
 */
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || null;

/**
 * OGP画像の絶対URL解決など、Next.jsの仕組み上どうしても基点URLが必要な箇所でのみ使う
 * 内部専用の仮URL。canonical / og:url / sitemap には絶対に使用しないこと。
 */
export const INTERNAL_BASE_URL = "https://shima-private-salon.example";

export const siteConfig = {
  /**
   * 正式な店舗名・ロゴは未確定。
   * ここでは「架空の可愛い名前」を創作せず、ブランド原稿にある説明的な言葉のみを
   * 作業用の仮表示として用いる。店舗名確定後、このオブジェクトを更新するだけでよい。
   */
  brand: {
    status: "pending" as "pending" | "confirmed",
    workingTitleJa: "志摩 プライベートビューティーサロン",
    workingTitleEn: "SHIMA PRIVATE BEAUTY SALON",
    /**
     * 正式名称が確定するまでの間、ロゴ・ブランド名の代わりに使う小さな記述的表記。
     * ブランド名として扱わないこと（Header・Footer・OGPで使用）。
     */
    pendingLabel: "Private Beauty Salon / Shima",
    note: "TODO: クライアント確認待ち — 正式な店舗名・ロゴが確定次第、本フィールドを更新する。",
  },

  siteUrl: SITE_URL,

  address: {
    postalCode: "517-0502",
    prefecture: "三重県",
    line: "志摩市阿児町神明764-89",
    full: "〒517-0502 三重県志摩市阿児町神明764-89",
  },

  googleMapsUrl: "https://maps.app.goo.gl/kkrSyj1yrZdDUTJk6?g_st=il",

  /** Googleマップへの店舗登録は申請・登録作業中のため、埋め込み地図は表示しない */
  googleMapsListing: {
    status: "pending" as "pending" | "confirmed",
    note: "TODO: Googleマップ店舗登録が完了次第、埋め込み地図とGoogleビジネスプロフィールリンクを追加する。",
  },

  contact: {
    phone: { status: "pending" } as Confirmable<string>,
    lineUrl: { status: "pending" } as Confirmable<string>,
  },

  businessHours: { status: "pending" } as Confirmable<string>,
  closedDays: { status: "pending" } as Confirmable<string>,

  schedule: [
    { period: "2026年7月下旬", label: "店舗リフォーム完成" },
    { period: "2026年8月", label: "エステ機器搬入" },
    { period: "2026年8月下旬", label: "ホームページ完成" },
    { period: "2026年9月中旬", label: "オープン" },
  ],

  openingApprox: "2026年9月中旬 オープン予定",

  /**
   * Heroに使う、権利確認済みの志摩の実景（周辺風景。店舗写真ではない）。
   * 撮影・素材が用意でき次第 `public/images/` 配下のパスを設定する。
   * 未設定の間は、Heroは短い単色ビジュアルのまま表示される。
   */
  heroImageSrc: null as string | null,

  /** Google広告・アクセス解析用の計測ID。未発行の間は null のままにし、架空IDを入れない。 */
  measurement: {
    gtmId: process.env.NEXT_PUBLIC_GTM_ID || null,
    gaId: process.env.NEXT_PUBLIC_GA_ID || null,
    googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID || null,
  },

  /** Search Console の所有権確認コード。発行されるまでは null にし、メタタグを出力しない。 */
  searchConsole: {
    googleSiteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || null,
  },

  seoDefaults: {
    titleTemplate: "%s｜志摩 完全プライベート・トータルビューティーサロン",
    defaultTitle: "志摩 完全プライベート・トータルビューティーサロン｜三重県志摩市",
    description:
      "三重県志摩市阿児町の別荘地に誕生する、完全プライベート・トータルビューティーサロン。肌診断に基づくオーダーメイドのフェイシャル＆ボディトリートメントを、贅沢な個室空間でご提供します。2026年9月中旬開業予定。",
  },
} as const;

export const serviceCategories: ServiceCategory[] = [
  {
    id: "facial",
    nameEn: "Facial Treatment",
    nameJa: "フェイシャルトリートメント",
    summary: "肌診断の結果に基づき、お一人おひとりの肌に合わせてプログラムを組み立てます。",
    status: "pending",
  },
  {
    id: "body",
    nameEn: "Body Treatment",
    nameJa: "ボディトリートメント",
    summary: "コンディションに合わせたオーダーメイドのボディプログラムをご提供します。",
    status: "pending",
  },
  {
    id: "skin-analysis",
    nameEn: "Skin Analysis",
    nameJa: "肌診断",
    summary: "高精度な肌診断器で、お肌の現在と未来を読み解きます。",
    status: "pending",
  },
  {
    id: "counseling",
    nameEn: "Counseling",
    nameJa: "カウンセリング",
    summary: "施術前後に、専任スタッフが丁寧にお肌と身体の状態をお伺いします。",
    status: "pending",
  },
];
