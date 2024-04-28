import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    minify: false,
    lib: {
      entry: "./src/index.ts",
      name: "complibshare",
      fileName: "complib-shared",
    },
  },
});
