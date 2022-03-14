# Button 组件  
>常用的操作按钮

## 基础用法&代码示例
>基础的按钮用法

:::demo 使用`type`来选择 Button 的样式

```vue
<template>
  
  <cl-button >默认按钮 </cl-button> 
  <cl-button type='default' >默认按钮 </cl-button> 
  <cl-button type='streamer'>流光按钮</cl-button>
  <cl-button  >其他按钮</cl-button>
</template>
```

:::

## 禁用状态  
>禁用的时候就不要点击啦，反正点了也不会有效果的！

:::demo 使用 disabled 属性定义按钮是否被禁用 接收一个Boolean值

```vue
<template>
  <cl-button disabled>默认按钮 </cl-button> 
  <cl-button type='streamer' disabled>流光按钮</cl-button>
  <cl-button  disabled>其他按钮</cl-button>
</template>
```

:::

## 图标按钮  

>恰到好处的图标可以提升产品体验

:::demo 设置 icon 属性即可 组件库采用阿里图标库，也可使用项目本身引入的图标, 接收一个String

```vue
<template>
  <cl-button icon='iconfont icon-iconsearch-copy'></cl-button> 
  <cl-button type='streamer'  icon='iconfont icon-setting'>设置</cl-button>
  <cl-button  icon='iconfont icon-fenxiang'></cl-button>
</template>
```

:::  

## 加载状态  

>憋催了 在做了.jpg

:::demo 设置 loading 属性即可， 接收一个Boolean值, 为true时将会处于禁用状态，不会响应事件

```vue
<template>
  <cl-button loading>加载中</cl-button> 
  <cl-button type='streamer' :loading='true' >操作中</cl-button>
  <cl-button  :loading='false'>加载完成</cl-button>
</template>
```

:::  


### Attributes  


| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
|:---:|:---:|:---:|:---:|:---:|
| type | 按钮类型 | String | false | default |
| disabled | 是否禁用状态 | Boolean | false | false |
| loading | 是否加载状态 | Boolean | false | false |
| icon | 图标类名 | String | false | - |

<style lang='sass'>
.source .cl-button:nth-child(n+1)
  margin-right: 20px
  margin-top: 20px
  

</style>