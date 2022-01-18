import { App } from '@vue/runtime-core'
import  {Button}  from '../components/Button/Button'
import {Notice} from '../components/Notification/Notification'
import { Selector } from '../components/Selector/index'
const components = [
    Button,
    Notice,
    Selector
]


const install = (app: App) => {
    // 注册所有组件
    components.map(component => {
        // app.component(component.name, component)
        component.install(app)
    })
}

// 当检测到Vue为全局变量时自动注册组件
// if(typeof window !== undefined && window.Vue){
//     install(window.Vue)
// }

export default  {
    version: '1.0.0',
    install
}


//单独暴露组件 方便按需引入,
export const ClButton = Button;
export const ClNotice = Notice;
export const ClSelector = Selector;