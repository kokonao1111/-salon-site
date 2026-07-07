import { MessageCircle, Share2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

const CHANNELS = [
  {
    icon: MessageCircle,
    label: "LINE",
    note: "LINE予約は準備中です。",
  },
  {
    icon: Share2,
    label: "SNS",
    note: "公式アカウント公開後に掲載予定です。",
  },
] as const;

/**
 * LINE・SNSともに未確定のため、QRコードや仮リンクは一切出さない。
 * Instagram等のSNSも未確定のため作らない。アイコン＋「準備中」バッジで
 * 将来ここに掲載されることが伝わるよう視覚的な重みを持たせる。
 */
export function SnsLineSection() {
  return (
    <section className="bg-soft-white py-16 sm:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
          <div>
            <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">
              Line / SNS
            </p>
            <div className="mt-3 h-px w-12 bg-gold" />
            <h2 className="mt-6 font-serif-jp text-2xl leading-relaxed text-ink sm:text-3xl">
              LINE予約・SNS
            </h2>
            <p className="mt-4 text-sm leading-loose text-forest/76">
              予約導線とサロンの空気感を伝えるSNSは、公式アカウント確定後に掲載します。
            </p>
          </div>

          <div className="grid gap-px bg-gold/20 sm:grid-cols-2">
            {CHANNELS.map(({ icon: Icon, label, note }) => (
              <div key={label} className="bg-soft-white px-6 py-8">
                <div className="flex h-11 w-11 items-center justify-center border border-gold/35 text-forest/60">
                  <Icon aria-hidden className="h-5 w-5" />
                </div>
                <p className="mt-5 font-serif-en text-xs tracking-[0.15em] text-forest/50 uppercase">
                  {label}
                </p>
                <p className="mt-3 inline-block border-b border-gold/60 pb-0.5 text-xs tracking-[0.05em] text-forest/60">
                  準備中
                </p>
                <p className="mt-4 text-sm leading-loose text-forest/80">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
