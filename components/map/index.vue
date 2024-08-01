<template>
  <div class="map block">
    <h2 class="title">{{ store.getTranslation("mapTitle") }}</h2>
    <div class="map__buttons">
      <MapButton :value="'wind'" />
      <MapButton :value="'temp'" />
      <MapButton :value="'clouds'" />
      <MapButton :value="'rain'" />
      <MapButton :value="'pressure'" />
      <MapButton :value="'radar'" />
    </div>
    <MapWidget />
  </div>
</template>

<script lang="ts" setup>
import { useMainStore } from "@/store";
const store = useMainStore();
</script>

<style lang="scss" scoped>
.map {
  &__buttons {
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
  }
}
</style>
