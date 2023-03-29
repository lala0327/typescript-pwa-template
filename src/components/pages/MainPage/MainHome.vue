<script setup lang="ts">
import { VueButton } from "../../atoms";
// import { useToastStore } from "../../../store/toast"; // 引入 Default 全域參數
import { usePwaStore } from "../../../store/pwa";

// const toastStore = useToastStore();
const pwaStore = usePwaStore();

function addToast1() {
  pwaStore.PwaPrompt(pwaStore.options);
}
</script>

<script lang="ts">
export default {
  name: "MainHome",
};
</script>

<template>
  <div class="h-full w-full">
    <VueButton @click="addToast1">1</VueButton>

    <div class=""></div>
  </div>
</template>
