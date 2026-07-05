import { serviceCategories } from "./siteConfig";
import { menuItems } from "./menu";
import { staffMembers } from "./staff";
import { newsItems } from "./news";
import { hasApprovedFirstVisitFlow } from "./firstVisitFlow";
import { isConfirmed } from "./types";

/**
 * 各ページの「公開準備が整っているか」を一箇所に集約する。
 * ここが true になったページだけが、ナビゲーション・サイトマップ・検索インデックス対象になる。
 * ルート自体は準備が整う前から実装済みで、直接アクセスすれば閲覧できる
 * （Staff / Recruit と同様のパターン）。
 */
export const pageReadiness = {
  service: serviceCategories.some((c) => c.status === "confirmed"),
  menu: menuItems.some((item) => isConfirmed(item.name)),
  firstVisit: hasApprovedFirstVisitFlow,
  news: newsItems.length > 0,
  staff: staffMembers.some((s) => isConfirmed(s.name)),
  recruit: false,
} as const;

export type PageReadinessKey = keyof typeof pageReadiness;
