/// <reference types="vite/client" />
declare type injectDom = Element | Object;
declare type MenuItem  = {
  id: string,
  value: number,
  label: string
}

declare type NavItem = {
  id: string,
  icon: string,
  text: string,
  href: string,
  isCurrent: boolean
}
declare type ComponentMap = {
  [key: string]: any
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
  import { Component, defineComponent, DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

/**
 * @key size 线宽
 * @key position 粒子的位置
 * @key offset 围绕中心旋转的偏移量
 * @key shift 跟随鼠标移动的
 * @key fillColor 粒子颜色
 * @key orbit 轨道半径
 */
declare type Particle = {
  size: number,
  position: {
    x: number, 
    y: number
  },
  offset: {
    x: number,
    y: number
  },
  shift: {
    x: number,
    y: number
  },
  speed: number,
  fillColor: string,
  orbit: number
}

declare module 'vitepress/dist/client/theme-default';
