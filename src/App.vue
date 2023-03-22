<script setup lang="ts">
import { ModalsContainer } from "vue-final-modal";
import { ToastList } from "./components/organisms";
import { useToastStore } from "./store/toast"; // 引入 Default 全域參數
const ToastStore = useToastStore();
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <router-view />
  </div>
  <ToastList :toastArray="ToastStore.toast"></ToastList>
  <ModalsContainer />
</template>
