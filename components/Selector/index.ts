import { App } from '@vue/runtime-core'
import selector from './Selector.vue'

export const Selector = {
    install: (app:App) => {
        app.component(selector.name, selector)
    }
}