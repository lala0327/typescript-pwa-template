<script setup lang="ts">
import MainBar from "../templates/MainPage/MainBar.vue";
</script>

<script lang="ts">
export default {
  name: "MainPage",
};
</script>

<template>
  <MainBar class="max-w-3xl">
    <RouterView></RouterView>
  </MainBar>
</template>
