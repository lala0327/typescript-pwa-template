<script setup lang="ts">
import { ref, onUnmounted, onMounted } from 'vue'
import moment from 'moment'
let interval: ReturnType<typeof setInterval>
const time = ref<string>('');
onMounted(() => {
  interval = setInterval(function() { time.value = moment().format('YYYY/MM/DD hh:mm:ss') }, 1000);
})
onUnmounted(() => clearInterval(interval))
</script>

<script lang="ts">
export default {
  name: "VueTime",
};
</script>

<template>
    <p>{{ time }}</p>
</template>
