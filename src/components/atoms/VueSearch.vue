<script setup lang="ts">
import { ref, watch } from "vue";

const searchText = ref<string>(""); // 輸入框內容
// 取得輸入框的值
const emit = defineEmits(["setSearchText"]);

watch(
  searchText,
  (newValue) => {
    emit("setSearchText", newValue);
  },
  { deep: true }
);
</script>

<script lang="ts">
export default {
  name: "VueSearch",
};
</script>

<template>
  <div class="relative w-full">
    <font-awesome-icon
      icon="fa-solid fa-magnifying-glass"
      class="absolute top-1/2 left-2 -translate-y-1/2"
    />
    <input
      type="text"
      class="w-full rounded-md border-2 border-black py-1 pl-7 pr-3"
      placeholder="Search..."
      v-model="searchText"
    />
  </div>
</template>
