<script setup lang="ts">
import { useRegisterSW } from "virtual:pwa-register/vue";
import { onBeforeMount, watch } from "vue";
import { useToastStore } from "../../store/toast";
import { usePwaStore } from "../../store/pwa";

import { IOSPWAModal } from "../atoms";
import { useModal } from "vue-final-modal"; // 引入彈跳視窗

const { needRefresh, updateServiceWorker } = useRegisterSW();
const toastStore = useToastStore();
const pwaStore = usePwaStore();

const IOSModal = useModal({
  component: IOSPWAModal,

});

// 若有可進行的更新，彈出更新提示
watch(
  needRefresh,
  (value) => {
    if (value) {
      toastStore.fireToast({
        id: "pwaReloadMsg",
        title: "檢測到有可更新的版本",
        text: "請點擊確認以進行重整更新",
        variant: "info",
        action: updateServiceWorker,
        dismiss: () => toastStore.dismissToast("pwaReloadMsg"),
      });
    }
  },
  {
    immediate: true,
  }
);
// 觀察是否有安裝PWA
watch(
  pwaStore,
  value => {
    value.PwaPrompt(value.options)
  }
);

onBeforeMount(() => {
  pwaStore.initPwa({
    iosPrompt: () => {
      IOSModal.open()
    },
    androidPrompt: () => {
      toastStore.dismissToast("pwaInstallMsg");
      toastStore.fireToast({
        id: "pwaInstallMsg",
        title: "安裝網頁APP到設備上",
        text: "可加速網頁開啟, 並提供離線操作",
        variant: "info",
        action: () => {
          pwaStore.deferredPrompt?.prompt();
          toastStore.dismissToast("pwaInstallMsg");
        },
      });
    }
  })
})
</script>

<script lang="ts">
export default {
  name: "InitPWA",
};
</script>

<template>
  <div class="hidden"></div>
</template>
