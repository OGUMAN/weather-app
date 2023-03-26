<template>
  <header class="header">
    <div class="header__content content">
      <BaseLogo />
      <div class="header__right">
        <BaseLanguage />
        <HeaderSearch />
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import BaseLogo from "@/components/base/BaseLogo.vue";
import BaseLanguage from "@/components/base/BaseLanguage.vue";
import HeaderSearch from "@/components/header/HeaderSearch.vue";

export default defineComponent({
  components: {
    BaseLogo,
    BaseLanguage,
    HeaderSearch,
  },
});
</script>

<style lang="scss" scoped>
.header {
  background-color: #ffffff;
  height: 81px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #b5b5b5;
  margin-bottom: 15px;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__right {
    display: flex;
    align-items: center;
  }
}
</style>
