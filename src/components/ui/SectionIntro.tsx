interface SectionIntroProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}

/**
 * セクション見出し。参考サイトのように、見出し→ゴールドの罫線に挟まれた
 * 英字ラベル、という順で中央揃えに構成する（ゴールドの使用感を強める）。
 */
export function SectionIntro({ eyebrow, title, description, align = "center" }: SectionIntroProps) {
  const isCenter = align === "center";

  return (
    <div className={isCenter ? "text-center" : "text-left"}>
      <h2 className="font-serif-jp text-2xl text-ink sm:text-3xl">{title}</h2>

      <div className={`mt-5 flex items-center gap-4 ${isCenter ? "justify-center" : ""}`}>
        <span className="h-px w-10 bg-gold sm:w-20" aria-hidden />
        <span className="shrink-0 font-serif-en text-xs tracking-[0.2em] text-gold uppercase">
          {eyebrow}
        </span>
        <span className="h-px w-10 bg-gold sm:w-20" aria-hidden />
      </div>

      {description && (
        <p
          className={`mt-6 text-[15px] leading-loose text-forest/80 ${
            isCenter ? "mx-auto max-w-xl" : "max-w-xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
