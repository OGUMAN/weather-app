<template>
  <div class="weather-temperature-unit">
    <span
      class="weather-temperature-unit__item hover-scale"
      :class="{ 'weather-temperature-unit__item--active': isCelsius }"
      @click="setUnit('celsius')"
    >
      C°
    </span>
    <span class="weather-temperature-unit__separator">/</span>
    <span
      class="weather-temperature-unit__item hover-scale"
      :class="{ 'weather-temperature-unit__item--active': isFahrenheit }"
      @click="setUnit('fahrenheit')"
    >
      F°
    </span>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useWeatherStore } from "../store";

const weatherStore = useWeatherStore();

const isCelsius = computed(() => weatherStore.temperatureUnit === "celsius");
const isFahrenheit = computed(
  () => weatherStore.temperatureUnit === "fahrenheit"
);

function setUnit(unit: "celsius" | "fahrenheit") {
  weatherStore.temperatureUnit = unit;
}
</script>

<style lang="scss" scoped>
.weather-temperature-unit {
  display: flex;
  align-items: center;
  gap: 5px;

  &__item {
    font-size: 18px;
    opacity: 0.5;
    cursor: pointer;

    &--active {
      opacity: 1;
      font-weight: bold;
    }
  }

  &__separator {
    font-size: 13px;
    opacity: 0.5;
  }
}
</style>
