# vConsole

## 下载包

```bash
npm install vconsole
```



## 修改入口函数

```javascript
// 导入包
import VConsole from 'vconsole';

// 例子
import { createApp } from 'vue';
import App from './App.vue';

async function bootstrap(){
    const app = createApp(App);
    app.mount('#app', true);
    
    // 此处判断URL中是否包含debug查询，如果包含，则新建vConsole实例
    const query = new URLSearchParams(window.location.search);
    if (query.get('debug') === 'true') {
        // 新建vConsole实例
        new VConsole();
    }
}

bootstrap();

```