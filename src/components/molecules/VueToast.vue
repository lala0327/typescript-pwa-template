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
    class="mb-2 flex w-max max-w-full overflow-hidden rounded-lg bg-primary shadow-md"
  >
    <!-- 左邊 Icon 顯示 -->
    <div
      class="center w-12"
      :class="{
        'bg-green': variant === 'success',
        'bg-orange': variant === 'info',
        'bg-yellow': variant === 'warning',
        'bg-err': variant === 'error',
      }"
    >
      <font-awesome-icon :icon="icons[variant]" class="text-xl text-primary" />
    </div>

    <!-- 右邊文字資訊 -->
    <div class="center px-3 py-2">
      <!-- Title -->
      <div>
        <span
          class="font-semibold capitalize"
          :class="{
            'text-green': variant === 'success',
            'text-orange': variant === 'info',
            'text-yellow': variant === 'warning',
            'text-err': variant === 'error',
          }"
        >
          {{ title || variant }}
        </span>
        <p class="text-sm text-secondary opacity-75">{{ text }}</p>
      </div>

      <!-- action & dismiss -->
      <div v-if="action" class="center ml-3">
        <VueButton variant="link" class="mx-2" @click="action">
          <font-awesome-icon icon="fa-check" class="text-green" />
        </VueButton>
        <VueButton variant="link" class="mx-2" @click="dismiss">
          <font-awesome-icon icon="fa-times" class="text-err" />
        </VueButton>
      </div>
    </div>
  </div>
</template>
