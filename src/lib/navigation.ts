import { pageReadiness } from "./pageReadiness";

export interface NavItem {
  label: string;
  labelEn: string;
  href: string;
}

/**
 * 本番ナビゲーションに表示する項目。
 *
 * 確定情報が少ない段階では Home / Concept / Access / Opening Information を中心にし、
 * サービス・メニュー・初めての方・お知らせは、それぞれの内容が確定・承認されるまで
 * ナビゲーションに並べない（pageReadiness で一元判定）。
 * Staff / Recruit も同様の理由で常に非表示（ルート自体は実装済み）。
 */
const alwaysVisibleNav: NavItem[] = [
  { label: "コンセプト", labelEn: "Concept", href: "/concept" },
  { label: "アクセス", labelEn: "Access", href: "/access" },
  { label: "開業のご案内", labelEn: "Opening Information", href: "/opening" },
];

const conditionalNav: { item: NavItem; ready: boolean }[] = [
  { item: { label: "サービス", labelEn: "Service", href: "/service" }, ready: pageReadiness.service },
  { item: { label: "メニュー", labelEn: "Menu", href: "/menu" }, ready: pageReadiness.menu },
  {
    item: { label: "初めての方", labelEn: "First Visit", href: "/first-visit" },
    ready: pageReadiness.firstVisit,
  },
  { item: { label: "お知らせ", labelEn: "News", href: "/news" }, ready: pageReadiness.news },
];

export const primaryNav: NavItem[] = [
  ...alwaysVisibleNav,
  ...conditionalNav.filter((entry) => entry.ready).map((entry) => entry.item),
];

export const reserveNav: NavItem = {
  label: "ご予約",
  labelEn: "Reserve",
  href: "/contact",
};

export const footerLegalNav: NavItem[] = [
  { label: "プライバシーポリシー", labelEn: "Privacy Policy", href: "/privacy" },
];
