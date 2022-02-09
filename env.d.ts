/// <reference types="vite/client" />
declare type injectDom = Element | Object;
declare type MenuItem  = {
  id: number,
  value: number,
  label: string
}

declare type ClockInfo = {
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  sec: number
}

declare type ClockHourObj = {
  id: string,
  index: number,
  value: string
}

declare type CustomComp = {
  install: Function 
}
declare type WVue =  {
  Vue: any
}
declare module '*.vue' {
  import { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'vitepress/dist/client/theme-default';
