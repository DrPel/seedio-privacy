/**
 * [INPUT]: 依赖 Vinext 构建产物和 privacy-site 页面源码
 * [OUTPUT]: 验证隐私页可服务、包含关键隐私边界并移除 starter 痕迹
 * [POS]: privacy-site 的发布前基础合同测试
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */

import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the Seedio privacy policy", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<html lang="zh-Hans">/i);
  assert.match(html, /<title>Seedio 隐私政策<\/title>/i);
  assert.match(html, /我们处理什么/);
  assert.match(html, /私有 iCloud 容器/);
  assert.match(html, /不把原始录音上传到自己的后端/);
  assert.match(html, /doctor\.peeel@gmail\.com/);
  assert.match(html, /Seedio Privacy Summary/);
  assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|SkeletonPreview/);
});

test("keeps the privacy site free of starter metadata and dependencies", async () => {
  const [css, page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/globals.css", import.meta.url), "utf8"),
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /Seedio Privacy Summary/);
  assert.match(page, /mailto:doctor\.peeel@gmail\.com/);
  assert.match(layout, /title:\s*"Seedio 隐私政策"/);
  assert.match(layout, /<html lang="zh-Hans">/);
  assert.match(css, /prefers-reduced-motion:\s*reduce/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);
  assert.doesNotMatch(
    `${page}\n${layout}\n${packageJson}`,
    /codex-preview|SkeletonPreview|Starter Project|Your site is taking shape/,
  );

  await assert.rejects(
    access(new URL("app/_sites-preview", templateRoot)),
  );
});
