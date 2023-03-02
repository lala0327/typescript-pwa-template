import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"; // 引入Router
const app = createApp(App)
// 把 console.log 加到全域變數，方便 vue 裡面做 console.log
app.config.globalProperties.$log = console.log

app.use(router).mount('#app')
