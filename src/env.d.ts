// 因為 typeScript 無法識別 .vue 文件，需要增加 .vue 文件聲明

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-explicit-any
  const component: DefineComponent<{}, {}, any>
  export default component
}
