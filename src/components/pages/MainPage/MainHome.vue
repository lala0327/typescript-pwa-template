<script setup lang="ts">
import { VueToast } from "../../molecules";
import { VueButton } from "../../atoms";
import { useToastStore } from "../../../store/toast"; // 引入 Default 全域參數
const ToastStore = useToastStore();

function addToast1() {
  ToastStore.fireToast({
    id: "1",
    title: "檢測到有可更新的版本",
    text: "請點擊確認以進行重整更新",
    variant: "info",
    action: () => console.log("action"),
    dismiss: () => ToastStore.dismissToast("1"),
  });
}
</script>

<script lang="ts">
export default {
  name: "MainHome",
};
</script>

<template>
  <div class="h-full w-full">
    <VueToast variant="success" text="333" title="33333"></VueToast>
    <VueButton @click="addToast1">1</VueButton>

    <div class=""></div>
  </div>
</template>
