## 目录与文章编写位置
src目录代表网站根路径，每个文件夹代表侧边栏的一个目录，md文件代表一个文章
文件夹下嵌套文件夹代表多级目录，每个目录下都需要一个`README.md`文件描述基本信息或者目录内容

## 命名规范
当前目录的命名规范是目录名英文的每个单词首字母大写，其他字母小写，特殊简写单词全大小，如模型设计器 ：ModelDesigner，UI设计器 ：UIDesigner
文章命名是全小写，单词间使用-连接，如自定义表达式 ：custom-expressions.md

## 常用md文件头配置
详见：https://theme-hope.vuejs.press/zh/config/frontmatter/info.html 里的frontmatter章节

目录头：
```
---
title: 主页 #标题
index: false #是否在侧边栏或目录中索引当前页面，一般文章设置成true就行了
breadcrumbExclude: true #是否在面包屑中隐藏该目录
category: #类目数组，目前将类目的样式隐藏了，可以不配
  - 使用指南
dir: #目录相关配置
  link: false #是否能在页面打开当前目录（主题该配置好像有点bug，这个设置成false也能打开）
  order: 1 #在当前目录里的排序
---
```

文章头：
```
title: 应用环境 #标题
index: true #同上目录的index
category: #同上目录的category
  - 用户手册
order: 4 #在当前目录里的排序
```

## 自定义组件 (没加依赖用不了)
可以在src/.vuepress/components里自定义前端vue组件，并直接在md文件中使用
组件位置必须直接在components目录里，不能在里面嵌套目录
组件里面的内容跟ssr的类似，要用浏览器对象在mounted钩子里用，不然编译会报错
参考
https://theme-hope.vuejs.press/zh/guide/component/global.html

## 自定义布局
侧边栏和导航栏都是自定义过的，参考
https://theme-hope.vuejs.press/zh/guide/customize/layout.html 和
https://theme-hope.vuejs.press/zh/guide/advanced/replace.html

---
在语雀导出文档出来会在一些文本上加标签
导出文档后会展示语雀中的高亮块的标题，与markdown自带的高亮块标题
图片问题

20250407