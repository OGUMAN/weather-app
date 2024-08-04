<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <div v-bind="props" class="header-language__trigger">
        <v-img
          class="header-language__img"
          src="@/assets/images/lang.svg"
          alt="Select Language"
        />
        <div class="header-language__current">{{ locale }}</div>
        <v-icon icon="mdi-chevron-down" />
      </div>
    </template>
    <v-list class="header-language__list">
      <v-list-item
        v-for="(item, index) in $i18n.availableLocales"
        :key="index"
        :value="index"
        @click="onLangChange(item)"
        class="header-language__list-item"
      >
        {{ item.toUpperCase() }}
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";

const router = useRouter();
const { locale } = useI18n();

const isListOpen = ref<boolean>(false);

const onLangChange = (clickedLanguage: string): void => {
  locale.value = clickedLanguage;
  router.push({ query: { lang: clickedLanguage } });
  isListOpen.value = false;
};
</script>

<style lang="scss" scoped>
.header-language {
  margin-right: 18px;
  position: relative;
  text-align: center;
  text-transform: uppercase;

  &__img {
    height: 14px;
    width: 14px;
    margin-right: 6px;
  }

  &__trigger {
    display: flex;
    align-items: center;
    text-transform: uppercase;
    min-width: auto;
    padding: 0;
    cursor: pointer;
  }

  &__current {
    font-weight: 500;
    font-size: 12px;
    margin-right: 6px;
  }

  &__list {
    max-height: 150px;
    overflow-y: auto;
    padding: 0;
    font-size: 12px;
    width: 80px;

    &-item {
      height: 40px !important;
      min-height: 40px;
    }
  }
}
</style>
