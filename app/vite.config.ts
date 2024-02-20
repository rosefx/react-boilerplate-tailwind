import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    outDir: "../public",
    assetsDir: "assets",
    cssMinify: true,
    emptyOutDir: false,
    rollupOptions: {
      output: {
        entryFileNames: "app.js",
      },
    },
  },
});
