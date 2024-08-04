<template>
  <div class="map block">
    <h2 class="title">{{ $t("MAP_TITLE") }}</h2>
    <div class="map__buttons">
      <MapButton v-for="button in buttons" :value="button.key">
        {{ $t(button.text) }}
      </MapButton>
    </div>
    <MapWidget />
  </div>
</template>

<script lang="ts" setup>
import { MapMode } from "~/features/map/types";

const buttons = [
  {
    key: MapMode.WIND,
    text: "WIND",
  },
  {
    key: MapMode.TEMPERATURE,
    text: "TEMPERATURE",
  },
  {
    key: MapMode.RAIN,
    text: "RAIN",
  },
  {
    key: MapMode.CLOUDS,
    text: "CLOUDS",
  },
  {
    key: MapMode.PRESSURE,
    text: "PRESSURE",
  },
  {
    key: MapMode.RADAR,
    text: "LIGHTNINGS",
  },
];
</script>

<style lang="scss" scoped>
.map {
  &__buttons {
    margin-bottom: 10px;
    display: flex;
    gap: 10px;
    align-items: center;
    flex-wrap: wrap;
  }
}
</style>
