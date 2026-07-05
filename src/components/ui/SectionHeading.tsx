interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowNumber?: string;
  title: string;
  titleEn?: string;
  description?: string;
  align?: "left" | "center";
  tone?: "dark" | "light";
}

export function SectionHeading({
  eyebrow,
  eyebrowNumber,
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
      {(eyebrow || eyebrowNumber) && (
        <div
          className={`mb-4 flex items-center gap-3 font-serif-en text-sm tracking-[0.28em] uppercase ${
            isLight ? "text-pearl" : "text-gold"
          } ${isCenter ? "justify-center" : "justify-start"}`}
        >
          {eyebrowNumber && <span className="text-base">{eyebrowNumber}</span>}
          <span aria-hidden className="h-px w-8 bg-current opacity-60" />
          {eyebrow && <span>{eyebrow}</span>}
        </div>
      )}
      <h2
        className={`text-balance font-serif-jp text-3xl leading-snug sm:text-4xl lg:text-[2.75rem] ${
          isLight ? "text-soft-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {titleEn && (
        <p
          className={`mt-2 font-serif-en text-lg tracking-[0.15em] italic ${
            isLight ? "text-pearl" : "text-forest/70"
          }`}
        >
          {titleEn}
        </p>
      )}
      {description && (
        <p
          className={`mt-6 max-w-2xl text-pretty text-base leading-loose ${
            isCenter ? "mx-auto" : ""
          } ${isLight ? "text-pearl" : "text-forest/85"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
