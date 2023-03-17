<script setup lang="ts">
import { VueFinalModal } from "vue-final-modal";
import { VueForm, VueButton } from "../../atoms";
import { Field, ErrorMessage } from "vee-validate";

withDefaults(
  defineProps<{
    title: string;
    isLogin: boolean;
    submitText: string;
    onSubmit: (values: object) => void;
  }>(),
  {}
);

// 登入用表單
const LoginFieldArr = [
  {
    title: "account",
    name: "acc",
    type: "string",
    rules: "required",
  },
  {
    title: "password",
    name: "pwd",
    type: "string",
    rules: "required",
  },
];

// 註冊用表單
const SignFieldArr = [
  {
    title: "name",
    name: "name",
    type: "string",
    rules: "required",
  },
  {
    title: "account",
    name: "acc",
    type: "string",
    rules: "required",
  },
  {
    title: "password",
    name: "pwd",
    type: "string",
    rules: "required",
  },
];

const ForgotPwd = () => {
  console.log("forgot password");
};
</script>

<script lang="ts">
export default {
  name: "HomeModal",
};
</script>

<template>
  <VueFinalModal
    class="center flex-col"
    content-class="w-5/6 relative p-6 rounded-lg bg-white dark:bg-gray-900 max-w-md center flex-col"
    content-transition="vfm-slide-down"
    overlay-transition="vfm-fade"
  >
    <!-- Title -->
    <p class="mb-8 text-center text-xl font-black sm:text-2xl">
      {{ title }}
    </p>
    <VueForm
      @onSubmit="onSubmit"
      class="w-full"
      :field-arr="isLogin ? LoginFieldArr : SignFieldArr"
    >
      <template #action>
        <div v-if="isLogin" class="mb-5 flex justify-end opacity-80">
          <u class="cursor-pointer hover:opacity-60" @click="ForgotPwd">
            forgot password?
          </u>
        </div>

        <!-- Check Box -->
        <div v-if="!isLogin" class="flex items-center justify-start">
          <Field
            v-slot="{ field, meta }"
            name="checkbox"
            type="checkbox"
            :value="true"
            rules="required"
          >
            <label class="flex items-center justify-start">
              <input
                class="cursor-pointer"
                type="checkbox"
                v-bind="field"
                :value="true"
              />
              <u
                class="mx-2 cursor-pointer transition-all"
                :class="
                  !meta.validated || meta.valid ? 'text-black' : 'text-red-500'
                "
              >
                I agree some term
              </u>
            </label>
          </Field>
          <ErrorMessage
            v-motion-slide-left
            name="checkbox"
            class="flex justify-end text-sm text-red-500"
          />
        </div>
        <!-- 按鈕區 -->
        <VueButton class="mt-6 w-full" type="submit" color="black">
          {{ submitText }}
        </VueButton>
      </template>
    </VueForm>
  </VueFinalModal>
</template>
