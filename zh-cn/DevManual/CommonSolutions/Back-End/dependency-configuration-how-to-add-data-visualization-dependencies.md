---
title: 依赖配置：如何添加数据可视化运行时依赖
index: true
category:
  - 常见解决方案
order: 1
prev:
  text: 后端
  link: /zh-cn/DevManual/CommonSolutions/Back-End/README.md
---

# 一、前端
1. `package.json`中新增依赖 `@kunlun/data-designer-open-pc`,版本跟`@kunlun/dependencies`的填一样
2. `src/main.ts`内导入依赖

```typescript
import 'reflect-metadata';
import { VueOioProvider } from '@kunlun/dependencies';

// START 导入代码放在导入@kunlun/dependencies之后
import '@kunlun/data-designer-open-pc';
// END 导入代码放在VueOioProvider()方法执行前

VueOioProvider({
    // TODO
});
```

# 二、后端
## （一）父pom新增依赖
```xml
<!-- 平台基础 -->
<oinone.version>5.3.5</oinone.version>

<dependencyManagement>
    <dependencies>
        <dependency>
            <groupId>pro.shushi</groupId>
            <artifactId>oinone-bom</artifactId>
            <version>${oinone.version}</version>
            <type>pom</type>
            <scope>import</scope>
        </dependency>
    </dependencies>
</dependencyManagement>
```

## （二）boot启动工程的pom新增依赖
```xml
<dependency>
    <groupId>pro.shushi.pamirs.data.visualization</groupId>
    <artifactId>pamirs-data-visualization-core</artifactId>
</dependency>

```

## （三）application.yml配置新增依赖
```yaml
pamirs:
  boot:
    modules:
      - datavi
```

:::info 注意：

datavi 这个模块在业务工程和设计器指定数据源要保持一致。

:::

