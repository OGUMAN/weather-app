<template>
  <NuxtLink
    class="logo hover-scale"
    :to="{
      path: '/',
      query: useRoute().query,
    }"
  >
    <img class="logo__img" src="@/assets/images/logo.svg" alt="Logo" />
    <div class="logo__text">{{ $t("LOGO_TEXT") }}</div>
  </NuxtLink>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.logo {
  display: flex;
  align-items: center;
  margin-right: 15px;
  cursor: pointer;
  text-decoration: none;
  color: #000000;

  &__img {
    margin-right: 10px;
    width: 40px;
    border-radius: 12.5px;
  }

  &__text {
    max-width: 165px;
    width: 100%;
    font-weight: 800;
    font-size: 18px;
  }
}
</style>
