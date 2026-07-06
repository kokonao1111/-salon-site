import { notFound } from "next/navigation";
import { SITE_STAGE } from "./siteStage";

/**
 * prelaunch / live の間、内容が未確定・未承認のページは404を返す
 * （ナビから隠すだけでなく、直接アクセスも遮断する）。
 * preview だけは、クライアント・社内レビュー用に常に閲覧できる。
 */
export function guardPageReadiness(ready: boolean): void {
  if (SITE_STAGE !== "preview" && !ready) {
    notFound();
  }
}
