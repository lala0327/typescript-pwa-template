<script setup lang="ts">
import { VueButton } from "../atoms";
import { onMounted } from "vue";

function sayHello(person: string) {
  return console.log("Hello, " + person);
}

function buildName(firstName: string, lastName: number = 12) {
  return firstName + " ： " + lastName;
}
const tomcat = buildName("abc", 1);

onMounted(() => {
  sayHello("aaa");
});
</script>

<script lang="ts">
export default {
  name: "Home",
};
</script>

<template>
  <div class="mt-5 bg-black text-red-500">Home</div>
  <VueButton variant="default" color="green"> 111 </VueButton>
  <p>{{ tomcat }}</p>
  <p>{{ buildName("a", 11) }}</p>
</template>
