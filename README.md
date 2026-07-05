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
- next/font（Cormorant Garamond のみ。日本語はシステムフォント。詳細は[15. フォント方針](#15-フォント方針)参照）
- next/image, next/og（アイコン・OGP画像の動的生成）
- Vitest（変更禁止原稿の完全一致テスト）

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

- **変更禁止原稿の完全一致テスト（`prebuild` で自動実行、失敗するとビルド自体が止まる）**
- TypeScript の型チェック
- 全ページの静的プリレンダリング（現状すべてのページが静的出力可能）
- **`SITE_STAGE=live` なのに正式店舗名・本番URLが未設定の場合はビルドが失敗する**（詳細は次項）

## 4. Lint / テスト

```bash
npm run lint
npm run test
```

## 5. 公開段階（SITE_STAGE）

`NEXT_PUBLIC_SITE_STAGE` で、サイトの公開段階を3つに区別します。未設定・不正な値の場合は最も安全な `preview` になります。

| 値 | 用途 | 挙動 |
|---|---|---|
| `preview`（デフォルト） | 社内・クライアント確認用 | サイト全体を `noindex, nofollow`。`robots.txt` は `Disallow: /` で全面クロール禁止。`sitemap.xml` は空 |
| `prelaunch` | 開発中の一般公開（まだ検索に出したくない） | `preview` と同じく全面noindex・全面クロール禁止 |
| `live` | 本公開 | 正式に確定したページのみ `index, follow` / サイトマップ掲載。**店舗名（`siteConfig.brand.status`）と本番URL（`NEXT_PUBLIC_SITE_URL`）の両方が確定していないとビルドが失敗する** |

このロジックは `src/lib/siteStage.ts` に一元化されており、`src/app/layout.tsx`・`src/lib/metadata.ts`・`src/app/robots.ts`・`src/app/sitemap.ts`・`src/components/seo/StructuredData.tsx` から参照されています。

## 6. 環境変数

`.env.local`（Git管理外）に設定してください。未設定の項目は機能自体が無効化され、架空のIDが出力されることはありません。

| 変数名 | 用途 | 未設定時の挙動 |
|---|---|---|
| `NEXT_PUBLIC_SITE_STAGE` | 公開段階（`preview` / `prelaunch` / `live`） | `preview` として扱う（全面noindex） |
| `NEXT_PUBLIC_SITE_URL` | 本番ドメイン（例: `https://example.com`） | canonical / og:url / sitemap を一切出力しない |
| `NEXT_PUBLIC_GTM_ID` | Google Tag Manager コンテナID | GTMスクリプトを一切出力しない |
| `NEXT_PUBLIC_GA_ID` | GA4 測定ID（GTM経由で使わない場合） | 未使用 |
| `NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_ID` | Google広告コンバージョンID | 未使用 |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` | Search Console 所有権確認コード | 確認用metaタグを出力しない |

`.env.example` を用意しているのでコピーして使用してください。

## 7. デプロイ

Vercel を想定していますが、Next.js の標準的なホスティング（Node.js サーバー / Vercel / その他対応PaaS）であれば問題ありません。

1. `NEXT_PUBLIC_SITE_STAGE` を段階に応じて設定（社内確認中は `preview` のままでよい）
2. 本番ドメイン確定後、`NEXT_PUBLIC_SITE_URL` を設定
3. GTM/GA4/Google広告のID発行後、対応する環境変数を設定
4. `npm run build` が通ることを確認（`live` 指定時は店舗名・URL確定が前提）
5. デプロイ先に環境変数を設定してデプロイ

---

## 8. 情報管理の設計

すべての店舗情報は `src/lib/siteConfig.ts` に一元化されています。未確定項目は以下の型で管理されます。

```ts
type Confirmable<T> =
  | { status: "confirmed"; value: T }
  | { status: "pending"; note?: string };
```

- `status: "pending"` の間は、該当箇所のリンク・ボタンが自動的に無効化表示（`#` リンクは使用していません）。
- 情報が確定したら、該当フィールドを `{ status: "confirmed", value: "..." }` に書き換えるだけで、サイト全体（ヘッダー・フッター・予約導線・構造化データ等）に反映されます。

クライアント確認前の仮原稿（Conceptページの補足解説・First Visitの来店フロー）は `isApproved: boolean` で管理し、`false` の間は公開画面に一切表示されません（該当セクションごと非表示になります）。承認後、対象項目を `isApproved: true` に更新するだけで公開されます。

ページの公開準備状況（ナビゲーション・サイトマップ・検索インデックス対象への掲載可否）は `src/lib/pageReadiness.ts` に一元化されています。Service / Menu / First Visit / News は、対応するデータ（サービス内容・メニュー・承認済みフロー・お知らせ）が1件でも確定・承認されるまで、ナビ・サイトマップ・検索インデックスに現れません（`robots.ts` の disallow にも自動的に追加されます）。

主なデータファイル：

| ファイル | 内容 |
|---|---|
| `src/lib/siteConfig.ts` | 店舗名（作業用仮称）・住所・Googleマップ・連絡先・営業時間・スケジュール・計測ID |
| `src/lib/siteStage.ts` | 公開段階（SITE_STAGE）の判定とlive時の必須情報チェック |
| `src/lib/pageReadiness.ts` | 各ページの公開準備状況（ナビ・サイトマップ・noindex制御に使用） |
| `src/lib/copy.ts` | **【変更禁止原稿】**（コンセプト文）。一切編集しないこと |
| `src/lib/conceptSupplement.ts` | Conceptページの補足解説文（`isApproved` で公開制御） |
| `src/lib/firstVisitFlow.ts` | 「初めての方」の来店フロー（`isApproved` で公開制御） |
| `src/lib/menu.ts` | メニュー・料金データ（現在すべて pending） |
| `src/lib/staff.ts` | スタッフ情報（現在すべて pending） |
| `src/lib/news.ts` | お知らせ（承認された項目のみ追加すること。内部の準備工程は含めない） |
| `src/lib/placeholderImages.ts` | 撮影リストと仮画像の対応表（`shotId` で紐づけ） |

### 【変更禁止原稿】について

`src/lib/copy.ts` の `CONCEPT_COPY` は、クライアント支給の店舗紹介文を一字一句変更せずに格納した定数です。Concept ページ（`/concept`）とHomeページの一部で参照されています。**このファイルの文言は絶対に編集しないでください。**

`src/lib/__tests__/copy.test.ts` が、この原稿と支給テキストの完全一致を自動テストで保証しています（`npm run build` の `prebuild` で自動実行され、一致しない場合はビルドが失敗します）。

---

## 9. 写真の差し替え方法

店舗完成前のため、すべての写真は `PlaceholderImage` コンポーネント（`src/components/ui/PlaceholderImage.tsx`）による仮表示です。公開画面には「Preparing」等の文字・制作メモは一切表示されません。仮表示であることは `data-shot-id` / `data-placeholder` 属性と `aria-label` というコード・アクセシビリティ情報としてのみ保持しています。

単調な同一グラデーションの繰り返しを避けるため、撮影内容の性質に合わせて5種類の抽象的なアートディレクション（`mood`: light / water / material / structure / warmth）を構図ごとに描き分けています。実写真ではなく、権利処理が不要なCSS生成の抽象表現です。

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

## 10. 未確定情報・クライアント確認事項

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

「初めての方」の来店フロー、Conceptページの補足4項目（完全プライベート／肌診断／オーダーメイド／志摩という場所）は、一般的な内容としてクライアント確認用の仮原稿を設計してあります（`isApproved: false` で非公開）。承認後、対象項目を `isApproved: true` に更新すると公開されます。詳細は [CONTENT_REVIEW.md](./CONTENT_REVIEW.md) を参照してください。

---

## 11. SEO設定一覧

実装済み：

- ページごとの `title` / `description`（`src/lib/metadata.ts` の `buildMetadata`）
- `canonical` / `og:url`（**本番URL（`NEXT_PUBLIC_SITE_URL`）が設定され、かつ `SITE_STAGE=live` の場合のみ出力**。それ以外は一切出力しない）
- OGP画像（`src/app/opengraph-image.tsx` で動的生成、店舗名確定後に文言を調整可能）
- `robots.txt`（`src/app/robots.ts`）／ `sitemap.xml`（`src/app/sitemap.ts`）— **`SITE_STAGE`と本番URLの設定状況に応じて自動的に内容を切り替え**（[5. 公開段階](#5-公開段階site_stage)参照）
- BeautySalon構造化データ（`src/components/seo/StructuredData.tsx`）※ **`SITE_STAGE=live` かつ店舗名が confirmed になるまでは出力されません**
- favicon / OG画像（ロゴ確定前の中立的な仮アイコン）
- Search Console 所有権確認用のmetaタグ枠（`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` 設定で自動出力。Search Console自体への登録作業は別途必要）

未対応・確認事項：

- [ ] Google Search Console へのサイト登録、確認コード発行・`NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` への設定
- [ ] GA4 プロパティ作成と `NEXT_PUBLIC_GA_ID` 設定
- [ ] 正式店舗名・電話番号・営業時間確定後、構造化データの内容を実データで確認
- [ ] 本番ドメイン確定後、`NEXT_PUBLIC_SITE_URL` を設定し、`SITE_STAGE=live` に切り替えたうえで `sitemap.xml` の実URLを確認

「ドメインを取得すれば検索順位が上がる」という保証はありません。SEOは継続的な運用が前提です。

## 12. Google広告・計測の準備状況

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

## 13. 差し替え対象ファイル一覧

| ファイル | 内容 |
|---|---|
| `src/lib/siteConfig.ts` | 店舗名・電話番号・LINE URL・営業時間・定休日 |
| `src/lib/menu.ts` | メニュー・料金（1件でも confirmed にすると自動的にナビ・サイトマップに登場） |
| `src/lib/staff.ts` | スタッフ情報 |
| `src/lib/news.ts` | お知らせ（承認済みのもののみ追加。1件でも追加すると自動的にナビ・サイトマップに登場） |
| `src/lib/conceptSupplement.ts` / `src/lib/firstVisitFlow.ts` | 各項目の `isApproved` を `true` に更新すると公開される |
| `src/lib/placeholderImages.ts` の各 `PlaceholderImage` 呼び出し箇所 | 店舗写真 |
| `src/app/recruit/page.tsx` | 採用情報確定後の本文 |

Staff / Recruit / Service / Menu / First Visit / News のナビ掲載・サイトマップ掲載・検索インデックス対象化は `src/lib/pageReadiness.ts` の判定に基づき自動的に行われるため、`navigation.ts` や `robots.ts` を手動で書き換える必要はありません。

---

## 14. 公開前チェックリスト（Phase 4想定）

- [ ] 店舗名・ロゴ確定、`siteConfig.brand.status` を `confirmed` に更新
- [ ] 電話番号・LINE URL・営業時間・定休日の反映
- [ ] メニュー・料金の反映、架空表示が残っていないことの確認
- [ ] スタッフ情報・写真の反映
- [ ] 全店舗写真の差し替え
- [ ] プライバシーポリシーの事業者情報・法務確認完了
- [ ] 薬機法・景品表示法の観点での表現確認（フェイシャル・ボディ訴求文言含む）
- [ ] Concept補足・First Visitフローの内容確認、承認したものから `isApproved: true` に更新
- [ ] 375px / 768px / 1440px以上でのレイアウト確認
- [ ] Safari・Chromeでの表示確認
- [ ] 全リンク・全CTAの動作確認（LINE・電話・Googleマップ）
- [ ] 404ページの確認
- [ ] `npm run build` が通ることの確認
- [ ] 本番ドメイン・環境変数の設定
- [ ] GA4 / Search Console / Google広告の設定
- [ ] **`NEXT_PUBLIC_SITE_STAGE` を `live` に切り替え、ビルドが成功することを確認**（店舗名・URLが未確定だと意図的に失敗します）
- [ ] 公開前バックアップの取得

---

## 15. フォント方針

パフォーマンスを優先し、日本語（明朝・ゴシック）はWebフォント化せず、OS標準の日本語フォントにフォールバックさせています（`src/app/globals.css` の `--font-serif-jp` / `--font-sans-jp`）。英字見出し・数字用の Cormorant Garamond のみを Webフォントとして読み込んでいます（`src/lib/fonts.ts`）。

理由：Google Fonts の日本語フォントは Unicode-range ごとに数百枚の woff2 に分割配信されるため、ウェイトを絞っても数MB〜十数MBの通信が発生します。実測（このプロジェクトでの検証）：

| 構成 | ファイル数 | 合計サイズ |
|---|---|---|
| 変更前（Shippori Mincho 4 + Noto Sans JP 3 + Cormorant 4 ウェイト） | 617 | 約21MB |
| 日本語Webフォントのウェイトを2つずつに削減 | 373 | 約13MB |
| **採用：日本語はシステムフォント、Cormorant Garamondのみ** | 10 | 約168KB |

文字サブセット化（実際に使用する文字だけを抜き出す）という手段も検討しましたが、メニュー・スタッフ・お知らせ等、今後クライアントが追加するコンテンツで未収録の文字が使われた際に静かにフォールバックしてしまう脆弱性があるため採用していません。見出しに明朝体特有の質感を持たせたい場合は、実際の掲載文言が確定した段階で、自前ホスティングによる文字サブセット化Webフォントを再検討してください。

## 16. ディレクトリ構成（概要）

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
