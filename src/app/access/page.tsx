import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui/PageIntro";
import { AccessInfo } from "@/components/access/AccessInfo";

export const metadata: Metadata = buildMetadata({
  title: "アクセス",
  description: "三重県志摩市阿児町神明764-89。志摩の完全プライベートサロンへのアクセスをご案内します。",
  path: "/access",
});

export default function AccessPage() {
  return (
    <>
      <PageIntro eyebrowNumber="—" eyebrow="Access" title="アクセス" titleEn="Access" />
      <AccessInfo />
    </>
  );
}
