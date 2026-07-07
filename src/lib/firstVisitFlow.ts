/**
 * 「初めての方」ページで案内する来店の流れ。
 * 実際の運用フローが確定するまでの間、クライアントより直接指定された言い回し
 * （予約・料金は「準備中」「予定」であることを明示する表現）をそのまま使用する。
 * isApproved: true は「クライアントの指示に基づく確定内容」であることを示す。
 */
export interface FirstVisitStep {
  step: number;
  title: string;
  description: string;
  isApproved: boolean;
}

export const firstVisitFlow: FirstVisitStep[] = [
  {
    step: 1,
    title: "ご予約",
    description: "予約方法は現在準備中です。LINEまたはお電話での受付を予定しております。",
    isApproved: true,
  },
  {
    step: 2,
    title: "ご来店・受付",
    description: "完全プライベートの空間へご案内いたします。",
    isApproved: true,
  },
  {
    step: 3,
    title: "カウンセリング・肌診断",
    description: "高精度な肌診断器で、お肌の状態を確認いたします。",
    isApproved: true,
  },
  {
    step: 4,
    title: "プログラム提案",
    description: "肌と身体の状態に合わせて、施術内容をご提案いたします。",
    isApproved: true,
  },
  {
    step: 5,
    title: "施術",
    description: "フェイシャルまたはボディトリートメントをご提供する予定です。",
    isApproved: true,
  },
  {
    step: 6,
    title: "アフターカウンセリング",
    description: "今後のケアや次回のご提案をお伝えいたします。",
    isApproved: true,
  },
];

export const hasApprovedFirstVisitFlow = firstVisitFlow.some((step) => step.isApproved);
