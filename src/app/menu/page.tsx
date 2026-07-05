import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui/PageIntro";
import { Container } from "@/components/ui/Container";
import { PendingNotice } from "@/components/ui/PendingNotice";
import { LinkButton } from "@/components/ui/Button";
import { MenuItemCard } from "@/components/menu/MenuItemCard";
import { menuItems } from "@/lib/menu";
import { serviceCategories } from "@/lib/siteConfig";
import { isConfirmed } from "@/lib/types";
import { pageReadiness } from "@/lib/pageReadiness";

export const metadata: Metadata = buildMetadata({
  title: "メニュー・料金",
  description: "志摩の完全プライベートサロンのメニュー・料金のご案内。現在準備中です。",
  path: "/menu",
  noIndex: !pageReadiness.menu,
});

export default function MenuPage() {
  const confirmedItems = menuItems.filter((item) => isConfirmed(item.name));
  const hasConfirmedMenu = confirmedItems.length > 0;

  return (
    <>
      <PageIntro
        eyebrowNumber="—"
        eyebrow="Menu"
        title="メニュー・料金"
        titleEn="Menu & Price"
      />

      <Container className="pb-24 sm:pb-32">
        {hasConfirmedMenu ? (
          serviceCategories.map((category) => {
            const items = confirmedItems.filter((item) => item.category === category.id);
            if (items.length === 0) return null;
            return (
              <div key={category.id} className="mb-16">
                <p className="font-serif-en text-sm tracking-[0.15em] text-forest/70 italic">
                  {category.nameEn}
                </p>
                <h2 className="mt-1 font-serif-jp text-2xl text-ink">{category.nameJa}</h2>
                <div>
                  {items.map((item) => (
                    <MenuItemCard key={item.id} item={item} />
                  ))}
                </div>
              </div>
            );
          })
        ) : (
          <div className="py-8">
            <PendingNotice>
              メニュー・料金は現在準備中です。店舗の完成、エステ機器の搬入に合わせて、詳細を確定してまいります。
            </PendingNotice>
            <div className="mt-8 flex flex-wrap gap-4">
              <LinkButton href="/service" variant="outline">
                サービス紹介を見る
              </LinkButton>
              <LinkButton href="/contact" variant="ghost">
                ご予約について
              </LinkButton>
            </div>
          </div>
        )}
      </Container>
    </>
  );
}
