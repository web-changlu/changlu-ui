// 导入vitepress-theme-demoblock主题，并注册组件(包含主题中默认的组件)。
import Theme from 'vitepress/dist/client/theme-default'
// import '../../../dist/theme-default/index.css'
import type { App } from 'vue'
// 导入主题样式
import 'vitepress-theme-demoblock/theme/styles/index.css'
// import clButton from '../../../components/lib/Button/src/main.vue'
// 导入插件的主题
import { registerComponents } from './register-components.js'

export default {
  ...Theme,
  enhanceApp(test :any) {
    const {app} = test;
    // app.component('clButton', clButton) 
    registerComponents(app)
  }
}
