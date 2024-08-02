<template>
  <div class="week">
    <WeatherWeekDay
      v-for="(date, index) in store.weekDaysWeather.time"
      :key="index"
      :date="date"
      :weathercode="store.weekDaysWeather.weathercode[index]"
      :minTemperature="store.weekDaysWeather.temperature_2m_min[index]"
      :maxTemperature="store.weekDaysWeather.temperature_2m_max[index]"
      :index="index"
    />
  </div>
</template>

<script lang="ts" setup>
import { useWeatherStore } from "../../store";

const store = useWeatherStore();
</script>

<style lang="scss" scoped>
.week {
  display: flex;
  overflow-x: auto;
  padding-bottom: 4px; // to see box-shadow
  &::-webkit-scrollbar {
    display: none;
  }

  @media screen and (min-width: 858px) {
    & {
      padding-bottom: 0;
      overflow-x: visible;
    }
  }
}
</style>
