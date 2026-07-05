import { Shippori_Mincho, Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";

/** 見出し用：上品な明朝体 */
export const shipporiMincho = Shippori_Mincho({
  variable: "--font-shippori-mincho",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/** 本文用：可読性の高いゴシック体 */
export const notoSansJp = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

/** 英字見出し・数字用：高コントラストのセリフ体 */
export const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});
