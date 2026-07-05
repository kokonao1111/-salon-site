import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { serviceCategories } from "@/lib/siteConfig";
import { pageReadiness } from "@/lib/pageReadiness";

/**
 * live専用：サービス内容が実際に確定した後にのみ表示する。
 * 確定していないカテゴリは表示しない（架空の完成度を演出しない）。
 */
export function ServiceOverviewSection() {
  if (!pageReadiness.service) return null;

  const confirmed = serviceCategories.filter((c) => c.status === "confirmed");

  return (
    <section className="bg-warm-ivory py-16 sm:py-24">
      <Container>
        <p className="font-serif-en text-xs tracking-[0.1em] text-forest/55 uppercase">Service</p>
        <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-3">
          {confirmed.map((category) => (
            <li key={category.id} className="font-serif-jp text-lg text-ink/80">
              {category.nameJa}
            </li>
          ))}
        </ul>
        <div className="mt-8 flex flex-wrap gap-4">
          <LinkButton href="/service" variant="ghost">
            サービスについて
          </LinkButton>
          {pageReadiness.menu && (
            <LinkButton href="/menu" variant="ghost">
              メニュー・料金を見る
            </LinkButton>
          )}
        </div>
      </Container>
    </section>
  );
}
