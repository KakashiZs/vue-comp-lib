<script setup lang="ts">
import { onMounted } from 'vue';
// demo/src/App.vue
import {  sayHello } from "@comp-lib-vue/ui";
import { Button } from '@comp-lib-vue/button'
onMounted(() => {
  sayHello('999')
})
</script>

<template>
  <div>
    <Button :txt="'123'">111</Button>
  </div>
</template>
