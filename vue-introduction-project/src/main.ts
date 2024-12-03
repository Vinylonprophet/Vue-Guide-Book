import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// 1. 每个Vue应用通过createApp函数创建一个新的 应用实例

// 4. 应用实例并不只限一个，createApp API允许在同一个页面中创建多个共存的Vue应用
//    每个应用都拥有自己的用于配置和全局资源的作用域
const app = createApp(App)

app.use(router)

// 2. 应用实例必须调用了 .mount() 方法后才会渲染出来。
//    <div id="app"></div>
//    元素默认在index.html中

// 3. 应用实例可以暴露一个.config对象允许我们配置一些应用级的选项
//    比如下面的错误处理器 （捕获所有子组件上的错误）

app.config.errorHandler = (err) => {
    // 处理错误
}
app.mount('#app')
