const CORNER_POSITIONS = [
  "left-5 top-5 border-t border-l sm:left-8 sm:top-8",
  "right-5 top-5 border-t border-r sm:right-8 sm:top-8",
  "left-5 bottom-5 border-b border-l sm:left-8 sm:bottom-8",
  "right-5 bottom-5 border-b border-r sm:right-8 sm:bottom-8",
] as const;

interface PhotoComingSoonProps {
  caption?: string;
}

/**
 * 店舗写真が届くまでの間、全幅ビジュアルに重ねる「準備中」の演出。
 * 単色の枠ではなく、写真フレームを想起させる四隅のコーナーマークにすることで、
 * 安っぽいプレースホルダーに見せない。実写真の `src` が渡された箇所では使用しない。
 */
export function PhotoComingSoon({ caption }: PhotoComingSoonProps) {
  return (
    <>
      {CORNER_POSITIONS.map((position) => (
        <span
          key={position}
          aria-hidden
          className={`absolute h-8 w-8 border-gold/60 sm:h-10 sm:w-10 ${position}`}
        />
      ))}
      {/*
        本文（見出し・段落）は各Heroとも下端寄せで配置されるため、テキストの高さに
        関わらず衝突しない上部に固定する。
      */}
      <div className="absolute right-5 top-5 max-w-[15rem] border border-gold/35 bg-soft-white/88 px-3 py-2 text-left backdrop-blur-sm sm:right-8 sm:top-8">
        <p className="font-serif-en text-[10px] tracking-[0.18em] text-forest/45 uppercase">
          Photo slot
        </p>
        <p className="mt-1 text-[11px] leading-relaxed tracking-[0.02em] text-forest/60">
          {caption ?? "撮影後、実写真に差し替え予定です。"}
        </p>
      </div>
    </>
  );
}
