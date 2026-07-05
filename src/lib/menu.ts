import type { MenuItem } from "./types";

/**
 * メニュー・料金データ。
 * 現段階では全項目が pending。素材受領後、各フィールドを
 * { status: "confirmed", value: ... } に更新するだけで公開表示に切り替わる。
 * 架空の料金・時間・内容は一切設定しない。
 */
export const menuItems: MenuItem[] = [
  {
    id: "facial-01",
    category: "facial",
    name: { status: "pending" },
    durationMinutes: { status: "pending" },
    priceRegular: { status: "pending" },
    priceFirstVisit: { status: "pending" },
    description: { status: "pending" },
    recommendedFor: { status: "pending" },
    notes: { status: "pending" },
  },
  {
    id: "body-01",
    category: "body",
    name: { status: "pending" },
    durationMinutes: { status: "pending" },
    priceRegular: { status: "pending" },
    priceFirstVisit: { status: "pending" },
    description: { status: "pending" },
    recommendedFor: { status: "pending" },
    notes: { status: "pending" },
  },
  {
    id: "skin-analysis-01",
    category: "skin-analysis",
    name: { status: "pending" },
    durationMinutes: { status: "pending" },
    priceRegular: { status: "pending" },
    priceFirstVisit: { status: "pending" },
    description: { status: "pending" },
    recommendedFor: { status: "pending" },
    notes: { status: "pending" },
  },
];
