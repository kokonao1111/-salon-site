import { siteConfig } from "@/lib/siteConfig";
import { isConfirmed } from "@/lib/types";
import { LinkButton, PendingButton } from "./Button";

interface ReserveActionsProps {
  tone?: "dark" | "light";
  className?: string;
}

/**
 * LINE予約を最優先CTA、電話予約を補助CTAとして表示する。
 * URL・電話番号が未確定の間は押せない状態のボタンを表示し、# へのリンクは行わない。
 * data-gtm-event は GTM 側でクリックトリガーを設定する際の目印（計測IDは環境変数側で管理）。
 */
export function ReserveActions({ tone = "dark", className = "" }: ReserveActionsProps) {
  const { phone, lineUrl } = siteConfig.contact;
  const primaryVariant = tone === "light" ? "primary-light" : "primary";
  const outlineVariant = tone === "light" ? "outline-light" : "outline";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      {isConfirmed(lineUrl) ? (
        <LinkButton
          href={lineUrl.value}
          external
          variant={primaryVariant}
          data-gtm-event="reserve_line_click"
        >
          LINEで予約する
        </LinkButton>
      ) : (
        <PendingButton
          reason="準備中"
          variant={primaryVariant}
          data-gtm-event="reserve_line_pending"
        >
          LINEで予約する
        </PendingButton>
      )}
      {isConfirmed(phone) ? (
        <LinkButton
          href={`tel:${phone.value}`}
          variant={outlineVariant}
          data-gtm-event="reserve_tel_click"
        >
          電話で予約する
        </LinkButton>
      ) : (
        <PendingButton
          reason="準備中"
          variant={outlineVariant}
          data-gtm-event="reserve_tel_pending"
        >
          電話で予約する
        </PendingButton>
      )}
    </div>
  );
}
