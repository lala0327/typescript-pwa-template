<script setup lang="ts">
// import { DarkMode } from "../../molecules";
import { VueSwitch } from "../../atoms";
import { ref } from "vue";
import { Form as VeeForm } from "vee-validate";
// let initIsTrue = ref<boolean>(false);
interface arrType {
  index: number;
  bool: boolean;
}

let arr = ref<arrType[]>([
  { index: 0, bool: false },
  { index: 1, bool: false },
  { index: 2, bool: false },
  { index: 3, bool: false },
]);

function aaa(values) {
  console.log(values)
}

// function updateIsTrue(isTrue: boolean) {
//   arr[i].bool = isTrue;
// }
</script>

<script lang="ts">
export default {
  name: "MainSetting",
};
</script>

<template>
  {{ arr }}
  <div class="h-full w-full">
    <div class="center m-auto h-16 w-4/5 flex-col">
      <div class="center w-full">
        <!-- 大頭貼 -->
        <div></div>
        <!-- 個人資訊 -->
        <div class="">
          <p>name:default</p>
          <p>name:default</p>
        </div>
      </div>
      <hr class="m-auto my-2 w-full" />
    </div>

    <!-- 功能 -->
    <div class="m-auto h-[calc(100%-64px)] w-4/5">
      <!-- Dark 模式切換 -->
      <div class="center h-12 w-full font-bold">
        <p>顯示模式：</p>
        <!-- <DarkMode> </DarkMode> -->
        <VeeForm @change="aaa(values)" v-slot="{ values }">
          <VueSwitch></VueSwitch>
        </VeeForm>
      </div>
    </div>
  </div>
</template>
