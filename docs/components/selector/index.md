# Selector 选择器  
>鱼与熊掌不可得兼，舍鱼而取熊掌者也。

## 基础用法  
>单选 并且支持搜索

:::demo 使用`option`来传入选择列表

```vue
<template>
    <cl-selector placeholder="请选择" :data-option="selectorData" @change="setItem"> </cl-selector> 
</template>
<script setup lang="ts">
    const selectorData = [
        { 
            id: 'select1',
            value: 1,
            label: '选项一'
        },
        { 
            id: 'select2',
            value: 2,
            label: '选项二'
        },
        { 
            id: 'select3',
            value: 3,
            label: '选项三'
        },
    ]
    const setItem = (item: MenuItem)=> {
      console.log(item, '选中的选项')
    }
</script>
```

:::


### Attributes  


|    参数     |        说明        |    类型    | 是否必要 |   默认值   |
| :---------: | :----------------: | :--------: | :------: | :--------: |
| placeholder | 未选择时的占位文本 |   String   |  false   | 请选择选项 |
| dataOption  |      选择列表      | []MenuItem |   true   |    [ {     |
    id: 'menu1',
                    value: 1,
                    label: '选项一' 
} ] |


### Events  


| 事件名称 |      说明      |   回调参数   |
| :------: | :------------: | :----------: |
|  change  | 用户选中时触发 | 目前选中的值 |

<style lang='sass'>
.source .cl-selector
  margin-bottom:90px
  

</style>