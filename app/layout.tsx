/**
 * [INPUT]: 依赖 Next.js Metadata 与全局样式
 * [OUTPUT]: 对外提供 Seedio 隐私站点的根布局和页面元数据
 * [POS]: privacy-site 的文档骨架，统一语言、标题与描述
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seedio 隐私政策",
  description: "Seedio 内测版本的数据处理、存储、权限与联系说明。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hans">
      <body>{children}</body>
    </html>
  );
}
