# Seedio Privacy

Seedio 的公开中英双语隐私政策页面，供 TestFlight 审核员和内测用户访问。
页面不包含登录、数据库、用户追踪或表单提交能力。

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
```

This starter does not use `wrangler.jsonc`.

## Included Shape

- `app/page.tsx`: 隐私政策正文。
- `app/layout.tsx`: 页面元数据和语言。
- `app/globals.css`: 响应式样式。
- `.openai/hosting.json`: Sites 项目标识。

## Useful Commands

- `npm run dev`: start local development
- `npm run build`: verify the vinext build output
- `npm test`: 构建并验证隐私政策关键内容。
