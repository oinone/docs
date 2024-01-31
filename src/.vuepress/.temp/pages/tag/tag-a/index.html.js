export const data = JSON.parse("{\"key\":\"v-06bbb262\",\"path\":\"/tag/tag-a/\",\"title\":\"tag > tag A\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"tag > tag A\",\"key\":\"tag A\",\"layout\":\"Tag\",\"sidebar\":false},\"headers\":[],\"git\":{},\"filePathRelative\":null}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
