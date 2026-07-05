import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { newsItems } from "@/lib/news";

/** 承認済みのお知らせが1件もない場合は、セクション自体を表示しない（内部工程を代用しない）。 */
export function NewsPreview() {
  if (newsItems.length === 0) return null;

  const latest = newsItems.slice(0, 3);

  return (
    <section className="bg-warm-ivory py-24 sm:py-32">
      <Container>
        <SectionHeading eyebrowNumber="08" eyebrow="News" title="最新情報" titleEn="Latest" />

        <ul className="mt-12 divide-y divide-ink/10 border-t border-b border-ink/10">
          {latest.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-1 py-5 sm:flex-row sm:items-baseline sm:gap-8"
            >
              <time dateTime={item.publishedAt} className="font-serif-en text-sm text-forest/70">
                {item.publishedAt}
              </time>
              <p className="text-sm text-ink">{item.title}</p>
            </li>
          ))}
        </ul>

        <LinkButton href="/news" variant="ghost" className="mt-8">
          お知らせ一覧
        </LinkButton>
      </Container>
    </section>
  );
}
