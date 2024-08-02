<template>
  <div class="search-box">
    <input
      type="search"
      :placeholder="$t('LOCATION_SEARCH_PLACEHOLDER')"
      class="search-box__input search"
      :value="store.searchValue"
      @input="(e: InputEvent) => searchOnInput(e)"
    />
    <transition>
      <div class="search-box__list" v-if="searchJSON.length !== 0">
        <HeaderSearchResult
          v-for="(item, index) in searchJSON"
          :key="index"
          :searchResult="item"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import type { ISearchResult, IResponseError } from "@/assets/types";
import { useSearchStore } from "../store";

const store = useSearchStore();
const { locale } = useI18n();

let isRateLimited = false;
const searchJSON = ref<ISearchResult[]>([]);

const loadSearch = (): void => {
  if (!isRateLimited) {
    if (store.searchValue.length > 1) {
      fetch(
        `https://api.locationiq.com/v1/autocomplete?key=pk.1841a45b6998fdb7ba20642c77457359&q=${store.searchValue}&dedupe=1&accept-language=${locale.value}`
      )
        .then((res: Response) => res.json())
        .then((data: IResponseError | ISearchResult[]) => {
          if (!Array.isArray(data)) {
            if (data.error === "Rate Limited Second") {
              isRateLimited = true;
              setTimeout(() => {
                isRateLimited = false;
                loadSearch();
              }, 500);
            }
          } else {
            searchJSON.value = data;
          }
        });
    } else if (store.searchValue.length === 0) {
      searchJSON.value = [];
    }
  }
};

const searchOnInput = (e: Event): void => {
  store.$patch({ searchValue: (e.target as HTMLInputElement).value });
};

watch(
  () => store.searchValue,
  () => {
    loadSearch();
  }
);
</script>

<style lang="scss" scoped>
.search-box {
  &__input {
    border-radius: 7.5px;
    width: 100%;
    font-size: 12px;
    font-weight: 500;
    border: 1px solid #c2c2c2;
    background: #ffffff;
    height: 36px;
    color: #454545;
    padding: 12px;
    margin-bottom: 6px;
  }

  &__list {
    background: #ffffff;
    border: 1px solid #c2c2c2;
    border-radius: 7.5px;
    max-height: 335px;
    overflow-y: auto;
  }
}
</style>
