import vitePluginRequire from "vite-plugin-require";
import vuetify, { transformAssetUrls } from "vite-plugin-vuetify";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    (_options, nuxt) => {
      nuxt.hooks.hook("vite:extendConfig", (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }));
      });
    },
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
    vue: {
      template: {
        transformAssetUrls,
      },
    },
    plugins: [vitePluginRequire({})],
  },
  build: {
    transpile: ['vuetify'],
  },
});
