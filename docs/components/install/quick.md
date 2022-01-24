# 引入组件库

>在main.js中引用组件库

```javascript

    //全部引入
    import 'changlu-ui/dist/theme-default/index.css';
    import CLUI from 'changlu-ui';
    Vue.use(CLUI);

    // 按需引入
    import 'changlu-ui/dist/theme-default/demo.css';
    import { Demo } from 'changlu-ui';
    Vue.use(Demo);

```