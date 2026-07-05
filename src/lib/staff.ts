import type { StaffMember } from "./types";

/**
 * スタッフ情報。全員分の情報・写真が確認できるまで、架空の氏名や経歴は絶対に設定しない。
 * ページ自体は実装済みだが、本番ナビゲーションには表示しない（siteConfig 経由で制御）。
 */
export const staffMembers: StaffMember[] = [
  {
    id: "staff-01",
    name: { status: "pending" },
    role: { status: "pending" },
    bio: { status: "pending" },
    photo: {
      status: "pending",
      note: "TODO: スタッフの自然なポートレート撮影後に差し替え",
    },
  },
];
