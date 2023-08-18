import { fileURLToPath, URL } from "node:url";
import federation from "@originjs/vite-plugin-federation";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: "remote",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./Button": "./src/components/Button.vue",
        "./Remotepage": "./src/views/Remote-Page.vue",
        "./swAlert": "./src/plugins/alert.ts",
      },
      shared: ["vue", "pinia"],
    }),
  ],
  server: {
    port: 5001,
  },
  preview: {
    port: 5001,
  },
  build: {
    minify: false,
    target: ["chrome89", "edge89", "firefox89", "safari15"],
  },
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
