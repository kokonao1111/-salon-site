export interface NavItem {
  label: string;
  labelEn: string;
  href: string;
}

/**
 * 本番ナビゲーションに表示する項目（2026-07 改訂）。
 *
 * 参考サイトの構成に合わせ、内容の確定・未確定に関わらず常に同じ7項目を表示する。
 * 未確定のページ（メニュー・初めての方・お知らせ・ご予約）も、リンク先で
 * 「現在準備中です」と正直に案内する方針に変更したため、ここでの出し分けは行わない。
 * サービス・スタッフ・Recruitは今回のナビ構成の対象外（従来通りURLは実装済みだが導線には出さない）。
 */
export const primaryNav: NavItem[] = [
  { label: "HOME", labelEn: "Home", href: "/" },
  { label: "初めての方へ", labelEn: "First Visit", href: "/first-visit" },
  { label: "コンセプト", labelEn: "Concept", href: "/concept" },
  { label: "メニュー", labelEn: "Menu", href: "/menu" },
  { label: "アクセス", labelEn: "Access", href: "/access" },
  { label: "お知らせ", labelEn: "News", href: "/news" },
];

/**
 * ご予約は LINE・電話が未確定でも常に表示する。
 * リンク先の /contact では、予約方法が現在準備中であることを正直に案内し、
 * 仮の予約フォームは設置しない。
 */
export const reserveNav: NavItem = { label: "ご予約", labelEn: "Reserve", href: "/contact" };

export const footerLegalNav: NavItem[] = [
  { label: "プライバシーポリシー", labelEn: "Privacy Policy", href: "/privacy" },
];
