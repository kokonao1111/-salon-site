import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { newsItems } from "@/lib/news";
import { siteConfig } from "@/lib/siteConfig";

export function NewsPreview() {
  const latest = newsItems.slice(0, 3);

  return (
    <section className="bg-warm-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrowNumber="07" eyebrow="News" title="最新情報" titleEn="Latest" />

        <div className="mt-12">
          {latest.length > 0 ? (
            <ul className="divide-y divide-ink/10 border-t border-b border-ink/10">
              {latest.map((item) => (
                <li key={item.id} className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8">
                  <time dateTime={item.publishedAt} className="font-serif-en text-sm text-forest/70">
                    {item.publishedAt}
                  </time>
                  <p className="text-sm text-ink">{item.title}</p>
                </li>
              ))}
            </ul>
          ) : (
            <ul className="divide-y divide-ink/10 border-t border-b border-ink/10">
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
          )}
        </div>

        <LinkButton href="/news" variant="ghost" className="mt-8">
          お知らせ一覧
        </LinkButton>
      </Container>
    </section>
  );
}
