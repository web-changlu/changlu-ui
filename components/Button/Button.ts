import { App } from '@vue/runtime-core'
import button from './Button.vue'

export const Button = {
    install: (app: App) => {
        app.component(button.name, button)
    }
}
