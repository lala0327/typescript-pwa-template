<script setup lang="ts">
import { ModalsContainer } from "vue-final-modal";
</script>

<template>
  <div class="h-full w-full">
    <router-view />
  </div>

  <ModalsContainer />
</template>
