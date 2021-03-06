import type { App } from 'vue'
import Clock from './src/main.vue'
Clock.install = (app: App) => {
    app.component(Clock.name, Clock)
};

export default Clock
