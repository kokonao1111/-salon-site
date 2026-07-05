import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ReserveActions } from "@/components/ui/ReserveActions";

export function ReserveSection() {
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
        <p className="mx-auto mt-6 max-w-md text-sm leading-loose text-pearl">
          ご予約はLINE・お電話にて承ります。
        </p>
        <div className="mt-10 flex justify-center">
          <ReserveActions tone="light" />
        </div>
      </Container>
    </section>
  );
}
