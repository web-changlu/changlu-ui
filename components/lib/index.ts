import type { App } from 'vue'

/* 基础组件 start */
import  ClButton  from './Button'
import ClNotice from './Notification'
import ClSelector  from './Selector'


import ClNavigationBar from './NavigationBar'

/* 基础组件 end */

/* 创意组件 start  */
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
    ClWordCloud
}

// 全部导出
export default  {
    version: '1.0.0',
    install,
    ...componentsList
}


//单独暴露组件 方便按需引入,
// export const ClButton = Button;
// export const ClNotice = Notice;
// export const ClSelector = Selector;
// export const ClClock = Clock;
// export const ClNebula = Nebula;
// export const ClNavigationBar = NavigationBar;