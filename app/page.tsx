/**
 * [INPUT]: 依赖全局样式和 Seedio 当前内测隐私边界
 * [OUTPUT]: 对外提供公开的中英双语 Seedio 隐私政策页面
 * [POS]: privacy-site 的唯一公开路由，供 TestFlight 和用户访问
 * [PROTOCOL]: 变更时更新此头部，然后检查 AGENTS.md
 */

const sections = [
  {
    title: "我们处理什么",
    englishTitle: "Data we process",
    body: "当你主动使用对应功能时，Seedio 会处理你输入或录制后转写的家庭情境、你选择的照片、家庭档案、本周重点、收藏内容和生成作品。这些信息只用于提供你请求的生成、保存和恢复体验。",
  },
  {
    title: "数据保存在哪里",
    englishTitle: "Where data is stored",
    body: "内容默认保存在你的设备上。系统 iCloud 可用且你允许使用时，小抄、种子库、本周重点和生成作品会备份到你的私有 iCloud 容器，以便重新安装后恢复。Seedio 当前不要求注册独立账号。",
  },
  {
    title: "AI 与系统服务",
    englishTitle: "AI and system services",
    body: "当你请求生成内容时，本次输入以及你主动选择的照片会通过 Seedio 的生产后端发送给配置的 AI 服务。录音转文字使用 Apple 系统语音识别；Seedio 不把原始录音上传到自己的后端。语音播放可能使用系统语音或配置的远程语音服务。",
  },
  {
    title: "权限与选择",
    englishTitle: "Permissions and choices",
    body: "相机、照片、麦克风和语音识别权限只在你使用对应入口时请求。你可以不提供照片，也可以随时在系统设置中关闭权限。请不要提交你不希望发送给 AI 服务的私人信息。",
  },
  {
    title: "删除与恢复",
    englishTitle: "Deletion and recovery",
    body: "删除 App 会移除设备上的本机内容。若你的系统 iCloud 中仍保留 Seedio 的私有备份，重新安装后内容可能恢复；你可以通过自己的 iCloud 设置管理相关数据。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="hero">
        <div className="brand-mark" aria-hidden="true">S</div>
        <p className="eyebrow">Seedio · Privacy</p>
        <h1>隐私政策</h1>
        <p className="intro">
          这是 Seedio 内测版本的隐私说明。我们尽量只使用完成核心体验所需的数据。
        </p>
        <p className="updated">更新日期：2026 年 7 月 28 日</p>
      </header>

      <section className="policy" aria-label="隐私政策正文">
        {sections.map((section) => (
          <article key={section.title}>
            <p className="section-index">{section.englishTitle}</p>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}

        <article>
          <p className="section-index">Contact</p>
          <h2>联系我们</h2>
          <p>
            如对数据处理或本隐私政策有疑问，请发送邮件至{" "}
            <a href="mailto:doctor.peeel@gmail.com">doctor.peeel@gmail.com</a>。
            内测期间如实际服务或数据边界发生变化，我们会更新本页面和 App 内说明。
          </p>
        </article>
      </section>

      <section className="english-summary" aria-labelledby="english-summary-title">
        <p className="eyebrow">English summary</p>
        <h2 id="english-summary-title">Seedio Privacy Summary</h2>
        <p>
          Seedio stores content on your device and may back up selected content
          to your private iCloud container. When you request generated content,
          the text and photos you choose are sent through the Seedio production
          backend to configured AI services. Speech transcription uses Apple
          system services, and original recordings are not uploaded to the
          Seedio backend. Camera, photo, microphone, and speech permissions are
          requested only when you use the related feature.
        </p>
        <p>
          For privacy questions, contact{" "}
          <a href="mailto:doctor.peeel@gmail.com">doctor.peeel@gmail.com</a>.
        </p>
      </section>

      <footer>
        <span>Seedio</span>
        <span>Built for real family moments.</span>
      </footer>
    </main>
  );
}
