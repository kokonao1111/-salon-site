import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui/PageIntro";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = buildMetadata({
  title: "ご予約",
  description: "志摩の完全プライベートサロンへのご予約はLINE・お電話にて承ります。",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Reserve" title="ご予約" titleEn="Reserve" />
      <ContactInfo />
    </>
  );
}
