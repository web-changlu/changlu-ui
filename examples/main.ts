// import '../components/css/reset.scss'

import { createApp } from 'vue'
import App from './App.vue'

// import Button from '../components/lib/Button/index'
// import Notice from '../components/lib/Notification/index'
// import Selector from '../components/lib/Selector/index'
import CLUI from '../components/lib'
createApp(App)
    // .use(Button)
    // .use(Notice)
    // .use(Selector)
    .use(CLUI)
    .mount('#app')
