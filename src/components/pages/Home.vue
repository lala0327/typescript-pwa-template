<script setup lang="ts">
import { VueButton } from "../atoms";
import { useModal } from "vue-final-modal"; // 引入彈跳視窗
import { useStore } from "../../store"; // 引入全域變數
import HomeModal from "./../templates/Home/HomeModal.vue";
import router from "../../router";
const store = useStore(); // 引入全域變數

// 其他登入方式icon
const iconArr: string[] = [
  "fa-brands fa-facebook",
  "fa-brands fa-google",
  "fa-brands fa-line",
];

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
      store.dispatch("storeUserInfo", { acc: values.acc });
      LoginModal.close();
      router.push("/main");
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
  <div class="center h-full w-full flex-col font-black">
    <!-- ICON -->
    <font-awesome-icon icon="fa-solid fa-book-open" class="h-16 text-black" />
    <!-- TITLE -->
    <p class="my-2 text-2xl">TypeScript Test</p>
    <!-- BUTTON ( 註冊、登入 ) -->
    <div class="mt-6 mb-12 w-1/2 max-w-xs">
      <VueButton
        color="black"
        classes="w-full my-5"
        @click="() => SignModal.open()"
      >
        Sign Up
      </VueButton>
      <VueButton
        color="white"
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
          class="mx-4 cursor-pointer text-3xl transition-all hover:text-slate-500 active:scale-75"
          @click="() => otherLogin(icon)"
        />
      </div>
    </div>
    <!-- 版號 -->
    <p class="absolute bottom-3 text-sm">- {{ store.state.version }} -</p>
  </div>
</template>
