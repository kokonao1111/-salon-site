import { Container } from "@/components/ui/Container";
import { PlaceholderImage } from "@/components/ui/PlaceholderImage";
import { PhotoComingSoon } from "@/components/ui/PhotoComingSoon";
import { placeholderImages } from "@/lib/placeholderImages";

/**
 * 「初めてのお客様へ」ページのヒーロー。
 * 店舗写真は未撮影のため、写真と誤認されない明るい仮ビジュアル（額縁＋キャプション）を表示する。
 * 撮影後は `placeholderImages.treatmentRoomWide` に `src` を渡すだけで実写真に差し替わる。
 */
export function FirstVisitHero() {
  return (
    <section className="overflow-hidden border-b border-gold/20 bg-soft-white">
      <Container className="grid gap-0 px-0 lg:min-h-[560px] lg:grid-cols-[0.84fr_1.16fr] lg:px-16">
        <div className="relative order-2 px-6 py-10 sm:px-10 sm:py-14 lg:order-1 lg:flex lg:items-center lg:px-0 lg:pr-12">
          <div className="max-w-[42rem]">
            <p className="inline-flex items-center gap-3 font-serif-en text-[11px] tracking-[0.2em] text-forest/58 uppercase">
              <span className="h-px w-10 bg-gold" />
              For First-time Guests
            </p>
            <h1 className="mt-4 text-balance font-serif-jp text-[2rem] leading-[1.35] text-ink sm:text-5xl">
              初めてのお客様へ
            </h1>
            <p className="mt-5 max-w-[34rem] text-[15px] leading-[2] text-forest/82">
              完全個室で過ごす時間、肌診断から始まる提案、予約前に知っておきたいことをまとめました。
            </p>
          </div>
        </div>

        <div className="relative order-1 min-h-[300px] overflow-hidden border-b border-gold/20 sm:min-h-[420px] lg:order-2 lg:min-h-[560px] lg:border-b-0 lg:border-l">
          <PlaceholderImage
            spec={placeholderImages.treatmentRoomWide}
            alt="施術室（準備中）"
            fill
            priority
            quiet
          />
          <PhotoComingSoon />
        </div>
      </Container>
    </section>
  );
}
