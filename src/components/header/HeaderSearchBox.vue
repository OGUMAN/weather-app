<template>
  <div class="search-box">
    <input
      type="search"
      :placeholder="getTranslation('searchPlaceholder')"
      class="search-box__input search"
      :value="searchValue"
      @input="(e) => searchOnInput(e)"
    />
    <transition>
      <div class="search-box__list" v-if="searchJSON.length !== 0">
        <SearchResult
          v-for="(item, index) in searchJSON"
          :key="index"
          :searchResult="item"
        />
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, watch } from "vue";
import SearchResult from "@/components/header/HeaderSearchResult.vue";
import { mapState, mapMutations, mapGetters } from "@/store/helpers";
import { ISearchResult, IResponseError } from "@/types";

export default defineComponent({
  components: {
    SearchResult,
  },
  setup() {
    const searchJSON = ref<ISearchResult[]>([]);
    const { searchValue, language } = mapState();
    const { setSearchValue } = mapMutations(["setSearchValue"]);
    const { getTranslation } = mapGetters();
    let isRateLimited = false;

    const loadSearch = (): void => {
      if (!isRateLimited) {
        if (searchValue.value.length > 1) {
          fetch(
            `https://api.locationiq.com/v1/autocomplete?key=pk.1841a45b6998fdb7ba20642c77457359&q=${searchValue.value}&dedupe=1&accept-language=${language.value}`
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
                console.log(data);
              }
            });
        } else if (searchValue.value.length === 0) {
          searchJSON.value = [];
        }
      }
    };

    const searchOnInput = (e: Event): void => {
      setSearchValue((e.target as HTMLInputElement).value);
    };

    onMounted(() => {
      loadSearch();
    });

    watch(searchValue, () => {
      loadSearch();
    });

    return {
      searchValue,
      searchJSON,
      getTranslation,
      searchOnInput,
    };
  },
});
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
