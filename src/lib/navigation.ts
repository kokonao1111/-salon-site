import { pageReadiness } from "./pageReadiness";
import { SITE_STAGE } from "./siteStage";

export interface NavItem {
  label: string;
  labelEn: string;
  href: string;
}

/**
 * 本番ナビゲーションに表示する項目。
 *
 * - preview（クライアント・社内確認用）: 全ページに直接アクセスできるよう、
 *   pageReadiness に関わらずすべての項目を表示する。
 * - prelaunch / live: 確定情報が少ない段階では Home / Concept / Access / Opening Information を
 *   中心にし、サービス・メニュー・初めての方・お知らせ・スタッフは、それぞれの内容が
 *   確定・承認されるまでナビゲーションに並べない（pageReadiness で一元判定）。
 * Recruit は採用条件確定まで常に非表示（ルート自体は実装済み）。
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
  { item: { label: "スタッフ", labelEn: "Staff", href: "/staff" }, ready: pageReadiness.staff },
  { item: { label: "お知らせ", labelEn: "News", href: "/news" }, ready: pageReadiness.news },
];

const isPreview = SITE_STAGE === "preview";

export const primaryNav: NavItem[] = [
  ...alwaysVisibleNav,
  ...conditionalNav.filter((entry) => isPreview || entry.ready).map((entry) => entry.item),
];

export const reserveNav: NavItem = {
  label: "ご予約",
  labelEn: "Reserve",
  href: "/contact",
};

export const footerLegalNav: NavItem[] = [
  { label: "プライバシーポリシー", labelEn: "Privacy Policy", href: "/privacy" },
];
