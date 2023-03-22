<script setup lang="ts">
import { onMounted } from "vue";
import { ModalsContainer } from "vue-final-modal";
import { ToastList } from "./components/organisms";
import InitPwa from "./components/atoms/InitPwa.vue";
import { useToastStore } from "./store/toast";
import { usePwaStore } from "./store/pwa"; // 引入 Default 全域參數
const ToastStore = useToastStore(); // 引入 Default 全域參數
const pwaStore = usePwaStore();
onMounted(() => {
  pwaStore.PwaPrompt(pwaStore.options)
});
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <router-view />
  </div>
  <ToastList :toastArray="ToastStore.toast"></ToastList>
  <ModalsContainer />
  <InitPwa></InitPwa>
</template>
