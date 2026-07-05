import type { ReactNode } from "react";
import { Container } from "@/components/ui/Container";
import { PendingNotice } from "@/components/ui/PendingNotice";
import { siteConfig } from "@/lib/siteConfig";

interface Section {
  title: string;
  body: ReactNode;
  needsLegalReview?: boolean;
}

const sections: Section[] = [
  {
    title: "1. 事業者情報",
    body: (
      <p>
        事業者名：確定次第記載いたします（TODO: 正式な店舗名・運営事業者名の確定待ち）
        <br />
        所在地：{siteConfig.address.full}
      </p>
    ),
    needsLegalReview: true,
  },
  {
    title: "2. 取得する情報",
    body: (
      <p>
        LINE公式アカウントでのご予約・お問い合わせの際に、LINE上のお名前・トーク内容等を取得する場合があります。
        お電話でのご予約・お問い合わせの際に、お名前・電話番号・ご予約内容等をお伺いする場合があります。
        今後フォームを設置する場合は、氏名・連絡先・お問い合わせ内容等を取得します。
      </p>
    ),
  },
  {
    title: "3. 利用目的",
    body: (
      <p>
        取得した情報は、ご予約の管理、お問い合わせへの対応、サービスに関するご案内、その他これらに付随する目的のために利用します。
        取得目的の範囲を超えて情報を利用することはありません。
      </p>
    ),
  },
  {
    title: "4. LINEのご利用について",
    body: (
      <p>
        LINE公式アカウントを通じたやり取りには、LINEヤフー株式会社が提供するサービスを利用します。
        LINEの利用に関しては、LINEヤフー株式会社が定めるプライバシーポリシーおよび利用規約も適用されます。
      </p>
    ),
  },
  {
    title: "5. アクセス解析・広告計測について",
    body: (
      <p>
        当サイトでは、サイトの利用状況を把握し、サービス向上および広告効果測定のために、
        Google アナリティクス（GA4）、Google タグマネージャー、Google 広告のコンバージョン計測タグを利用する場合があります。
        これらのツールは Cookie を使用して匿名の利用状況データを収集しますが、氏名・住所等の個人を特定する情報は含まれません。
        収集されたデータは各サービス提供者のプライバシーポリシーに基づいて管理されます。
        本サイトでは、実際に発行・設定された計測IDのみを使用し、未発行のIDを記載することはありません。
      </p>
    ),
  },
  {
    title: "6. Cookieについて",
    body: (
      <p>
        当サイトでは、利便性向上および前項の解析・計測のためにCookieを使用する場合があります。
        ブラウザの設定によりCookieの利用を無効にすることも可能ですが、その場合サイトの一部機能が正しく動作しない可能性があります。
      </p>
    ),
  },
  {
    title: "7. 第三者提供について",
    body: (
      <p>
        法令に基づく場合を除き、ご本人の同意なく取得した情報を第三者に提供することはありません。
      </p>
    ),
  },
  {
    title: "8. 安全管理措置",
    body: (
      <p>
        取得した情報は、不正アクセス・紛失・破損・改ざん・漏洩等を防止するため、適切な安全管理措置を講じます。
      </p>
    ),
    needsLegalReview: true,
  },
  {
    title: "9. 開示・訂正・削除等のご請求",
    body: (
      <p>
        ご自身の情報の開示・訂正・削除等をご希望の場合は、下記お問い合わせ窓口までご連絡ください。
      </p>
    ),
  },
  {
    title: "10. お問い合わせ窓口",
    body: (
      <p>
        お問い合わせ窓口は、正式な連絡先（電話番号・LINE）の確定後にご案内いたします。現在準備中です。
      </p>
    ),
    needsLegalReview: true,
  },
  {
    title: "11. 本ポリシーの改定",
    body: (
      <p>
        本ポリシーの内容は、法令の変更やサービス内容の変更等に応じて、予告なく改定することがあります。
        改定後のポリシーは、当サイトに掲載した時点から効力を生じるものとします。
      </p>
    ),
  },
];

export function PrivacyContent() {
  return (
    <section className="bg-warm-ivory pb-24 sm:pb-32">
      <Container className="max-w-3xl">
        <PendingNotice className="mb-12">
          本プライバシーポリシーは、事業者情報・連絡先が未確定の段階で作成した仮文書です。
          正式な事業者情報の確定、および専門家によるリーガルチェックを経て、開業までに正式版を公開いたします。
        </PendingNotice>

        <div className="space-y-10">
          {sections.map((section) => (
            <div key={section.title} className="border-t border-ink/15 pt-6">
              <h2 className="font-serif-jp text-lg text-ink">{section.title}</h2>
              <div className="mt-3 text-sm leading-loose text-forest/80">{section.body}</div>
              {section.needsLegalReview && (
                <p className="mt-3 text-xs text-gold">※ 公開前に事業者情報の確定・法務確認が必要な項目です</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
