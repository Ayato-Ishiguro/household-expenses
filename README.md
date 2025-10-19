# Household Expenses App

家計簿アプリ（Laravel + React + Docker + MySQL）。

## 技術スタック

-   **バックエンド**: Laravel 11, PHP 8.2
-   **フロントエンド**: React 18, Inertia.js, Vite
-   **データベース**: MySQL 8.0
-   **認証**: Laravel Breeze (React 対応)
-   **環境**: Docker (Laravel, Nginx, MySQL, Node)

## ディレクトリ構造

```
- app/              # Laravel コントローラー、モデル
- resources/js/     # React コンポーネント (Pages/, Components/)
- routes/           # Laravel ルート (web.php, api.php)
- database/         # マイグレーション、シーダー
- docker/           # Docker設定 (nginx/default.conf)
- docker-compose.yml # Docker サービス定義
```

## セットアップ手順

1. `composer create-project laravel/laravel .`
2. `composer require laravel/breeze --dev && php artisan breeze:install react`
3. `npm install`
4. `docker compose up -d`
5. `docker compose exec app php artisan migrate`

## 開発ルール

-   **命名**: PascalCase for React components, camelCase for variables.
-   **認証**: Breeze のルートを使用 (`/login`, `/register`)。
-   **API**: Inertia.js で Laravel と React を統合。フル SPA 化可能。
-   **注意**: Vite サーバー (5173) と Laravel (8000) を連携。

## よくあるエラー

-   `net::ERR_EMPTY_RESPONSE`: Vite サーバーが起動していない → `docker compose logs node`
-   DB 接続エラー: `.env` の DB_HOST を `db` に変更。

`````

### 2. `docs/CONTEXT.md`（詳細なコンテキスト）
- AI向けに技術的な詳細をまとめる。
- `docs/` フォルダを作成。

#### 例の内容
````markdown
# Project Context for AI Development

## Overview
- Purpose: Household expenses tracking app.
- Key Features: User authentication, transaction CRUD, dashboard with React charts.

## Tech Details
- Laravel: MVC, Eloquent ORM, Blade/Inertia for views.
- React: Functional components, hooks, Inertia for data passing.
- Docker: Multi-service (app, nginx, db, node).
- Auth: Breeze with React forms.

## Coding Guidelines
- Use TypeScript for React components.
- Follow Laravel conventions (e.g., migration naming).
- API responses: JSON for AJAX, Inertia for page loads.

## Custom Configurations
- Nginx: PHP-FPM proxy to `app:9000`.
- Vite: Hot reload on `5173`, build to [build](http://_vscodecontentref_/1).
- DB: User-specific transactions table.

## AI Tips
- When generating code, reference Inertia.js docs for Laravel-React integration.
- Use Breeze examples for auth pages.
- Avoid direct DOM manipulation; use React state.
`````

### 3. `.cursorrules` または `.ai-rules`（AI 専用ルールファイル）

-   GitHub Copilot などの AI ツールが参照するファイル。
-   プロジェクトルートに置く。

#### 例の内容
