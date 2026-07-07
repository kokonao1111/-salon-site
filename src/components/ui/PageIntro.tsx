import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

interface PageIntroProps {
  eyebrow: string;
  title: string;
  titleEn?: string;
  description?: string;
}

/** 内部ページ共通のページ見出し。 */
export function PageIntro({ eyebrow, title, titleEn, description }: PageIntroProps) {
  return (
    <div className="bg-warm-ivory pt-14 pb-16 sm:pt-20 sm:pb-20">
      <Container>
        <SectionHeading eyebrow={eyebrow} title={title} titleEn={titleEn} description={description} />
      </Container>
    </div>
  );
}
