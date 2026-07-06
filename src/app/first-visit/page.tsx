import type { Metadata } from "next";
import { buildMetadata } from "@/lib/metadata";
import { PageIntro } from "@/components/ui/PageIntro";
import { FirstVisitTimeline } from "@/components/first-visit/FirstVisitTimeline";
import { Container } from "@/components/ui/Container";
import { ReserveActions } from "@/components/ui/ReserveActions";
import { pageReadiness } from "@/lib/pageReadiness";
import { guardPageReadiness } from "@/lib/guardPageReadiness";
import { siteConfig } from "@/lib/siteConfig";
import { isConfirmed } from "@/lib/types";

export const metadata: Metadata = buildMetadata({
  title: "初めての方へ",
  description: "初めてご来店される方向けに、ご予約からカウンセリング、施術までの流れをご案内します。",
  path: "/first-visit",
  noIndex: !pageReadiness.firstVisit,
});

export default function FirstVisitPage() {
  guardPageReadiness(pageReadiness.firstVisit);

  const reservationReady =
    isConfirmed(siteConfig.contact.lineUrl) || isConfirmed(siteConfig.contact.phone);

  return (
    <>
      <PageIntro
        eyebrow="First Visit"
        title="初めての方へ"
        titleEn="Your First Visit"
        description="初めてご来店いただく方にも安心してお過ごしいただけるよう、ご予約から施術までの流れをご案内いたします。"
      />
      <FirstVisitTimeline />

      <section className="bg-ink py-20 text-center text-soft-white sm:py-24">
        <Container>
          {reservationReady && (
            <p className="mx-auto max-w-md text-sm leading-loose text-pearl">
              ご不明な点は、LINEまたはお電話にてお気軽にお問い合わせください。
            </p>
          )}
          <div className="mt-8 flex justify-center">
            <ReserveActions tone="light" className={reservationReady ? "" : "mx-auto max-w-md"} />
          </div>
        </Container>
      </section>
    </>
  );
}
