/**
 * Hero専用の固有ビジュアル。
 * 店舗写真が届くまでの間、他セクションの汎用プレースホルダー（mood）とは別に、
 * 志摩の水面・自然光・真珠層を思わせる層状のグラデーションで構成した専用の表現。
 * 実写真ではなく権利処理不要な抽象表現であることを aria-label で明示する。
 * 下部（テキストが乗る位置）が自然に暗くなるよう設計しており、追加の暗幕オーバーレイを必要としない。
 */
export function HeroVisual() {
  return (
    <div
      role="img"
      aria-label="志摩の水面と自然光をイメージした準備中のビジュアル"
      className="absolute inset-0 overflow-hidden bg-ink"
    >
      {/* 深い水面のベース：下部ほど暗く、右上に光が差す */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 60% at 78% 8%, rgba(244,241,234,0.55), transparent 60%), linear-gradient(200deg, #f4f1ea 0%, #c9c8c2 30%, #24332c 68%, #171917 100%)",
        }}
      />
      {/* 真珠層のような、淡く虹がかった光の帯 */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            "linear-gradient(115deg, transparent 30%, rgba(164,138,98,0.14) 45%, rgba(252,251,248,0.18) 52%, rgba(36,51,44,0.1) 60%, transparent 72%)",
        }}
      />
      {/* 水面の静かな波紋 */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3 opacity-40"
        style={{
          backgroundImage:
            "repeating-linear-gradient(98deg, rgba(23,25,23,0.12) 0px, rgba(23,25,23,0.12) 1px, transparent 1px, transparent 46px)",
        }}
      />
      {/* 下方向のビネット（本文の可読性を確保） */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage: "linear-gradient(0deg, rgba(23,25,23,0.92) 0%, rgba(23,25,23,0) 55%)",
        }}
      />
    </div>
  );
}
