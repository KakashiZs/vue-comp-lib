import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'CompLibButton',
      fileName: 'CompLib-Button',
    },
    minify: false,
    rollupOptions: {
      external: ['vue', '@comp-lib-vue/share'],
    },
  },
});
