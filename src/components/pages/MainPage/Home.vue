<script setup lang="ts">
import { VueSearch } from "../../atoms";
import { ref, computed } from "vue";
const searchText = ref<string>(""); // 輸入框內容
const contentList = ref<string[]>([]); // 所有內容列表
contentList.value = ["1", "2", "3", "12344", "12875"];

// 篩選後列表
const searchList = computed(() => {
  if (!searchText.value) {
    return contentList;
  } else {
    return contentList.value.filter((item: string) =>
      item.includes(searchText.value)
    );
  }
});
</script>

<script lang="ts">
export default {
  name: "MainHome",
};
</script>

<template>
  <!-- Search -->
  <!-- <div class="relative w-full">
    <font-awesome-icon
      icon="fa-solid fa-magnifying-glass"
      class="absolute top-1/2 left-2 -translate-y-1/2"
    />
    <input
      type="text"
      class="w-full rounded-md border-2 border-black py-1 pl-7 pr-3"
      placeholder="Search..."
      v-model="searchID"
    />
  </div>
  {{ SearchList }} -->
  <VueSearch @setSearchText="(val) => (searchText = val)"></VueSearch>
  {{ searchList }}
</template>
