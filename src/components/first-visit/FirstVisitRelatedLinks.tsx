import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

const RELATED_LINKS = [
  { label: "コンセプト", labelEn: "Concept", href: "/concept" },
  { label: "メニュー準備中", labelEn: "Menu", href: "/menu" },
  { label: "アクセス", labelEn: "Access", href: "/access" },
  { label: "オープン予定", labelEn: "Opening", href: "/opening" },
] as const;

/** ページ下部の関連導線。すべて閲覧可能なページのみを対象にする。 */
export function FirstVisitRelatedLinks() {
  return (
    <section className="bg-warm-ivory py-16 sm:py-24">
      <Container>
        <div className="grid gap-px overflow-hidden bg-gold/20 sm:grid-cols-2 lg:grid-cols-4">
          {RELATED_LINKS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group flex flex-col justify-between bg-warm-ivory px-6 py-8 transition-colors hover:bg-soft-white"
            >
              <p className="font-serif-en text-xs tracking-[0.15em] text-forest/50 uppercase">
                {item.labelEn}
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-serif-jp text-lg text-ink">{item.label}</span>
                <ArrowRight
                  aria-hidden
                  className="h-4 w-4 text-forest/50 transition-transform duration-300 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
