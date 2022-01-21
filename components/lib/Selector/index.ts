import type { App, Plugin } from 'vue'
import Selector from './src/main.vue'

// export const SelectorPlugin: Plugin = {
//     install(app: App) {
//             app.component(Selector.name, Selector)
//         }
// }

// export {
//     Selector
// }

Selector.install = (app: App) => {
    app.component(Selector.name, Selector)
}

export default Selector