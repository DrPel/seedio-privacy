/**
 * [INPUT]: 依赖 privacy-site 的静态 HTML、CSS 与仓库文件结构
 * [OUTPUT]: 验证公开隐私页的关键内容、链接和零构建依赖约束
 * [POS]: privacy-site 的发布前合同测试
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */

import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("publishes the Seedio privacy contract as static HTML", async () => {
  const html = await readFile(new URL("index.html", root), "utf8");

  assert.match(html, /<html lang="zh-Hans">/i);
  assert.match(html, /<title>Seedio 隐私政策<\/title>/i);
  assert.match(html, /我们处理什么/);
  assert.match(html, /私有 iCloud 容器/);
  assert.match(html, /不把原始录音上传到自己的后端/);
  assert.match(html, /mailto:doctor\.peeel@gmail\.com/);
  assert.match(html, /Seedio Privacy Summary/);
  assert.match(html, /href="\.\/privacy\.css"/);
});

test("keeps the GitHub Pages site dependency-free and accessible", async () => {
  const css = await readFile(new URL("privacy.css", root), "utf8");

  assert.match(css, /focus-visible/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  await access(new URL(".nojekyll", root));
  await assert.rejects(access(new URL("package.json", root)));
  await assert.rejects(access(new URL(".openai\/hosting.json", root)));
});
