<template>
  <div class="search-box">
    <input
      type="search"
      :placeholder="$t('LOCATION_SEARCH_PLACEHOLDER')"
      class="search-box__input search"
      :value="store.searchValue"
      @input="handleInput"
    />
    <transition>
      <div class="search-box__list" v-if="searchResults.length">
        <HeaderSearchResult
          v-for="(item, index) in searchResults"
          :key="index"
          :searchResult="item"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
import { useI18n } from "vue-i18n";
import type { ISearchResult, IResponseError } from "@/assets/types";
import { useSearchStore } from "../store";

const API_KEY = "pk.1841a45b6998fdb7ba20642c77457359";

const store = useSearchStore();
const { locale } = useI18n();

const isRateLimited = ref(false);
const searchResults = ref<ISearchResult[]>([]);

const fetchSearchResults = async (): Promise<void> => {
  const query = store.searchValue.trim();

  if (isRateLimited.value || query.length < 2) {
    searchResults.value = query.length === 0 ? [] : searchResults.value;
    return;
  }

  try {
    const response = await fetch(
      `https://api.locationiq.com/v1/autocomplete?key=${API_KEY}&q=${encodeURIComponent(
        query
      )}&dedupe=1&accept-language=${locale.value}`
    );

    const data: IResponseError | ISearchResult[] = await response.json();

    if (!Array.isArray(data)) {
      if (data.error === "Rate Limited Second") {
        isRateLimited.value = true;
        setTimeout(() => {
          isRateLimited.value = false;
          fetchSearchResults();
        }, 500);
      }
    } else {
      searchResults.value = data;
    }
  } catch (error) {
    console.error("Search API error:", error);
  }
};

const handleInput = (e: Event): void => {
  const target = e.target as HTMLInputElement;
  store.$patch({ searchValue: target.value });
};

watch(() => store.searchValue, fetchSearchResults);
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
