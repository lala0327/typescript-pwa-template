<script setup lang="ts">
// import { VueButton } from "../atoms";
// import { onMounted } from "vue";
// import { VueAlert } from "../molecules";
// import { useModal } from "vue-final-modal";
// // methods
// function sayHello(person: string) {
//   return console.log("Hello, " + person);
// }

// function buildName(firstName: string | number, lastName: number = 12) {
//   return firstName + " ： " + lastName;
// }
// const tomcat = buildName("abc", 1);
// const testnumber = buildName(2, 1);
// onMounted(() => {
//   sayHello("aaa");
// });
</script>

<script lang="ts">
export default {
  name: "Login",
};
</script>

<template>
  <div
    v-motion-slide-top
    class="h-full w-full"
    @click="
      () => {
        return 'aaa';
      }
    "
  >
    Home
  </div>
  <!-- <VueButton color="white" classes="!my-3 px-4"> 111 </VueButton>
  <p>{{ tomcat }}</p>
  <p>{{ testnumber }}</p>
  <p>{{ buildName("a", 11) }}</p> -->
</template>
