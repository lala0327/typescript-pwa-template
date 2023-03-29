<script setup lang="ts">
// props參數
interface VueButtonProps {
  variant?: "default" | "link"; // 顏色
  color?: "secondary" | "outline_secondary"; // 樣式
  classes?: string;
}

// 預設參數
withDefaults(defineProps<VueButtonProps>(), {
  variant: "default",
  color: "secondary",
});
</script>

<script lang="ts">
export default {
  name: "VueButton",
};
</script>

<template>
  <button
    class="font-bold transition-all"
    type="button"
    :class="[
      classes,
      variant === 'default'
        ? {
            'center rounded-md p-2 text-xl': true,
            'bg-secondary text-primary hover:bg-secondary/90 active:ring-2 active:ring-tertiary dark:bg-primary dark:text-secondary hover:dark:bg-primary/90':
              color === 'secondary',
            'border-2 border-secondary bg-primary hover:bg-primary/90 active:ring-2 active:ring-tertiary dark:border-primary dark:bg-secondary':
              color === 'outline_secondary',
          }
        : {
            'text-secondary hover:opacity-80': variant === 'link',
          },
    ]"
  >
    <slot></slot>
  </button>
</template>
