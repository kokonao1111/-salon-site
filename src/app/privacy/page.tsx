import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui/PageIntro";
import { PrivacyContent } from "@/components/privacy/PrivacyContent";

export const metadata: Metadata = buildMetadata({
  title: "プライバシーポリシー",
  description: "個人情報の取り扱いについてのご案内です。",
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageIntro eyebrowNumber="—" eyebrow="Privacy" title="プライバシーポリシー" titleEn="Privacy Policy" />
      <PrivacyContent />
    </>
  );
}
