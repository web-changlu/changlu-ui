# WordCloud 词云  
>同一事物的不同角度(试试点击一下词云元素，可解锁不同模式)
::: tip 当前词云有7种呈现模式
分别是 方阵 螺旋 球形 三体 几何 曲线 随机
:::

---

## 基础用法&代码示例
>传入关键词列表

:::demo 使用`wordData`来传入关键词列表

```vue
<template>
    <cl-wordCloud  :wordData="wordList" :width='900' :height='600' :backgroundColor="'#5F9EA0'" :elementMaxNum='100'> </cl-wordCloud> 
</template>
<script setup lang="ts">
    const wordList = [
        'JavaScript', 'HTML','CSS','Vue','React','Vite','WebPack', 'NodeJs','Golang'
    ]
</script>
```

:::


### Attributes  


|    参数     |        说明        |    类型    | 是否必要 |   默认值   |
| :---------: | :----------------: | :--------: | :------: | :--------: |
| width | 词云的容器宽度 |   Number   |  false   | 100%(父容器宽度) |
| height | 词云的容器高度 |   Number   |  false   | 100%(父容器宽度) |
| elementMaxNum | 词云的元素数量(需根据容器大小动态调整, 元素过多可能会造成卡顿) |   Number   |  false   | 162 |
| backgroundColor | 词云的容器背景颜色(需传入合法的十六进制颜色,传入不合法的值将会在控制台进行提示) |   String   |  false   | '#253F3F70' |
| wordData  |      词云列表 or 词云地址链接      | [string]  or string |  true  |   ['word']   |


