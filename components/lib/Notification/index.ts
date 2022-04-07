import {  h, render } from 'vue';
import type { App } from 'vue'
import Notification from './src/main.vue';
const getContainer = () => document.createElement('div');
export type Notification = {
    text: string
}
const renderNotice = (props : Notification, container: HTMLElement) => {
    const vNode = h(Notification, props);
    render(vNode, container);
    document.body.appendChild(container);
    return vNode.component
}


const Notice =  {
    install: (app: App) => {
        app.config.globalProperties.clNotice = (props: Notification) => renderNotice(props, getContainer())
    }
} 
export default Notice;