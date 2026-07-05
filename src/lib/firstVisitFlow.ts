/**
 * 「初めての方」ページで案内する来店の流れ。
 * 実際の運用フローは未確定のため、一般的なプライベートサロンの流れを
 * "クライアント確認用の仮原稿" として管理する。isDraft: true の項目は
 * 本番公開前に必ずクライアントの確認を得ること。
 */
export interface FirstVisitStep {
  step: number;
  title: string;
  description: string;
  isDraft: true;
}

export const firstVisitFlow: FirstVisitStep[] = [
  {
    step: 1,
    title: "ご予約",
    description: "LINEまたはお電話にて、ご希望の日時をお知らせください。",
    isDraft: true,
  },
  {
    step: 2,
    title: "ご来店",
    description: "完全プライベートの個室空間へご案内いたします。",
    isDraft: true,
  },
  {
    step: 3,
    title: "カウンセリング",
    description: "現在のお肌・お身体の状態やご希望を丁寧にお伺いいたします。",
    isDraft: true,
  },
  {
    step: 4,
    title: "肌診断",
    description: "高精度な肌診断器で、お肌の現在と未来の状態を読み解きます。",
    isDraft: true,
  },
  {
    step: 5,
    title: "プログラム提案",
    description: "診断結果をもとに、あなたに合わせたプログラムをご提案いたします。",
    isDraft: true,
  },
  {
    step: 6,
    title: "施術",
    description: "贅沢な個室空間で、オーダーメイドのトリートメントをご提供いたします。",
    isDraft: true,
  },
  {
    step: 7,
    title: "アフターカウンセリング",
    description: "施術後のお肌・お身体の状態と、今後のご提案をお伝えいたします。",
    isDraft: true,
  },
];
