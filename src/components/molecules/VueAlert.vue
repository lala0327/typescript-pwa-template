<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import { VueForm, VueButton } from "../atoms";

withDefaults(
  defineProps<{
    fieldArr?: any;
    isOtherText?: boolean;
    otherTextFunc?: any;
    onSubmit?: (values: object) => void;
  }>(),
  {
    fieldArr: () => [],
    isOtherText: false,
    otherTextFunc: () => {
      return "";
    },
  }
);
</script>

<script lang="ts">
export default {
  name: "VueAlert",
};
</script>

<template>
  <VueFinalModal
    class="center flex-col"
    content-class="w-5/6 relative p-6 rounded-lg bg-white dark:bg-gray-900 max-w-md center flex-col"
    content-transition="vfm-slide-down"
    overlay-transition="vfm-fade"
  >
    <p class="mb-8 text-xl font-black sm:text-2xl">
      <slot name="title"></slot>
    </p>
    <VueForm
      @onSubmit="onSubmit"
      :fieldArr="fieldArr"
      submitText="Login"
      class="w-full"
    >
      <template #action>
        <div
          v-if="isOtherText"
          class="mb-5 w-full text-right opacity-80"
          @click="otherTextFunc"
        >
          <u class="cursor-pointer hover:opacity-60"> forgot password? </u>
        </div>

        <VueButton class="w-full" type="submit" color="black">
          <slot name="submitText"></slot>
        </VueButton>
      </template>
    </VueForm>
  </VueFinalModal>
</template>
