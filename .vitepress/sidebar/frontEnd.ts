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
        text: "Viewport单位",
        link: "/frontEnd/css__viewport-unit",
      },
      {
        text: "移动端100vh问题",
        link: "/frontEnd/css__mobile__100vh",
      },
    ],
  },
] as DefaultTheme.SidebarItem[];
