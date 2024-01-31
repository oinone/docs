export const themeData = JSON.parse("{\"logo\":\"https://doc.oinone.top/wp-content/uploads/2023/11/oio_logo-cfcd405e.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"前端文档\",\"link\":\"/frontend-guide/introduction/\"},{\"text\":\"后端文档\",\"link\":\"/backend-guide/get-started/\"}],\"sidebar\":{\"/frontend-guide/\":[{\"text\":\"开发指南\",\"children\":[\"/frontend-guide/introduction.md\",\"/frontend-guide/installation.md\",\"/frontend-guide/quick-start.md\"]},{\"text\":\"母版\",\"children\":[\"/frontend-guide/mask/appFounder.md\",\"/frontend-guide/mask/menu.md\",\"/frontend-guide/mask/language.md\"]},{\"text\":\"布局\",\"children\":[\"/frontend-guide/layout/actionBar.md\",\"/frontend-guide/installation.md\",\"/frontend-guide/quick-start.md\"]},{\"text\":\"视图\",\"children\":[\"/frontend-guide/view/table.md\",\"/frontend-guide/view/form.md\",\"/frontend-guide/view/detail.md\"]},{\"text\":\"动作\",\"children\":[\"/frontend-guide/action/viewAction.md\",\"/frontend-guide/action/serverAction.md\"]},{\"text\":\"字段\",\"children\":[\"/frontend-guide/field/string.md\"]},{\"text\":\"组件\",\"children\":[\"/frontend-guide/component/switch.md\"]},{\"text\":\"请求\",\"children\":[\"/frontend-guide/introduction.md\",\"/frontend-guide/installation.md\",\"/frontend-guide/quick-start.md\"]}],\"/backend-guide/\":[{\"text\":\"开发指南\",\"children\":[\"/backend-guide/get-started.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
