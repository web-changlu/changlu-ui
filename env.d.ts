/// <reference types="vite/client" />
declare type injectDom = Element | Object;
declare type MENUITEM  = {
  id: string,
  value: number,
  label: string
}

declare type WORDITEM = {
  text: string,
  textColor: string,
  // 方阵
  coordX?: number,
  coordY?: number,
  coordZ?: number,
  // 螺旋
  degY?: number,
  depY?: number,
  //球形
  sphereDegX?:number,
  sphereDegY?:number,
  // 三体
  threeDegX?:number,
  threeDegY?:number,
  // 几何
  geoDegX?:number,
  geoDegY?:number,
  // 曲线
  curveDegX?: number,
  curveDegY?: number,
  //随机
  randomCoordX?:number,
  randomCoordY?:number,
  randomCoordZ?:number
}
declare type NAVITEM = {
  id: string,
  icon: string,
  text: string,
  href: string,
  isCurrent: boolean
}
declare type COMPONENTMAP = {
  [key: string]: any
}
declare type CLOCKINFO = {
  year: number,
  month: number,
  day: number,
  hour: number,
  minute: number,
  sec: number
}

declare type CLOCKHOUROBJ = {
  id: string,
  index: number,
  value: string
}

declare type CUSTOMCOMP = {
  install: Function 
}
declare type WVUE =  {
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
declare type PARTICLE = {
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
