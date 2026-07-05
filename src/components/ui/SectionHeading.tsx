interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  titleEn?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

/**
 * 全セクションで同一の「番号+罫線+英字eyebrow」を反復しない。
 * eyebrowNumberは廃止し、番号が本当に意味を持つ場所（First Visitの来店フロー等）
 * だけで個別に組む。金色はここでは使わず、控えめな階調のみで差をつける。
 */
export function SectionHeading({
  eyebrow,
  title,
  titleEn,
  description,
  align = "left",
  tone = "dark",
}: SectionHeadingProps) {
  const isCenter = align === "center";
  const isLight = tone === "light";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      {eyebrow && (
        <p
          className={`mb-3 font-serif-en text-xs tracking-[0.1em] uppercase ${
            isLight ? "text-pearl/80" : "text-forest/55"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`text-balance font-serif-jp text-3xl leading-snug sm:text-4xl lg:text-[2.6rem] ${
          isLight ? "text-soft-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {titleEn && (
        <p
          className={`mt-2 font-serif-en text-base tracking-[0.04em] italic ${
            isLight ? "text-pearl" : "text-forest/60"
          }`}
        >
          {titleEn}
        </p>
      )}
      {description && (
        <p
          className={`mt-6 max-w-2xl text-pretty text-[15px] leading-loose ${
            isCenter ? "mx-auto" : ""
          } ${isLight ? "text-pearl" : "text-forest/85"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
