<template>
  <div class="search-item" @click="searchResultClicked">
    <div class="search-item__flag">
      <span
        :class="`search-item__fi fi fi-${props.searchResult.address.country_code}`"
      ></span>
    </div>
    <div>
      <div class="search-item__result">
        {{ props.searchResult.address.name }}
      </div>
      <div class="search-item__address">
        {{
          `${
            props.searchResult.address.county
              ? props.searchResult.address.county + ","
              : ""
          } ${
            props.searchResult.address.state
              ? props.searchResult.address.state + ","
              : ""
          } ${props.searchResult.address.country || ""}`
        }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { ISearchResult } from "@/assets/types";
import { useSearchStore } from "../store";
import { useWeatherStore } from "~/features/weather/store";

const props = defineProps({
  searchResult: {
    type: Object as PropType<ISearchResult>,
    required: true,
  },
});

const searchStore = useSearchStore();
const weatherStore = useWeatherStore();

const searchResultClicked = (): void => {
  searchStore.selectedSearchResult = {
    lat: props.searchResult.lat,
    lon: props.searchResult.lon,
    name: props.searchResult.address.name,
  };
  searchStore.searchValue = "";
  weatherStore.timeIsChanged = false;

  useRouter().push({
    path: "/",
    query: useRoute().query,
  });

  closeModal("search");
};
</script>

<style lang="scss" scoped>
.search-item {
  padding: 9px 12px;
  display: flex;
  align-items: center;
  border-bottom: 0.5px solid #d8d8d8;
  cursor: pointer;

  &:last-child {
    border: none;
  }

  &__flag {
    width: 21px;
    margin-right: 12.5px;
    flex-shrink: 0;
  }

  &__fi {
    background-size: cover;
    border: 0.5px solid #878787;
    width: 100%;
  }

  &__result {
    font-weight: 600;
    font-size: 11px;
    color: #454545;
    margin-bottom: 2px;
  }

  &__address {
    font-weight: 500;
    font-size: 10px;
    line-height: 13px;
    color: #6a6a6a;
    font-weight: 500;
  }
}
</style>
