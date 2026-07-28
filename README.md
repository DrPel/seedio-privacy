# Seedio Privacy

Seedio 的公开中英双语隐私政策页面，供 TestFlight 审核员和内测用户访问。
页面不包含登录、数据库、用户追踪、表单提交或第三方运行依赖。

## 结构

- `index.html`: 隐私政策正文和元数据。
- `privacy.css`: 响应式样式。
- `.nojekyll`: GitHub Pages 静态发布标记。
- `tests/privacy-page.test.mjs`: 隐私合同和站点结构测试。

## 验证

```bash
node --test tests/privacy-page.test.mjs
```

`main` 分支根目录由 GitHub Pages 直接发布，不需要构建步骤。
