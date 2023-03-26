<template>
  <router-link to="/" class="logo" href="#">
    <img class="logo__img" src="@/assets/images/logo.svg" alt="Logo" />
    <div class="logo__text">{{ getTranslation("logoText") }}</div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "@/store/helpers";

export default defineComponent({
  setup() {
    const { getTranslation } = mapGetters();

    return { getTranslation };
  },
});
</script>

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
  }
}
</style>
