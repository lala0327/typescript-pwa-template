<script setup lang="ts">
import { VueButton } from "../atoms";
// props參數
export interface ToastProps {
  id?: number | string;
  variant: "success" | "info" | "warning" | "error";
  title: string;
  text: string;
  duration?: number;
  action?: () => void;
  dismiss?: () => void;
}

// 預設參數
withDefaults(defineProps<ToastProps>(), {
  variant: "success",
});

const icons = {
  success: "fa-circle-check",
  info: "fa-info-circle",
  warning: "fa-exclamation-circle",
  error: "fa-times-circle",
};
</script>

<script lang="ts">
export default {
  name: "VueToast",
};
</script>

<template>
  <div
    class="mb-2 flex w-max max-w-full overflow-hidden rounded-lg bg-white shadow-md"
  >
    <!-- 左邊 Icon 顯示 -->
    <div
      class="center w-12"
      :class="{
        'bg-green-500': variant === 'success',
        'bg-orange-300': variant === 'info',
        'bg-yellow-400': variant === 'warning',
        'bg-red-500': variant === 'error',
      }"
    >
      <font-awesome-icon :icon="icons[variant]" class="text-xl text-white" />
    </div>

    <!-- 右邊文字資訊 -->
    <div class="center px-3 py-2">
      <!-- Title -->
      <div>
        <span
          class="font-semibold capitalize"
          :class="{
            'text-green-500': variant === 'success',
            'text-orange-300': variant === 'info',
            'text-yellow-400': variant === 'warning',
            'text-red-500': variant === 'error',
          }"
        >
          {{ title || variant }}
        </span>
        <p class="text-sm opacity-75">{{ text }}</p>
      </div>

      <!-- action & dismiss -->
      <div v-if="action" class="center ml-3">
        <VueButton variant="link" class="mx-2" @click="action">
          <font-awesome-icon icon="fa-check" class="text-green-500" />
        </VueButton>
        <VueButton variant="link" class="mx-2" @click="dismiss">
          <font-awesome-icon icon="fa-times" class="text-red-500" />
        </VueButton>
      </div>
    </div>
  </div>
</template>
