<template>
  <div class="details">
    <WeatherDetailsItem>
      <template #property>{{ $t("APPARENT_TEMPERATURE") }}</template>
      <template #value>
        <BaseTemperature
          :value="store.getSelectedHourWeather.apparentTemperature"
        />
      </template>
    </WeatherDetailsItem>

    <WeatherDetailsItem>
      <template #property>{{ $t("WIND") }}</template>
      <template #value>
        {{ Math.round(store.getSelectedHourWeather.windSpeed) }}
        {{ $t("METERS_PER_SECOND") }},
        {{ $t(store.getSelectedHourWeather.windDirection.toUpperCase()) }}
      </template>
    </WeatherDetailsItem>

    <WeatherDetailsItem>
      <template #property>{{ $t("PRECIPITATION") }}</template>
      <template #value>
        {{ store.getSelectedHourWeather.precipitationProbability }}%
      </template>
    </WeatherDetailsItem>

    <WeatherDetailsItem>
      <template #property>{{ $t("HUMIDITY") }}</template>
      <template #value>
        {{ store.getSelectedHourWeather.humidity }}%
      </template>
    </WeatherDetailsItem>
  </div>
</template>

<script lang="ts" setup>
import { useWeatherStore } from "../../store";

const store = useWeatherStore();
</script>

<style scoped lang="scss">
.details {
  margin-bottom: 15px;
}
</style>
