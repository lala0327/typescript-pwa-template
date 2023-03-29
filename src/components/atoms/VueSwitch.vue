<script setup lang="ts">
import { Field } from "vee-validate";
import {ref} from
const isTrue = false
// import { ref, onMounted, watch } from "vue";
// import { ref, onMounted } from "vue";

// interface VueSwitchProps {
//   isTrue?: boolean;
// }

// 預設參數
// const props = withDefaults(defineProps<VueSwitchProps>(), { isTrue: false });

// defineEmits<{
//   (e: "updateIsTrue", isTrue: boolean): void; // 子傳父
// }>();

// let boolValue = ref<boolean>(false);

// 取得目前設定
// onMounted(() => {
//   boolValue.value = props.isTrue;
// });

// 點選後換參數
// function changeIsTrue() {
//   boolValue.value = !boolValue.value;
//   // isTrue.value = !isTrue.value;
//   emit("updateIsTrue", isTrue.value);
// }

// watch(isTrue, (newValue) => {}, { deep: true, immediate: true });

// function test(field, meta) {
//   console.log(field, meta);
// }
</script>

<script lang="ts">
export default {
  name: "VueSwitch",
};
</script>

<template>
  <!-- {{ isTrue }}
  <div
    class="border-black relative h-12 w-24 overflow-hidden rounded-full border"
    @click="changeIsTrue"
  >

    <div
      class="absolute top-0 h-12 w-12 rounded-full border bg-primary transition-all duration-300"
      :class="isTrue ? 'translate-x-full' : '-translate-x-1/8'"
    ></div>
    <slot></slot>
  </div> -->{{ isTrue }}
  <Field name="switch" type="checkbox" :value="false">
    <input type="checkbox" id="switch" class="hidden"/>
    <label for="switch">
      <div class="border-black relative h-12 w-24 overflow-hidden rounded-full border" @click="isTrue = !isTrue">
        <div
          class="absolute top-0 h-12 w-12 rounded-full border bg-primary transition-all duration-300"
          :class="isTrue ? 'translate-x-full' : '-translate-x-1/8'"
        ></div>
      </div>
    </label>
</Field>
</template>
