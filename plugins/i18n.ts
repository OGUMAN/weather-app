import { createI18n } from "vue-i18n";
import en from "~/locales/en.json";
import uk from "~/locales/uk.json";
import ru from "~/locales/ru.json";

export default defineNuxtPlugin(({ vueApp }) => {
  const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: "en",
    messages: {
      en,
      uk,
      ru
    },
  });

  vueApp.use(i18n);
});
