<script setup lang="ts">
import router from "../../../router"; // 引入跳轉頁面動作
import { useUserInfoStore } from "../../../store/userInfo"; // 引入全域變數
import { useDefaultStore } from "../../../store/default"; // 引入全域變數
const userInfoStore = useUserInfoStore(); // 引入全域變數
const defaultStore = useDefaultStore(); // 引入全域變數
interface iconArrType {
  name: string;
  icon: string;
}

const iconArr: iconArrType[] = [
  {
    name: "home",
    icon: "fa-solid fa-house",
  },
  {
    name: "list",
    icon: "fa-solid fa-list",
  },
  {
    name: "notice",
    icon: "fa-solid fa-bell",
  },
  {
    name: "setting",
    icon: "fa-solid fa-gear",
  },
];
const RouterPush = (item: iconArrType) => router.push("/main/" + item.name);

// const isSearch = ref<boolean>(false);
</script>

<script lang="ts">
export default {
  name: "MainBar",
};
</script>

<template>
  <div class="h-full w-full">
    <!-- Top Bar (Title & Search) -->
    <div
      class="relative flex h-12 w-full items-center justify-between px-5 py-1 font-black"
    >
      <!-- Title -->
      <p class="text-xl">Hello ! {{ userInfoStore.userName }}</p>
      <p class="text-xl">version: {{ defaultStore.version }}</p>

    </div>
    <!-- Content -->
    <div class="h-[calc(100%-104px)] w-full px-5">
      <slot></slot>
    </div>

    <!-- Down Bar -->
    <div class="flex h-14 w-full items-center justify-between px-5 pb-2">
      <div class="flex h-full w-full items-center justify-around">
        <div
          v-for="(item, value, index) in iconArr"
          :key="index"
          class="center h-10 w-10 cursor-pointer flex-col py-2 transition-all hover:text-slate-500 active:scale-75"
          :class="
            $route.path.includes('/' + item.name)
              ? 'rounded-full bg-gray-700 text-white'
              : ''
          "
          @click="() => RouterPush(item)"
        >
          <font-awesome-icon
            :icon="item.icon"
            class="h-full"
            :class="
              $route.path.includes('/' + item.name)
                ? ' text-white'
                : 'text-gray-700'
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
