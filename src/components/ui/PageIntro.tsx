import { Container } from "./Container";
import { SectionHeading } from "./SectionHeading";

interface PageIntroProps {
  eyebrowNumber?: string;
  eyebrow: string;
  title: string;
  titleEn?: string;
  description?: string;
}

/** 内部ページ共通のページ見出し。固定ヘッダーの高さ分の余白を確保する。 */
export function PageIntro({ eyebrowNumber, eyebrow, title, titleEn, description }: PageIntroProps) {
  return (
    <div className="bg-warm-ivory pt-36 pb-16 sm:pt-44 sm:pb-20">
      <Container>
        <SectionHeading
          eyebrowNumber={eyebrowNumber}
          eyebrow={eyebrow}
          title={title}
          titleEn={titleEn}
          description={description}
        />
      </Container>
    </div>
  );
}
