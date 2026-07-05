import { Container } from "@/components/ui/Container";
import { PendingNotice } from "@/components/ui/PendingNotice";
import { newsItems } from "@/lib/news";
import { siteConfig } from "@/lib/siteConfig";

const categoryLabel: Record<string, string> = {
  preparation: "開業準備",
  announcement: "お知らせ",
  media: "メディア",
};

export function NewsList() {
  return (
    <section className="bg-warm-ivory pb-24 sm:pb-32">
      <Container className="max-w-3xl">
        {newsItems.length > 0 ? (
          <ul className="divide-y divide-ink/10 border-t border-b border-ink/10">
            {newsItems.map((item) => (
              <li key={item.id} className="py-8">
                <div className="flex flex-wrap items-baseline gap-4">
                  <time dateTime={item.publishedAt} className="font-serif-en text-sm text-forest/70">
                    {item.publishedAt}
                  </time>
                  <span className="text-xs tracking-[0.1em] text-gold uppercase">
                    {categoryLabel[item.category] ?? item.category}
                  </span>
                </div>
                <h3 className="mt-3 font-serif-jp text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-loose text-forest/80">{item.body}</p>
              </li>
            ))}
          </ul>
        ) : (
          <>
            <PendingNotice>
              現在、公開できるお知らせはございません。オープン準備の進捗は、以下のスケジュールをご参照ください。
            </PendingNotice>
            <ul className="mt-8 divide-y divide-ink/10 border-t border-b border-ink/10">
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
          </>
        )}
      </Container>
    </section>
  );
}
