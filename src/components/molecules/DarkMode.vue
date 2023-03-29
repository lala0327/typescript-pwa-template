<script setup lang="ts">
import { useDefaultStore } from "../../store/default";
import { VueSwitch } from "../atoms";
import { watch } from "vue";
import { usePreferredDark } from "@vueuse/core"; // 引入 Default 全域參數
const defaultStore = useDefaultStore();
const customTheme = usePreferredDark();

let initIsTrue = false;

// 點擊 Switch 動作
function settingIsTrue(isTrue: boolean) {
  if (customTheme.value === isTrue) {
    defaultStore.changeIsDark("auto");
  } else if (isTrue === true) defaultStore.changeIsDark("dark");
  else if (isTrue === false) defaultStore.changeIsDark("light");
}
watch(
  customTheme,
  (newValue) => {
    if (defaultStore.isDark === "auto") {
      console.log(newValue);
      if (newValue) {
        // Dark
        initIsTrue = true;
      } else {
        // Light
        initIsTrue = true;
      }
    } else if (defaultStore.isDark === "dark") {
      initIsTrue = true;
    } else if (defaultStore.isDark === "light") {
      initIsTrue = false;
    }
  },
  { deep: true, immediate: true }
);
</script>

<script lang="ts">
export default {
  name: "DarkMode",
};
</script>

<template>
  <VueSwitch @settingIsTrue="settingIsTrue" :isTrue="initIsTrue">
    <div
      class="flex h-full w-full items-center justify-between py-2 px-3 transition-all"
    >
      <font-awesome-icon icon="fa-regular fa-moon" class="h-full" />
      <font-awesome-icon icon="fa-regular fa-sun" class="h-full" />
    </div>
  </VueSwitch>
</template>
