<template>
  <div class="lang">
    <button class="lang__button" @click="openList">
      <img
        class="lang__img"
        src="@/assets/images/lang.svg"
        alt="Select Language"
      />
      <div class="lang__current">{{ store.language }}</div>
      <div class="lang__arrow"></div>
    </button>
    <transition-group>
      <div class="lang__list" v-if="isListOpen">
        <div
          class="lang__item"
          v-for="(language, index) in ['uk', 'en', 'ru']"
          :key="index"
          @click="languageClick(language as languageType)"
        >
          {{ language }}
        </div>
      </div>
      <div class="lang__background" @click="closeList" v-if="isListOpen"></div>
    </transition-group>
  </div>
</template>

<script lang="ts" setup>
import { languageType } from "@/assets/types";
import { useMainStore } from "~/store";
const router = useRouter();
const store = useMainStore();

let isListOpen = ref<boolean>(false);
const openList = (): void => {
  isListOpen.value = true;
};

const closeList = (): void => {
  isListOpen.value = false;
};

const languageClick = (clickedLanguage: languageType): void => {
  store.$patch({ language: clickedLanguage });
  router.push({ query: { lang: clickedLanguage } });
  closeList();
};
</script>

<style lang="scss" scoped>
.lang {
  margin-right: 18px;
  position: relative;
  text-align: center;
  text-transform: uppercase;
  &__img {
    height: 14px;
    width: 14px;
    margin-right: 6px;
  }
  &__button {
    display: flex;
    align-items: center;
    background: none;
    border: none;
    text-transform: uppercase;
    cursor: pointer;
  }
  &__current {
    font-weight: 500;
    font-size: 12px;
    margin-right: 6px;
  }
  &__arrow {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 5px 4.5px 0 4.5px;
    border-color: #000000 transparent transparent transparent;
  }
  &__list {
    background: #ffffff;
    border: 1px solid #c2c2c2;
    border-radius: 7.5px;
    padding: 15px 0;
    position: absolute;
    z-index: 3;
    right: 0;
    top: 30px;
  }
  &__item {
    margin-bottom: 10px;
    cursor: pointer;
    width: 64px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  &__background {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
  }
}
</style>
