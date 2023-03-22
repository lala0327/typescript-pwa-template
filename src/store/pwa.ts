import { defineStore } from 'pinia'

// BeforeInstallPromptEvent型別
export interface BeforeInstallPromptEvent extends Event {
    readonly platforms: Array<string>;
    readonly userChoice: Promise<{
      outcome: "accepted" | "dismissed";
      platform: string;
    }>;
    prompt(): Promise<void>;
}

// PwaState Type
export interface PwaState {
  deferredPrompt: BeforeInstallPromptEvent | null
  isIos: boolean
  isStandalone: boolean
  options: {
    iosPrompt: () => void
    androidPrompt: () => void
  } | null
}

export const usePwaStore = defineStore('pwa', {
  state: (): PwaState => ({
    deferredPrompt: null,
    // 是否為 IOS 裝置
    isIos: false,
    // 是否從 PWA 開啟
    isStandalone: false,
    // ios 跟 androidpwa 安裝提示 Function
    options: null
  }),

  actions: {
    // 初始 PWA
    initPwa(options: PwaState['options']) {
      this.options = options
      // 判斷是否為 PWA 開啟
      if (
        ("standalone" in window.navigator && window.navigator.standalone) ||
        window.matchMedia("(display-mode: standalone)").matches
      ) {
        this.isStandalone = true
      } else {
        // 判斷為 IOS 或 Android
        const u = navigator.userAgent;
        const isIOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); // 判斷484 IOS 裝置
        if (isIOS) {
          // 為IOS
          this.isIos = true;
        } else {
          // 為Android
          window.addEventListener("beforeinstallprompt", (e) => {
            e.preventDefault();
            this.deferredPrompt = e as BeforeInstallPromptEvent;
          });
          window.addEventListener("appinstalled", () => {
            this.deferredPrompt = null;
          });
        }
      }
    },
    // 針對各別裝置處理提示窗
    PwaPrompt(options: PwaState['options']) {
      if (!this.isStandalone) {
        if (this.isIos) {
          options?.iosPrompt()
        } else if (this.deferredPrompt) {
          options?.androidPrompt()
        }
      }
    },

  },
  // 設定要存 localStorage 的資料
  persist: {
    paths: [
      "deferredPrompt", "isIos", "isStandalone", "options"
    ],
  },
})
