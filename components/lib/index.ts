import type { App } from 'vue'

/* 基础组件 start */
import  ClButton  from './Button'
import ClNotice from './Notification'





/* 基础组件 end   */

/* 导航组件 start */
import ClNavigationBar from './NavigationBar'
/* 导航组件 end   */

/* 表单组件 start */
import ClSelector  from './Selector'
/* 表单组件end   */

/* 创意组件 start */
import ClClock from './Clock'
import ClNebula from './Nebula'
import ClWordCloud from './WordCloud'
/* 创意组件 end  */

/* 所有组件 */
const componentsList :any[] = [
    ClButton,
    ClNotice,
    ClSelector,
    ClClock,
    ClNebula,
    ClNavigationBar,
    ClWordCloud
]

/**
 * 组件注册
 * @param { App } app Vue 对象
 * @returns { Void } 
 */
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

const hasVue = (value:any):value is WVUE => (value as WVUE)['Vue'] !== undefined;

// cdn方式引入 当检测到Vue为全局变量时自动注册组件
if(typeof global == undefined  && typeof window !== undefined && hasVue(window)){
    install(window.Vue)
}

export {
    ClButton,
    ClNotice,
    ClSelector,
    ClClock,
    ClNebula,
    ClNavigationBar,
    ClWordCloud,
    install
}

// 全部导出
export default  {
    version: '1.0.0',
    install
}
