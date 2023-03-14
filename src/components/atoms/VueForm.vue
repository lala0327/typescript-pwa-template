<script setup lang="ts">
import { ErrorMessage, Field, Form as VeeForm } from "vee-validate";

interface formArray {
  title: string;
  name: string;
  type: string;
  rules: string;
}

defineProps<{
  fieldArr: formArray[];
}>();

const emit = defineEmits<{
  (e: "onSubmit", values: any): void;
}>();
</script>

<script lang="ts">
export default {
  name: "VueForm",
};
</script>

<template>
  <VeeForm v-slot="{ handleSubmit, errors }">
    <form @submit="handleSubmit($event, (values) => emit('onSubmit', values))">
      <slot name="header"></slot>
      <div v-for="(field, key) in fieldArr" :key="key" class="h-20 w-full">
        <p class="font-black">{{ field.title }}</p>
        <Field
          :name="field.name"
          :type="field.type"
          :rules="field.rules"
          class="w-full rounded-sm border border-black py-1 px-3 transition-all"
          :class="
            errors[field.name]
              ? 'border-red-500 focus-visible:outline-red-500'
              : 'border-black'
          "
        />
        <ErrorMessage
          v-motion-slide-left
          :name="field.name"
          class="flex justify-end text-sm text-red-500"
        />
      </div>
      <slot name="action"></slot>
    </form>
  </VeeForm>
</template>
