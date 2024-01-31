import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress/cli'
import { simpleBlogPlugin } from './blog-plugin.js'
import { viteBundler } from '@vuepress/bundler-vite'

export default defineUserConfig({
  lang: 'zh-CN',

  // title: '',
  description: '专注于解决复杂场景的低代码平台',

  theme: defaultTheme({
    logo: 'https://doc.oinone.top/wp-content/uploads/2023/11/oio_logo-cfcd405e.png',

    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '前端文档',
        link: '/frontend-guide/introduction/',
      },
      {
        text: '后端文档',
        link: '/backend-guide/get-started/',
      }
      // ,
      // {
      //   text: 'Category',
      //   link: '/category/',
      // },
      // {
      //   text: 'Tag',
      //   link: '/tag/',
      // },
      // {
      //   text: 'Timeline',
      //   link: '/timeline/',
      // },
    ],
    sidebar: {
      '/frontend-guide/': [
        {
          text: '开发指南',
          children: ['/frontend-guide/introduction.md', '/frontend-guide/installation.md', '/frontend-guide/quick-start.md'],
        },
        {
          text: '母版',
          children: ['/frontend-guide/mask/appFounder.md', '/frontend-guide/mask/menu.md', '/frontend-guide/mask/language.md'],
        },
        {
          text: '布局',
          children: ['/frontend-guide/layout/actionBar.md', '/frontend-guide/installation.md', '/frontend-guide/quick-start.md'],
        },
        {
          text: '视图',
          children: ['/frontend-guide/view/table.md', '/frontend-guide/view/form.md', '/frontend-guide/view/detail.md'],
        },
        {
          text: '动作',
          children: ['/frontend-guide/action/viewAction.md', '/frontend-guide/action/serverAction.md'],
        },
        {
          text: '字段',
          children: ['/frontend-guide/field/string.md'],
        },
        {
          text: '组件',
          children: ['/frontend-guide/component/switch.md'],
        },
        {
          text: '请求',
          children: ['/frontend-guide/introduction.md', '/frontend-guide/installation.md', '/frontend-guide/quick-start.md'],
        },
      ],
      '/backend-guide/': [
        {
          text: '开发指南',
          children: ['/backend-guide/get-started.md'],
        }
      ],
    },
    // sidebar: 'auto'
  }),

  plugins: [
    simpleBlogPlugin({
      // only files under posts are articles
      filter: ({ filePathRelative }) =>
        filePathRelative ? filePathRelative.startsWith('posts/') : false,

      // getting article info
      getInfo: ({ frontmatter, title }) => ({
        title,
        author: frontmatter.author || '',
        date: frontmatter.date || null,
        category: frontmatter.category || [],
        tag: frontmatter.tag || [],
        excerpt: frontmatter.excerpt || '',
      }),

      category: ['category', 'tag'],

      type: [
        {
          key: 'article',
          // remove archive articles
          filter: (page) => !page.frontmatter.archive,

          sorter: (pageA, pageB) => {
            if (pageA.frontmatter.sticky && pageB.frontmatter.sticky)
              return pageB.frontmatter.sticky - pageA.frontmatter.sticky

            if (pageA.frontmatter.sticky && !pageB.frontmatter.sticky) return -1

            if (!pageA.frontmatter.sticky && pageB.frontmatter.sticky) return 1

            if (!pageB.frontmatter.date) return 1
            if (!pageA.frontmatter.date) return -1

            return (
              new Date(pageB.frontmatter.date).getTime() -
              new Date(pageA.frontmatter.date).getTime()
            )
          },
        },
        {
          key: 'timeline',
          // only article with date should be added to timeline
          filter: (page) => page.frontmatter.date instanceof Date,
          // sort pages with time
          sorter: (pageA, pageB) =>
            new Date(pageB.frontmatter.date).getTime() -
            new Date(pageA.frontmatter.date).getTime(),
        },
      ],
    }),
  ],

  bundler: viteBundler(),
})
