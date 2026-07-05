export interface NavItem {
  label: string;
  labelEn: string;
  href: string;
}

/**
 * 本番ナビゲーションに表示する項目。
 * Staff / Recruit は情報確定後に公開するため、意図的にここへ含めない
 * （ルート自体は src/app/staff, src/app/recruit に実装済み）。
 */
export const primaryNav: NavItem[] = [
  { label: "コンセプト", labelEn: "Concept", href: "/concept" },
  { label: "サービス", labelEn: "Service", href: "/service" },
  { label: "メニュー", labelEn: "Menu", href: "/menu" },
  { label: "初めての方", labelEn: "First Visit", href: "/first-visit" },
  { label: "アクセス", labelEn: "Access", href: "/access" },
  { label: "お知らせ", labelEn: "News", href: "/news" },
];

export const reserveNav: NavItem = {
  label: "ご予約",
  labelEn: "Reserve",
  href: "/contact",
};

export const footerLegalNav: NavItem[] = [
  { label: "プライバシーポリシー", labelEn: "Privacy Policy", href: "/privacy" },
];
