<template>
  <div class="search">
    <v-btn icon="mdi:mdi-magnify" class="search__button" @click="openSearch" />
    <BaseModal name="search">
      <template #title>
        {{ $t("SEARCH_TITLE") }}
      </template>
      <template #content>
        <HeaderSearchBox />
      </template>
    </BaseModal>
  </div>
</template>

<script lang="ts" setup>
const openSearch = (): void => {
  openModal("search");
};
</script>

<style lang="scss" scoped>
.search {
  &__img {
    width: 15px;
    height: 15px;
  }

  &__background {
    height: 100vh;
    width: 100vw;
    background-color: rgba($color: #000000, $alpha: 0.3);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 12px;
  }

  .title--modal {
    margin-bottom: 0 !important;
  }

  &__close {
    position: relative;
    right: 0;
    top: 0;
    width: 17px;
    height: 17px;
    cursor: pointer;

    &:after {
      transform: rotate(45deg);
    }
    &:before {
      transform: rotate(-45deg);
    }

    &:after,
    &:before {
      transition: background-color 0.3s;
      display: block;
      content: "";
      background-color: #8a8a8a;
      width: 17px;
      height: 2px;
      position: absolute;
      top: 50%;
      left: 0;
    }

    &:hover {
      &:after,
      &:before {
        background-color: #474747;
      }
    }
  }
}
</style>
