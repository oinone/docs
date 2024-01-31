export const data = JSON.parse("{\"key\":\"v-06bbb224\",\"path\":\"/tag/tag-b/\",\"title\":\"tag > tag B\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"tag > tag B\",\"key\":\"tag B\",\"layout\":\"Tag\",\"sidebar\":false},\"headers\":[],\"git\":{},\"filePathRelative\":null}")

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
