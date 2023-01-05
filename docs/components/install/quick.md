# 引入组件库

> 在 main.js 中引用组件库

```javascript
//全部引入
import 'changlu-ui/theme-default/index.css'
import CLUI from 'changlu-ui'

// 按需引入
import 'changlu-ui/theme-default/ClButton.css'
import { ClButton } from 'changlu-ui'

createApp({
  data() {
    return {
      message: 'Hello CLUI!',
    }
  },
})
  .use(CLUI)
  //   .use(ClButton)
  .mount('#app')
```
