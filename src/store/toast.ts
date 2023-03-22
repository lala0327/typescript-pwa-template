import { defineStore } from 'pinia';
import type { ToastProps } from "./../components/molecules/VueToast.vue";

interface ToastInStore extends ToastProps {
  duration?: number
}

// state Type
interface ToastState{
  toast: Array<ToastInStore>,
}

export const useToastStore = defineStore('Toast', {
  state: (): ToastState => ({
    toast: [],
  }),
  // 似 Computed、不可傳參數
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  // 似 Methods
  actions: {
    // 新增 Toast
    fireToast(payload:ToastProps) {
      // 呼叫新增 Toast 時，建立隨機碼為 ID，用於關閉該 Toast
      const id = payload.id || Math.random();
      this.toast = [
        ...this.toast,
        {
          id,
          dismiss: () => this.dismissToast(id),
          ...payload,
        },
      ];

      // 如果 Toast 有 action，不做自動關閉
      if (!payload.action) {
        setTimeout(
          () => this.dismissToast(id)
          , payload.duration || 1750);
      }
    },
    // 刪除 Toast
    dismissToast(id: number|string) {
      if (id) this.toast = this.toast.filter((r) => id !== r.id);
      else this.toast = [];
    },
  },
  // 設定要存 localStorage 的資料
  persist: {
    paths: ['toast'],
  },
})
