import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactInfo } from "@/components/contact/ContactInfo";
import { pageReadiness } from "@/lib/pageReadiness";

export const metadata: Metadata = buildMetadata({
  title: "ご予約",
  description: "志摩の完全プライベートサロンへのご予約について。予約方法は現在準備中です。",
  path: "/contact",
  noIndex: !pageReadiness.contact,
});

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Reserve" title="ご予約" titleEn="Reserve" />
      <ContactInfo />
    </>
  );
}
