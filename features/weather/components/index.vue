<template>
  <div class="weather" v-if="!loading">
    <WeatherWeek />

    <div class="weather__info block">
      <div class="weather__flex">
        <div class="weather__left">
          <h1 class="weather__title title">
            {{ locationName }}
          </h1>
          <WeatherTime />
          <div class="weather__heading">
            <BaseTemperature
              class="weather__temperature"
              :value="selectedHourWeather.temperature"
            />
            <BaseIcon
              class="weather__icon"
              :hour="weatherStore.selectedHourId"
              :weathercode="selectedHourWeather.weathercode"
            />
            <BaseIconDescription
              :weathercode="selectedHourWeather.weathercode"
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
import { ref, computed, watch, onMounted } from "vue";
import { useSearchStore } from "~/features/header/search/store";
import { useWeatherStore } from "../store";

const searchStore = useSearchStore();
const weatherStore = useWeatherStore();
const loading = ref(true);

const selectedHourWeather = computed(() => weatherStore.getSelectedHourWeather);
const locationName = computed(() => searchStore.selectedSearchResult.name);

const loadWeather = async () => {
  try {
    const { lat, lon } = searchStore.selectedSearchResult;

    if (lat === undefined || lon === undefined) return false;

    await weatherStore.fetchWeatherData({
      lat: parseFloat(lat),
      lon: parseFloat(lon),
    });
  } catch (error) {
    console.error("Failed to load weather data:", error);
  } finally {
    loading.value = false;
  }
};

onMounted(loadWeather);

watch(
  () => [searchStore.selectedSearchResult, weatherStore.selectedDayId],
  loadWeather
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
