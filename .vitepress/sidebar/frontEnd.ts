import { DefaultTheme } from "vitepress";

export default [
  {
    text: "架构",
    link: "/frontEnd",
    items: [
      {
        text: "Monorepo",
        link: "/frontEnd/Monorepo",
      },
    ],
  },
  {
    text: "CSS",
    items: [
      {
        text: "Viewport 单位",
        link: "/frontEnd/css__viewport-unit",
      },
      {
        text: "移动端 100vh 问题",
        link: "/frontEnd/css__mobile__100vh",
      },
      {
        text: "BEM",
        link: "/frontEnd/css__bem",
      },
      {
        text: "Flex",
        link: "/frontEnd/css__flex",
      },
    ],
  },
] as DefaultTheme.SidebarItem[];
