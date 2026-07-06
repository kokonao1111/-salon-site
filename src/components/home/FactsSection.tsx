import { Container } from "@/components/ui/Container";

// 支給原稿（変更禁止）内に実際に存在する語句のみを、そのまま抜き出して並べる。
// 新しい説明文は書かない。3枚のカードにもしない（罫線区切りの一続きの並びにする）。
const FACTS = ["完全プライベート", "高精度な肌診断器", "フェイシャル＆ボディ"];

export function FactsSection() {
  return (
    <section className="bg-soft-white py-14 sm:py-20">
      <Container>
        <ul className="flex flex-col divide-y divide-ink/10 sm:flex-row sm:divide-x sm:divide-y-0">
          {FACTS.map((fact) => (
            <li
              key={fact}
              className="flex-1 py-4 font-serif-jp text-lg text-ink/85 sm:px-8 sm:py-0 sm:text-center sm:first:pl-0 sm:last:pr-0"
            >
              {fact}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
