import { defineConfig } from 'vitepress'
import frontEndSidebar from './sidebar/frontEnd'
import frontEndNav from './nav/frontEnd'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点元数据
  title: "Code Lab",
  description: "Curitis 文档库",
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      frontEndNav
    ],

    sidebar: [
      ...frontEndSidebar,
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Curitis-TK' }
    ]
  },
  // 构建
  srcDir: "./src",
  srcExclude: ['**/README.md', '**/TODO.md'],
  outDir: "./dist",
  cacheDir: ".vitepress/cache",
})
