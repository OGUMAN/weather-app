<template>
  <iframe
    class="widget"
    :src="`https://embed.windy.com/embed2.html?lat=${store.selectedSearchResult.lat}&lon=${store.selectedSearchResult.lon}&detailLat=${store.selectedSearchResult.lat}&detailLon=${store.selectedSearchResult.lon}&width=650&height=450&zoom=6&level=surface&overlay=${store.mapMode}&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1&marker=true&metricWind=m%2Fs&metricTemp=%C2%B0C`"
    frameborder="0"
  ></iframe>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/store";
const store = useMainStore();
</script>

<style lang="scss" scoped>
.widget {
  width: 100%;
  height: 450px;
  border-radius: 15px;
}
</style>
