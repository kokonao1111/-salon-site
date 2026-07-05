/**
 * Concept ページの補足セクション（変更禁止原稿とは別枠の解説文）。
 * 確定情報以上の断定を避けた、クライアント確認用の仮原稿として管理する。
 *
 * isDraft: true の項目は、クライアントの確認・承認が済むまで「確定表現」として扱わないこと。
 * isApproved: false の間は公開画面に一切表示しない（承認され次第 true に更新する）。
 */
export interface ConceptSupplementItem {
  id: string;
  eyebrowNumber: string;
  titleJa: string;
  titleEn: string;
  body: string;
  isDraft: true;
  isApproved: boolean;
}

export const conceptSupplement: ConceptSupplementItem[] = [
  {
    id: "private",
    eyebrowNumber: "01",
    titleJa: "完全プライベート",
    titleEn: "Private",
    body: "他のお客様と空間を共にすることのない、完全個室のトリートメントルーム。肩書きや日常から離れ、ご自身のためだけの時間をお過ごしいただけます。",
    isDraft: true,
    isApproved: false,
  },
  {
    id: "analysis",
    eyebrowNumber: "02",
    titleJa: "肌診断",
    titleEn: "Analysis",
    body: "感覚だけに頼らず、データに基づいて丁寧にお肌と向き合う。カウンセリングと診断を通じて、いまのお肌の状態を可視化いたします。",
    isDraft: true,
    isApproved: false,
  },
  {
    id: "bespoke",
    eyebrowNumber: "03",
    titleJa: "オーダーメイド",
    titleEn: "Bespoke",
    body: "決まったメニューをなぞるのではなく、診断結果をもとに、お一人おひとりに合わせて施術の内容を組み立てていきます。",
    isDraft: true,
    isApproved: false,
  },
  {
    id: "shima",
    eyebrowNumber: "04",
    titleJa: "志摩という場所",
    titleEn: "Shima",
    body: "三重県志摩市阿児町。伊勢志摩国立公園にもほど近く、別荘地としても知られる静かなエリアに、サロンは佇みます。",
    isDraft: true,
    isApproved: false,
  },
];

export const hasApprovedConceptSupplement = conceptSupplement.some((item) => item.isApproved);
