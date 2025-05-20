import { sidebar, SidebarOptions } from "vuepress-theme-hope";

const options: SidebarOptions = {
  '/handbook/': [
    // {
    //   text: '安装与升级',
    //   link: 'InstallUpgrade/',
    //   prefix: "InstallUpgrade/",
    //   collapsible: true,
    //   children: 'structure'
    // },
    {
      text: '用户手册',
      link: 'UserHandbook/',
      prefix: 'UserHandbook/',
      collapsible: true,
      children: 'structure'
    },
    // {
    //   text: '研发手册',
    //   link: 'DevelopmentHandbook/',
    //   prefix: 'DevelopmentHandbook/',
    //   collapsible: true,
    //   children: 'structure'
    // },
    // {
    //   text: '贡献手册',
    //   link: 'ContributeHandbook/',
    //   prefix: 'ContributeHandbook/',
    //   collapsible: true,
    //   children: 'structure'
    // },
    // {
    //   text: '培训中心',
    //   link: 'RetrainingCenter/',
    //   prefix: 'RetrainingCenter/',
    //   collapsible: true,
    //   children: 'structure'
    // }
    
  ],
};

export default sidebar(options);