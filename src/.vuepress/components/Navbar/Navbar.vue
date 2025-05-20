<template>
  <div>
    <Navbar v-if="os != 'pc'"></Navbar>
    <div class="custom-vp-navbar" v-else>
      <div class="head">
        <nav class="navbar navbar-expand-lg navbar-light bg-light-transparent">
          <div class="container">
            <a class="navbar-brand" href="/$welcomeHomePage">
              <img src="https://pamirs.oss-cn-hangzhou.aliyuncs.com/welcome/assets/ss_logo-06efd107.png" alt="">
              <span class="shu"></span>
              <img class="shushi" src="https://pamirs.oss-cn-hangzhou.aliyuncs.com/welcome/assets/oio_logo-cfcd405e.png" alt="">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="/$welcomeHomePage">首页</a>
                </li>
                <li class="nav-item dropdown" id="nav-product" data-toggle="dropdown">
                  <a class="nav-link dropdown-toggle" href="/product" role="button" aria-expanded="false">产品中心</a>
                  <div class="dropdown-menu nav-product w-100">
                    <div class="container">
                      <div class="col-3">
                        <ul class="navbar-nav ml-auto">
                          <li class="nav-item dropdown" data-toggle="dropdown">
                            <p class="dropdown-item sub-menu-toggle" data-target="#sub-menu-1">数式Oinone四大产品</p>
                            <div class="dropdown-menu" id="sub-menu-1">
                              <div class="col-12">
                                <a class="dropdown-item" href="/lowcodeDesign">低代码开发平台</a>
                                <a class="dropdown-item" href="/nocodeDesign">无代码开发平台</a>
                                <a class="dropdown-item" href="/ipaasDesign">集成开发平台</a>
                                <a class="dropdown-item" href="/AI-large-model">AI大模型开发</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="col-3">
                        <ul class="navbar-nav ml-auto">
                          <li class="nav-item dropdown" data-toggle="dropdown">
                            <p class="dropdown-item sub-menu-toggle" data-target="#sub-menu-2">数式Oinone体系能力</p>
                            <div class="dropdown-menu" id="sub-menu-2">
                              <div class="col-12">
                                <a class="dropdown-item" href="/systemCapability?menuName=user">用户与组织</a>
                                <a class="dropdown-item" href="/systemCapability?menuName=authority">权限管理</a>
                                <a class="dropdown-item" href="/systemCapability?menuName=file">文件管理</a>
                                <a class="dropdown-item" href="/systemCapability?menuName=message">消息中心</a>
                                <a class="dropdown-item" href="/systemCapability?menuName=internationalization">国际化</a>
                                <a class="dropdown-item" href="/systemCapability?menuName=audit">业务审计</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="col-3 nav-product nav-img">
                        <ul class="navbar-nav ml-auto">
                          <li class="nav-item dropdown" data-toggle="dropdown">
                            <p class="dropdown-item sub-menu-toggle" data-target="#sub-menu-3">数式Oinone核心产品特性</p>
                            <div class="dropdown-menu" id="sub-menu-3">
                              <div class="col-12">
                                <a class="dropdown-item" href="/choose?menuName=understand">低无一体</a>
                                <a class="dropdown-item" href="/choose?menuName=powerful">面向软件公司</a>
                                <a class="dropdown-item" href="/choose?menuName=marvel">场景无限制</a>
                                <a class="dropdown-item" href="/choose?menuName=extreme">应用级扩容</a>
                                <a class="dropdown-item" href="/choose">可分可合</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown" id="nav-serve" data-toggle="dropdown">
                  <a class="nav-link dropdown-toggle" href="/serve" role="button" aria-expanded="false">服务中心</a>
                  <div class="dropdown-menu nav-serve w-100">
                    <div class="container">
                      <div class="col-3">
                        <ul class="navbar-nav ml-auto">
                          <li class="nav-item dropdown" data-toggle="dropdown">
                            <p class="dropdown-item sub-menu-toggle" data-target="#sub-menu-4">客户服务</p>
                            <div class="dropdown-menu" id="sub-menu-4">
                              <div class="col-12">
                                <a class="dropdown-item" href="/demonstrate">预约演示</a>
                                <a class="dropdown-item" href="/consultation">方案咨询</a>
                                <a class="dropdown-item" href="/deployment">私有部署</a>
                                <a class="dropdown-item" href="/customized">找人定制</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="col-3">
                        <ul class="navbar-nav ml-auto">
                          <li class="nav-item dropdown" data-toggle="dropdown">
                            <p class="dropdown-item sub-menu-toggle" data-target="#sub-menu-5">开发者</p>
                            <div class="dropdown-menu" id="sub-menu-5">
                              <div class="col-12">
                                <a class="dropdown-item" href="https://doc.oinone.top/faq">问答</a>
                                <a class="dropdown-item" href="/download">下载</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="col-3">
                        <ul class="navbar-nav ml-auto">
                          <li class="nav-item dropdown" data-toggle="dropdown">
                            <p class="dropdown-item sub-menu-toggle" data-target="#sub-menu-6">Oinone学院</p>
                            <div class="dropdown-menu" id="sub-menu-6">
                              <div class="col-12">
                                <a class="dropdown-item" href="/help">学习&amp;帮助</a>
                                <a class="dropdown-item" href="/video">学习视频</a>
                                <a class="dropdown-item" href="https://doc.oinone.top/">社区</a>
                                <a class="dropdown-item" href="/document">文档</a>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div class="col-3 nav-serve nav-img">
                        <p>数式Oinone核心产品特性</p>
                      </div>
                    </div>
                  </div>
                </li>
                <li class="nav-item dropdown" id="nav-channel" data-toggle="dropdown">
                  <a class="nav-link dropdown-toggle" href="/partner" role="button" aria-expanded="false">合作伙伴</a>
                  <div class="dropdown-menu nav-channel">
                    <a class="dropdown-item" href="/channelApply">渠道申请</a>
                    <a class="dropdown-item" href="/partnerDirectory">伙伴名录</a>
                    <a class="dropdown-item" href="/expertDB">专家库</a>
                  </div>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/about">关于数式</a>
                </li>
              </ul>
            </div>
            <div class="navbar-text mr-2">
              <i class="fas fa-phone"></i>0571-88757863
            </div>
<!--            <button class="btn btn-outline-primary my-2 my-lg-0" type="submit">申请体验</button>-->
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Navbar from "vuepress-theme-hope/navbar/components/Navbar.js";
import { defineEmits, inject, onMounted, onUnmounted } from "vue";

const os = inject('os')
const emit = defineEmits(['toggleSidebar'])

const toggleSidebarEvent = () => {
  emit('toggleSidebar')
}

let toggleSidebarButton
onMounted(async () => {
  await import('./js/style.js')
  const toggleSidebarButtons = document.getElementsByClassName('vp-toggle-sidebar-button')
  if (toggleSidebarButtons.length > 0) {
    toggleSidebarButton = toggleSidebarButtons[0] as HTMLElement
    toggleSidebarButton.addEventListener("click", toggleSidebarEvent)
  }
})
onUnmounted(() => {
  toggleSidebarButton && toggleSidebarButton.removeEventListener('click', toggleSidebarEvent)
})
</script>

<style scoped lang="scss">
@import "./css/bootstrap.min.css";
@import "./css/style-2.min.css";

.custom-vp-navbar .navbar .container .collapse .navbar-nav li.nav-item a.nav-link:hover {
  color: rgb(3, 93, 255);
}

.custom-vp-navbar {
  --th-color: #035DFF;
  --bs-nav-link-font-size: 1rem;
  --navbar-line-height: calc(var(--navbar-height) - var(--navbar-padding-y)* 2);
  position: fixed;
  inset: 0 0 auto;
  z-index: 175;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  height: var(--navbar-height);
  padding: var(--navbar-padding-y) var(--navbar-padding-x);
  background: var(--navbar-c-bg);
  box-shadow: 0 2px 8px var(--vp-c-shadow);
  line-height: var(--navbar-line-height);
  white-space: nowrap;
  -webkit-backdrop-filter: saturate(150%) blur(12px);
  backdrop-filter: saturate(150%) blur(12px);
  transition: transform var(--vp-t-transform);

  .head {
    box-shadow: unset;
    width: 90%;
    height: 100%;
    margin-left: 4%;

    .navbar-nav {
      .nav-item {

        .sub-menu-toggle {
          color: #035DFF;
        }

        .dropdown-menu {
          background: white;

          > div {
            display: flex;
            flex-direction: column;
          }
        }

        .nav-channel {
          display: flex;
          flex-direction: column;
        }
      }
    }

    .navbar-text {
      font-size: 1rem;
      margin-right: 1.75rem;
      color: var(--th-color);
    }
  }
}
</style>