// 因為 typeScript 無法識別 .vue 文件，需要增加 .vue 文件聲明

declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
