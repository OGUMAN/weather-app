<template>
  <iframe
    class="widget"
    :src="`https://embed.windy.com/embed2.html?lat=${selectedSearchResult.lat}&lon=${selectedSearchResult.lon}&detailLat=${selectedSearchResult.lat}&detailLon=${selectedSearchResult.lon}&width=650&height=450&zoom=6&level=surface&overlay=${mapMode}&product=ecmwf&menu=&message=&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1&marker=true&metricWind=m%2Fs&metricTemp=%C2%B0C`"
    frameborder="0"
  ></iframe>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapState } from "@/store/helpers";

export default defineComponent({
  setup() {
    const { selectedSearchResult, mapMode } = mapState();

    return { selectedSearchResult, mapMode };
  },
});
</script>

<style lang="scss" scoped>
.widget {
  width: 100%;
  height: 450px;
  border-radius: 15px;
}
</style>
