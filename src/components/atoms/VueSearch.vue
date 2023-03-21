<script setup lang="ts">
// 取得輸入框的值
const emit = defineEmits(["setSearchText"]);
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
      @change="($event) => emit('setSearchText', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
