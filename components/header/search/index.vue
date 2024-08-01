<template>
  <div class="search">
    <v-btn icon="mdi:mdi-magnify" class="search__button" @click="openSearch" />
    <transition-group>
      <div
        class="search__background"
        @click="closeSearch"
        v-if="store.isSearchOpen"
      ></div>
      <div class="search__modal block" v-if="store.isSearchOpen">
        <div class="search__header">
          <h1 class="title title--modal">
            {{ store.getTranslation("searchTitle") }}
          </h1>
          <div class="search__close" @click="closeSearch"></div>
        </div>
        <HeaderSearchBox />
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/store";
const store = useMainStore();

const openSearch = (): void => {
  store.$patch({ isSearchOpen: true })
};

const closeSearch = (): void => {
  store.$patch({ isSearchOpen: false })
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

  &__modal {
    max-width: 343px;
    width: calc(100% - 15px);
    max-height: 455px;
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    background: #ffffff;
    border-radius: 10px;
    z-index: 3;
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
