---
title: 从社区版转向企业版
index: true
category:
  - 安装与升级
order: 4
prev:
  text: 运行程序包方式安装
  link: /en/InstallOrUpgrade/EnterpriseEdition/package-installation.md
---
在未自行修改 Oinone 框架源码的情况下，可以从社区版转向企业版。

:::warning 提示

文中涉及帐号、License许可等相关信息可联系数式Oinone员工。

![](https://oinone-jar.oss-cn-zhangjiakou.aliyuncs.com/welcome-document/Installation-and-Upgrade/from-community-to-enterprise/1749644175194-053883e1-63e3-40ed-9f9f-9b9541ec832f.png)

:::

# 一、准备

+ 备份您的社区版应用数据库(可自行选择执行该步骤)
+ 企业版Maven仓库及帐号
+ 容器镜像仓库及帐号
+ 企业版许可证书

# 二、安装企业版

参考:

+  [快速体验：docker-full方式安装](/en/InstallOrUpgrade/EnterpriseEdition/docker-full-installation.md)
+  [docker-mini方式安装](/en/InstallOrUpgrade/EnterpriseEdition/docker-mini-installation.md)

# 三、业务应用升级依赖

添加业务应用依赖管理

```xml
<properties>
    <!-- 可根据Oinone发布公告(https://doc.oinone.top/category/version)更新版本 -->
    <oinone.version>6.2.1</oinone.version>
</properties>

<dependencyManagement>
    <!-- 其他依赖管理 -->
    <!-- ... -->
  
    <!-- 添加oinone bom-->
    <dependency>
        <groupId>pro.shushi</groupId>
        <artifactId>oinone-bom</artifactId>
        <version>${oinone.version}</version>
        <type>pom</type>
        <scope>import</scope>
    </dependency>
</dependencyManagement>
```

升级业务应用的依赖

```xml
<!-- 公共包 - 企业版 -->
<dependency>
  <groupId>pro.shushi.pamirs.core</groupId>
  <artifactId>pamirs-core-common-ee</artifactId>
</dependency>

<!-- 应用中心 - 企业版 -->
<dependency>
  <groupId>pro.shushi.pamirs.core</groupId>
  <artifactId>pamirs-apps-ee</artifactId>
</dependency>

<!-- 权限 - 企业版 -->
<dependency>
  <groupId>pro.shushi.pamirs.core</groupId>
  <artifactId>pamirs-auth3-ee-core</artifactId>
</dependency>
<dependency>
  <groupId>pro.shushi.pamirs.core</groupId>
  <artifactId>pamirs-auth3-ee-view</artifactId>
</dependency>
<dependency>
  <groupId>pro.shushi.pamirs.core</groupId>
  <artifactId>pamirs-auth3-ee-rbac-core</artifactId>
</dependency>
<dependency>
  <groupId>pro.shushi.pamirs.core</groupId>
  <artifactId>pamirs-auth3-ee-rbac-view</artifactId>
</dependency>
```



# 四、启动/体验

至此开心的体验Oinone企业版啦😀。





