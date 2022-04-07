import type { App, Plugin } from 'vue'
import Button from './src/main.vue'

// export const ButtonPlugin:Plugin = {
//     install(app: App) {
//             app.component(Button.name, Button)
//         }
// }
// export {
//     Button
// }
// type SFCWithInstall<T> = T &  {install(app: App): void};

Button.install = (app: App):void => {
    app.component(Button.name, Button)
};


export default Button
