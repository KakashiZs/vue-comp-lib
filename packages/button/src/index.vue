<template>
  <button @click="onClick">{{ props.txt }}666</button>
</template>

<script setup lang="ts">
import { sayHello } from "@comp-lib-vue/share";

const props = withDefaults(defineProps<{
  txt: string;
}>(), {
  txt: '',
});

const onClick = () => {
  sayHello('p');
};

</script>

<style scoped lang="scss"></style>
