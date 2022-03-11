import type { App } from 'vue'
import  Button  from './Button'
import Notice from './Notification'
import Selector  from './Selector'
import Clock from './Clock'
import Nebula from './Nebula'
import NavigationBar from './NavigationBar'
const componentsList :any[] = [
    Button,
    Notice,
    Selector,
    Clock,
    Nebula,
    NavigationBar
]


const install =(app: App) => {
    // 注册所有组件
    componentsList.map(component => {
        if(component.name){
            app.component(component.name, component)
        }else{
            component.install(app)
        }
    })
}

const hasVue = (value:any):value is WVue => (value as WVue)['Vue'] !== undefined;
// cdn方式引入 当检测到Vue为全局变量时自动注册组件
if(typeof window !== undefined && hasVue(window)){
    install(window.Vue)
}
const  ChangLuUI = {
    version: '1.0.0',
    install
}
export default  ChangLuUI


// //单独暴露组件 方便按需引入,
export const ClButton = Button;
export const ClNotice = Notice;
export const ClSelector = Selector;
export const ClClock = Clock;
export const ClNebula = Nebula;
export const ClNavigationBar = NavigationBar;