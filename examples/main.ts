// import '../components/css/reset.scss'

import { createApp } from 'vue'
import App from './App.vue'
import CLUI from '~/lib/index'
import { ClButton } from '~/lib/index'
import '~/theme-default/index.scss'
console.log(CLUI, ClButton)
createApp(App)
    // .use(ClButton)
    .use(CLUI)
    .mount('#app')
