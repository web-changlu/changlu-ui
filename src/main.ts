import './assets/style/reset.scss'
import { createApp } from 'vue'
import App from './App.vue'

// 全部引用
import ChangLuUI from './index'

// 按需引入
// import { ClNotice } from './index'

// console.log(ChangLuUI, '45')

createApp(App)
    .use(ChangLuUI)
    // .use(ClButton)
    // .use(ClNotice)
    .mount('#app')
