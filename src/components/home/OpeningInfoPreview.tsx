import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { siteConfig } from "@/lib/siteConfig";

/**
 * 開業準備の進捗（確定済みのスケジュール）を、あくまで「開業のご案内」として表示する。
 * お知らせ（News）とは明確に区別し、内部工程を承認済みの外部発表であるかのように見せない。
 */
export function OpeningInfoPreview() {
  return (
    <section className="bg-warm-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrowNumber="07"
          eyebrow="Opening Information"
          title="開業のご案内"
          titleEn="Opening Information"
        />

        <ul className="mt-12 divide-y divide-ink/10 border-t border-b border-ink/10">
          {siteConfig.schedule.map((item) => (
            <li
              key={item.label}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <span className="font-serif-en text-sm text-forest/70">{item.period}</span>
              <span className="text-sm text-ink">{item.label}</span>
            </li>
          ))}
        </ul>

        <LinkButton href="/opening" variant="ghost" className="mt-8">
          開業のご案内を見る
        </LinkButton>
      </Container>
    </section>
  );
}
