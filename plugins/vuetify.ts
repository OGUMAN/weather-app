import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/_styles.scss";
import "vuetify/_settings.scss";
import "vuetify/_tools.scss";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    theme: {
      defaultTheme: "light",
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
