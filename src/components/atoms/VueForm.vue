<script setup lang="ts">
import { ErrorMessage, Field, Form as VeeForm } from "vee-validate";
defineProps<{
  fieldArr?: any[];
  // eslint-disable-next-line func-call-spacing
  onSubmit?: (values: object) => void;
}>();
</script>

<script lang="ts">
export default {
  name: "VueForm",
};
</script>

<template>
  <VeeForm @submit="onSubmit" v-slot="{ errors }">
    <slot name="header"></slot>
    <div v-for="field in fieldArr" :key="field" class="h-20 w-full">
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
  </VeeForm>
</template>
