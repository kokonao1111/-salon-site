import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReserveActions } from "@/components/ui/ReserveActions";
import { siteConfig } from "@/lib/siteConfig";
import { isConfirmed } from "@/lib/types";

export function ReserveSection() {
  const reservationReady =
    isConfirmed(siteConfig.contact.lineUrl) || isConfirmed(siteConfig.contact.phone);

  return (
    <section className="bg-ink py-24 text-soft-white sm:py-32">
      <Container className="text-center">
        <SectionHeading
          eyebrowNumber="06"
          eyebrow="Reserve"
          title="ご予約"
          titleEn="Reservation"
          align="center"
          tone="light"
        />
        {reservationReady && (
          <p className="mx-auto mt-6 max-w-md text-sm leading-loose text-pearl">
            ご予約はLINE・お電話にて承ります。
          </p>
        )}
        <div className="mt-10 flex justify-center">
          <ReserveActions tone="light" className={reservationReady ? "" : "mx-auto max-w-md"} />
        </div>
      </Container>
    </section>
  );
}
