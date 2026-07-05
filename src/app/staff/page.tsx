import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { PendingNotice } from "@/components/ui/PendingNotice";
import { StaffCard } from "@/components/staff/StaffCard";
import { staffMembers } from "@/lib/staff";
import { isConfirmed } from "@/lib/types";

/**
 * スタッフ情報・写真の確認が完了するまで本番ナビゲーションには表示しない。
 * ルートとページ自体はこの通り実装済みで、確認後すぐに公開できる。
 */
export const metadata: Metadata = buildMetadata({
  title: "スタッフ紹介",
  description: "志摩の完全プライベートサロンのスタッフをご紹介します。",
  path: "/staff",
  noIndex: true,
});

export default function StaffPage() {
  const confirmedStaff = staffMembers.filter((staff) => isConfirmed(staff.name));

  return (
    <>
      <PageIntro eyebrow="Staff" title="スタッフ紹介" titleEn="Our Staff" />
      <Container className="pb-24 sm:pb-32">
        {confirmedStaff.length > 0 ? (
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {confirmedStaff.map((staff) => (
              <StaffCard key={staff.id} staff={staff} />
            ))}
          </div>
        ) : (
          <PendingNotice>
            スタッフ情報は現在準備中です。確定次第、このページでご紹介いたします。
          </PendingNotice>
        )}
      </Container>
    </>
  );
}
