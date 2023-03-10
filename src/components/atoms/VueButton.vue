<script setup lang="ts">
type color = "black" | "white";
type variant = "default" | "link";

interface Props {
  variant?: variant;
  color?: color;
  classes?: string;
}

// 預設參數
withDefaults(defineProps<Props>(), {
  variant: "default",
  color: "white",
});
</script>

<script lang="ts">
export default {
  name: "VueButton",
};
</script>

<template>
  <button
    class="font-black transition-all"
    type="button"
    :class="[
      classes,
      variant === 'default'
        ? {
            'center rounded-md p-2 text-xl': true,
            'bg-white text-black ring-2 ring-black hover:bg-slate-500 hover:text-white active:ring-slate-300':
              color === 'white',
            'bg-black text-white hover:bg-slate-500 active:ring-2 active:ring-slate-300':
              color === 'black',
          }
        : {
            'text-slate-500 hover:text-slate-400': variant === 'link',
          },
    ]"
  >
    <slot></slot>
  </button>
</template>
