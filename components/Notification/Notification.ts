import {  h, render } from 'vue';
import { App } from '@vue/runtime-core'
import Notification from './Notification.vue';

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

export default Notification;

export const Notice =  {
    install: (app: App) => {
        app.config.globalProperties.clNotice = (props: Notification) => renderNotice(props, getContainer())
    } ,
    name: 'ClNotice'
} 