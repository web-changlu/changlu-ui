# changlu-ui 组件库

### 快速开始

#### 1.安装组件库

```bash
    npm install changlu-ui
```

#### 2.引入组件库

```javascript

    //全部引入
    import 'changlu-ui/dist/style.css';
    import CLUI from 'changlu-ui';
    Vue.use(CLUI);

    // 按需引入
    import 'changlu-ui/dist/css/demo.css';
    import { Demo } from 'changlu-ui';
    Vue.use(Demo);

```

### 一款自用组件库

    1.vue3在具体项目中的使用
    2.常用组件库的开发方式
    3.typescript的使用
    4.vite构建工具的使用，分析与webpack的区别







# Vue 3 + Typescript + Vite

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

