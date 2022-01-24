/// <reference types="vite/client" />

declare type MenuItem  = {
  id: number,
  value: number,
  label: string
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