import { describe, expect, it } from "vitest";
import { CONCEPT_COPY_PLAIN, CONCEPT_TITLE } from "../copy";

/**
 * クライアントより支給された【変更禁止原稿】。
 * このテストファイル内の文字列は、あくまで比較対象の独立した参照コピーであり、
 * src/lib/copy.ts の CONCEPT_COPY がこれと一字一句完全に一致することを保証する。
 * 万一このテストが落ちた場合、copy.ts側を書き換えるのではなく、
 * 何が変わったのかを確認し、意図しない改変がないかをまず疑うこと。
 */
const ORIGINAL_MANUSCRIPT = `輝きを研ぎ澄ます、志摩の隠れ家
美しい自然と穏やかな時間が流れる、志摩市阿児町鵜方神明の別荘地。
名門ゴルフ場やリゾートホテルが点在するこの特別な地に、大人のための完全プライベート・トータルビューティーサロンが誕生しました。

喧騒から切り離された贅沢な個室空間で、あなただけのために時間をお使いいただけます。

私たちが大切にしているのは、「感覚」だけに頼らない確かなアプローチ。
導入された高精度な肌診断器でお肌の未来を読み解き、現在のコンディションに最適なボディ＆フェイシャルプログラムを導き出します。
科学的な分析に基づき、お一人おひとりの肌と身体に合わせたオーダーメイドのフェイシャル＆ボディトリートメントをご提供いたします。`;

describe("【変更禁止原稿】の完全一致", () => {
  it("CONCEPT_COPY_PLAIN が支給原稿と一字一句完全に一致する", () => {
    expect(CONCEPT_COPY_PLAIN).toBe(ORIGINAL_MANUSCRIPT);
  });

  it("文字数が原稿と完全に一致する（差し替え・欠落の検知）", () => {
    expect(CONCEPT_COPY_PLAIN.length).toBe(ORIGINAL_MANUSCRIPT.length);
  });

  it("冒頭の一文（CONCEPT_TITLE）が原稿の一行目と一致する", () => {
    expect(CONCEPT_TITLE).toBe(ORIGINAL_MANUSCRIPT.split("\n")[0]);
  });
});
