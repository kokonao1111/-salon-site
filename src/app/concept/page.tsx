import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui/PageIntro";
import { ConceptManuscript } from "@/components/concept/ConceptManuscript";
import { ConceptSupplement } from "@/components/concept/ConceptSupplement";

export const metadata: Metadata = buildMetadata({
  title: "コンセプト",
  description:
    "三重県志摩市の別荘地に誕生する完全プライベートサロンのコンセプト。感覚だけに頼らない肌診断と、オーダーメイドのトリートメントについてご紹介します。",
  path: "/concept",
});

export default function ConceptPage() {
  return (
    <>
      <PageIntro eyebrow="Concept" title="コンセプト" titleEn="Our Philosophy" />
      <ConceptManuscript />
      <ConceptSupplement />
    </>
  );
}
