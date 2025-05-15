<template>
  <v-app>
    <v-content>
      <Title>Weather website</Title>
      <Header />
      <div class="app-content">
        <NuxtPage />
      </div>
    </v-content>
  </v-app>
</template>

<script lang="ts" setup>
import type { LangCode } from "./assets/types";
import "@/styles/main.scss";

const { locale } = useI18n();
const route = useRoute();

const queryLang = route.query.lang;
if (queryLang) {
  locale.value = route.query.lang as LangCode;
}
</script>

<style lang="scss" scoped>
@import "/features/header/style.scss";

.app-content {
  padding-top: $header-height;
}
</style>
