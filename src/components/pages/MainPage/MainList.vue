<script setup lang="ts">
import { VueSearch } from "../../atoms";
import { ref, computed } from "vue";

interface contentType {
  name: string;
  type: string;
  detail: string;
}
const searchText = ref<string>(""); // 輸入框內容
// 所有內容列表
const contentList: contentType[] = [
  {
    name: "123",
    type: "aaa",
    detail: "1234567890",
  },
  {
    name: "123",
    type: "aaa",
    detail: "1234567890",
  },
  {
    name: "123",
    type: "aaa",
    detail: "1234567890",
  },
  {
    name: "123",
    type: "aaa",
    detail: "1234567890",
  },
  {
    name: "123",
    type: "aaa",
    detail: "1234567890",
  },
  {
    name: "123",
    type: "aaa",
    detail: "1234567890",
  },
];

// 篩選後列表
const searchList = computed(() => {
  if (!searchText.value) {
    return contentList;
  } else {
    return contentList.filter((item: contentType) =>
      item.name.includes(searchText.value)
    );
  }
});
</script>

<script lang="ts">
export default {
  name: "MainList",
};
</script>

<template>
  <div class="center relative h-full w-full flex-col">
    <!-- 搜尋框 -->
    <VueSearch @setSearchText="(val) => (searchText = val)"></VueSearch>
    <!-- 讓資料滑動時有漸層效果 -->
    <div
      class="absolute top-9 h-6 w-full bg-gradient-to-t from-primary/0 to-primary/100 dark:from-secondary/0 dark:to-secondary/100"
    ></div>

    <!-- 內容列表 -->
    <div class="my-1 h-full w-full overflow-y-auto">
      <div
        v-for="(item, value, index) in searchList"
        :key="index"
        class="cursor-pointer"
      >
        <div class="center bg-slate-200 my-3 w-full flex-col rounded-md p-2">
          <!-- Top -->
          <div class="mb-2 flex w-full items-center justify-start">
            <!-- icon -->
            <font-awesome-icon
              icon="fa-solid fa-list"
              class="border-black bg-white h-5 rounded-md border p-1"
            />
            <!-- text -->
            <div class="ml-2 flex w-full flex-col items-start justify-center">
              <p class="text-xs">{{ item.type }}</p>
              <p class="text-xs">{{ item.detail }}</p>
            </div>
          </div>
          <!-- Bottom -->
          <div class="flex w-full items-center justify-between">
            <p class="text-3xl font-bold">{{ item.name }}</p>
            <font-awesome-icon icon="fa-solid fa-angle-right" class="mr-5" />
          </div>
        </div>
      </div>
    </div>

    <!-- 讓資料滑動時有漸層效果 -->
    <div
      class="absolute bottom-0 h-8 w-full bg-gradient-to-b from-primary/0 to-primary/100 dark:from-secondary/0 dark:to-secondary/100"
    ></div>
  </div>
</template>
