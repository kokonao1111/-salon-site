import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = buildMetadata({
  title: "開業のご案内",
  description: "志摩の完全プライベートサロンの開業に向けた準備状況をご案内します。",
  path: "/opening",
});

export default function OpeningPage() {
  return (
    <>
      <PageIntro
        eyebrow="Opening Information"
        title="開業のご案内"
        titleEn="Opening Information"
        description={`${siteConfig.openingApprox}。準備の進捗を、こちらで正直にご案内いたします。`}
      />

      <Container className="pb-24 sm:pb-32">
        <ul className="divide-y divide-ink/10 border-t border-b border-ink/10">
          {siteConfig.schedule.map((item) => (
            <li
              key={item.label}
              className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:gap-10"
            >
              <span className="font-serif-en text-base text-forest/70">{item.period}</span>
              <span className="text-base text-ink">{item.label}</span>
            </li>
          ))}
        </ul>

        <p className="mt-10 max-w-xl text-sm leading-loose text-forest/75">
          開業後のご予約方法や詳しいサービス内容については、準備が整い次第、各ページおよびお知らせにてご案内いたします。
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <LinkButton href="/concept" variant="outline">
            コンセプトを見る
          </LinkButton>
          <LinkButton href="/access" variant="ghost">
            アクセスを見る
          </LinkButton>
        </div>
      </Container>
    </>
  );
}
