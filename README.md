# Next.js ランディングページテンプレート

プレスリライターCMSと連携したNext.jsランディングページテンプレートです。

## 特徴

- **Pages Router**: Next.js Pages Routerを使用した静的サイト生成
- **CMSマークダウン連携**: プレスリライターCMSからMarkdownファイルを読み込み
- **Noto Sans JPフォント**: 日本語に最適化されたフォント
- **レスポンシブデザイン**: モバイルからデスクトップまで対応
- **モダンUI**: shadcn/uiとTailwind CSSを使用

## 使用技術

- Next.js 13 (Pages Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- gray-matter (Markdownパーサー)
- remark (Markdown to HTML)

## セクション構成

1. **ヒーローセクション**: キャッチコピーとリードコピー、画像
2. **ロゴスライダー**: クライアント企業のロゴを自動スライド表示
3. **Problemセクション**: 課題の提示
4. **Solutionセクション**: ソリューションの提案
5. **Evidenceセクション**: 導入事例
6. **Productセクション**: 製品・サービス紹介
7. **導入の流れ**: 4ステップで説明
8. **お問い合わせフォーム**: コンタクトフォーム

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. contentディレクトリの準備

プロジェクトルートに`content`ディレクトリを作成し、Markdownファイルを配置します。

### 3. Markdownファイルの構造

各Markdownファイルは以下の形式で作成します：

```markdown
---
title: "記事タイトル"
slug: "article-slug"
status: "published"
date: "2025-01-22T12:00:00Z"
updated: "2025-01-22T12:00:00Z"
display_locations:
  - name: "表示場所"
    slug: "location-slug"
image: "https://example.com/image.jpg"
image_alt: "画像の説明"
---

記事の本文をここに記述します。
```

### 4. 表示場所スラッグ一覧

各セクションで使用する表示場所スラッグ：

- `hero1`: ヒーローセクションのメイン記事
- `hero2`: ヒーローセクション下部のロゴ画像
- `logoslider`: ロゴスライダーの画像
- `problem1`: Problemセクションのタイトルと説明
- `problem2`: Problemセクションのカード
- `solution1`: Solutionセクションのタイトルと説明
- `solution2`: Solutionセクションのカード
- `evidence1`: Evidenceセクションのタイトル
- `evidence2`: Evidenceセクションのスライダーカード
- `product1`: Productセクションのタイトルと説明
- `product2`: Productセクションの製品紹介

## 開発

### 開発サーバーの起動

```bash
npm run dev
```

ブラウザで http://localhost:3000 を開きます。

### ビルド

```bash
npm run build
```

### 本番環境での起動

```bash
npm run start
```

## カスタマイズ

### ヘッダーとフッターの編集

- ヘッダー: `components/Header.tsx`
- フッター: `components/Footer.tsx`

### セクションの編集

各セクションコンポーネントは `components/sections/` ディレクトリにあります：

- `HeroSection.tsx`: ヒーローセクション
- `LogoSliderSection.tsx`: ロゴスライダー
- `ProblemSection.tsx`: 課題セクション
- `SolutionSection.tsx`: ソリューションセクション
- `EvidenceSection.tsx`: 導入事例セクション
- `ProductSection.tsx`: 製品紹介セクション
- `FlowSection.tsx`: 導入の流れセクション
- `ContactSection.tsx`: お問い合わせフォーム

### スタイルの変更

グローバルスタイルは `app/globals.css` で定義されています。

Tailwind CSSの設定は `tailwind.config.ts` で変更できます。

## デプロイ

### Vercelへのデプロイ

1. GitHubリポジトリをVercelに接続
2. 自動的にビルドとデプロイが実行されます

### Netlifyへのデプロイ

1. GitHubリポジトリをNetlifyに接続
2. ビルド設定:
   - Build command: `npm run build`
   - Publish directory: `.next`

## ライセンス

MIT
