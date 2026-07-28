# privacy-site/

> L2 | 父级: ../AGENTS.md

成员清单

.openai/hosting.json: Sites 项目标识与可选存储绑定；`project_id` 创建后必须原样复用。
app/globals.css: Seedio 隐私页的响应式排版、色彩和可访问焦点样式。
app/layout.tsx: 根布局和公开页面元数据。
app/page.tsx: 中英双语隐私政策正文与联系入口。
build/: Sites/Vite 构建插件。
tests/rendered-html.test.mjs: 构建产物的基础 HTML 验证。
worker/index.ts: Cloudflare Worker 运行入口。
package.json: Vinext 构建、测试和发布脚本。
vite.config.ts: Sites 兼容的 Vite 配置。

[PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
