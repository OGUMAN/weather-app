<template>
  <v-app>
    <v-content>
      <Title>Weather website</Title>
      <Header />
      <NuxtPage />
    </v-content>
  </v-app>
</template>

<script lang="ts" setup>
import type { LangCode } from "./assets/types";

const { locale } = useI18n();
const route = useRoute();

const queryLang = route.query.lang;
if (queryLang) {
  locale.value = route.query.lang as LangCode;
}
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap");
@import "./assets/normalize.css";
@import "./styles/main.scss";

body,
html {
  background-color: #f5f5f5;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 500;
}

.content {
  padding: 0 15px;
  max-width: 1185px;
  width: 100%;
  margin: 0 auto;
  @media screen and (min-width: 858px) {
    & {
      max-width: 1000px;
    }
  }
}
.title {
  font-weight: 600;
  font-size: 18px;
  color: #000000;
  margin-bottom: 10px !important;
}
.block {
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 17.5px 20px;
  margin-bottom: 15px;
}
*,
*:after,
*:before {
  box-sizing: border-box;
}
.v-enter-active,
.v-leave-active {
  transition: opacity 0.1s ease;
  will-change: opacity;
}
.v-enter-from,
.v-leave-to {
  opacity: 0;
}
h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0 !important; // normalize.css makes margins on titles
}
input:focus {
  outline: none;
}
</style>
