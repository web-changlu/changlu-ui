import type { App } from 'vue'
import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import ClButton from '../../../components/lib/Button'
import ClSelector from '../../../components/lib/Selector'
import  ClClock  from '../../../components/lib/Clock'


const componentsList = [
  Demo,
  DemoBlock,
  ClButton,
  ClSelector,
  ClClock
]

export function registerComponents(app: App) {
  // app.component('Demo', Demo)
  // app.component('DemoBlock', DemoBlock)
  // app.component(ClButton.name, ClButton)
  // app.component(ClSelector.name, ClSelector)
  componentsList.map(component => {
    if (component.name) {
      app.component(component.name, component)
    } else {
      component.install(app)
    }
  })
}
