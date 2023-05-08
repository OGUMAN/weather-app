import vitePluginRequire from "vite-plugin-require";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    // ...
    "@pinia/nuxt",
  ],
  css: ["flag-icons/css/flag-icons.min.css"],
  pinia: {
    autoImports: [
      "defineStore", // import { defineStore } from 'pinia'
      ["defineStore", "definePiniaStore"], // import { defineStore as definePiniaStore } from 'pinia'
    ],
  },
  vite: {
    plugins: [vitePluginRequire({})],
  },
});
