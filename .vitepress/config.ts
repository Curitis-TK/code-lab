import { defineConfig } from 'vitepress'
import frontEndSidebar from './sidebar/frontend'
import frontEndNav from './nav/frontEnd'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // 站点元数据
  title: "Code Lab",
  description: "Curitis 文档库",
  head: [['link', { rel: 'icon', href: '/assets/Book_and_Quill_JE2_BE2.webp' }]],
  themeConfig: {
    logo: '/assets/Book_and_Quill_JE2_BE2.webp',
    nav: [
      { text: '首页', link: '/' },
      frontEndNav,
    ],

    sidebar: [
      ...frontEndSidebar,
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Curitis-TK' }
    ],
    editLink: {
      pattern: 'https://github.com/Curitis-TK/code-lab/edit/master/src/:path',
    },
    search: {
      provider: 'local'
    },
    footer: {
      message: '粤ICP备19094962号',
      copyright: 'Copyright © 2019-present Curitis'
    }
  },
  lastUpdated: true,

  // 构建
  srcDir: "./src",
  srcExclude: ['**/README.md', '**/TODO.md'],
  outDir: "./dist",
  cacheDir: ".vitepress/cache",
})
