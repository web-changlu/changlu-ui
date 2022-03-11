import type { App, Plugin } from 'vue'
import Nebula from './src/main.vue'

Nebula.install = (app: App) => {
    app.component(Nebula.name, Nebula)
};

export default Nebula
