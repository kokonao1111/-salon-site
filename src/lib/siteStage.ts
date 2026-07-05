import { siteConfig } from "./siteConfig";

export type SiteStage = "preview" | "prelaunch" | "live";

const VALID_STAGES: readonly SiteStage[] = ["preview", "prelaunch", "live"];

function readStage(): SiteStage {
  const raw = process.env.NEXT_PUBLIC_SITE_STAGE;
  if (raw && (VALID_STAGES as readonly string[]).includes(raw)) {
    return raw as SiteStage;
  }
  // 未設定・不正値の場合は最も安全な "preview"（全面noindex）にフォールバックする。
  return "preview";
}

export const SITE_STAGE: SiteStage = readStage();

export const isLiveStage = SITE_STAGE === "live";

/**
 * live 段階なのに正式な店舗名・本番URLが未設定の場合はビルド自体を失敗させる。
 * 誤って未確定情報のまま本番公開されることを防ぐための安全装置。
 */
export function assertLiveReadiness() {
  if (SITE_STAGE !== "live") return;

  const missing: string[] = [];
  if (siteConfig.brand.status !== "confirmed") {
    missing.push("正式な店舗名（siteConfig.brand.status を confirmed に更新）");
  }
  if (!process.env.NEXT_PUBLIC_SITE_URL) {
    missing.push("本番URL（環境変数 NEXT_PUBLIC_SITE_URL）");
  }

  if (missing.length > 0) {
    throw new Error(
      [
        "[SITE_STAGE=live] 本番公開に必要な情報が未設定のためビルドを中止しました。",
        "未設定の項目:",
        ...missing.map((m) => `  - ${m}`),
        "SITE_STAGE=live は正式情報が出揃うまで使用しないでください（preview または prelaunch を使用）。",
      ].join("\n")
    );
  }
}
