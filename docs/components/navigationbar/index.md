# NavigationBar 组件
>为用户提供导航

## 基础用法&代码示例

::: tip 提示 
目前导航栏仅有`type`为`mobile`的选择,桌面端的导航栏正在寻找创意...
:::

:::demo 使用`type`来选择不同导航栏, 使用`navData`传入导航菜单列表

```vue
<template>
    <div class='body-container'>
        <div class="nav-container">
            <cl-navigationBar type="mobile" :navData="navList" @navItemClick='clickHandle'></cl-navigationBar>
        </div>
    </div>
</template>
<script setup lang="ts">
    const navList: NAVITEM[] = [
  {
    id: 'nav01',
    icon: 'icon-home',
    text: 'Home',
    href: '#',
    isCurrent: true
  },
  {
    id: 'nav02',
    icon: 'icon-User',
    text: 'Profile',
    href: '#',
    isCurrent: false
  },
  {
    id: 'nav03',
    icon: 'icon-message',
    text: 'Message',
    href: '#',
    isCurrent: false
  },
  {
    id: 'nav04',
    icon: 'icon-Camera',
    text: 'Photos',
    href: '#',
    isCurrent: false
  },
  {
    id: 'nav05',
    icon: 'icon-setting',
    text: 'Settings',
    href: '#',
    isCurrent: false
  },
]
    const clickHandle = (item: NAVITEM)=> {
      console.log(item, '选中的菜单')
    }
</script>
<style lang='sass'>
.body-container{
    display: flex;
    height: 400px;
    background-color: cadetblue;
    overflow: hidden;
    justify-content: center;
    align-items: center;
}
.nav-container{
    width: 80%;
}
</style>
```
:::

### Attributes

|    参数    |                        说明                         |  类型  | 是否必要 |   默认值   |
| :--------: | :-------------------------------------------------: | :----: | :------: | :--------: |
|    type    |                   导航栏菜单的类型                    |  string  |  false   | 'mobile' |
| navData | 导航栏菜单数据 | NAVITEM[ ] |  true   |     [{id: "nav1",icon: "",text: "默认导航栏",href: "#",isCurrent: false,}]    |

::: tip 类型说明: NAVITEM
```typescript
declare type NAVITEM = {
  //菜单项的id
  id: string,
  // 菜单项的图标 目前仅引用部分阿里图标库 后续会加入其他常用图标库
  icon: string,
  // 菜单项文本
  text: string,
  // 菜单点击后跳转的链接
  href: string,
  // 是否为当前菜单的标志位
  isCurrent: boolean
}
```
:::

---

### Events

| 事件名称 |      说明      |   回调参数   |
| :------: | :------------: | :----------: |
|  navItemClick  | 用户点击某个菜单项时触发 | 目前选中的菜单项 |