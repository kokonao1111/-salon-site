import { Container } from "@/components/ui/Container";
import { PhotoBackground } from "@/components/ui/PhotoBackground";
import { backgroundPhotos } from "@/lib/backgroundPhotos";

/**
 * 「初めてのお客様へ」ページのヒーロー。Homeと同じ写真背景の仕組みを使い、
 * 店舗撮影が済むまでは単色（抽象模様なし）で待機する。
 */
export function FirstVisitHero() {
  return (
    <section className="relative flex min-h-[56svh] items-end overflow-hidden">
      <PhotoBackground
        slot={backgroundPhotos.firstVisit}
        alt="サロン空間・受付イメージ（準備中）"
        overlay="veil"
        priority
      />

      <Container className="relative w-full pt-24 pb-14 sm:pb-16">
        <div className="max-w-[36rem]">
          <p className="font-serif-en text-[11px] tracking-[0.24em] text-forest/60 uppercase">
            For First-time Guests
          </p>
          <h1 className="mt-4 text-balance font-serif-jp text-[2rem] leading-[1.4] text-ink [word-break:keep-all] sm:text-5xl">
            初めてのお客様へ
          </h1>
          <p className="mt-5 max-w-[32rem] text-[15px] leading-[1.95] text-forest/80">
            完全個室で過ごす時間、肌診断から始まる提案、予約前に知っておきたいことをまとめました。
          </p>
        </div>
      </Container>
    </section>
  );
}
