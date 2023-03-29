<script setup lang="ts">
import { ErrorMessage, Field, Form as VeeForm } from "vee-validate";

interface VueFormProps {
  title: string;
  name: string;
  type: string;
  rules: string;
}

defineProps<{
  fieldArr: VueFormProps[];
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
        <p
          class="font-bold transition-all"
          :class="errors[field.name] ? 'text-err' : ''"
        >
          {{ field.title }}
        </p>
        <Field
          :name="field.name"
          :type="field.type"
          :rules="field.rules"
          class="w-full rounded-sm border border-secondary py-1 px-3 transition-all dark:text-secondary"
          :class="
            errors[field.name]
              ? 'focus-visible:outline-err'
              : 'focus-visible:outline-secondary focus-visible:dark:outline-primary'
          "
        />
        <ErrorMessage
          v-motion-slide-left
          :name="field.name"
          class="flex justify-end text-sm text-err"
        />
      </div>
      <slot name="action"></slot>
    </form>
  </VeeForm>
</template>
