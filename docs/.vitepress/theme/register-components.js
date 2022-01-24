import Demo from 'vitepress-theme-demoblock/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue'
import CLButton from '../../../components/lib/Button/src/main.vue'
export function registerComponents(app) {
  app.component('Demo', Demo)
  app.component('DemoBlock', DemoBlock)
  app.component('CLButton', CLButton)
}
