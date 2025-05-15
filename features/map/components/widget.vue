<template>
  <iframe class="widget" :src="iframeSrc" frameborder="0"></iframe>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useSearchStore } from "~/features/header/search/store";
import { useMapStore } from "~/features/map/store";

const mapStore = useMapStore();
const searchStore = useSearchStore();

const baseUrl = "https://embed.windy.com/embed2.html";

const iframeParams = computed(() => {
  const { lat, lon } = searchStore.selectedSearchResult;

  if (lat == null || lon == null) return "";

  return new URLSearchParams({
    lat: lat.toString(),
    lon: lon.toString(),
    detailLat: lat.toString(),
    detailLon: lon.toString(),
    width: "650",
    height: "450",
    zoom: "6",
    level: "surface",
    overlay: mapStore.mode,
    product: "ecmwf",
    menu: "",
    message: "",
    marker: "true",
    calendar: "now",
    pressure: "",
    type: "map",
    location: "coordinates",
    detail: "",
    metricWind: "m/s",
    metricTemp: "°C",
    radarRange: "-1",
  });
});

const iframeSrc = computed(() => `${baseUrl}?${iframeParams.value.toString()}`);
</script>

<style scoped lang="scss">
.widget {
  width: 100%;
  height: 450px;
  border-radius: 15px;
}
</style>
