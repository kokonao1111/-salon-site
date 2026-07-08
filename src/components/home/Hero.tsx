import { Container } from "@/components/ui/Container";
import { LinkButton } from "@/components/ui/Button";
import { RevealText } from "@/components/ui/RevealText";
import { PhotoBackground } from "@/components/ui/PhotoBackground";
import { backgroundPhotos } from "@/lib/backgroundPhotos";
import { siteConfig } from "@/lib/siteConfig";
import { isReservationReady } from "@/lib/reservation";
import { CONCEPT_TITLE } from "@/lib/copy";

// 見出しの折り返し位置だけを句点「、」の前後で制御する（文字は一切変更しない）。
const [TITLE_LEAD, TITLE_TAIL] = CONCEPT_TITLE.split("、");

/**
 * ファーストビュー。画面いっぱいに近い写真背景の上に、見出しと所在地・
 * オープン予定だけを乗せる。店舗撮影が済むまでは `backgroundPhotos.hero`
 * が落ち着いた単色で待機し、写真が入り次第ゆっくりとしたズームに切り替わる。
 */
export function Hero() {
  const reservationReady = isReservationReady();

  return (
    <section className="relative flex min-h-[92svh] items-end overflow-hidden">
      <PhotoBackground
        slot={backgroundPhotos.hero}
        alt="志摩の海岸風景（イメージ、店舗写真は準備中）"
        overlay="veil"
        priority
      />

      <Container className="relative w-full pt-28 pb-16 sm:pb-20">
        <div className="max-w-[36rem]">
          <p className="font-serif-en text-[11px] tracking-[0.24em] text-forest/85 uppercase">
            Private beauty salon in Shima
          </p>

          <RevealText className="mt-4">
            <h1 className="text-balance font-serif-jp text-[2.15rem] leading-[1.4] tracking-[0.01em] text-ink [word-break:keep-all] sm:text-5xl lg:text-[3.6rem]">
              <span className="block whitespace-nowrap">{TITLE_LEAD}、</span>
              <span className="block whitespace-nowrap">{TITLE_TAIL}</span>
            </h1>
          </RevealText>

          <RevealText className="mt-5" delay={0.1}>
            <p className="text-[13px] tracking-[0.04em] text-forest/85">
              三重県志摩市阿児町神明　・　{siteConfig.openingApprox}
            </p>
          </RevealText>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <LinkButton href="/first-visit" variant="primary">
              初めての方へ
            </LinkButton>
            <LinkButton href="/contact" variant="outline">
              {reservationReady ? "予約する" : "予約準備状況を見る"}
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
