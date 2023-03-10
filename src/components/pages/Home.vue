<script setup lang="ts">
import { VueButton } from "../atoms";
import { VueAlert } from "../molecules";
import { useModal } from "vue-final-modal";

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

// 表單內容
const fieldArr: object[] = [
  {
    title: "Account",
    name: "acc",
    type: "string",
    rules: "required",
  },
  {
    title: "Password",
    name: "pwd",
    type: "string",
    rules: "required",
  },
];

// 註冊彈窗
const SignUpModal = useModal({
  component: VueAlert,
  attrs: {
    fieldArr,
    onSubmit(values: object) {
      console.log(values);
      SignUpModal.close();
    },
  },
  slots: {
    title: " - Create a new Account - ",
    submitText: "Sign Up",
  },
});

// 登入彈窗
const LoginModal = useModal({
  component: VueAlert,
  attrs: {
    fieldArr,
    onSubmit(values: object) {
      console.log(values);
      LoginModal.close();
    },
    isOtherText: true,
    otherTextFunc() {
      console.log("forgot password");
    },
  },
  slots: {
    title: " - Log In to Continue - ",
    submitText: "Log In",
  },
});
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
        @click="() => SignUpModal.open()"
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

    <!-- <p>{{ $store.state.vertion }}</p> -->
  </div>
</template>
