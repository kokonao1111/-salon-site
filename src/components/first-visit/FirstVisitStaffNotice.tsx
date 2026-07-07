import { Container } from "@/components/ui/Container";

/**
 * スタッフ写真・名前は未確定のため、一覧は作らない。撮影後の掲載予定と、
 * 一人ひとりに向き合う体制を準備中であることのみを上品に伝える。
 */
export function FirstVisitStaffNotice() {
  return (
    <section className="bg-soft-white py-16 sm:py-24">
      <Container className="max-w-2xl text-center">
        <p className="font-serif-en text-xs tracking-[0.2em] text-gold uppercase">Staff</p>
        <div className="mx-auto mt-3 h-px w-12 bg-gold" />
        <h2 className="mt-6 font-serif-jp text-2xl text-ink sm:text-3xl">スタッフ紹介について</h2>
        <p className="mt-5 text-[15px] leading-loose text-forest/80">
          スタッフ紹介は撮影後に掲載予定です。
        </p>
        <p className="mt-2 text-[15px] leading-loose text-forest/80">
          お客様一人ひとりに丁寧に向き合う体制を準備中です。
        </p>
      </Container>
    </section>
  );
}
