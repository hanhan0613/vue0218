// 引入createApp用于创建应用
import { createApp } from 'vue';
// 引入App组件
import App from './App.vue';
//引入路由器
import router from './router/index';

const app = createApp(App);
//使用路由器
app.use(router);
//挂载App组件
app.mount('#app');