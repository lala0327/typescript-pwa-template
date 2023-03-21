import { defineStore } from 'pinia'
import { version } from '../../package.json' // 引入 version

// state Type
export interface defaultType{
  version: string, // 版本號
  isLoading: boolean // 是否在加載中
  config: object,
  count: number,
}

export const useDefaultStore = defineStore('default', {
  state: (): defaultType => ({
    version,
    isLoading: false,
    config: {},
    count: 0,
  }),
  // 似 Computed、不可傳參數
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  // 似 Methods
  actions: {
    increment(count:defaultType['count']) {
      this.count = count
    },
  },
  // 設定要存 localStorage 的資料
  persist: {
    paths: [
      'version',
    ],
  },
})
