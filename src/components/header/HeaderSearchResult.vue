<template>
  <div class="search-item" @click="searchResultClicked">
    <div class="search-item__flag">
      <span
        :class="`search-item__fi fi fi-${searchResult.address.country_code}`"
      ></span>
    </div>
    <div>
      <div class="search-item__result">
        {{ searchResult.address.name }}
      </div>
      <div class="search-item__address">
        {{
          `${
            searchResult.address.county ? searchResult.address.county + "," : ""
          } ${
            searchResult.address.state ? searchResult.address.state + "," : ""
          } ${searchResult.address.country || ""}`
        }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { ISearchResult } from "@/types";
import { mapMutations } from "@/store/helpers";
import { useRouter } from "vue-router";

export default defineComponent({
  props: {
    searchResult: {
      type: Object as PropType<ISearchResult>,
      required: true,
    },
  },
  setup(props) {
    const router = useRouter();
    const {
      setSelectedSearchResult,
      setIsSearchOpen,
      setSearchValue,
      setTimeIsChanged,
      setSelectedDayId,
    } = mapMutations([
      "setSelectedSearchResult",
      "setIsSearchOpen",
      "setSearchValue",
      "setTimeIsChanged",
      "setSelectedDayId",
    ]);

    const searchResultClicked = (): void => {
      setSelectedSearchResult({
        lat: props.searchResult.lat,
        lon: props.searchResult.lon,
        name: props.searchResult.address.name,
      });
      setIsSearchOpen(false);
      setSearchValue("");
      setTimeIsChanged(false);
      setSelectedDayId(0);
      router.push("/");
    };

    return { searchResultClicked };
  },
});
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
