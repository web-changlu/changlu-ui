# Button 按钮组件

:::demo 使用`type`，`plain`，`round`来定义 Button 的样式

```vue
<template>
  Small
  <cl-button :name='测试' />
  Middle
  <cl-button :name='Middle' />
  Large
  <cl-button :name='Middle' />
  Disabled
  <cl-button :name='changlu' />
</template>
```

:::

### Attributes

| 参数 | 说明 | 类型 | 是否必要 | 默认值 |
|:---:|:---:|:---:|:---:|:---:|
| width | 组件宽度 | Number | false | - |
| name | 按钮文字 | String | true | - |