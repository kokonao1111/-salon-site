# 志摩 完全プライベート・トータルビューティーサロン 公式サイト

三重県志摩市阿児町の別荘地に誕生する、完全プライベート・トータルビューティーサロンの公式サイト（Phase 1: 構造・デザイン・SEO基盤の実装）。

- **開業予定**：2026年9月中旬
- **本サイト完成目標**：2026年8月下旬
- 店舗名・電話番号・LINE URL・営業時間・料金・スタッフ情報など多数の項目が **未確定** です。
  未確定情報は `status: "pending"` として一元管理され、本番に架空の情報が表示されない設計になっています。
  詳細は [未確定情報・クライアント確認事項](#未確定情報クライアント確認事項) を参照してください。

---

## 1. 技術スタック

- [Next.js 16](https://nextjs.org)（App Router / Turbopack）
- TypeScript
- Tailwind CSS v4（CSSベースのテーマ定義、`src/app/globals.css` 参照）
- Framer Motion（スクロール演出・ページ内アニメーション）
- Lucide Icons
- next/font（Shippori Mincho / Noto Sans JP / Cormorant Garamond）
- next/image, next/og（アイコン・OGP画像の動的生成）

## 2. 起動方法

```bash
npm install
npm run dev
```

[http://localhost:3000](http://localhost:3000) で確認できます。

## 3. 本番ビルド・起動

```bash
npm run build
npm start
```

`npm run build` で以下が同時に検証されます。

- TypeScript の型チェック
- 全ページの静的プリレンダリング（現状すべてのページが静的出力可能）

## 4. Lint

```bash
npm run lint
```

## 5. 環境変数

`.env.local`（Git管理外）に設定してください。未設定の項目は機能自体が無効化され、架空のIDが出力されることはありません。

| 変数名 | 用途 | 未設定時の挙動 |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | 本番ドメイン（例: `https://example.com`） | 仮のプレースホルダードメインを使用（`https://shima-private-salon.example`） |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager コンテナID | GTMスクリプトを一切出力しない |
| `NEXT_PUBLIC_GA_ID` | GA4 測定ID（GTM経由で使わない場合） | 未使用 |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` | Google広告コンバージョンID | 未使用 |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console 所有権確認コード | 確認用metaタグを出力しない |

`.env.example` を用意しているのでコピーして使用してください。

## 6. デプロイ

Vercel を想定していますが、Next.js の標準的なホスティング（Node.js サーバー / Vercel / その他対応PaaS）であれば問題ありません。

1. 本番ドメイン確定後、`NEXT_PUBLIC_SITE_URL` を設定
2. GTM/GA4/Google広告のID発行後、対応する環境変数を設定
3. `npm run build` が通ることを確認
4. デプロイ先に環境変数を設定してデプロイ

---

## 7. 情報管理の設計

すべての店舗情報は `src/lib/siteConfig.ts` に一元化されています。未確定項目は以下の型で管理されます。

```ts
type Confirmable<T> =
  | { status: "confirmed"; value: T }
  | { status: "pending"; note?: string };
```

- `status: "pending"` の間は、該当箇所のリンク・ボタンが自動的に無効化表示（`#` リンクは使用していません）。
- 情報が確定したら、該当フィールドを `{ status: "confirmed", value: "..." }` に書き換えるだけで、サイト全体（ヘッダー・フッター・予約導線・構造化データ等）に反映されます。

主なデータファイル：

| ファイル | 内容 |
|---|---|
| `src/lib/siteConfig.ts` | 店舗名（作業用仮称）・住所・Googleマップ・連絡先・営業時間・スケジュール・計測ID |
| `src/lib/copy.ts` | **【変更禁止原稿】**（コンセプト文）。一切編集しないこと |
| `src/lib/conceptSupplement.ts` | Conceptページの補足解説文（クライアント確認用の仮原稿） |
| `src/lib/firstVisitFlow.ts` | 「初めての方」の来店フロー（クライアント確認用の仮原稿） |
| `src/lib/menu.ts` | メニュー・料金データ（現在すべて pending） |
| `src/lib/staff.ts` | スタッフ情報（現在すべて pending） |
| `src/lib/news.ts` | お知らせ（承認された項目のみ追加すること） |
| `src/lib/placeholderImages.ts` | 撮影リストと仮画像の対応表（`shotId` で紐づけ） |

### 【変更禁止原稿】について

`src/lib/copy.ts` の `CONCEPT_COPY` は、クライアント支給の店舗紹介文を一字一句変更せずに格納した定数です。Concept ページ（`/concept`）とHomeページの一部で参照されています。**このファイルの文言は絶対に編集しないでください。**

---

## 8. 写真の差し替え方法

店舗完成前のため、すべての写真は `PlaceholderImage` コンポーネント（`src/components/ui/PlaceholderImage.tsx`）による仮表示です。公開画面には「画像を入れてください」等の制作メモは表示されず、開業準備中である旨のみを上品に示す仮素材になっています。

差し替え手順：

1. 撮影データを `public/images/` 配下に配置
2. 該当箇所の `<PlaceholderImage spec={...} />` に `src="/images/xxxx.jpg"` を追加
3. `alt` を実際の写真内容に合わせて更新

どのコンポーネントがどの撮影項目に対応するかは `src/lib/placeholderImages.ts` の `shotId` と、下記「撮影リスト」の番号が対応しています。

### 撮影リスト（納品時に必要な写真）

| # | 内容 | 比率目安 | 使用ページ |
|---|---|---|---|
| 01 | 外観 | 横長 | Home ヒーロー |
| 02 | 玄関・アプローチ | 縦長 | Concept |
| 03 | メイン施術室のワイド | 横長 | Home / Concept |
| 04 | ベッド・照明・壁・素材のディテール | 正方形 | Home |
| 05 | カウンセリング風景 | 横長 | Home / Service |
| 06 | 肌診断器 | 横長 | Service / Concept |
| 07 | フェイシャル施術の手元 | 縦長 | Home / Service |
| 08 | ボディ施術の手元 | 縦長 | Home / Service |
| 09 | 使用商品 | 正方形 | （今後追加予定） |
| 10 | スタッフの自然なポートレート | 縦長 | Staff（非公開） |
| 11 | 志摩の周辺環境 | 横長 | Home / Concept |
| 12 | LINE予約・アクセスページ用の補助写真 | 横長 | Access |

各項目のPC/モバイル別トリミング指示は `src/lib/placeholderImages.ts` にコメントとして記載しています。

---

## 9. 未確定情報・クライアント確認事項

以下はすべて `pending` として管理されており、確定次第 `src/lib/siteConfig.ts` 等を更新してください。

- [ ] 正式な店舗名・ロゴ（現在は説明的な仮称 "SHIMA PRIVATE BEAUTY SALON" を使用）
- [ ] 本番ドメイン
- [ ] 電話番号
- [ ] LINE公式アカウントの予約URL
- [ ] 営業時間
- [ ] 定休日
- [ ] サービス詳細（施術内容・所要時間・効果表現は美容広告ガイドラインの確認が必要）
- [ ] 商品情報
- [ ] メニュー・料金
- [ ] スタッフ情報・プロフィール
- [ ] 採用条件
- [ ] 店舗写真一式（上記撮影リスト）
- [ ] キャンセルポリシー・予約前の注意事項
- [ ] プライバシーポリシーの事業者情報・お問い合わせ窓口（法務確認が必要、`/privacy` に明記済み）
- [ ] Googleマップの店舗登録（申請中）
- [ ] Google Business Profile 情報

「初めての方」の来店フロー、Conceptページの補足4項目（完全プライベート／肌診断／オーダーメイド／志摩という場所）は、一般的な内容としてクライアント確認用の仮原稿を設計してあります（`isDraft: true` で管理）。正式版として公開する前に内容の確認をお願いします。

---

## 10. SEO設定一覧

実装済み：

- ページごとの `title` / `description`（`src/lib/metadata.ts` の `buildMetadata`）
- `canonical`
- OGP（`src/app/opengraph-image.tsx` で動的生成、店舗名確定後に文言を調整可能）
- `robots.txt`（`src/app/robots.ts`）／ `sitemap.xml`（`src/app/sitemap.ts`）
- BeautySalon構造化データ（`src/components/seo/StructuredData.tsx`）※ **店舗名が confirmed になるまでは出力されません**
- favicon / OG画像（ロゴ確定前の中立的な仮アイコン）
- Search Console 所有権確認用のmetaタグ枠（`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` 設定で自動出力。Search Console自体への登録作業は別途必要）

未対応・確認事項：

- [ ] Google Search Console へのサイト登録、確認コード発行・`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` への設定
- [ ] GA4 プロパティ作成と `NEXT_PUBLIC_GA_ID` 設定
- [ ] 正式店舗名・電話番号・営業時間確定後、構造化データの内容を実データで確認
- [ ] 本番ドメイン確定後、`NEXT_PUBLIC_SITE_URL` を設定し `sitemap.xml` の実URLを確認

「ドメインを取得すれば検索順位が上がる」という保証はありません。SEOは継続的な運用が前提です。

## 11. Google広告・計測の準備状況

実装済み（IDは未発行のため空の状態）：

- GTM設置領域（`NEXT_PUBLIC_GTM_ID` 設定で自動的に有効化）
- LINE予約クリック計測用の `data-gtm-event="reserve_line_click"`
- 電話タップ計測用の `data-gtm-event="reserve_tel_click"`
- Googleマップクリック計測用の `data-gtm-event="map_click_*"`
- Cookie / プライバシー対応の土台（`/privacy` ページ）

GTM側で上記 `data-gtm-event` 属性をトリガー条件に設定するだけで、コード追加なしにイベント計測が可能です。

未対応（発行後に対応）：

- [ ] GTMコンテナの発行・設定
- [ ] GA4プロパティ・コンバージョン設定
- [ ] Google広告アカウント・コンバージョンタグ発行
- [ ] UTMパラメータを用いた広告用ランディングページの追加（構造上は `src/app` に新規ルートを追加するだけで対応可能）
- [ ] 広告文・訴求表現の法務・薬機法確認

---

## 12. 差し替え対象ファイル一覧

| ファイル | 内容 |
|---|---|
| `src/lib/siteConfig.ts` | 店舗名・電話番号・LINE URL・営業時間・定休日 |
| `src/lib/menu.ts` | メニュー・料金 |
| `src/lib/staff.ts` | スタッフ情報 |
| `src/lib/news.ts` | お知らせ（承認済みのもののみ追加） |
| `src/lib/placeholderImages.ts` の各 `PlaceholderImage` 呼び出し箇所 | 店舗写真 |
| `src/app/recruit/page.tsx` | 採用情報確定後の本文 |
| `src/lib/navigation.ts` | Staff / Recruit 公開時、`primaryNav` に追加 |
| `src/app/robots.ts` | Staff / Recruit 公開時、`disallow` から除外 |

---

## 13. 公開前チェックリスト（Phase 4想定）

- [ ] 店舗名・ロゴ確定、サイト全体の表記更新
- [ ] 電話番号・LINE URL・営業時間・定休日の反映
- [ ] メニュー・料金の反映、架空表示が残っていないことの確認
- [ ] スタッフ情報・写真の反映（公開する場合は `navigation.ts` にStaffを追加）
- [ ] 全店舗写真の差し替え
- [ ] プライバシーポリシーの事業者情報・法務確認完了
- [ ] 薬機法・景品表示法の観点での表現確認（フェイシャル・ボディ訴求文言含む）
- [ ] 375px / 768px / 1440px以上でのレイアウト確認
- [ ] Safari・Chromeでの表示確認
- [ ] 全リンク・全CTAの動作確認（LINE・電話・Googleマップ）
- [ ] 404ページの確認
- [ ] `npm run build` が通ることの確認
- [ ] 本番ドメイン・環境変数の設定
- [ ] GA4 / Search Console / Google広告の設定
- [ ] 公開前バックアップの取得

---

## 14. ディレクトリ構成（概要）

```
src/
  app/            各ページ（App Router）
  components/
    ui/           共通UI（Button, RevealText, PlaceholderImage 等）
    layout/       Header, Footer, MobileMenu
    home/         Home専用セクション
    concept/      Concept専用セクション
    ...           各ページ専用コンポーネント
    seo/          構造化データ, GTM
  lib/            siteConfig, 型定義, 各種データファイル
```
