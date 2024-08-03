<template>
  <iframe class="widget" :src="iframeSrc" frameborder="0"></iframe>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useSearchStore } from "~/features/header/search/store";
import { useMapStore } from "~/features/map/store";

const mapStore = useMapStore();
const searchStore = useSearchStore();

const iframeSrc = computed(() => {
  const { lat, lon } = searchStore.selectedSearchResult;

  return `https://embed.windy.com/embed2.html?lat=${lat}&lon=${lon}&detailLat=${lat}&detailLon=${lon}&width=650&height=450&zoom=6&level=surface&overlay=${mapStore.mode}&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1&marker=true&metricWind=m%2Fs&metricTemp=%C2%B0C`;
});
</script>

<style lang="scss" scoped>
.widget {
  width: 100%;
  height: 450px;
  border-radius: 15px;
}
</style>
