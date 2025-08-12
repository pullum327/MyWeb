<p align="center"><img src="/public/images/work1.jpg" /></p>

## Node Version

node 版本: v20.10.0
pnpm 版本: 8.8.0

## 運作方式

1. 下載這個項目
2. run `pnpm i`
3. run `pnpm dev`

## 目錄說明

- `prisma/schema.prisma`

 - Prisma 的配置文件，用於定義資料庫模型。

- `public`

 - 靜態資源目錄，用於存放靜態資源。

- `scripts`

 - 腳本目錄，用於存放腳本。

- `service`

 - 請求方法，介面方法。

- `src/blogs`

 - 存放 md 文件，項目會讀取這個目錄作為文章清單顯示。

- `src/components`

 - 存放組件，包含彈跳窗、熱力圖等。

- `src/contexts/ThemeContext.tsx`

 - 主題上下文，用於切換主題。

- `src/lib/prisma.ts`

 - Prisma 的聲明文件。

- `src/lib/pusher.ts`

 - Pusher 的聲明文件。

- `src/pages_app.tsx`

 - Next.js 的入口檔。

- `src/pages/index.tsx`

 - 首頁代碼。

- `src/pages/works.tsx`

 - 作品頁面代碼。

- `src/pages/blog.tsx`

 - 文章集頁面代碼。

- `src/pages/chat.tsx`

 - 聊天室頁面代碼。

- `src/pages/api/comments.ts`

 - 取得評論介面代碼。

- `src/pages/api/reactions.ts`

 - 取得文章按讚數介面代碼。

- `src/pages/api/chat`

 - 聊天室介面代碼。

- `src/data/works.ts`

 - 作品數據。

- `src/data/tagConfigs.ts`

 - 標籤配置資料。

- `src/data/experience.ts`

 - 經歷數據。

- GitHubHeatmap 使用說明：
 - `GitHubHeatmap username="996wuxian" year={2025}`
 - 熱力圖只需要在這替換你的 username 即可

## vercel 部署說明

1. 建立一個 vercel 帳號(vercel 官網:https://vercel.com/)
2. 連結你的 github 倉庫
3. 配置環境變數
4. 部署
5. 建立一個 neon 資料庫(neon 官網:https://neon.com/)
6. 配置資料庫連接字串到 vercel 的環境變數(一般將資料庫跟專案進行連接後，重新部署就可以有環境變數了)
7. 將 DIRECT_URL 也補充到環境變數中

## Prisma 連接說明

1. 在專案根目錄的.env 檔案中將 vercel 建立的 neon 資料庫連接字串配置如下 neon 的連接欄位:
 DATABASE_URL="your-connection-string"
 DIRECT_URL="your-connection-string"

2. 執行 `pnpm run push-db` 指令，將資料庫結構推送到 neon 上
3. 執行 `pnpm run generate` 指令，產生新的客戶端程式碼

## Pusher 連線說明

1. 建立一個 pusher 帳號(pusher 官網:https://pusher.com/)
2. 建立一個 pusher 應用
3. 設定 pusher 應用程式的連線欄位填入.env 檔案中
4. 將項目根目錄的.env 檔案的欄位加入到 vercel 的環境變數中