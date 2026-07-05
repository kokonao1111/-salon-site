import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { PendingNotice } from "@/components/ui/PendingNotice";
import { newsItems } from "@/lib/news";

const categoryLabel: Record<string, string> = {
  preparation: "開業準備",
  announcement: "お知らせ",
  media: "メディア",
};

/**
 * 内部の準備工程（店舗リフォーム・機器搬入等）は「お知らせ」として掲載しない。
 * それらは /opening（開業のご案内）で正直に案内する。ここは承認済みのお知らせのみ表示する。
 */
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
          <PendingNotice>
            現在、公開できるお知らせはございません。開業に向けた準備状況は
            <Link href="/opening" className="underline underline-offset-4 hover:opacity-70">
              開業のご案内
            </Link>
            のページでご案内しています。
          </PendingNotice>
        )}
      </Container>
    </section>
  );
}
