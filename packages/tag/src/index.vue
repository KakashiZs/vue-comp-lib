<template>
  <div
    class="tag"
    @click="onClick"
  >
    TAG{{ props.msg }}
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  msg: string;
}>(), {
  msg: '',
});

const onClick = () => {
  console.log('tag clicked');
};

</script>

<style scoped lang="scss">
.tag {
  padding: 10px;
  border: 1px solid #ccc;
}
</style>
