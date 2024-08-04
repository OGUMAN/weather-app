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
    "@nuxtjs/i18n",
    "@vueuse/nuxt",
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
    transpile: ["vuetify", "vue-final-modal"],
  },
  components: [
    { path: "~/features/header/components", prefix: "Header" },
    { path: "~/features/header/search/components", prefix: "HeaderSearch" },
    { path: "~/features/footer/components", prefix: "Footer" },
    { path: "~/features/map/components", prefix: "Map" },
    { path: "~/features/weather/components", prefix: "Weather" },
    {
      path: "~/features/weather/schedule/components",
      prefix: "WeatherSchedule",
    },
    { path: "~/features/base/components", prefix: "Base" },
  ],

  compatibilityDate: "2024-08-02",
});
