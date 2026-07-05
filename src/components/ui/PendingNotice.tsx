import type { ReactNode } from "react";

interface PendingNoticeProps {
  children: ReactNode;
  className?: string;
}

/** 未確定情報を上品に案内するための共通ノーティス */
export function PendingNotice({ children, className = "" }: PendingNoticeProps) {
  return (
    <p
      className={`border-t border-b border-pearl/70 py-4 text-sm leading-relaxed text-forest/80 ${className}`}
    >
      {children}
    </p>
  );
}
