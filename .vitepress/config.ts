import {DefaultTheme, defineConfig} from 'vitepress'
import {sidebarLinux} from "./modules/linux";
import {sidebarFrontEnd} from "./modules/frontEnd";
import {sidebarDevelop} from "./modules/develop";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "Ender Chest",
  description: "Curitis` Notebook",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),

    sidebar: {
      '/frontEnd/': sidebarFrontEnd(),
      '/develop/': sidebarDevelop(),
      '/linux/': sidebarLinux(),
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/curitis-tk' }
    ]
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: 'Home', link: '/' },
	{ text: 'FrontEnd', link: '/frontEnd/index', activeMatch: '/frontEnd/' },
    { text: 'Develop', link: '/develop/', activeMatch: '/develop/' },
    { text: 'Linux', link: '/linux/config-epel-repo', activeMatch: '/linux/' }
  ]
}


