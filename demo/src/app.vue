<script setup lang="ts">
import { onMounted } from 'vue';
// demo/src/App.vue
import { sayHello, Tag } from '@comp-lib-vue/ui';
import { Button } from '@comp-lib-vue/button';

onMounted(() => {
  sayHello('999');
});
</script>

<template>
  <div>
    <Button txt="ppp">
      111
    </Button>
    <div>
      <Tag :msg="' this is tag prop'" />
    </div>
  </div>
</template>
