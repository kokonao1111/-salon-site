import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface AccentShowcaseProps {
  src: string;
  alt: string;
  accent: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  /** true の場合、写真を右側に配置する */
  reverse?: boolean;
}

/**
 * 参考サイトの「Pick Up Contents」のような、写真×英字アクセント×パネルの構成。
 * 文字ばかりで写真が少ないセクションに、余白と一枚の写真で世界観を添える。
 * 写真は商用利用可能な自然風景のみを使い、架空の店舗・商品・人物は写さない。
 */
export function AccentShowcase({
  src,
  alt,
  accent,
  title,
  description,
  href,
  linkLabel,
  reverse = false,
}: AccentShowcaseProps) {
  return (
    <div className="grid overflow-hidden sm:grid-cols-2">
      <div
        className={`relative aspect-[4/5] sm:aspect-auto ${reverse ? "sm:order-2" : ""}`}
      >
        <Image src={src} alt={alt} fill sizes="(min-width: 640px) 50vw, 100vw" className="object-cover" />
      </div>
      <div className="flex flex-col justify-center bg-warm-ivory px-8 py-12 sm:px-12">
        <p className="font-serif-en text-3xl italic text-gold sm:text-4xl">{accent}</p>
        <h3 className="mt-5 font-serif-jp text-xl leading-relaxed text-ink sm:text-2xl">{title}</h3>
        <p className="mt-4 max-w-sm text-sm leading-loose text-forest/80">{description}</p>
        <Link
          href={href}
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-gold px-6 py-2.5 text-xs tracking-[0.12em] text-forest transition-colors hover:bg-gold hover:text-soft-white"
        >
          {linkLabel}
          <ArrowRight aria-hidden className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
