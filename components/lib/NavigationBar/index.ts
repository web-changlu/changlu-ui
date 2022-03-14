import type { App } from 'vue'
import NavigationBar from './src/main.vue'

NavigationBar.install = (app: App) => {
    app.component(NavigationBar.name, NavigationBar)
};

export default NavigationBar
