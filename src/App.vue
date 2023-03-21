<script setup lang="ts">
import { ModalsContainer } from "vue-final-modal";
</script>

<template>
  <div class="flex h-full w-full flex-col items-center justify-center">
    <router-view />
  </div>

  <ModalsContainer />
</template>
