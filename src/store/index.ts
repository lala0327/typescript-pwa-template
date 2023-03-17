import { createStore, Store, useStore as baseUseStore } from "vuex";
import { InjectionKey } from 'vue'
import { mergeDeep } from '../utils'
import { version } from '../../package.json' // 引入 version
interface userInfo {
  acc: string;
}
// 定義類型
export interface State {
  config: object,
  toast: object[],
  userInfo: userInfo,
  isLoading: number,
  version:string
}

// 定義 injection key
// eslint-disable-next-line symbol-description
export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state: {
    // 設定檔
    config: {},

    // Toast 以陣列形式保存，以進行多個 Toast 顯示
    toast: [],

    // 登入資訊
    userInfo: { acc: '' },

    // 遮罩
    isLoading: 0,

    // 版本
    version
  },
  mutations: {
    // 初始化
    initialize(state) {
      // 檢查 storage 是否有值
      const ls = localStorage.getItem('vuex-localStorage')
      if (ls) {
        // 取代掉初始值
        this.replaceState(
          mergeDeep(state, JSON.parse(ls)),
        )
      }
    },

    // 設定檔
    setConfig(state, payload) {
      state.config = payload;
    },

    // Toast
    addToast(state, payload) {
      state.toast = payload;
    },
    dismissToast(state, id) {
      if (id) state.toast = state.toast?.filter((r:any) => id !== r.id);
      else state.toast = [];
    },

    // 登入資訊
    addInfo(state, userInfo) {
      state.userInfo = userInfo;
    },

    // Loading
    storeIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    storeConfig({ commit }, payload) {
      // 儲存設定檔資訊
      commit("setConfig", payload);
    },

    fireToast({ commit, state }, payload) {
      // 呼叫新增 Toast 時，建立隨機碼為 ID，用於關閉該 Toast
      const id = payload.id || Math.random();
      const newToast = [
        ...state.toast,
        {
          id,
          dismiss: () => commit("dismissToast", id),
          ...payload,
        },
      ];
      commit("addToast", newToast);

      // 如果 Toast 有 action，不做自動關閉
      if (!payload.action) { setTimeout(() => commit("dismissToast", id), payload.duration || 1750); }
    },

    storeUserInfo({ commit }, userInfo) {
      // 儲存使用者資訊
      commit("addInfo", userInfo);
    },

    ChangeIsLoading({ commit, state }, bool) {
      let num = state.isLoading;
      if (bool) {
        num += 1;
      } else {
        num -= 1;
      }
      if (num < 0) {
        num = 0;
      }
      commit("storeIsLoading", num);
    },

  },
  modules: {},
})

// 注意: 常用的 vuex-persistedstate 不維護了，自訂寫入 localStorage 的方法
// 1. subscribe 會在任何 mutate 時觸發，在那裡寫入 storage
store.subscribe((mutation, state) => {
  // 預處理想存進 storage 的資料
  const { version, userInfo }: any = state
  // 這裡寫要存 local 的東西
  const data = {
    version, userInfo
  }
  // 將資料以字串方式儲存
  localStorage.setItem('vuex-localStorage', JSON.stringify(data))
})
// 2. 最後 commit 會在 store 載入時，呼叫 mutations 的 initialize，從 storage 取值放入 vuex 中
store.commit('initialize')

export function useStore () {
  return baseUseStore(key)
}

export default store
