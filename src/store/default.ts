import { defineStore } from 'pinia'
import { version } from '../../package.json' // 引入 version

// state Type
export interface defaultType{
  version: string, // 版本號
  isLoading: boolean // 是否在加載中
  isDark: 'light'|'dark'|'auto' // 是否是深色模式
  config: object
  count: number
}

export const useDefaultStore = defineStore('default', {
  state: (): defaultType => ({
    version,
    isLoading: false,
    isDark: 'auto',
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

    changeIsDark(isDark:defaultType['isDark']) {
      this.isDark = isDark
    },
  },
  // 設定要存 localStorage 的資料
  persist: {
    paths: [
      "version", "isDark"
    ],
  },
})
