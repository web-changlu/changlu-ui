# Clock 组件
>指针在钟表上转动的时候，那些埋葬在心中的芥蒂也跟着消失了。那些刻在岁月里的怨念，就在时间的流逝里，在转瞬之间消失殆尽。 ——《琥珀青春》

## 基础用法
<!-- :::demo 使用`time`来传入钟表显示的时间 -->
<div class='clock-background'> 
    <div class='clock-container'>
        <cl-clock ></cl-clock>
    </div>
</div>

```vue
<template>
  
  <cl-clock :time='now'></cl-clock>
</template>

<script setup lang="ts">
    const now = new Date();
</script>
```
### Attributes

| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
|:---:|:---:|:---:|:---:|:---:|
| time | 钟表显示的时间 | Date | false | new Date() |

<style lang='sass'>

.clock-background
    position: relative
    height: 700px
    overflow: hidden
    z-index: 1
    background: cadetblue

.clock-container
    width: 700px
    height: 700px
    margin: 0 auto
</style>