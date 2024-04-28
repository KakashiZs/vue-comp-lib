<template>
  <button @click="onClick">{{ text }}</button>
</template>

<script setup lang="ts">
import { sayHello } from "@comp-lib-vue/share";
import { ref } from "vue";

const text = "点击";

const onClick = () => {
  sayHello("world");
};

</script>

<style scoped lang="scss"></style>
