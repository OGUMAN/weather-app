<template>
  <div class="weather" v-if="!loading">
    <WeatherWeek />
    <div class="weather__info block">
      <div class="weather__flex">
        <div class="weather__left">
          <h1 class="weather__title title">
            {{ searchStore.selectedSearchResult.name }}
          </h1>
          <WeatherTime />
          <div class="weather__heading">
            <BaseTemperature
              class="weather__temperature"
              :value="weatherStore.getWeatherForHour.temperature"
            />
            <BaseIcon
              :hour="weatherStore.selectedHourId"
              class="weather__icon"
              :weathercode="weatherStore.getWeatherForHour.weathercode"
            />
            <BaseIconDescription
              :weathercode="weatherStore.getWeatherForHour.weathercode"
            />
          </div>
          <WeatherDetails />
        </div>
        <WeatherSchedule />
      </div>
      <WeatherRange />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useSearchStore } from "~/features/header/search/store";
import { useWeatherStore } from "../store";

const weatherStore = useWeatherStore();
const searchStore = useSearchStore();

const loading = ref<boolean>(true);

const loadWeather = async (): Promise<void> => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${searchStore.selectedSearchResult.lat}&longitude=${searchStore.selectedSearchResult.lon}&hourly=temperature_2m,apparent_temperature,precipitation_probability,windspeed_120m,pressure_msl,relativehumidity_2m,weathercode,winddirection_10m&daily=weathercode,sunrise,sunset,temperature_2m_max,temperature_2m_min&current_weather=true&relativehumidity_2m,apparent_temperature&windspeed_unit=ms&timezone=auto`
    );
    const data = await response.json();

    weatherStore.weekDaysWeather = data.daily;
    weatherStore.timezone = data.timezone;
    weatherStore.selectedHourId = Number(
      new Date(data.current_weather.time).toLocaleTimeString("uk", {
        hour: "numeric",
      })
    );
    weatherStore.currentWeather = data.current_weather.time;
    weatherStore.hourly = data.hourly;
    loading.value = false;
  } catch (error) {
    console.error("Failed to load weather data:", error);
  }
};

onMounted(() => {
  loadWeather();
});

watch(
  () => searchStore.selectedSearchResult,
  () => {
    loadWeather();
  }
);

</script>

<style lang="scss" scoped>
.weather {
  padding: 15px 0;

  &__left {
    width: 100%;
  }

  &__heading {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }

  &__title {
    margin-bottom: 5px !important;
  }

  &__temperature {
    font-size: 48px;
    margin-right: 10px;
  }

  &__icon {
    margin-right: 10px;
    width: 50px;
  }

  @media screen and (min-width: 858px) {
    & {
      padding-top: 25px;
    }

    &__info {
      border-top-left-radius: 0;
      border-top-right-radius: 0;
    }
  }

  @media screen and (min-width: 535px) {
    &__flex {
      display: flex;
      justify-content: space-between;
    }

    &__left {
      max-width: 335px;
      min-width: 265px;
      padding-right: 30px;
      border-right: 0.5px #bfbfbf solid;
    }
  }
}
</style>
