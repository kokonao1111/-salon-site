import { LinkButton } from "@/components/ui/Button";
import { isConfirmed } from "@/lib/types";
import type { MenuItem } from "@/lib/types";

interface MenuItemCardProps {
  item: MenuItem;
}

/**
 * 完成版の料金表UI。データ受領後、lib/menu.ts の該当フィールドを
 * confirmed に更新するだけで、そのまま本番表示に切り替わる。
 */
export function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <div className="border-t border-ink/15 py-8">
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h3 className="font-serif-jp text-xl text-ink">
          {isConfirmed(item.name) ? item.name.value : "準備中"}
        </h3>
        <p className="font-serif-en text-sm text-forest/70">
          {isConfirmed(item.durationMinutes) ? `${item.durationMinutes.value}min` : "時間 準備中"}
        </p>
      </div>

      {isConfirmed(item.description) && (
        <p className="mt-3 max-w-2xl text-sm leading-loose text-forest/80">
          {item.description.value}
        </p>
      )}

      <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-ink">
        <p>
          通常料金：
          {isConfirmed(item.priceRegular)
            ? `¥${item.priceRegular.value.toLocaleString("ja-JP")}`
            : "準備中"}
        </p>
        <p>
          初回料金：
          {isConfirmed(item.priceFirstVisit)
            ? `¥${item.priceFirstVisit.value.toLocaleString("ja-JP")}`
            : "準備中"}
        </p>
      </div>

      {isConfirmed(item.recommendedFor) && (
        <p className="mt-3 text-sm text-forest/70">おすすめの方：{item.recommendedFor.value}</p>
      )}
      {isConfirmed(item.notes) && (
        <p className="mt-2 text-sm text-forest/60">{item.notes.value}</p>
      )}

      <LinkButton href="/contact" variant="ghost" className="mt-5">
        このメニューで予約する
      </LinkButton>
    </div>
  );
}
