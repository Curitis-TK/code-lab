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
    text: "JavaScript",
    items: [
      {
        text: "Promise",
        // link: "/frontEnd/javascript__promise",
      },
      {
        text: "宏任务、微任务、事件循环",
        // link: "/frontEnd/javascript__event-loop",
      },
      {
        text: "清除所有定时器",
        link: "/frontEnd/js__clear-all-timers",
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
        text: "Flex [WIP]",
        link: "/frontEnd/css__flex",
      },
      {
        text: "Grid [WIP]",
        link: "/frontEnd/css__grid",
      },
      {
        text: "盒模型 [WIP]",
        link: "/frontEnd/css__box-sizing",
      },
      {
        text: "Float 高度塌陷 [WIP]",
        link: "/frontEnd/css__float",
      }
    ],
  },
] as DefaultTheme.SidebarItem[];
