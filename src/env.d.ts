// InitPWA 引入 virtual:pwa-register/vue有問題,需加下面這一行
/// <reference types="vite-plugin-pwa/client" />

// 因為 typeScript 無法識別 .vue 文件，需要增加 .vue 文件聲明
declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare global {
  interface Navigator {
    standalone: boolean
  }
}
