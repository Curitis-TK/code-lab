import { DefaultTheme } from "vitepress";

export default [
  {
    text: "架构",
    items: [
      /* {
        text: "Monorepo",
        link: "/fe/arch__monorepo",
      }, */
    ],
  },
  {
    text: "JavaScript",
    items: [
      {
        text: "Promise",
        // link: "/fe/javascript__promise",
      },
      {
        text: "宏任务、微任务、事件循环",
        // link: "/fe/javascript__event-loop",
      },
      {
        text: "清除所有定时器",
        link: "/fe/js__clear-all-timers",
      },
    ],
  },
  {
    text: "CSS",
    items: [
      {
        text: "Viewport 单位",
        link: "/fe/css__viewport-unit",
      },
      {
        text: "移动端 100vh 问题",
        link: "/fe/css__mobile__100vh",
      },
      {
        text: "BEM",
        link: "/fe/css__bem",
      },
      {
        text: "Flex [WIP]",
        // link: "/fe/css__flex",
      },
      {
        text: "Grid [WIP]",
        // link: "/fe/css__grid",
      },
      {
        text: "盒模型",
        link: "/fe/css__box-sizing",
      },
      {
        text: "BFC",
        link: "/fe/css__bfc",
      }
    ],
  },
] as DefaultTheme.SidebarItem[];
