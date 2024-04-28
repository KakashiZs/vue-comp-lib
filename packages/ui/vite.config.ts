import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: './src/index.ts',
      name: 'complibui',
      fileName: 'complib-ui',
    },
    rollupOptions: {
      external: ['vue', /@comp-lib-vue\/*/],

    },
  },
});
