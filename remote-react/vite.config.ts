import { defineConfig } from "vite";
import federation from "@originjs/vite-plugin-federation";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  preview: {
    port: 5003,
  },
  plugins: [
    react(),
    federation({
      name: "remote-react",
      filename: "remoteEntry.js",
      // Modules to expose
      exposes: {
        "./Button": "./components/RButton.jsx",
      },
    }),
  ],
  build: {
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
