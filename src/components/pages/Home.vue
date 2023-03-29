<script setup lang="ts">
import { VueButton, VueTime } from "../atoms"; // 引入按鈕、時間 compoments
import { useModal } from "vue-final-modal"; // 引入彈跳視窗
import HomeModal from "./../templates/Home/HomeModal.vue"; // 引入登入、註冊彈跳視窗
import router from "../../router"; // 引入跳轉頁面動作

import { useUserInfoStore } from "../../store/userInfo"; // 引入 UserInfo 全域參數
import { useDefaultStore } from "../../store/default";

const userInfoStore = useUserInfoStore();
const defaultStore = useDefaultStore();

// 登入用彈窗
const LoginModal = useModal({
  component: HomeModal,
  attrs: {
    title: " - Log In to Continue - ",
    isLogin: true,
    submitText: "Log In",
    onSubmit: (values: any) => {
      console.log(values);
      // 存帳戶名稱
      userInfoStore.saveUserName(values.acc);
      router.push("/main/home");
      LoginModal.close();
    },
  },
});

// 註冊用彈窗
const SignModal = useModal({
  component: HomeModal,
  attrs: {
    title: " - Create a new Account - ",
    isLogin: false,
    submitText: "Sign Up",
    onSubmit: (values: object) => {
      console.log(values);
      SignModal.close();
    },
  },
});

// 其他登入方式icon
const iconArr: string[] = [
  "fa-brands fa-facebook",
  "fa-brands fa-google",
  "fa-brands fa-line",
];

// 其他登入方式
function otherLogin(type: string) {
  console.log(type);
}
</script>

<script lang="ts">
export default {
  name: "Home",
};
</script>

<template>
  <div class="center h-full w-full flex-col">
    <!-- ICON -->
    <font-awesome-icon icon="fa-solid fa-book-open" class="h-16" />
    <!-- TITLE -->
    <p class="my-2 text-2xl font-bold">TypeScript Test</p>
    <VueTime></VueTime>

    <!-- BUTTON ( 註冊、登入 ) -->
    <div class="mt-6 mb-12 w-1/2 max-w-xs">
      <VueButton
        color="outline_secondary"
        classes="w-full my-5"
        @click="() => SignModal.open()"
      >
        Sign Up
      </VueButton>
      <VueButton
        color="secondary"
        classes="w-full my-5"
        @click="() => LoginModal.open()"
      >
        Log In
      </VueButton>
    </div>

    <!-- 其他登入方式 -->
    <div class="center flex-col">
      <b> - Log in with - </b>
      <div class="center mt-3">
        <font-awesome-icon
          v-for="icon in iconArr"
          :key="icon"
          :icon="icon"
          class="mx-4 cursor-pointer text-3xl transition-all active:scale-75"
          @click="() => otherLogin(icon)"
        />
      </div>
    </div>

    <!-- 版號 -->
    <p class="absolute bottom-3 text-sm">- {{ defaultStore.version }} -</p>
  </div>
</template>
