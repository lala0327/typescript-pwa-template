<script setup lang="ts">
// import router from "../../../router"; // 引入跳轉頁面動作
import { useUserInfoStore } from "../../../store/userInfo"; // 引入全域變數
const userInfoStore = useUserInfoStore(); // 引入全域變數

interface iconArrType {
  name: string;
  path: string;
  icon: string;
}

const iconArr: iconArrType[] = [
  {
    name: "home",
    path: "/home",
    icon: "fa-solid fa-house",
  },
  {
    name: "list",
    path: "/list",
    icon: "fa-solid fa-list",
  },
  {
    name: "notice",
    path: "/notice",
    icon: "fa-solid fa-bell",
  },
  {
    name: "setting",
    path: "/setting",
    icon: "fa-solid fa-gear",
  },
];
const RouterPush = (item: iconArrType) => {
  console.log(item);
};
// const isSearch = ref<boolean>(false);
</script>

<script lang="ts">
export default {
  name: "MainBar",
};
</script>

<template>
  <div v-motion-fade class="h-full w-full">
    <!-- Top Bar (Title & Search) -->
    <div
      class="relative flex h-12 w-full items-center justify-between px-5 py-1 font-black"
    >
      <!-- Title -->
      <p class="text-xl">Hello ! {{ userInfoStore.userName }}</p>
    </div>
    <!-- Content -->
    <div class="h-[calc(100%-104px)] w-full px-5">
      <slot></slot>
    </div>

    <!-- Down Bar -->
    <div
      v-motion-slide-bottom
      class="flex h-14 w-full items-center justify-between px-5 pb-2"
    >
      <div
        class="flex h-full w-full items-center justify-evenly rounded-xl border-2 border-black"
      >
        <div
          v-for="(item, value, index) in iconArr"
          :key="index"
          class="center h-full cursor-pointer flex-col py-2 transition-all hover:text-slate-500 active:scale-75"
          @click="() => RouterPush(item)"
        >
          <font-awesome-icon
            :icon="item.icon"
            class="h-full"
            :class="
              $route.path.includes('/' + item.name)
                ? ' scale-90 text-slate-500'
                : ''
            "
          />
        </div>
      </div>
    </div>
  </div>
</template>
