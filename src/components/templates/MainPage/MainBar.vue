<script setup lang="ts">
// import { ref } from "vue";
import { useStore } from "../../../store"; // 引入全域變數
const store = useStore(); // 引入全域變數

interface iconArrType {
  name: string;
  icon: string;
}

const iconArr: iconArrType[] = [
  {
    name: "info",
    icon: "fa-brands fa-facebook",
  },
  {
    name: "info",
    icon: "fa-brands fa-facebook",
  },
  {
    name: "info",
    icon: "fa-brands fa-facebook",
  },
  {
    name: "info",
    icon: "fa-brands fa-facebook",
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
  <div v-motion-slide-top class="h-full w-full">
    <!-- Top Bar (Title & Search) -->
    <div
      class="relative flex h-12 w-full items-center justify-between px-5 py-1"
    >
      <!-- Title -->
      <p class="text-xl font-black transition-all delay-100">
        Hello ! {{ store.state.userInfo.acc }}
      </p>

      <!-- <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="h-full" /> -->
    </div>

    <!-- Content -->
    <div class="mx-5 h-[calc(100%-104px)] w-[calc(100%-32px)]">
      <slot></slot>
    </div>

    <!-- Down Bar -->
    <div class="flex h-14 w-full items-center justify-between px-5 pb-2">
      <div
        class="flex h-full w-full items-center justify-evenly rounded-xl border-2 border-black"
      >
        <div
          v-for="(item, value, index) in iconArr"
          :key="index"
          class="center h-full flex-col py-2"
          @click="() => RouterPush(item)"
        >
          <font-awesome-icon :icon="item.icon" class="h-full" />
        </div>
      </div>
    </div>
  </div>
</template>
