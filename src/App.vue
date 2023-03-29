<script setup lang="ts">
import { onMounted, watch } from "vue";
import { ModalsContainer } from "vue-final-modal";
import { usePreferredDark } from "@vueuse/core";

import { ToastList } from "./components/organisms";
import InitPwa from "./components/atoms/InitPwa.vue";

// import emitter from "./emitter";

import { useToastStore } from "./store/toast"; // 引入 Toast 全域參數
import { useDefaultStore } from "./store/default"; // 引入 Default 全域參數
import { usePwaStore } from "./store/pwa"; // 引入 Pwa 全域參數
const customTheme = usePreferredDark();
const ToastStore = useToastStore();
const pwaStore = usePwaStore();
const defaultStore = useDefaultStore();

onMounted(() => {
  pwaStore.PwaPrompt(pwaStore.options);
});

// 觀察defaultStore
watch(
  defaultStore,
  (newValue) => {
    if (newValue.isDark === "auto") {
      if (customTheme.value) {
        // Dark
        document.documentElement.classList.add("dark");
      } else {
        // Light
        document.documentElement.classList.remove("dark");
      }
    } else if (newValue.isDark === "dark") {
      document.documentElement.classList.add("dark");
    } else if (newValue.isDark === "light") {
      document.documentElement.classList.remove("dark");
    }
  },
  { deep: true, immediate: true }
);

// 觀察使用者目前的主題模式
watch(
  customTheme,
  (newValue) => {
    if (defaultStore.isDark === "auto") {
      if (newValue) {
        // Dark
        document.documentElement.classList.add("dark");
      } else {
        // Light
        document.documentElement.classList.remove("dark");
      }
    } else if (defaultStore.isDark === "dark") {
      document.documentElement.classList.add("dark");
    } else if (defaultStore.isDark === "light") {
      document.documentElement.classList.remove("dark");
    }
  },
  { deep: true, immediate: true }
);
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <router-view />
  </div>
  <ToastList :toastArray="ToastStore.toast"></ToastList>
  <ModalsContainer />
  <InitPwa></InitPwa>
</template>
