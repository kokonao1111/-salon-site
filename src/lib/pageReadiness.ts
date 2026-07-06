import { serviceCategories } from "./siteConfig";
import { menuItems } from "./menu";
import { staffMembers } from "./staff";
import { newsItems } from "./news";
import { hasApprovedFirstVisitFlow } from "./firstVisitFlow";
import { isConfirmed } from "./types";
import { isReservationReady } from "./reservation";

/**
 * 各ページの「公開準備が整っているか」を一箇所に集約する。
 * ここが true になったページだけが、ナビゲーション・サイトマップ・検索インデックス対象になる。
 * prelaunch / live では、ここが false のページは notFound() で404を返す
 * （ルート自体は準備が整う前から実装済みで、preview でのみ直接閲覧できる）。
 */
export const pageReadiness = {
  service: serviceCategories.some((c) => c.status === "confirmed"),
  menu: menuItems.some((item) => isConfirmed(item.name)),
  firstVisit: hasApprovedFirstVisitFlow,
  news: newsItems.length > 0,
  staff: staffMembers.some((s) => isConfirmed(s.name)),
  recruit: false,
  contact: isReservationReady(),
} as const;

export type PageReadinessKey = keyof typeof pageReadiness;
