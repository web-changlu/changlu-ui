import { defineConfig } from 'vitepress'
const getDemoSidebar = () =>{
    return [
        {
            text: "介绍",
            link: '/components/introduce/',
            children:[]
        },
        {
            text: "更新日志",
            children: [
                {
                    text: "新特性",
                    link: "/components/log/new",
                    children:[],
                },
                {
                    text: '往期记录',
                    link: '/components/log/index',
                    children: []
                }
            ]
        },
        {
            text: "开发指南",
            children: [
                {
                    text: "安装",
                    link: '/components/install/index',
                    children:[]
                },
                {
                    text: "快速开始",
                    link: "/components/install/quick",
                    children:[]
                },
            ]
        },
        
        {
            text: "基础组件",
            children: [
              {
                text: "NavigationBar 导航栏",
                link: "/components/navigationbar/",
                children:[]
              },
              {
                text: "Button 按钮",
                link: "/components/button/",
                children:[]
              },
              {
                text: "Selector 选择器",
                link: "/components/selector/",
                children:[]
              },
              {
                text: "Clock 时钟",
                link: "/components/clock/",
                children:[]
              },
              {
                text: "Icon 图标",
                link: "/components/icon/",
                children:[]
              },
            ],
        },
        {
            text: "布局组件",
            children:[]
        },
    ]
}
export default defineConfig({
  base: '/',
  title: 'ChangLu-UI',
  description: '一款v3组件库',
  head:[[
    'link', {
      rel:'icon',
      href:'/img/favicon.ico'
    }
  ]],
  themeConfig: {
    //   展示搜索框
    algolia: {
        apiKey: '',
        indexName: '',
        searchParameters: {
            faeFilters: ['tags:guide,api']
        }
    },
    nav: [{
        text: 'Home',
        link: '/',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/web-changlu',
      },
      {
        text: 'Npm',
        link: 'https://www.npmjs.com/package/changlu-ui',
      },
    ],
    // 侧边栏
    sidebar: {
      '/': getDemoSidebar(),
    }
  },
  markdown: {
    config: (md) =>{
        const {
            demoBlockPlugin
          } = require('vitepress-theme-demoblock')
          md.use(demoBlockPlugin)
    }
  }
})
