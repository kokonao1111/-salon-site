import { Cormorant_Garamond } from "next/font/google";

/**
 * 英字見出し・数字用の高コントラストセリフ体のみをWebフォントとして読み込む。
 *
 * 日本語（明朝・ゴシック）はあえてWebフォント化しない。Google FontsのCJK系フォントは
 * Unicode-rangeごとに数百枚のwoff2に分割配信される仕組み上、ウェイトを絞っても
 * 数MB〜十数MB規模になり（検証: 3ウェイト構成で617ファイル/約21MB、2ウェイトに
 * 絞っても373ファイル/約13MB）、パフォーマンス上のコストがきわめて大きい。
 * 特定の文字だけをサブセット化する方法もあるが、メニュー・スタッフ・お知らせ等の
 * 今後追加されるコンテンツで未収録の文字が使われた際に静かにフォールバックしてしまう
 * 脆弱性があるため採用しない。システムの日本語フォント（Hiragino / Yu Gothic / Yu Mincho 等）
 * にフォールバックさせることで、追加コストゼロ・将来の文字追加にも安全な構成にしている。
 * 見出し用の明朝の質感を優先したい場合は、実際の掲載文言が確定した段階で
 * 使用文字のみをサブセットした自前ホスティングのWebフォント化を再検討する。
 */
export const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});
