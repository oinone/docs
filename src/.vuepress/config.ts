import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "Oinone技术手册",
  description: "Oinone技术手册",

  theme,

  // 自定义组件 https://theme-hope.vuejs.press/zh/guide/advanced/replace.html
  alias: {
    "@theme-hope/modules/sidebar/components/Sidebar": path.resolve(
            __dirname,
            "./components/Sidebar.vue"
    ),
    "@theme-hope/modules/navbar/components/Navbar": path.resolve(
            __dirname,
            "./components/Navbar/Navbar.vue"
    ),
  },
  markdown: {
    headers: {
      level: [1, 2],
    }
  },
  // pagePatterns: ['**/*.md', '!**/README.md'],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
