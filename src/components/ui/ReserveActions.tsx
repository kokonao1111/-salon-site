import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { isConfirmed } from "@/lib/types";
import { LinkButton } from "./Button";

interface ReserveActionsProps {
  tone?: "dark" | "light";
  className?: string;
}

/**
 * LINE予約を最優先CTA、電話予約を補助CTAとして表示する。
 *
 * LINE・電話のいずれも未確定の間は、押せないボタンをサイト各所に繰り返し表示せず、
 * 「予約受付開始のお知らせ」に一本化した1行の案内のみを表示する。
 * どちらか一方でも確定していれば、確定している方法のボタンのみを表示する（未確定側の
 * ダミーボタンは表示しない）。
 * data-gtm-event は GTM 側でクリックトリガーを設定する際の目印（計測IDは環境変数側で管理）。
 */
export function ReserveActions({ tone = "dark", className = "" }: ReserveActionsProps) {
  const { phone, lineUrl } = siteConfig.contact;
  const primaryVariant = tone === "light" ? "primary-light" : "primary";
  const outlineVariant = tone === "light" ? "outline-light" : "outline";
  const isLight = tone === "light";

  const lineReady = isConfirmed(lineUrl);
  const phoneReady = isConfirmed(phone);

  if (!lineReady && !phoneReady) {
    return (
      <p className={`text-sm leading-relaxed ${isLight ? "text-pearl" : "text-forest/80"} ${className}`}>
        ご予約受付開始のお知らせは、準備が整い次第
        <Link
          href="/opening"
          className={`underline underline-offset-4 ${isLight ? "hover:text-soft-white" : "hover:text-ink"}`}
        >
          開業のご案内
        </Link>
        にてお伝えいたします。
      </p>
    );
  }

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      {lineReady && (
        <LinkButton
          href={lineUrl.value}
          external
          variant={primaryVariant}
          data-gtm-event="reserve_line_click"
        >
          LINEで予約する
        </LinkButton>
      )}
      {phoneReady && (
        <LinkButton
          href={`tel:${phone.value}`}
          variant={outlineVariant}
          data-gtm-event="reserve_tel_click"
        >
          電話で予約する
        </LinkButton>
      )}
    </div>
  );
}
