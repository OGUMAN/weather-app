<template>
  <div class="header-current" v-if="weatherStore.hourly.weathercode">
    {{ searchStore.selectedSearchResult.name }}
    <BaseTemperature :value="weatherStore.getCurrentWeather.temperature" />
    <BaseIcon
      :weathercode="weatherStore.getCurrentWeather.weathercode"
      :hour="new Date().getHours()"
    />
  </div>
</template>

<script lang="ts" setup>
import { useWeatherStore } from "~/features/weather/store";
import { useSearchStore } from "../search/store";

const searchStore = useSearchStore();
const weatherStore = useWeatherStore();
</script>

<style lang="scss" scoped>
.header-current {
  display: flex;
  align-items: center;
  gap: 5px;
}
</style>
