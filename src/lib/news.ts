import type { NewsItem } from "./types";

/**
 * お知らせ一覧。
 * クライアントから承認されていない情報は掲載しないため、Phase 1 時点では空配列とする。
 * 承認後、以下の形式で項目を追加する（新しい日付を先頭に）。
 *
 * {
 *   id: "2026-08-25-open-date",
 *   category: "announcement",
 *   publishedAt: "2026-08-25",
 *   title: "……",
 *   body: "……",
 * }
 */
export const newsItems: NewsItem[] = [];
