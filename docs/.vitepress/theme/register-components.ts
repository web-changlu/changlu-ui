import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import ClButton from '../../../components/lib/Button/src/main.vue'
export function registerComponents(app: any) {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
  app.component(ClButton.name, ClButton)
}
