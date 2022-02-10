# Clock 组件
>指针在钟表上转动的时候，那些埋葬在心中的芥蒂也跟着消失了。那些刻在岁月里的怨念，就在时间的流逝里，在转瞬之间消失殆尽。 ——《琥珀青春》

## 基础用法
::: tip 提示 
这是一款拟态风格的钟表组件，钟表是半透明正圆，推荐设置一下容器的背景颜色，需要提供宽度参数，为了展示效果有最小宽度680px的限制，高度会和宽度相等，如果不传入宽度，则会和父容器的宽高相等，此时推荐容器为正方形，组件的展示效果会达到最好。
:::

:::demo 使用`time`来传入钟表显示的时间, 使用`clockWidth`确定时钟的尺寸。

```vue
<template>
  <div class="clock-container">
    <cl-clock :time='new Date()' :clock-width='720'></cl-clock>
  </div>
</template>

<style lang='sass'>
.clock-container{
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: cadetblue;
    z-index: 1;
    overflow: hidden;
}
</style>
```
:::

### Attributes

|    参数    |                        说明                         |  类型  | 是否必要 |   默认值   |
| :--------: | :-------------------------------------------------: | :----: | :------: | :--------: |
|    time    |                   钟表显示的时间                    |  Date  |  false   | new Date() |
| clockWidth | 钟表的宽度,单位为px。如不传入，则默认为父容器100%宽 | number |  false   |     --     |


