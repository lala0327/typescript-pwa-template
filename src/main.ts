import './style.css' // 引入Css
import "./validator"; // 引入表單驗證規則
import { store, key } from './store' // 引入彈跳視窗套件

import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"; // 引入Router

import FontAwesomeIcon from "./icon"; // 引入Icon圖庫
import { MotionPlugin } from '@vueuse/motion' // 引入出入場動畫套件

import "vue-final-modal/style.css"; // vfm css
import { createVfm } from 'vue-final-modal'

const vfm = createVfm() // 引入彈跳視窗套件

const renderApp = async () => {
  const app = createApp(App)
  // 把 console.log 加到全域變數，方便 vue 裡面做 console.log
  app.config.globalProperties.$log = console.log

  app
    .use(router)
    .use(vfm)
    .use(MotionPlugin)
    .use(store, key)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')
}
renderApp()
