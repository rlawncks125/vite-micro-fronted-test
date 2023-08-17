import federation from "@originjs/vite-plugin-federation";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@pinia/nuxt"],

  vite: {
    plugins: [
      federation({
        name: "remote-nuxt",
        filename: "remoteEntry.js",
        // Modules to expose
        exposes: {
          "./Button": "./components/Button.vue",
        },
        // shared: [""],
      }),
    ],
    build: {
      minify: false,
      target: ["chrome89", "edge89", "firefox89", "safari15"],
    },
  },
});
