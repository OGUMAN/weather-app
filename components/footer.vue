<template>
  <footer class="footer">
    <div class="footer__content content">
      <BaseLogo />
      <NuxtLink
        class="footer__link"
        :to="{
          path: '/credits',
          query: useRoute().query,
        }"
        >{{ $t("CREDITS") }}</NuxtLink
      >
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { useMainStore } from "~/store";
const store = useMainStore();
</script>

<style lang="scss" scoped>
.footer {
  background-color: #ffffff;
  height: 81px;
  display: flex;
  align-items: center;
  border-top: 1px solid #b5b5b5;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
