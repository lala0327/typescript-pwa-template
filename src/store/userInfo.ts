import { defineStore } from 'pinia'
// state Type
export interface defaultType{
  userName: string, // 使用者名稱
}

export const useUserInfoStore = defineStore('UserInfo', {
  state: (): defaultType => ({
    userName: "",
  }),
  // 似 Computed、不可傳參數
  getters: {},
  // 似 Methods
  actions: {
    saveUserName(userName:string) {
      this.userName = userName
    }
  },
  // 設定要存 localStorage 的資料
  persist: {
    paths: [
      'userName',
    ],
  },
})
